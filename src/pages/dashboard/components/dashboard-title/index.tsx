import React, { FC } from 'react';

import { Typography } from '../../../../components';
import VerticalLine from '../graphics/vertical-line';
import { ProjectsListHeaderStyled } from './styles';

type DashboardTitleProps = {
    text?: string; 
}

const DashboardTitle: FC<DashboardTitleProps> = ({ text }) => {
    return (
        <ProjectsListHeaderStyled>
            <VerticalLine/>
            <Typography.H1>{text}</Typography.H1>
        </ProjectsListHeaderStyled>
    );
};

DashboardTitle.defaultProps = {
    text: '',
};

export default DashboardTitle;
