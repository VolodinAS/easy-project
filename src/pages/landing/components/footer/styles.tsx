import styled from '@emotion/styled';

export const FooterStyled = styled.div`
    display: flex;
    background: ${({theme}) => theme.color.landingColors.footerBackground};
    width: 100%;
    height: 80px;
    align-items: center;
    justify-content: center;
`;

export const FooterTextStyled = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: ${({theme}) => theme.color.white};
`;