import styled from '@emotion/styled';

export const BenefitsItemStyled = styled.div`
    width: 270px;
    height: 270px;
    background: ${({theme}) => theme.color.landingColors.benefitsItemBackground};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin: 0 15px 0 15px;
    padding: 10px;
`;

export const BenefitsStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 150px;
`;

export const SecondButtonStyled = styled.div`
    margin-top: 50px;
`;

export const BenefitsHeaderStyled = styled.div`
    width: 15%;
    margin: auto;
    align-items: center;
    text-align: center;
    color: ${({theme}) => theme.color.black};
    padding-top: 100px;
    margin-bottom: 50px;
`;

export const BenefitsMainStyled = styled.div`
    background: ${({theme}) => theme.color.landingColors.mainGray};
`;