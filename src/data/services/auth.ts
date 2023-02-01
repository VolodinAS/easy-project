import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getConfigValue } from '@ijl/cli';

import { CommonResponse } from '../models/common';
import { SignInData } from '../models/sing-in';

export const api = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: getConfigValue('easy-project.api-base-url'),
    }),
    tagTypes: [],
    endpoints: (build) => ({
        signIn: build.mutation<CommonResponse<SignInData>, {email: string, password: string}>({
            query: ({ email, password }) => ({
                url: '/sign-in',
                method: 'post',
                body: { email, password }
            })
        }),

        signUp: build.mutation<CommonResponse<unknown>, {email: string, password: string, login: string, name_secondname: string}>({
            query: ({ email, password, login, name_secondname }) => ({
                url: '/registration',
                method: 'post',
                body: { email, password, login, name_secondname }
            })
        })
    }),


});

export const { useSignInMutation, useSignUpMutation } = api;