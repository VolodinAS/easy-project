import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import DashboardTitle from '../components/dashboard-title';
import { ProjectProps } from '../project-interface';

import TaskList from './task-list';
import TaskDetails from './task-details';

import { useGetProjectsQuery, useGetTasksQuery } from '../../../data/services/common';

const ProjectTasks = () => {

    

    const { projectId, taskId } = useParams();

    const {t, i18n} = useTranslation();

    const projectsLoaded = useGetProjectsQuery();
    const projectData = projectsLoaded?.data?.data?.find(project =>  project.id === projectId);
    const tasksData = useGetTasksQuery({ projectId });    

    if ( !projectsLoaded?.data?.data ){
        return (
            <>
                {t('easy-project.dashboard.project.accessDenied')}
            </>
        );
    }
    
    return (
        <>
            <DashboardTitle text={projectData.title}/>
            {projectsLoaded.isSuccess && tasksData.isSuccess && <TaskList tasks={tasksData.data.data} code={projectData.code} projectId={projectData.id}/>}
            {taskId && <TaskDetails taskId={taskId} projectData={projectData}/>}
        </>
    );
};

export default ProjectTasks;