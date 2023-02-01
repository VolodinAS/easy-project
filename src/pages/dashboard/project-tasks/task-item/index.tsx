import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Typography } from '../../../../components';
import { TaskTypes } from '../../project-interface';
import { ROUTES } from '../../../../constants/routes';

import {
    TaskItemStyled,
    TaskContentStyled,
    TaskFooterStyled,
    TaskFooterTypeStyled,
    TaskIconStyled,
    TaskFooterCodeStyled,
    TaskFooterExecutorStyled,
    TaskExecutorStyled,
    TaskFooterTypeCodeStyled,
    StyledParagraph,
    Colored
} from './styles';
import { TaskType } from '../../../../data/models/common';

interface TaskItemProps {
    task: TaskType;
    code: string;
    selected: boolean;
}

const TaskItem: FC<TaskItemProps> = ({ task, code, selected }) => {

    const TaskType =  TaskTypes.find(prop => prop.id === task.type);
    const TaskColor = TaskType.color;
    const TaskIcon = TaskType.icon;

    const { projectId } = useParams();

    return (
        <TaskItemStyled selected={selected} to={ROUTES.DASHBOARD_PROJECT_TASK_DETAILS.getUrl(projectId, task.id)} defaultColor={TaskColor} >
            <Colored selected={false} defaultColor={TaskColor} />
            <TaskContentStyled>
                <Typography.Paragraph>{task.title}</Typography.Paragraph>
            </TaskContentStyled>

            <TaskFooterStyled>

                <TaskFooterTypeCodeStyled>
                    <TaskFooterTypeStyled>
                        <TaskIconStyled src={TaskIcon}/>
                    </TaskFooterTypeStyled>
                    <TaskFooterCodeStyled>
                        <StyledParagraph>
                            {code}-{task.taskIndex}
                        </StyledParagraph>
                    </TaskFooterCodeStyled>
                </TaskFooterTypeCodeStyled>

                <TaskFooterExecutorStyled>
                    {task.executor && <TaskExecutorStyled/>}
                </TaskFooterExecutorStyled>

            </TaskFooterStyled>
        </TaskItemStyled>
    );
};

export default TaskItem;