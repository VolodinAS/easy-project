import React, { FC } from 'react';
import Lottie from 'lottie-react';

import errorEmpty from '../../assets/animations/no-results.json';
import { Typography } from '..';

type ErrorEmptyProps = {
    message: string;
    widthError?: string;
}

export const ErrorEmpty:FC<ErrorEmptyProps> = ({ message, widthError='50vw' }) => {
    return <div style={ { width: widthError, margin: '0 auto', textAlign: 'center' } }>
        <Lottie animationData={errorEmpty} />
        <Typography.H2>{message}</Typography.H2>
    </div>;
};