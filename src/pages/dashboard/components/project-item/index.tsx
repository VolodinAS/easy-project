import React, { FC } from 'react';

import ActionEdit from './actions/action-edit';
import ActionRemove from './actions/action-remove';
import ActionTask from './actions/action-tasks';

import { Typography } from '../../../../components';

import {
    ProjectItemStyled,
    ProjectItemInfoStyled,
    ProjectItemNameStyled,
    ProjectItemAuthorStyled,
    ProjectItemActionsStyled,
    ProjectItemUpdatedStyled
} from './styles';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';


interface ProjectItemProps {
    id: string,
    title: string,
    author: string,
    changed: number,
    created: number,
	deleteProject: (func) => void
}

const ProjectItem: FC<ProjectItemProps> = ({ id, title, author, changed, created, deleteProject }) => {

    const { t } = useTranslation();

    return (
        <ProjectItemStyled>
            <ProjectItemInfoStyled>
                <ProjectItemNameStyled>
                    <Typography.Paragraph size='large'>
                        {title}
                    </Typography.Paragraph>
                </ProjectItemNameStyled>
                <ProjectItemAuthorStyled>
                    <Typography.Paragraph size='small'>
                        {t('easy-project.dashboard.project.info.author', {projectAuthor: author})}
                    </Typography.Paragraph>
                </ProjectItemAuthorStyled>
                <ProjectItemUpdatedStyled>
                    <Typography.Paragraph size='small'>
                        {t('easy-project.dashboard.project.info.created', {projectCreated: dayjs(created).format('DD-MM-YYYY')})}
                    </Typography.Paragraph>
                </ProjectItemUpdatedStyled>
                <ProjectItemUpdatedStyled>
                    <Typography.Paragraph size='small'>
                        {t('easy-project.dashboard.project.info.changed', {projectChanged: dayjs(changed).format('DD-MM-YYYY')})}
                    </Typography.Paragraph>
                </ProjectItemUpdatedStyled>
            </ProjectItemInfoStyled>
            <ProjectItemActionsStyled>
                <ActionTask projectId={id}/>
                <ActionEdit projectId={id} />
                <ActionRemove projectId={id} deleteProject={deleteProject}/>
            </ProjectItemActionsStyled>
        </ProjectItemStyled>
    );
};

export default ProjectItem;