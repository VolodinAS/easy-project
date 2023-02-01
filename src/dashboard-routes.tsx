import React, { lazy } from 'react';
import {
    Routes,
    Route,
} from 'react-router-dom';

import './global-style';
import { ROUTES } from './constants/routes';
import { PagePreloader } from './components/loader';

import { NotfoundError } from './components/error/error-404';

// import LanguageSelect from './components/language-select';

const Landing = lazy(() => import('./pages/landing'));
const SignIn = lazy(() => import('./pages/sign-in'));
const Registration = lazy(() => import('./pages/registration'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const AllProjects = lazy(() => import('./pages/dashboard/all-projects'));
const EditProject = lazy(() => import('./pages/dashboard/edit-project'));
const ProjectTasks = lazy(() => import('./pages/dashboard/project-tasks'));
const EditTask = lazy(() => import('./pages/dashboard/project-tasks/edit-task'));


const DashboardRoutes = () => {
    return(
        <Routes>
            {ROUTES.LANDING.enabled && <Route path={ROUTES.LANDING.url} element={<PagePreloader><Landing /></PagePreloader>} />}
            {ROUTES.SIGN_IN.enabled && <Route path={ROUTES.SIGN_IN.url} element={<PagePreloader><SignIn /></PagePreloader>} />}
            {ROUTES.REGISTRATION.enabled && <Route path={ROUTES.REGISTRATION.url} element={<PagePreloader><Registration /></PagePreloader>} />}
            {ROUTES.DASHBOARD.enabled && <Route path={ROUTES.DASHBOARD.url} element={<PagePreloader><Dashboard /></PagePreloader>}>
                <Route path={ROUTES.DASHBOARD.url} element={<PagePreloader><AllProjects /></PagePreloader>} />
                <Route path={ROUTES.DASHBOARD_NEW_PROJECT.url} element={<PagePreloader><EditProject /></PagePreloader>} />
                <Route path={ROUTES.DASHBOARD_EDIT_PROJECT.url} element={<PagePreloader><EditProject /></PagePreloader>} />
                <Route path={ROUTES.DASHBOARD_PROJECT_TASKS.url} element={<PagePreloader><ProjectTasks /></PagePreloader>} />
                <Route path={ROUTES.DASHBOARD_PROJECT_TASK_DETAILS.url} element={<PagePreloader><ProjectTasks /></PagePreloader>} />
                <Route path={ROUTES.DASHBOARD_EDIT_TASK.url} element={<PagePreloader><EditTask /></PagePreloader>} />
                <Route path={ROUTES.DASHBOARD_NEW_TASK.url} element={<PagePreloader><EditTask /></PagePreloader>} />
            </Route>}
            <Route path="*" element={<PagePreloader><NotfoundError /></PagePreloader> } />
        </Routes>
    );
};

export default DashboardRoutes;
