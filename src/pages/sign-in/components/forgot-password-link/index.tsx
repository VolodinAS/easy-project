import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../../../../constants/routes';

import { ForgotPassword } from './style';

const ForgotPasswordLink: FC = () => {

    const { t } = useTranslation();

    if (!ROUTES.RESET_PASSWORD.enabled) {
        return null;
    }
    
    return (
        <ForgotPassword
            to={ROUTES.RESET_PASSWORD.url}
        >
            {t('easy-project.signin.forgotPassword')}
        </ForgotPassword>
    );
};

export default ForgotPasswordLink;