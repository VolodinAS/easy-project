import React, { FC } from 'react';

import { StyledLink } from './components';

import { ROUTES } from '../../../../constants/routes';

const SignInUpLink: FC = ({ children }) => {
    if (ROUTES.REGISTRATION.enabled) {
        return <StyledLink to={ROUTES.REGISTRATION.url} title="Регистрация">{children}</StyledLink>;
    } 
    if (ROUTES.SIGN_IN.enabled) {
        return <StyledLink to={ROUTES.SIGN_IN.url} title="Вход">{children}</StyledLink>;
    } 
    return <span onClick={() => alert('Вход в дашборд временно недоступен')}>{children}</span>;
};

export default SignInUpLink;
