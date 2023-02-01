import styled from '@emotion/styled';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { DashboardItemActionEdit } from '../../../../../../assets/images';
import { Typography } from '../../../../../../components';
import { LinkWrapper } from '../../../../../../components/link-wrapper';
import { ROUTES } from '../../../../../../constants/routes';

export const ActionEditStyled = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

interface ActionEditProps {
    projectId: string
}

const ActionEdit: FC<ActionEditProps> = ({ projectId }) => {

    const EditProjectLink = ROUTES.DASHBOARD_EDIT_PROJECT.getUrl(projectId);

    const {t, i18n} = useTranslation();

    return (
        <LinkWrapper to={EditProjectLink}>
            <ActionEditStyled>
                <img src={DashboardItemActionEdit} alt={t('easy-project.dashboard.projectList.buttonEdit')}/>
                <Typography.Paragraph>{t('easy-project.dashboard.projectList.buttonEdit')}</Typography.Paragraph>
            </ActionEditStyled>
        </LinkWrapper>
    );
};

export default ActionEdit;