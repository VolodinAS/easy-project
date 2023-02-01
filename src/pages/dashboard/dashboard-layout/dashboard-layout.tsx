import React from 'react';

import { CustomLink } from './custom-link';
import { Logo } from '../../../assets/images';
import { ROUTES } from '../../../constants/routes';
import { 
    Wrapper, 
    Container, 
    Header, 
    Navigation, 
    Content, 
    HeaderLogoLink,
    HeaderLogo, 
    LogoText,
    LogoIconContainer,
    LinksContainer, 
    AvatarContainer 
} from './components';
import { BreadcrumbsLinks, Breadcrumbs } from './breadcrumbs';
import LanguageSelect from '../../../components/language-select';
import { useTranslation } from 'react-i18next';
import { authToken } from '../../../utils/token';
import { useNavigate } from 'react-router-dom';

const DashboardLayout: React.FC<{links: BreadcrumbsLinks}> = ({ children, links }) => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const logout = () => {
        authToken.clearToken();
        location.href = ROUTES.LANDING.url;
    };

    return (
        <Wrapper>
            <Container>
                <Header>
                    <HeaderLogoLink to={ROUTES.DASHBOARD.url} title={t('easy-project.dashboard.all.pageName')}>
                        <HeaderLogo>
                            <LogoIconContainer>
                                <img src={Logo} alt="Easy project logo" />
                            </LogoIconContainer>
                            <LogoText>
                                <span>easy</span>
                                <span>project</span>
                            </LogoText>
                        </HeaderLogo>
                    </HeaderLogoLink>
                    <Navigation>
                        <LinksContainer>
                            <Breadcrumbs links={links} />
                        </LinksContainer>
                        <LinksContainer>
                            <LanguageSelect />
                            <AvatarContainer />
                            {ROUTES.LANDING.enabled && <CustomLink onClick={logout} to={ROUTES.DASHBOARD.url} title={t('easy-project.dashboard.quitBtn')}>{t('easy-project.dashboard.quitBtn')}</CustomLink>}
                        </LinksContainer>
                    </Navigation>
                </Header>
            </Container>
            <Container fullFlex>
                <Content>
                    {children}
                </Content>
            </Container>
        </Wrapper>
    );
};

export default DashboardLayout;
