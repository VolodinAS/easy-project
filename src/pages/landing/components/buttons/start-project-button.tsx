import styled from '@emotion/styled';
import React, {FC} from 'react';
import SignInUpLink from '../sign-in-up-link';

const ButtonStartProjectStyled = styled.button`
    width: 430px;
    height: 60px;
    background: ${({theme}) => theme.color.landingColors.buttonStartBackground};
    border-radius: 10px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${({theme}) => theme.color.white};
    margin: auto;
    margin-top: 40px;
    cursor: pointer;
`;

const DivStyled = styled.div`
    margin: auto;
`;

interface StartProjectProps {
    title: string
}

const StartProject: FC<StartProjectProps> = ({ title }) => {
    return (
        <SignInUpLink>
            <ButtonStartProjectStyled>
                <DivStyled>{title}</DivStyled>
            </ButtonStartProjectStyled>
        </SignInUpLink>
    );
};

export default StartProject;
