/* eslint-disable check-file/folder-naming-convention */
import React from 'react';
import { describe, it, expect, jest as jestGlobal, beforeAll, afterAll } from '@jest/globals';
import { render, fireEvent, waitFor, getAllByText, screen } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { StaticRouter } from 'react-router-dom/server';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import 'whatwg-fetch';
import DashboardRoutes from '../../../dashboard-routes';

import theme from '../../../theme';
import dataProjectListSuccess from '../../../../stubs/json/dashboard/projects-list/success.json';
import dataSingleTaskSuccess from '../../../../stubs/json/dashboard/task-list/single-task/success.json';

import { Provider } from 'react-redux';
import { store } from '../../../data/store';
import { authToken } from '../../../utils/token';
import { useNavigate } from 'react-router-dom';


jestGlobal.mock('react-router-dom', () => {

    const originalModule = jest.requireActual('react-router-dom') as object;

    const navigate = jest.fn();

    return {
        __esModule: true,
        ...originalModule,
        useNavigate: () => navigate
    };
});

const serverSuccess = setupServer(
    rest.get('*/tasks/:projectId/:taskId', (req, res, ctx) => {
        return res(
            ctx.json(dataSingleTaskSuccess)
        );
    }),
    rest.get('*/projects/:projectId', (req, res, ctx) => {
        return res(
            ctx.json(dataProjectListSuccess)
        );
    }),
    rest.post('*/tasks/edit', (req, res, ctx) => {
        return res(
            ctx.json(dataProjectListSuccess)
        );
    })
);

describe('test Edit task', () => {
    beforeAll( () => {
        serverSuccess.listen();
    } );
    afterAll( () => {
        serverSuccess.close();
    } );
    it('check Dashboard', async () => {

        authToken.token = 'token';

        

        const { container, getByLabelText, getByDisplayValue, getByRole, getByTestId } = render(
            <StaticRouter location={'/easy-project/dashboard/2/edit-task/1'}>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <DashboardRoutes/>
                    </ThemeProvider>
                </Provider>
            </StaticRouter>
        );

        await waitFor(() => {
            const fieldRequired = /Задачи проекта/;
            const labelChanged = getAllByText(document.body, fieldRequired)[0];
            // expect(labelChanged.innerHTML).toContain(fieldRequired);
        }, { timeout: 15000 });

        await waitFor(() => {
            const inputTitle = getByRole('textbox', {
                name: /название задачи \*/i
            });

            expect(inputTitle).toMatchSnapshot();

            fireEvent.change(inputTitle, {
                target: { value: 'новое название задачи' }
            });

            const changeTaskForm = getByTestId('task-form');
            fireEvent.submit(changeTaskForm);
            
        });

        await waitFor(() => {
            const isSuccess = useNavigate();
            expect(isSuccess).toHaveBeenCalled();
        });


        expect(container).toMatchSnapshot();
    });






    it('check Edit project', async () => {

        authToken.token = 'token';

        

        const { container, getByLabelText, getByDisplayValue, getByRole, getByTestId } = render(
            <StaticRouter location={'/easy-project/dashboard/edit-project/2'}>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <DashboardRoutes/>
                    </ThemeProvider>
                </Provider>
            </StaticRouter>
        );

        await waitFor(() => {
            // const fieldRequired = /Задачи проекта/;

            const inputTitle = screen.getByRole('textbox', {
                name: /имя проекта \*/i
            });
            // const labelChanged = getAllByText(document.body, fieldRequired)[0];
            // expect(labelChanged.innerHTML).toContain(fieldRequired);
        }, { timeout: 15000 });

        expect(container).toMatchSnapshot();
    });


    it('check New project', async () => {

        authToken.token = 'token';

        

        const { container, getByLabelText, getByDisplayValue, getByRole, getByTestId } = render(
            <StaticRouter location={'/easy-project/dashboard/new-project'}>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <DashboardRoutes/>
                    </ThemeProvider>
                </Provider>
            </StaticRouter>
        );

        await waitFor(() => {

            const inputTitle = screen.getByRole('textbox', {
                name: /имя проекта \*/i
            });
        }, { timeout: 15000 });

        expect(container).toMatchSnapshot();
    });
});