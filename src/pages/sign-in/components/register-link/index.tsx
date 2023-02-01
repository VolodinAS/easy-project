import React, { FC } from 'react';

import { ROUTES } from '../../../../constants/routes';

import { RegisterLink, RegisterText } from './style';
import { useTranslation } from 'react-i18next';

const SignUpLink: FC = () => {

    const { t } = useTranslation();

    if (!ROUTES.REGISTRATION.enabled) {
        return null;
    }

    return (
        <RegisterText>
            {t('easy-project.signin.registerText')}<RegisterLink 
                to={ROUTES.REGISTRATION.url}
            >
                {t('easy-project.signin.registerTextLink')}
            </RegisterLink>
        </RegisterText>
    );      
};

export default SignUpLink;