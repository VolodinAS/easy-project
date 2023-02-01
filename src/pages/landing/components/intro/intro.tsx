import React from 'react';
import { getAllFeatures } from '@ijl/cli';
import { useTranslation } from 'react-i18next';

import { LandingAnchors } from '../../../../constants/anchors';
import { Typography } from '../../../../components';
import StartProject from '../buttons/start-project-button';

import {
    IntroStyled,
    MainTextStyled,
    AddonTextStyled,
    IntroVideoStyled,
    VideoIFrame
} from './styles';

const features = getAllFeatures();
const youtubeVideoLink = features['easy-project']['landing.video.url']?.value;

const Intro = () => {   

    const {t, i18n} = useTranslation();

    if (!youtubeVideoLink){
        return null;
    }

    return (
        <IntroStyled id={LandingAnchors.intro}>
            <MainTextStyled>
                <Typography.H1>{t('easy-project.landing.intro.mainText')}</Typography.H1>
            </MainTextStyled>
            <AddonTextStyled>
                <Typography.Paragraph>{t('easy-project.landing.intro.subText')}</Typography.Paragraph>
            </AddonTextStyled>
            <IntroVideoStyled>
                <VideoIFrame src={youtubeVideoLink} />
            </IntroVideoStyled>
            <StartProject title={t('easy-project.landing.buttons.startProject.intro')}/>
        </IntroStyled>       
    );    
};

export default Intro;