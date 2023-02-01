import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div(({ theme }) => `
  display: flex;
  align-items: center;
  gap: 16px;
  flex-direction: column;
  min-height: 100vh;
  padding: 16px 32px;
  background-color: ${theme.color.lightGray};
`);

export const Container = styled.div<{fullFlex?: boolean}>(({ theme, fullFlex }) => `
  flex: ${fullFlex ? '1' : 'initial'};
  display: flex;
  height: 100%;
  width: 100%;
  background-color: ${theme.color.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`);

export const Header = styled.div`
  height: 90px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  padding: 16px;
  display: flex;
  gap: 64px;
  align-items: center;
`;

export const HeaderLogoLink = styled(Link)(({ theme }) => `
  text-decoration: none;
  color: ${theme.color.black};
`);

export const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoIconContainer = styled.div `
  width: 67px;
  height: 55px;
`;

export const LogoText = styled.p`
  display: flex;
  gap: 4px;
  flex-direction: column;
  font-family: 'Russo One', sans-serif;
  text-transform: uppercase;
  font-size: 14px;
`;

export const Navigation = styled.nav`
  flex: auto;
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const LinksContainer = styled.div(({ theme }) => `
  display: flex; 
  align-items: center;
  gap: 12px;
`);

export const StyledLink = styled(Link)(({ theme }) => `
  &:link,
  &:visited {
    font-size: 24px;
    text-decoration: none;
    color: ${theme.color.black};
    transition: color .5s ease-out;
  }

  &:hover {
    color: ${theme.color.purple}
  }
`);

export const StyledLinkNoUrl = styled.span(({ theme }) => `
  font-size: 24px;
  text-decoration: none;
  color: ${theme.color.black};

  &:last-of-type {
    color: ${theme.color.purple}
  }
`);

export const LinkSeparator = styled.div`
  width: 24px;
  height: 24px;
`;

export const AvatarContainer = styled.div(({ theme }) => `
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: ${theme.color.purple};
`);

export const Content = styled.main`
  padding: 32px 16px; 
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  display: flex;
  flex-direction: column;

  overflow-x: auto;
`;
