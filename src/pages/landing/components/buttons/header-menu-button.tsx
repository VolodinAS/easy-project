import styled from '@emotion/styled';
import React, {FC} from 'react';

const LinkStyled = styled.a`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: ${({theme}) => theme.color.black};
    text-decoration: none;
`;

const HeaderMenuButtonStyled = styled.div`
    display: inline-block;
    padding-right: 10px;
    padding-left: 80px;
`;

interface ButtonProps {
    title: string,
    href: string,
}

const HeaderMenuButton: FC<ButtonProps> = ({ title, href }) => {
    return (
        <HeaderMenuButtonStyled>
            <LinkStyled href={href}>
                {title}
            </LinkStyled>
        </HeaderMenuButtonStyled>
    );
};

export default HeaderMenuButton;