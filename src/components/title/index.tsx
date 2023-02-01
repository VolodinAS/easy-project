import React, { FC } from 'react';
import {Helmet} from 'react-helmet';

import { Favicon } from '../../assets/images';

type HeaderTitleProps = {
    title?: string
}

const HeaderTitle:FC<HeaderTitleProps> = ({ title }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>Easy Project{title ? ' | ' + title : ''}</title>
            <link rel="icon" type="image/x-icon" href={Favicon} />
        </Helmet>
    );
};

export default HeaderTitle;