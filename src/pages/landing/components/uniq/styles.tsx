import styled from '@emotion/styled';

export const UniqItemTextStyled = styled.div`
    padding-left: 20px;
    padding-right: 20px;
`;

export const UniqItemTextNumberStyled = styled.div`
    width: 60px;
    height: 55px;
    left: 148px;
    top: 2809px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    display: flex;
    align-items: center;
    -webkit-text-stroke: 3px ${({theme}) => theme.color.white};
    color: transparent;
`;

export const UniqItemTextHeaderStyled = styled.div`
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.color.black};

    margin-top: 100px;
`;

export const UniqItemTextAddonStyled = styled.div`
    display: flex;
    align-items: center;
    margin-top: 70px;
`;

export const UniqItemImageStyled = styled.img`
    width: 700px;
    height: 400px;
`;

export const UniqStyled = styled.div`
    margin: auto;
    margin-top: 165px;
    width: 1240px;
    background: ${({theme}) => theme.color.landingColors.mainGray};
`;

export const StartProjectStyled = styled.div`
    padding-top: 40px;
    padding-bottom: 80px;
`;

export const UniqHeaderStyle = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    margin: auto;
    width: 30%;
`;

export const UniqTextStyled = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    color: ${({theme}) => theme.color.black};
    margin: auto;
    width: 50%;
    margin-top: 40px;
    justify-content: center;
`;