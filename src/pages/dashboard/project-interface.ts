import { DashboardTaskTypeBug, DashboardTaskTypeFeature, DashboardTaskTypeTask } from '../../assets/images';
export interface ProjectTaskStatusProps {
    id: number;
    title: string;
    order: number;
}

export interface ProjectTaskTypeProps {
    id: number;
    title: string;
    color: string;
    icon: string;
}

export interface ProjectTaskStatusProps {
    id: number;
    title: string;
    order: number;
}

export interface UserProps {
    id: string;
    login: string;
    email: string;
    fio: string;
}

export interface ProjectTask {
    id: number;
    title: string;
    description?: string;
    changed: number;
    created: number;
    author: UserProps;
    type: number;
    executor: UserProps;
    taskIndex: number;
    status: ProjectTaskStatusProps;
}

export interface ProjectProps {
    id: string;
    title: string;
    author: UserProps;
    changed: number;
    created: number;
    members: Array<UserProps>;
    code: string;
}

export const TaskTypes: Array<ProjectTaskTypeProps> = [
    {
        id: 1,
        title: 'task',
        color: '#93E586',
        icon: DashboardTaskTypeTask
    },
    {
        id: 2,
        title: 'feature',
        color: '#60AFF8',
        icon: DashboardTaskTypeFeature
    },
    {
        id: 3,
        title: 'bug',
        color: '#E36060',
        icon: DashboardTaskTypeBug
    }
];

export const TaskStatuses: Array<ProjectTaskStatusProps> = [
    {
        id: 1,
        title: 'todo',
        order: 1
    },
    {
        id: 2,
        title: 'inprogress',
        order: 2
    },
    {
        id: 3,
        title: 'testing',
        order: 3
    },
    {
        id: 4,
        title: 'done',
        order: 4
    }
];