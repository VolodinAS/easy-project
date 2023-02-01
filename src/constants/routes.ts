import { getNavigationsValue } from '@ijl/cli';

type RouteType = Record<string, {
  url: string;
  getUrl?: (...args: unknown[]) => string;
  enabled: boolean;
}>

const ROOT_URL = getNavigationsValue('easy-project.main');

export const ROUTES: RouteType = {
    LANDING: {
        url: `${ROOT_URL}`,
        enabled: Boolean(ROOT_URL),
    },
    SIGN_IN: {
        url: `${ROOT_URL}${getNavigationsValue('easy-project.sign.in')}`,
        enabled: Boolean(getNavigationsValue('easy-project.sign.in')),
    },
    RESET_PASSWORD: {
        url: `${ROOT_URL}${getNavigationsValue('easy-project.reset.password')}`,
        enabled: Boolean(getNavigationsValue('easy-project.reset.password')),
    },
    REGISTRATION: {
        url: `${ROOT_URL}${getNavigationsValue('easy-project.registration')}`,
        enabled: Boolean(getNavigationsValue('easy-project.registration')),
        
    },
    DASHBOARD: {
        url: `${ROOT_URL}${getNavigationsValue('easy-project.dashboard')}`,
        enabled: Boolean(getNavigationsValue('easy-project.dashboard')),
    },
    DASHBOARD_NEW_PROJECT: {
        url: `${ROOT_URL}${getNavigationsValue('easy-project.dashboard.newproject')}`,
        enabled: true,
    },
    DASHBOARD_EDIT_PROJECT: {
        url: `${ROOT_URL}${getNavigationsValue('easy-project.dashboard.editproject')}`,
        getUrl: (projectId: string) => `${ROOT_URL}${getNavigationsValue('easy-project.dashboard.editproject')}`.replace(':projectId', projectId),
        enabled: true,
    },
    DASHBOARD_PROJECT_TASKS: {
        url: `${ROOT_URL}${getNavigationsValue('easy-project.tasks')}`,
        getUrl: (projectId: string) => `${ROOT_URL}${getNavigationsValue('easy-project.tasks')}`.replace(':projectId', projectId),
        enabled: true,
    },
    DASHBOARD_PROJECT_TASK_DETAILS: {
        url: `${ROOT_URL}${getNavigationsValue('easy-project.taskdetails')}`,
        getUrl: (projectId: string, taskId: string) => `${ROOT_URL}${getNavigationsValue('easy-project.taskdetails')}`.replace(':projectId', projectId).replace(':taskId', taskId),
        enabled: true,
    },
    DASHBOARD_NEW_TASK: {
        url: `${ROOT_URL}${getNavigationsValue('easy-project.newtask')}`,
        getUrl: (projectId: string) => `${ROOT_URL}${getNavigationsValue('easy-project.newtask')}`.replace(':projectId', projectId),
        enabled: true,
    },
    DASHBOARD_EDIT_TASK: {
        url: `${ROOT_URL}${getNavigationsValue('easy-project.edittask')}`,
        getUrl: (projectId: string, taskId: string) => `${ROOT_URL}${getNavigationsValue('easy-project.edittask')}`.replace(':projectId', projectId).replace(':taskId', taskId),
        enabled: true,
    },
};
