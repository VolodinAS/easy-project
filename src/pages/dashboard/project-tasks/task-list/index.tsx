import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useOutletContext } from 'react-router-dom';

import {
    TaskListStyled
} from './styled';

import { LinksContext } from '../..';
import { ROUTES } from '../../../../constants/routes';
import { ProjectTask } from '../../project-interface';
import TaskGroup from '../task-group';

// TODO: ИМПОРТ DATA
import { TaskType } from '../../../../data/models/common';
import { useGetProjectsQuery } from '../../../../data/services/common';

interface TaskListProps {
    tasks: TaskType[],
    code: string;
    projectId: string;
}

const TaskList: FC<TaskListProps> = ({ projectId, tasks, code }) => {

    const { t } = useTranslation();
    const [, setLinks] = useOutletContext<LinksContext>();

    const projectsLoaded = useGetProjectsQuery();
    const projectData = projectsLoaded?.data?.data.find(project => project.id === projectId);
    
    const task_todo = tasks.filter(task => task.status.toString() === '1');
    const task_inprogress = tasks.filter(task => task.status.toString() === '2');
    const task_testing = tasks.filter(task => task.status.toString() === '3');
    const task_done = tasks.filter(task => task.status.toString() === '4');

    useEffect((() => {
        // TODO: JEST: TypeError: Invalid attempt to destructure non-iterable instance. In order to be iterable, non-array objects must have a [Symbol.iterator]() method.
        setLinks([{
            name: t('easy-project.dashboard.all.pageName'),
            enabled: ROUTES.DASHBOARD.enabled,
            url: ROUTES.DASHBOARD.url
        },
        {
            name: t('easy-project.dashboard.project.tasks.breadcrumbs', {projectName: projectData.title}),
        }
        ]);
    }), [projectData.title]);

    return (
        <TaskListStyled>
            <TaskGroup
                title="TODO"
                amount={task_todo.length} 
                tasks={task_todo} code={code} 
                projectId={projectId}
                addButton
            />
            <TaskGroup
                title="INPROGRESS" 
                amount={task_inprogress.length} 
                tasks={task_inprogress} 
                code={code}
                projectId={projectId}
            />
            <TaskGroup
                title="TESTING" 
                amount={task_testing.length} 
                tasks={task_testing} 
                code={code}
                projectId={projectId}
            />
            <TaskGroup
                title="DONE"
                amount={task_done.length} 
                tasks={task_done} 
                code={code}
                projectId={projectId}
            />
        </TaskListStyled>
    );
};

export default TaskList;