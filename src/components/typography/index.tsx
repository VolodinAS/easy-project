import styled from '@emotion/styled';
import React from 'react';

export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
`;

export const H2 = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 38px;
    line-height: 45px;
`;

export const H3 = styled.h3`
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
`;

const ParagraphBolder = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
`;

const ParagraphLarge = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
`;

const ParagraphBolderLarge = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
`;

const ParagraphDefault = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
`;

const ParagraphSmall = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
`;

const paragraphs = {
    bolderlarge: ParagraphBolderLarge,
    bolder: ParagraphBolder,
    large: ParagraphLarge,
    default: ParagraphDefault,
    small: ParagraphSmall
};

type ParagraphsProps = keyof typeof paragraphs;

export const Paragraph: React.FC<{size?: ParagraphsProps}> = ({ size, children, ...rest }) => {
    const Component = paragraphs[size];
    return <Component {...rest}>{children}</Component>;
};

Paragraph.defaultProps = { size: 'default' };