import React, { useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { LinksContext } from '../index';
import { ROUTES } from '../../../constants/routes';
import { useGetProjectByIdQuery } from '../../../data/services/common';
import Loader from '../../../components/loader/loader';
import { CommonError } from '../../../components/error/error-common';

import EditProject from './edit-project';

const NewProject = () => {
    const { t } = useTranslation();
    const [, setLinks] = useOutletContext<LinksContext>();
    const { projectId } = useParams();

    const { data, error, isLoading, isFetching } = useGetProjectByIdQuery({projectId} || null);

    useEffect((() => {
        setLinks([{
            name: t('easy-project.dashboard.all.pageName'),
            enabled: ROUTES.DASHBOARD.enabled,
            url: ROUTES.DASHBOARD.url
        }, 
        {
            name: data ? t('easy-project.dashboard.editProject.pageName', {projectName: data.data.title}) : t('easy-project.dashboard.newProject.pageName'),
        }
        ]);
    }), [data]);

    return (
        <>
            {isLoading && isFetching && <Loader/>}
            {projectId && data && !isFetching && !error && <EditProject projectData={projectId && data.data}/> }
            {!projectId && !isFetching && <EditProject/> }
        </>
        
    );
};

export default NewProject;