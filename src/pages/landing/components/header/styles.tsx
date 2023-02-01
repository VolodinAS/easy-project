import styled from '@emotion/styled';

export const LogoStyled = styled.div`
    width: 1240px;
    margin: auto;
    padding: 5px 0px 5px 0px;
    align-items: center;
    display: flex;
    background: ${({theme}) => theme.color.landingColors.headerBackground};
`;

export const HeaderStyled = styled.div`
    width: 100%;
    margin: auto;
    background: ${({theme}) => theme.color.landingColors.headerBackground};
    z-index: 9999;
`;

export const HeaderMenuStyled = styled.div`
    display: inline-block;
`;

export const LogoIconStyled = styled.div`
    display: inline-block;
`;

export const LogoTitleStyled = styled.div`
    font-family: 'Russo One', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 42px;
    letter-spacing: 0.14em;
    color: ${({theme}) => theme.color.landingColors.headerLogo};
    display: inline-block;
    margin-left: 5px;
`;