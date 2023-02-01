import styled from '@emotion/styled';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { DashboardItemActionRemove } from '../../../../../../assets/images';
import { Typography } from '../../../../../../components';

export const ActionRemoveStyled = styled.button`
	display: flex;
	align-items: center;
	cursor: pointer;
    background-color: transparent;
    border: none;
`;

type ActionRemoveProps = {
	deleteProject: (func) => void;
    projectId: string;
}

const ActionRemove: FC<ActionRemoveProps> = ({ deleteProject, projectId }) => {

    const {t, i18n} = useTranslation();

    return (
        <ActionRemoveStyled onClick={deleteProject} title={t('easy-project.dashboard.projectList.buttonDelete')}>
            <img src={DashboardItemActionRemove} alt={t('easy-project.dashboard.projectList.buttonDelete')}/>
            <Typography.Paragraph>{t('easy-project.dashboard.projectList.buttonDelete')}</Typography.Paragraph>
        </ActionRemoveStyled>
    );
};

export default ActionRemove;