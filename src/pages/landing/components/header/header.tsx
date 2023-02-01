import React from 'react';
import { useTranslation } from 'react-i18next';

import HeaderMenuButton from '../buttons/header-menu-button';
import { LangSection } from '../../../sign-in/style';
import LanguageSelect from '../../../../components/language-select';

import {
    HeaderStyled,
    LogoStyled,
    LogoIconStyled,
    LogoTitleStyled,
    HeaderMenuStyled
} from './styles';

const Header = () => {

    const {t, i18n} = useTranslation();

    return (
        <HeaderStyled>
            <LogoStyled>
                <LogoIconStyled>
                    <svg width="85" height="70" viewBox="0 0 85 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="9.94723" cy="14.3011" rx="9.63815" ry="9.03226" fill="#7A52AA"/>
                        <ellipse cx="42.8772" cy="9.03226" rx="9.63815" ry="9.03226" fill="#7A52AA"/>
                        <ellipse cx="42.4758" cy="42.5269" rx="18.8747" ry="17.6882" fill="#7A52AA"/>
                        <ellipse cx="75.0049" cy="14.3011" rx="9.63815" ry="9.03226" fill="#7A52AA"/>
                        <ellipse cx="75.0049" cy="48.1721" rx="9.63815" ry="9.03226" fill="#7A52AA"/>
                        <ellipse cx="9.94723" cy="48.1721" rx="9.63815" ry="9.03226" fill="#7A52AA"/>
                        <ellipse cx="42.8772" cy="68.4946" rx="9.63815" ry="1.50538" fill="#7A52AA"/>
                        <line x1="10.3408" y1="19.5699" x2="10.3408" y2="34.6236" stroke="#7A52AA" strokeWidth="4"/>
                        <line x1="75.3982" y1="19.5699" x2="75.3982" y2="34.6236" stroke="#7A52AA" strokeWidth="4"/>
                        <line x1="75.0046" y1="33.6129" x2="8.34077" y2="33.6129" stroke="#7A52AA" strokeWidth="4"/>
                        <line x1="43.2712" y1="16.5592" x2="43.2712" y2="68.4947" stroke="#7A52AA" strokeWidth="4"/>
                        <line x1="75.0046" y1="48.6667" x2="8.34077" y2="48.6667" stroke="#7A52AA" strokeWidth="4"/>
                    </svg>
                </LogoIconStyled>
                <LogoTitleStyled>
                EASY<br/>PROJECT
                </LogoTitleStyled>
                <HeaderMenuStyled>
                    <HeaderMenuButton title={t('easy-project.landing.header.product')} href='#product'/>
                    <HeaderMenuButton title={t('easy-project.landing.header.intro')} href='#intro'/>
                    <HeaderMenuButton title={t('easy-project.landing.header.benefits')} href='#benefits'/>
                    <HeaderMenuButton title={t('easy-project.landing.header.uniq')} href='#uniq'/>
                </HeaderMenuStyled>
                <LangSection>
                    <LanguageSelect />
                </LangSection>
            </LogoStyled>
        </HeaderStyled>
    );
};

export default Header;