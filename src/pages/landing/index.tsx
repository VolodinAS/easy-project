import styled from '@emotion/styled';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Header from './components/header/header';
import ProductContainer from './components/product/product-container';
import Partners from './components/partners/partners';
import Intro from './components/intro/intro';
import Benefits from './components/benefits/benefits';
import Uniq from './components/uniq/uniq';
import Footer from './components/footer/footer';
import HeaderTitle from '../../components/title';


const GrayDivStyled = styled.div`
    background: ${({theme}) => theme.color.landingColors.mainGray};
`;

const Wrapper = styled.div`
    background: ${({theme}) => theme.color.landingColors.headerBackground};
    
`;

const Landing = () => {

    const { t } = useTranslation();

    return (
        <>
            <HeaderTitle title={t('easy-project.header.title.landing')}/>
            <Wrapper>
                <Header/>
                <ProductContainer/>
            </Wrapper>
            <Partners/>
            <Intro/>
            <GrayDivStyled>
                <Benefits/>
                <Uniq/>
            </GrayDivStyled>
            <Footer/>
        </>
    );
};

export default Landing;
