import React from 'react';
import { useTranslation } from 'react-i18next';

import UniqItem from './uniq-item';
import {
    UniqStyled,
    UniqHeaderStyle,
    UniqTextStyled,
    StartProjectStyled
} from './styles';

import StartProject from '../buttons/start-project-button';

import { LandingAnchors } from '../../../../constants/anchors';
import { Typography } from '../../../../components';

const Uniq = () => {

    const {t, i18n} = useTranslation();

    return (
        <UniqStyled>
            <UniqHeaderStyle id={LandingAnchors.uniq}>
                <Typography.H1>{t('easy-project.landing.uniq.mainText')}</Typography.H1>
            </UniqHeaderStyle>
            <UniqTextStyled>
                <Typography.Paragraph>
                    {t('easy-project.landing.uniq.subText')}
                </Typography.Paragraph>
            </UniqTextStyled>
            <UniqItem npp="1" imageRight/>
            <UniqItem npp="2" imageRight={false}/>
            <UniqItem npp="3" imageRight/>
            <StartProjectStyled>
                <StartProject title={t('easy-project.landing.buttons.startProject.uniq')}/>
            </StartProjectStyled>
        </UniqStyled>
    );
};

export default Uniq;