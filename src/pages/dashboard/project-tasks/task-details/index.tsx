import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { LinksContext } from '../..';

import { DashboardItemActionRemove, OverlayButtonClose } from '../../../../assets/images';
import { ConfirmModal, Typography } from '../../../../components';
import { ROUTES } from '../../../../constants/routes';
import theme from '../../../../theme';
import { TaskTypes } from '../../project-interface';
import { avatar } from '../../../../assets/images';

// TODO: ИМПОРТ DATA
import { data as statusData } from '../../../../../stubs/json/dashboard/task-list/status.json';

import {
    WrapperTaskDetailsStyled,
    TaskDetailsHeaderStyled,
    TaskDetailsHeaderTitleStyled,
    TaskDetailsHeaderTitleIcon,
    TaskDetailsHeaderCloseStyled,
    TaskDetailsTitleStyled,
    TaskDetailsButtonEditStyled,
    TaskDetailsInfoStyled,
    TaskDetailsInfoItemStyled,
    ColorBlock,
    ButtonEdit,
    ButtonDelete,
    Item,
    Avatar,
    DateWrapper
} from './styled';
import { ProjectType } from '../../../../data/models/common';
import { useDeleteTaskMutation, useGetTaskByIdQuery } from '../../../../data/services/common';
import dayjs from 'dayjs';

type TaskDetailsProps = {
    taskId: string;
    projectData: ProjectType;
}

const TaskDetails: FC<TaskDetailsProps> = ({ taskId, projectData }) => { 
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [, setLinks] = useOutletContext<LinksContext>();

    const projectId = projectData.id;

    const [taskDeleteOverlay, setTaskDeleteOverlay] = useState(false);
    const [taskDeleteConfirm, setTaskDeleteConfirm] = useState(false);
    const [projectIdForDelete, setProjectIdForDelete] = useState(projectId);
    const [taskIdForDelete, setTaskIdForDelete] = useState(projectId);
    const [deleteRequested, setDeleteRequested] = useState(false);

    const [deleteTaskById, deleteTaskByIdRequest] = useDeleteTaskMutation();

    
    const { data: task, error, isLoading, isSuccess } = useGetTaskByIdQuery({ projectId, taskId });

    const TaskType =  TaskTypes.find(prop => prop.id === task?.data?.type);
    const TaskColor = TaskType?.color;

    const statusTitle = statusData.find(status => status.id === task?.data?.status);

    const TaskCreatedNumber = task?.data?.created;
    const TaskChangedNumber = task?.data?.changed;

    const author = (task?.data?.author?.login) || t('easy-project.dashboard.project.task.unknown.author');
    const executor = (task?.data?.executor?.login) || t('easy-project.dashboard.project.task.unknown.executor');
    const description = task?.data?.description;

    const deleteTask = () => {
        setTaskDeleteConfirm(true);
    };

    useEffect((() => {
        setTaskDeleteOverlay(taskDeleteOverlay);
        setTaskDeleteConfirm(taskDeleteConfirm);
        setProjectIdForDelete(projectIdForDelete);
        setTaskIdForDelete(taskIdForDelete);
        setDeleteRequested(deleteRequested);

        if ( taskDeleteConfirm && taskDeleteOverlay )
        {
            if (!deleteRequested){
                setDeleteRequested(true);
                deleteTaskById({ projectId, taskId });
            }
            
        }

        if ( deleteTaskByIdRequest.isSuccess )
        {
            setTaskDeleteOverlay(false);
            setTaskDeleteConfirm(false);
            setProjectIdForDelete(undefined);
            setTaskIdForDelete(undefined);
            navigate(ROUTES.DASHBOARD_PROJECT_TASKS.getUrl(projectId), {replace: true});
        }

        setLinks([{
            name: t('easy-project.dashboard.all.pageName'),
            enabled: ROUTES.DASHBOARD.enabled,
            url: ROUTES.DASHBOARD.url
        },
        {
            name: t('easy-project.dashboard.project.tasks.breadcrumbs', {projectName: projectData.title}),
            enabled: ROUTES.DASHBOARD.enabled,
            url: ROUTES.DASHBOARD.url + '/' + projectData.id
        },
        {
            name: t('easy-project.dashboard.project.task.breadcrumbs', {projectCode: projectData.code, taskCode: task?.data?.taskIndex}),
        }
        ]);
    }), [deleteRequested, deleteTaskById, deleteTaskByIdRequest.isSuccess, navigate, projectData.code, projectData.id, projectData.title, projectId, projectIdForDelete, task?.data?.taskIndex, taskDeleteConfirm, taskDeleteOverlay, taskId, taskIdForDelete]);

    return (
        <>
            { taskDeleteOverlay && <ConfirmModal onClose={() => setTaskDeleteOverlay(false)} onConfirm={deleteTask}>{t('easy-project.overlay.confirm.delete.task', {taskTitle: task?.data?.title})}?</ConfirmModal> }
            { isSuccess && task?.data && (<WrapperTaskDetailsStyled>
                <TaskDetailsHeaderStyled>
                    <TaskDetailsHeaderTitleStyled>
                        <TaskDetailsHeaderTitleIcon src={TaskType.icon}/>
                        <Typography.Paragraph size='bolderlarge'>
                            {t('easy-project.dashboard.project.task.header', { projectCode: projectData.code, taskId: task?.data?.taskIndex })}
                        </Typography.Paragraph>
                    </TaskDetailsHeaderTitleStyled>
                    <TaskDetailsHeaderCloseStyled onClick={() => navigate(ROUTES.DASHBOARD_PROJECT_TASKS.getUrl(projectId), {replace: true})} src={OverlayButtonClose} />
                </TaskDetailsHeaderStyled>
                <DateWrapper>
                    <Typography.Paragraph size='small' style={{ color: theme.color.darkGray}}><b>{t('easy-project.dashboard.project.task.created')}</b> {dayjs(TaskCreatedNumber).format('DD-MM-YYYY')}</Typography.Paragraph>
                </DateWrapper>
                <ColorBlock defaultColor={TaskColor}/>
                <TaskDetailsTitleStyled>
                    {task?.data?.title}
                </TaskDetailsTitleStyled>
                <TaskDetailsButtonEditStyled>
                    <ButtonEdit onClick={() => navigate(ROUTES.DASHBOARD_EDIT_TASK.getUrl(projectData.id, taskId), {replace: true})}>
                        <Typography.Paragraph size='small' style={{ color: theme.color.black }}>{t('easy-project.dashboard.project.task.buttonEdit')}</Typography.Paragraph>
                    </ButtonEdit>
                    <ButtonDelete onClick={() => setTaskDeleteOverlay(true)} src={DashboardItemActionRemove}>
                        <Typography.Paragraph size='small' style={{ color: theme.color.white }}>{t('easy-project.dashboard.projectList.buttonDelete')}</Typography.Paragraph>
                    </ButtonDelete >
                </TaskDetailsButtonEditStyled>
                <TaskDetailsInfoStyled>
                    <TaskDetailsInfoItemStyled>
                        <Typography.Paragraph size='small'><b>{t('easy-project.dashboard.project.task.info.description')}</b> {description}</Typography.Paragraph>
                    </TaskDetailsInfoItemStyled>
                    <TaskDetailsInfoItemStyled>
                        <Typography.Paragraph size='small'><b>{t('easy-project.dashboard.project.task.info.status')}</b> {statusTitle.title.toUpperCase()}</Typography.Paragraph>
                    </TaskDetailsInfoItemStyled>
                    <TaskDetailsInfoItemStyled>
                        <Typography.Paragraph size='small'><b>{t('easy-project.dashboard.project.task.info.author')}</b> 
                        </Typography.Paragraph>
                        <Item>
                            <Avatar src={avatar}/>
                            {author}
                        </Item>
                    </TaskDetailsInfoItemStyled>
                    <TaskDetailsInfoItemStyled>
                        <Typography.Paragraph size='small'><b>{t('easy-project.dashboard.project.task.info.changed')}</b> {dayjs(TaskChangedNumber).format('DD-MM-YYYY')}</Typography.Paragraph>
                    </TaskDetailsInfoItemStyled>
                    <TaskDetailsInfoItemStyled>
                        <Typography.Paragraph size='small'><b>{t('easy-project.dashboard.project.task.info.executor')}</b></Typography.Paragraph>
                        <Item>
                            <Avatar src={avatar}/>
                            {executor}
                        </Item>
                    </TaskDetailsInfoItemStyled>
                </TaskDetailsInfoStyled>
            </WrapperTaskDetailsStyled>)}
        </>
    );
};


export default TaskDetails;