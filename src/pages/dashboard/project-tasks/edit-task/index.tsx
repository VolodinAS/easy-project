import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useOutletContext, useParams } from 'react-router-dom';
import { LinksContext } from '../..';
import ProjectEditTask from './edit-task';

import { ROUTES } from '../../../../constants/routes';

// TODO: ИМПОРТ DATA
import { useGetProjectByIdQuery, useGetTaskByIdQuery, useLazyGetTaskByIdQuery } from '../../../../data/services/common';
import Loader from '../../../../components/loader/loader';

const EditTask = () => {
    const { projectId, taskId } = useParams();
    const { t } = useTranslation();
    const links = useOutletContext<LinksContext>();
    const setLinks = links[1];

    const loadProject = useGetProjectByIdQuery({ projectId });
    const [getTask, getTaskRequest] = useLazyGetTaskByIdQuery();

    // useEffect(() => {
        
    // }, [getTask, projectId, taskId]);

    const task = getTaskRequest?.data?.data;
    const projectCode = loadProject.isSuccess && loadProject?.data?.data?.code;

    useEffect((() => {
        setLinks([{
            name: t('easy-project.dashboard.all.pageName'),
            enabled: ROUTES.DASHBOARD.enabled,
            url: ROUTES.DASHBOARD.url
        },
        {
            name: t('easy-project.dashboard.project.tasks.breadcrumbs', {projectName: loadProject?.data?.data?.title}),
            enabled: ROUTES.DASHBOARD.enabled,
            url: ROUTES.DASHBOARD.url + '/' + projectId
        },
        {
            name: taskId ? t('easy-project.dashboard.project.taskEdit.breadcrumbs', {projectCode: loadProject?.data?.data?.code, taskCode: task?.taskIndex}) : t('easy-project.dashboard.project.newTask.breadcrumbs'),
        }
        ]);

        

    }), [loadProject?.data?.data?.code, loadProject?.data?.data?.title, projectId, task?.taskIndex, taskId]);

    useEffect(() => {
        if (taskId) {
            getTask({ projectId, taskId });
        }
    }, [getTask, projectId, taskId]);

    if (getTaskRequest.isLoading) {
        return (
            <Loader />
        );
    }

    return (
        <>
            {(!getTaskRequest.isUninitialized || !taskId) && (
                <ProjectEditTask
                    projectId={projectId}
                    projectCode={projectCode}
                    task={task}
                />
            )}
        </>
    );
};

export default EditTask;

