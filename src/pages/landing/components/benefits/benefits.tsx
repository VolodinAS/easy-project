import React from 'react';
import { useTranslation } from 'react-i18next';

import BenefitsItemsGroup from './benefits-items-group';
import {
    BenefitsMainStyled,
    BenefitsHeaderStyled
} from './styles';

import { LandingAnchors } from '../../../../constants/anchors';
import { Typography } from '../../../../components';

const Benefits = () => {

    const {t, i18n} = useTranslation();

    return (
        <BenefitsMainStyled>
            <BenefitsHeaderStyled id={LandingAnchors.benefits}>
                <Typography.H1>{t('easy-project.landing.benefits.mainText')}</Typography.H1>
            </BenefitsHeaderStyled>
            <BenefitsItemsGroup/>
        </BenefitsMainStyled>
    );
};

export default Benefits;