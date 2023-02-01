import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

type LinkButtonThemeItem = {
  'background-color': string;
  color: string;
};

export type LinkButtonTheme = Record<string, LinkButtonThemeItem>;

export const StyledLink = styled(Link)<{buttonTheme: LinkButtonThemeItem;}>(({ buttonTheme }) => `
  display: inline-block;
  text-align: center;
  padding: 16px 64px;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${buttonTheme['background-color']};
  color: ${buttonTheme['color']};
  font-weight: 700;
  font-size: 16px;
  border: none;
  box-shadow: none;
  text-decoration: none;
`);
