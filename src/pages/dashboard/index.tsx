import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useCheckAuth } from '../../hooks/check-auth';
import HeaderTitle from '../../components/title';

import DashboardLayout from './dashboard-layout/dashboard-layout';
import { BreadcrumbsLinks } from './dashboard-layout/breadcrumbs';

export type LinksContext = [
    links: BreadcrumbsLinks,
    setLinks: (links: BreadcrumbsLinks) => void
]

const Dashboard = () => {
    const [links, setLinks] = useState<BreadcrumbsLinks>([]);
    useCheckAuth();

    const { t } = useTranslation();

    return (
        <DashboardLayout links={links}>
            <HeaderTitle title={t('easy-project.header.title.dashboard')} />
            <Outlet context={[links, setLinks]} />
        </DashboardLayout>
    );
};

export default Dashboard;

