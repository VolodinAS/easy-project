import styled from '@emotion/styled';

export const IntroStyled = styled.div(({theme: {color: { landingColors }} }) => `
    width: 100%;
    margin: auto;
    background: linear-gradient(to bottom, ${landingColors.mainBlue} 50% , ${landingColors.mainGray} 50%);
`);

export const BlueDivStyled = styled.div`
    height: 500px;
    background: ${({theme}) => theme.color.landingColors.mainBlue};
`;

export const MainTextStyled = styled.div`
    width: 100%;
    margin: auto;
    align-items: center;
    text-align: center;
    color: ${({theme}) => theme.color.white};
    padding-top: 22px;
`;

export const AddonTextStyled = styled.div`
    width: 50%;
    margin: auto;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    align-items: center;
    text-align: center;
    color: ${({theme}) => theme.color.white};
    padding-top: 30px;
`;

export const IntroVideoStyled = styled.div`
    width: 800px;
    height: 500px;
    border-radius: 30px;
    padding: 10px;
    background: ${({theme}) => theme.color.white};
    margin: auto;
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.5));
    z-index: 9990;
    margin-top: 30px;
`;

export const VideoResponsive = styled.div`
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
`;

export const VideoIFrame = styled.iframe`
    width: 103%;
    height: 104%;
    margin: -10px -10px;
    border-radius: 30px;
`;