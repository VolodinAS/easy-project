import styled from '@emotion/styled';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { DashboardItemActionTask } from '../../../../../../assets/images';
import { Typography } from '../../../../../../components';
import { LinkWrapper } from '../../../../../../components/link-wrapper';
import { ROUTES } from '../../../../../../constants/routes';

export const ActionTaskStyled = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

interface ActionTaskProps {
    projectId: string
}

const ActionTask: FC<ActionTaskProps> = ({ projectId }) => {

    const ProjectTasksLink = ROUTES.DASHBOARD_PROJECT_TASKS.getUrl(projectId);

    const {t, i18n} = useTranslation();

    return (
        <LinkWrapper to={ProjectTasksLink}>
            <ActionTaskStyled>
                <img src={DashboardItemActionTask} alt={t('easy-project.dashboard.projectList.buttonTasks')}/>
                <Typography.Paragraph>{t('easy-project.dashboard.projectList.buttonTasks')}</Typography.Paragraph>
            </ActionTaskStyled>
        </LinkWrapper>
    );
};

export default ActionTask;