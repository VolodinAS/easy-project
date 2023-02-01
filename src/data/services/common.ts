import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getConfigValue } from '@ijl/cli';
import { Author, CommonResponse, NewProject, NewTask, ProjectId, ProjectType, TaskGetByIdType, TaskId, TaskType } from '../models/common';
import { authToken } from '../../utils/token';

export const apiCommon = createApi({
    reducerPath: 'commonApi',
    baseQuery: fetchBaseQuery({
        baseUrl: getConfigValue('easy-project.api-base-url'),
        prepareHeaders: headers => {
            if (authToken.token) {
                headers.set('Authorization', `Bearer ${authToken.token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['ProjectType', 'TaskType'],
    endpoints: (build) => ({

        getProjects: build.query<CommonResponse<ProjectType[]>, void>({
            query: () => ({
                url: '/projects'
            }),
            providesTags: result => ['ProjectType']
        }),
        getProjectById: build.query<CommonResponse<ProjectType>, { projectId: string }>({
            query: ({projectId}) => ({
                url: `/projects/${projectId}`
            })
        }),
        newProject: build.mutation<CommonResponse<NewProject>, {title: string, code: string, members: object}>({
            query: ({ title, code, members }) => ({
                url: '/projects/new',
                method: 'post',
                body: { title, code, members }
            }),
            invalidatesTags: ['ProjectType']
        }),
        editProject: build.mutation<CommonResponse<NewProject>, {projectId: string, title: string, code: string, members: object}>({
            query: ({ projectId, title, code, members }) => ({
                url: '/projects/edit',
                method: 'post',
                body: { projectId, title, code, members }
            }),
            invalidatesTags: ['ProjectType']
        }),
        deleteProject: build.mutation<CommonResponse<ProjectId>, {projectId: string}>({
            query: (projectId) => ({
                url: '/projects/delete',
                method: 'post',
                body: { projectId }
            }),
            invalidatesTags: ['ProjectType']
        }),



        getTasks: build.query<CommonResponse<TaskType[]>, { projectId: string }>({
            query: ({projectId}) => ({
                url: `/tasks/${projectId}`
            }),
            providesTags: result => ['TaskType']
        }),
        getTaskById: build.query<CommonResponse<TaskType>, { projectId: string, taskId : string}>({
            query: ({ projectId, taskId }) => ({
                url: `/tasks/${projectId}/${taskId}`
            }),
            providesTags: result => ['TaskType']
        }),
        newTask: build.mutation<CommonResponse<NewTask>, { projectId: string, title: string, description: string, type: number, status: number }>({
            query: ({ projectId, title, description, type, status }) => ({
                url: '/tasks/create',
                method: 'post',
                body: { projectId, title, description, type, status }
            }),
            invalidatesTags: ['TaskType']
        }),
        editTask: build.mutation<CommonResponse<NewTask>, { projectId: string, taskId: string, title: string, description: string, type: number, status: number }>({
            query: ({ projectId, taskId, title, description, type, status }) => ({
                url: '/tasks/edit',
                method: 'post',
                body: { projectId, taskId, title, description, type, status }
            }),
            invalidatesTags: ['TaskType']
        }),
        deleteTask: build.mutation<CommonResponse<TaskId>, { projectId: string, taskId: string }>({
            query: ({ projectId, taskId }) => ({
                url: '/tasks/delete',
                method: 'post',
                body: { projectId, taskId }
            }),
            invalidatesTags: ['TaskType']
        }),


        getUsersForSelect: build.query<CommonResponse<Author[]>, void>({
            query: () => ({
                url: '/users/getForSelect',
            }),
        })
    }),
});

export const {
    useGetProjectsQuery,
    useGetProjectByIdQuery,
    useLazyGetProjectByIdQuery,
    useNewProjectMutation,
    useEditProjectMutation,
    useDeleteProjectMutation,
    useGetTasksQuery,
    useGetTaskByIdQuery,
    useLazyGetTaskByIdQuery,

    useNewTaskMutation,
    useEditTaskMutation,
    useDeleteTaskMutation,

    useGetUsersForSelectQuery,
    useLazyGetUsersForSelectQuery,
} = apiCommon;