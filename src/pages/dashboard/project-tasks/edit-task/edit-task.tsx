import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import DashboardTitle from '../../components/dashboard-title';
import { WrapperForm, WrapperInput } from '../../components/project-form/styles';
import Loader from '../../../../components/loader';
import {
    Errors, 
    InputWrapper, 
    Label, 
    StyledInput, 
    StyledSelect, 
    StyledTextarea
} from '../../../../components/input/components';
import Button from '../../../../components/button';
import { ButtonWrapper } from '../../components/layout-with-bottom-button/styles';
import { TaskTypes, TaskStatuses } from '../../project-interface';
import { useEditTaskMutation, useNewTaskMutation } from '../../../../data/services/common';
import { ROUTES } from '../../../../constants/routes';
import { TaskType } from '../../../../data/models/common';
import ErrorText from '../../../../components/error/error-text';

type ProjectEditTaskProps = {
    projectId: string;
    projectCode: string;
    task: TaskType;
}

const ProjectEditTask: FC<ProjectEditTaskProps> = ({ projectId, projectCode, task }) => {
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();

    const required = value => !value && 'easy-project.dashboard.newProject.form.error.empty';

    const [newTask, newTaskRequest] = useNewTaskMutation();
    const [editTask, editTaskRequest] = useEditTaskMutation();

    const onSubmit = (newTaskData) => {

        if ( !newTaskData.taskId ){
            newTask(newTaskData);
        } else{
            editTask(newTaskData);
        }
    };

    useEffect(() => {
        if ( newTaskRequest.isSuccess ){
            navigate((ROUTES.DASHBOARD_PROJECT_TASKS.getUrl(projectId)), { replace: true });
        }
        if ( editTaskRequest.isSuccess ){
            navigate((ROUTES.DASHBOARD_PROJECT_TASKS.getUrl(projectId)), { replace: true });
        }
    }, [editTaskRequest.isSuccess, navigate, newTaskRequest, newTaskRequest.isSuccess, projectId]);

    return (
        <>
            {task.id ? 
                <DashboardTitle
                    text={t(
                        'easy-project.dashboard.project.taskEdit.breadcrumbs', {
                            projectCode: projectCode, taskCode: task?.taskIndex
                        }
                    )}
                /> : 
                <DashboardTitle text={t('easy-project.dashboard.project.newTask.breadcrumbs')} />}
            {newTaskRequest.isError && (
                <ErrorText>
                    {newTaskRequest.error?.data?.error}
                </ErrorText>
            )}
            <Form
                initialValues={
                    {
                        projectId: projectId,
                        taskId: task ? task.id : null
                    }
                }
                onSubmit={onSubmit}
                render={({ handleSubmit, submitting }) => (
                    <WrapperForm
                        onSubmit={handleSubmit}
                        data-testid='task-form'
                    >
                        <WrapperInput>
                            <Field name="title" validate={required} initialValue={task.title}>
                                {({ input, meta }) => (
                                    <InputWrapper>
                                        <Label labelBold>{t('easy-project.dashboard.project.taskEdit.form.title.field')} *</Label>
                                        <StyledInput 
                                            {...input} 
                                            type="text" 
                                            placeholder={t('easy-project.dashboard.project.taskEdit.form.title.placeholder')}
                                        />
                                        {meta.touched && meta.error && <Errors>{t(meta.error)}</Errors>}
                                    </InputWrapper>
                                )}
                            </Field>

                            <Field name="description" initialValue={task?.description}>
                                {({ input, meta }) => (
                                    <InputWrapper>
                                        <Label labelBold>{t('easy-project.dashboard.project.taskEdit.form.decriprion.field')}</Label>
                                        <StyledTextarea 
                                            {...input} 
                                            name="description" 
                                            placeholder={t('easy-project.dashboard.project.taskEdit.form.decriprion.placeholder')} 
                                            rows={3}
                                        />
                                        {meta.touched && meta.error && <Errors>{t(meta.error)}</Errors>}
                                    </InputWrapper>
                                )}
                            </Field>

                            <Field name="type" validate={required} initialValue={task.type}>
                                {({ input, meta }) => (
                                    <InputWrapper>
                                        <Label labelBold>{t('easy-project.dashboard.project.taskEdit.form.type.field')} *</Label>
                                        <StyledSelect {...input}>
                                            <option value="">{t('easy-project.dashboard.project.taskEdit.form.type.placeholder')}</option>
                                            {TaskTypes.map((taskType) => (
                                                <option key={taskType.id} value={taskType.id}>
                                                    {taskType.title}
                                                </option>
                                            ))}
                                        </StyledSelect>
                                        {meta.touched && meta.error && <Errors>{t(meta.error)}</Errors>}
                                    </InputWrapper>
                                )}
                            </Field>

                            <Field name="status" validate={required} initialValue={task.status} defaultValue={task.status}>
                                {({ input, meta }) => (
                                    <InputWrapper>
                                        <Label labelBold>{t('easy-project.dashboard.project.taskEdit.form.status.field')} *</Label>
                                        <StyledSelect {...input}>
                                            <option value="">{t('easy-project.dashboard.project.taskEdit.form.status.placeholder')}</option>
                                            {TaskStatuses.map((taskStatus) => (
                                                <option key={taskStatus.id} value={taskStatus.id}>
                                                    {taskStatus.title}
                                                </option>
                                            ))}
                                        </StyledSelect>
                                        {meta.touched && meta.error && <Errors>{t(meta.error)}</Errors>}
                                    </InputWrapper>
                                )}
                            </Field>

                            <Field name="executor" initialValue={task?.executor?.login}>
                                {({ input, meta }) => (
                                    <InputWrapper>
                                        <Label labelBold>{t('easy-project.dashboard.project.taskEdit.form.executor.field')}</Label>
                                        <StyledInput 
                                            {...input} 
                                            type="text" 
                                            placeholder={t('easy-project.dashboard.project.taskEdit.form.executor.placeholder')} 
                                        />
                                        {meta.touched && meta.error && <Errors>{t(meta.error)}</Errors>}
                                    </InputWrapper>
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

ProjectEditTask.defaultProps = {
    task: {
        status: {},
        executor: {}
    }
};

export default ProjectEditTask;

