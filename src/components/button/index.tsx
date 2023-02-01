import React from 'react';
import { useTheme } from '@emotion/react';

import { ButtonTheme, StyledButton } from './components';

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  type?: 'submit' | 'button' | 'reset';
  color: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    color,
    ...rest
}) => {
  
    const theme = useTheme();

    const buttonTheme: ButtonTheme = {
        purple: {
            'background-color': theme.color.purple,
            color: theme.color.white
        },
        blue: {
            'background-color': theme.color.dashboardColors.overlayButtonCreate,
            color: theme.color.black
        }
    };

    return (
        <StyledButton buttonTheme={buttonTheme[color]} {...rest}>{children}</StyledButton>
    );
};

Button.defaultProps = {
    type: 'submit',
};

export default Button;
