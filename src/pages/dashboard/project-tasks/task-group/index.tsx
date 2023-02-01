import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import LinkButton from '../../../../components/link-button';
import { ROUTES } from '../../../../constants/routes';
import { TaskType } from '../../../../data/models/common';
import { ProjectTask } from '../../project-interface';
import TaskItem from '../task-item';

import {
    StyledParagraph,
    TaskGroupStyled
} from './styles';

interface TaskGroupProps {
    title: string;
    amount: number;
    tasks: TaskType[];
    code: string;
    addButton?: boolean;
    projectId: string;
}

const TaskGroup: FC<TaskGroupProps> = ({ projectId, title, amount, tasks, code, addButton }) => {

    const NewTask = ROUTES.DASHBOARD_NEW_TASK.getUrl(projectId);

    const {t, i18n} = useTranslation();

    const { taskId } = useParams();

    return (
        <TaskGroupStyled>
            <div>
                <StyledParagraph>
                    {t('easy-project.dashboard.project.title', { title: title, amount: amount })}
                </StyledParagraph>
                {tasks.map((task) => (
                    <TaskItem 
                        key={task.id}
                        selected={String(task.id) === taskId}
                        task={task}
                        code={code}
                    />
                ))}
            </div>
            {/* TODO : ВОЗНИКАЕТ WARNING: React does not recognize the `buttonTheme` prop on a DOM element */}
            {addButton && <LinkButton 
                color={'blue'}
                link={NewTask}
                title={t('easy-project.dashboard.projectList.buttonAddTask')}
            >
                {t('easy-project.dashboard.projectList.buttonAddTask')}
            </LinkButton>}
        </TaskGroupStyled>
    );
};

export default TaskGroup;