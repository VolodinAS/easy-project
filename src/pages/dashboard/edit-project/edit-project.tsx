import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Form, Field } from 'react-final-form';
import Select from 'react-select';

import { LinksContext } from '../index';
import { ROUTES } from '../../../constants/routes';
import { WrapperForm, WrapperInput } from '../components/project-form/styles';
import {
    Errors, 
    InputWrapper, 
    Label, 
    StyledInput 
} from '../../../components/input/components';
import DashboardTitle from '../components/dashboard-title';
import Button from '../../../components/button';
import { ButtonWrapper } from '../components/layout-with-bottom-button/styles';
import { useEditProjectMutation, useLazyGetUsersForSelectQuery, useNewProjectMutation } from '../../../data/services/common';
import { ProjectType } from '../../../data/models/common';
import styled from '@emotion/styled';
import CustomSelect from '../../../components/select';

type ProjectEditProps = {
    projectData?: ProjectType;
}

export const SelectStyled = styled(Select)(({ theme }) => `
    height: 56px;
    font-size: 16px;
    padding: 16px;
    border: 1px solid ${theme.color.purple};
    border-radius: 4px;
    color: ${theme.color.black};
`);

const EditProject:FC<ProjectEditProps> = ({ projectData }) => {

    const required = value => !value && 'easy-project.dashboard.newProject.form.error.empty';

    const [userList, setUserList] = useState({});

    const navigate = useNavigate();

    const { t } = useTranslation();
    const [, setLinks] = useOutletContext<LinksContext>();

    const [newProject, newProjectRequest] = useNewProjectMutation();
    const [editProject, editProjectRequest] = useEditProjectMutation();

    const onSubmit = (newProjectData) => {
        let prepared;
        if ( newProjectData.members !== undefined){
            prepared = {...newProjectData, members: newProjectData.members.map(( m ) => m.value )};
        } else {
            prepared = {...newProjectData, members: []};
        }

        if ( prepared.projectId ){
            editProject(prepared);
        } else {
            newProject(prepared);
        }
    };

    const [getUsers, getUsersRequest] = useLazyGetUsersForSelectQuery();

    useEffect(() => {

        getUsers();
        
        if (newProjectRequest.isSuccess){
            navigate((ROUTES.DASHBOARD_PROJECT_TASKS.getUrl(newProjectRequest?.data?.data?.id)), { replace: true });
        }
        if (editProjectRequest.isSuccess){
            navigate((ROUTES.DASHBOARD.url), { replace: true });
        }

        

        if ( getUsersRequest.isSuccess ){
            const usersData = getUsersRequest.data.data;
            const optionsData = [];
            
            for (let userIndex = 0; userIndex < usersData.length; userIndex++) {
                optionsData.push( { value: usersData[userIndex].id, label: usersData[userIndex].email } );
            }
            setUserList(optionsData);
            
        }
    }, [editProjectRequest?.isSuccess, getUsers, getUsersRequest?.data?.data, getUsersRequest?.isSuccess, navigate, newProjectRequest?.data?.data?.id, newProjectRequest?.isSuccess]);

    return (
        <>
            {projectData?.id ? 
                <DashboardTitle
                    text={t(
                        'easy-project.dashboard.editProject.pageName',
                        { projectName: projectData?.title }
                    )}
                /> : 
                <DashboardTitle
                    text={t('easy-project.dashboard.newProject.pageName')}
                />}
            <Form
                initialValues={
                    {projectId: projectData?.id ? projectData.id : null}
                }
                onSubmit={onSubmit}
                render={({ handleSubmit, submitting }) => (
                    <WrapperForm onSubmit={handleSubmit}>
                        <WrapperInput>
                            <Field name="title" validate={required} initialValue={projectData?.title}>
                                {({ input, meta }) => (
                                    <InputWrapper>
                                        <Label
                                            labelBold
                                        >
                                            {t('easy-project.dashboard.newProject.form.field.title')}
                                            {' '}*
                                        </Label>
                                        <StyledInput 
                                            {...input} 
                                            type="text" 
                                            placeholder={t(
                                                'easy-project.dashboard.newProject.form.placeholder.title'
                                            )} 
                                        />
                                        {meta.touched && meta.error && <Errors>{t(meta.error)}</Errors>}
                                    </InputWrapper>
                                )}
                            </Field>
                            <Field name="code" validate={required} initialValue={projectData?.code}>
                                {({ input, meta }) => (
                                    <InputWrapper>
                                        <Label labelBold>{t(
                                            'easy-project.dashboard.newProject.form.field.code'
                                        )}
                                        {' '}*
                                        </Label>
                                        <StyledInput 
                                            {...input} 
                                            type="text" 
                                            placeholder={t(
                                                'easy-project.dashboard.newProject.form.placeholder.code'
                                            )} 
                                        />
                                        {meta.touched && meta.error && <Errors>{t(meta.error)}</Errors>}
                                    </InputWrapper>
                                )}
                            </Field>
                            <Field name="members">
                                {({ input, meta }) => (
                                    <>
                                        <CustomSelect
                                            defaultValue={projectData?.members}
                                            {...input}
                                            name="members"
                                            isMulti={true}
                                            labelText={t('easy-project.dashboard.newProject.form.field.members')}
                                            labelBold
                                            placeholder={t('easy-project.dashboard.newProject.form.placeholder.members')}
                                            options={getUsersRequest.isSuccess && userList || []}
                                        />
                                        {meta.touched && meta.error && <Errors>{t(meta.error)}</Errors>}
                                    </>
                                )}
                            </Field>
                        </WrapperInput>

                        <ButtonWrapper>
                            <Button 
                                color={'blue'} 
                                type="submit" 
                                disabled={submitting}
                            >
                                {t('easy-project.dashboard.saveBtn')}
                            </Button>
                        </ButtonWrapper>
                    </WrapperForm>
                    
                )}
            /> 
        </>
    );
};

export default EditProject;
