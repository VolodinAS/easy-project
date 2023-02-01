import React from 'react';
import { useTranslation } from 'react-i18next';

import {
    FooterStyled,
    FooterTextStyled
} from './styles';

const Footer = () => {

    const {t, i18n} = useTranslation();

    return (
        <FooterStyled>
            <FooterTextStyled>
                EASY PROJECT © {t('easy-project.landing.footer.rights')}
            </FooterTextStyled>
        </FooterStyled>
    );
};

export default Footer;