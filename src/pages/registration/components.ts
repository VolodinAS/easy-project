import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { Container } from '../../global-style';

export const Wrapper = styled.div(({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  min-height: 100vh;
  background-color: ${theme.color.lightPurple};
`);

export const FormContainer = styled(Container)(({ theme }) => `
  width: 600px; 
  border-radius: 4px;
  background-color: ${theme.color.white};
  padding: 32px 32px 64px;
`);

export const Title = styled.p(({ theme }) => `
  text-align: center;
  margin-bottom: 32px;
  font-weight: 700;
  font-size: 36px;
`);

export const FormLink = styled(Link)(({ theme }) => `
  font-weight: 700;
  color: ${theme.color.purple};
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`);

export const Fieldset = styled.fieldset`
    display: flex;
  flex-direction: column;
  margin-bottom: 22px;
  gap: 32px;
`;

export const TextWrapper = styled.div`
  margin-bottom: 32px;
`;

export const ButtonWrapper = styled.div`
  text-align: right;
`;

