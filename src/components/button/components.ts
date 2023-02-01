import styled from '@emotion/styled';

type ButtonThemeItem = {
  'background-color': string;
  color: string;
};

export type ButtonTheme = Record<string, ButtonThemeItem>;

export const StyledButton = styled.button<{buttonTheme: ButtonThemeItem;}>(({ buttonTheme }) => `
  padding: 16px 32px;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${buttonTheme['background-color']};
  color: ${buttonTheme['color']};
  font-weight: 700;
  font-size: 16px;
  border: none;
  box-shadow: none;
`);
