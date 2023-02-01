import React, { FC } from 'react';
import Lottie from 'lottie-react';

import errorNotfound from '../../assets/animations/404.json';
import { Typography } from '..';
import { useTranslation } from 'react-i18next';

export const NotfoundError = () => {

    const { t } = useTranslation();

    return <div style={ { width: '50vw', margin: '0 auto', textAlign: 'center' } }>
        <Lottie animationData={errorNotfound} style={{ marginBottom: '-15vw' }} />
        <Typography.H1>{t('easy-project.error.notfound')}</Typography.H1>
    </div>;
};