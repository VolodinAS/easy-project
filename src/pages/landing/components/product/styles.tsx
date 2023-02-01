import styled from '@emotion/styled';

export const ProductContainerStyled = styled.div`
    width: 1240px;
    margin: auto;
    margin-top: 54px;
    padding-bottom: 232px;
`;

export const Products = styled.div`
    display: inline-block;
    vertical-align: top;
`;

export const ProductMainText = styled.div`
    width: 380px;
    height: 190px;
    color: ${({theme}) => theme.color.black};
    display: inline-block;
`;

export const IntroMainImageImgStyled = styled.img`
    height: 450px;
    margin-left: 60px;
`;

export const ProductMainImage = styled.div`
    display: inline-block;
`;

export const ProductAddonText = styled.div`
    width: 566px;
    height: 153px;
    left: 121px;
    top: 358px;
    color: ${({theme}) => theme.color.black};
    margin-top: 16px;
`;