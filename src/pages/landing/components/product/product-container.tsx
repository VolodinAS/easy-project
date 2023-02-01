import React from 'react';
import { useTranslation } from 'react-i18next';

import {
    ProductContainerStyled,
    Products,
    ProductMainText,
    ProductAddonText,
    ProductMainImage,
    IntroMainImageImgStyled
} from './styles';

import StartProject from '../buttons/start-project-button';
import { LandingAnchors } from '../../../../constants/anchors';
import { IntroMainImageLogo } from '../../../../assets/images';
import { Typography } from '../../../../components';

const ProductContainer = () => {

    const {t, i18n} = useTranslation();

    return (
        <ProductContainerStyled id={LandingAnchors.product}>
            <Products>
                <ProductMainText>
                    <Typography.H2>{t('easy-project.landing.product.mainText')}</Typography.H2>
                </ProductMainText>
                <ProductAddonText>
                    <Typography.Paragraph size='large'>{t('easy-project.landing.product.subText')}</Typography.Paragraph>
                </ProductAddonText>
                <StartProject title={t('easy-project.landing.buttons.startProject.product')}/>
            </Products>
            <ProductMainImage>
                <IntroMainImageImgStyled src={IntroMainImageLogo} alt="Логотип" />
            </ProductMainImage>
        </ProductContainerStyled>
    );
};

export default ProductContainer;