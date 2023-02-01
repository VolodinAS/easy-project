import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../../../constants/routes';
import { LinksContext } from '../index';

import ProjectsList from '../components/projects-list';
import LayoutWithBottomButton from '../components/layout-with-bottom-button';
import LinkButton from '../../../components/link-button';
import Loader from '../../../components/loader/loader';
import { useGetProjectsQuery } from '../../../data/services/common';
import { CommonError } from '../../../components/error/error-common';

const AllProjects = () => {
    const { t } = useTranslation();
    const [, setLinks] = useOutletContext<LinksContext>();

    const { data, error, isLoading, refetch } = useGetProjectsQuery();

    useEffect((() => {
        setLinks([{
            name: t('easy-project.dashboard.all.pageName'),
        }]);
    }), []);

    return (
        <LayoutWithBottomButton button={
            <>
                {ROUTES.DASHBOARD_NEW_PROJECT.enabled && 
                    <LinkButton 
                        color={'blue'}
                        link={ROUTES.DASHBOARD_NEW_PROJECT.url}
                        title={t('easy-project.dashboard.all.pageName')}
                    >
                        {t('easy-project.dashboard.newProjectBtn')}
                    </LinkButton>}
            </>
        }>
            {isLoading && <Loader/>}
            {error && <>{<CommonError message={error?.data?.error || t('easy-project.error.common')}/>}</>}
            {data && <ProjectsList data={data?.data}/>}
        </LayoutWithBottomButton> 
    );
};

export default AllProjects;
