import React from 'react';
import { useTheme } from '@emotion/react';

import { LinkButtonTheme, StyledLink } from './components';

type LinkButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  color?: string;
  link?: string;
  title?: string;
  styles?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
    children,
    color,
    link,
    title,
    styles
}) => {
  
    const theme = useTheme();

    const buttonTheme: LinkButtonTheme = {
        blue: {
            'background-color': theme.color.dashboardColors.overlayButtonCreate,
            color: theme.color.black
        }
    };

    return (
        <StyledLink 
            to={link}
            title={title}
            className={styles}
            buttonTheme={buttonTheme[color]}
        >
            {children}
        </StyledLink>
    );
};

LinkButton.defaultProps = {
    link: '',
    title: '',
};

export default LinkButton;
