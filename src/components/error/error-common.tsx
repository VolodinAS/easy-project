import React, { FC } from 'react';
import Lottie from 'lottie-react';

import errorCommon from '../../assets/animations/common-error.json';
import { Typography } from '..';

type CommonErrorProps = {
    message: string;
}

export const CommonError:FC<CommonErrorProps> = ({ message }) => {
    return <div style={ { width: '50vw', margin: '0 auto', textAlign: 'center' } }>
        <Lottie animationData={errorCommon} />
        <Typography.H2>{message}</Typography.H2>
    </div>;
};