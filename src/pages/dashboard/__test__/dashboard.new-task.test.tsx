/* eslint-disable check-file/folder-naming-convention */
import React from 'react';
import { describe, it, expect, jest as jestGlobal, beforeAll, afterAll } from '@jest/globals';
import { render, fireEvent, waitFor, getAllByText, screen, getByText } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { StaticRouter } from 'react-router-dom/server';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'whatwg-fetch';

import theme from '../../../theme';
import dataProjectListSuccess from '../../../../stubs/json/dashboard/projects-list/success.json';
import dataSingleTaskSuccess from '../../../../stubs/json/dashboard/task-list/single-task/success.json';
import dataNewTaskError from '../../../../stubs/json/dashboard/new-task/error.json';
import DashboardRoutes from '../../../dashboard-routes';
import { store } from '../../../data/store';
import { authToken } from '../../../utils/token';

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
            ctx.json(dataSingleTaskSuccess)
        );
    }),
    rest.post('*/tasks/create', (req, res, ctx) => {
        return res(
            ctx.json(dataSingleTaskSuccess)
        );
    })
);

const serverError = setupServer(
    rest.post('*/tasks/create', (req, res, ctx) => {
        return res(
            ctx.status(400),
            ctx.json(dataNewTaskError)
        );
    })
);

describe('test New task', () => {
    beforeAll( () => {
        serverSuccess.listen();
    } );
    afterAll( () => {
        serverSuccess.close();
    } );
    it('check New Task', async () => {

        authToken.token = 'token';

        const { container, getByText } = render(
            <StaticRouter location={'/easy-project/dashboard/2/new-task'}>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <DashboardRoutes/>
                    </ThemeProvider>
                </Provider>
            </StaticRouter>
        );

        await waitFor(() => {
            const headForm = getByText(/название задачи \*/i);

            // expect(container).toMatchSnapshot();
        }, { timeout: 15000 });
    });

    it('submit empty', async () => {

        authToken.token = 'token';
        
        const { container, getByTestId } = render(
            <StaticRouter location={'/easy-project/dashboard/2/new-task'}>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <DashboardRoutes/>
                    </ThemeProvider>
                </Provider>
            </StaticRouter>
        );

        await waitFor(async () => {
            const newTaskForm = getByTestId('task-form');

            fireEvent.submit(newTaskForm);

            await waitFor(() => {
                const errorEmpty = 'Поле не должно быть пустым';
                const emptyLabel = getAllByText(newTaskForm, errorEmpty)[0] as HTMLParagraphElement;
                expect(emptyLabel.textContent).toContain(errorEmpty);
            }, { timeout: 15000 });

            // expect(container).toMatchSnapshot();
            
        }, { timeout: 15000 });

    });

    it('submit 1 field', async () => {

        authToken.token = 'token';
        
        const { container, getByTestId, getByRole } = render(
            <StaticRouter location={'/easy-project/dashboard/2/new-task'}>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <DashboardRoutes/>
                    </ThemeProvider>
                </Provider>
            </StaticRouter>
        );

        await waitFor(async () => {
            const newTaskForm = getByTestId('task-form');

            const inputTitle = getByRole('textbox', {
                name: /название задачи \*/i
            });

            fireEvent.change(inputTitle, {
                target: { value: 'новое название задачи' }
            });

            fireEvent.submit(newTaskForm);

            await waitFor(() => {
                const errorEmpty = 'Поле не должно быть пустым';
                const emptyLabel = getAllByText(newTaskForm, errorEmpty)[0] as HTMLParagraphElement;
                expect(emptyLabel.textContent).toContain(errorEmpty);
            }, { timeout: 15000 });

            // expect(container).toMatchSnapshot();
            
        }, { timeout: 15000 });
    });

    it('submit all fields SUCCESS', async () => {

        authToken.token = 'token';
        
        const { container, getByTestId, getByRole } = render(
            <StaticRouter location={'/easy-project/dashboard/2/new-task'}>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <DashboardRoutes/>
                    </ThemeProvider>
                </Provider>
            </StaticRouter>
        );

        await waitFor(async () => {
            const newTaskForm = getByTestId('task-form');

            const inputTitle = getByRole('textbox', {
                name: /название задачи \*/i
            });
            const inputDescription = getByRole('textbox', {
                name: /описание задачи/i
            });
            const inputType = getByRole('combobox', {
                name: /тип задачи \*/i
            });
            const inputStatus = getByRole('combobox', {
                name: /статус задачи \*/i
            });

            fireEvent.change(inputTitle, {
                target: { value: 'новое название задачи' }
            });
            fireEvent.change(inputDescription, {
                target: { value: 'новое описание задачи' }
            });
            fireEvent.change(inputType, {
                target: { value: '1' }
            });
            fireEvent.change(inputStatus, {
                target: { value: '1' }
            });

            fireEvent.submit(newTaskForm);

            await waitFor(() => {
                const isSuccess = useNavigate();
                expect(isSuccess).toHaveBeenCalled();
            }, { timeout: 15000 });

            // expect(container).toMatchSnapshot();
            
        }, { timeout: 15000 });
    });
});

describe('test New task error', () => {
    beforeAll( () => {
        serverError.listen();
    } );
    afterAll( () => {
        serverError.close();
    } );
    it('submit all fields ERROR', async () => {

        authToken.token = 'token';
        
        const { container, getByTestId, getByRole } = render(
            <StaticRouter location={'/easy-project/dashboard/2/new-task'}>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <DashboardRoutes/>
                    </ThemeProvider>
                </Provider>
            </StaticRouter>
        );

        await waitFor(async () => {
            const newTaskForm = getByTestId('task-form');

            const inputTitle = getByRole('textbox', {
                name: /название задачи \*/i
            });
            const inputDescription = getByRole('textbox', {
                name: /описание задачи/i
            });
            const inputType = getByRole('combobox', {
                name: /тип задачи \*/i
            });
            const inputStatus = getByRole('combobox', {
                name: /статус задачи \*/i
            });

            fireEvent.change(inputTitle, {
                target: { value: 'новое название задачи' }
            });
            fireEvent.change(inputDescription, {
                target: { value: 'новое описание задачи' }
            });
            fireEvent.change(inputType, {
                target: { value: '1' }
            });
            fireEvent.change(inputStatus, {
                target: { value: '1' }
            });

            fireEvent.submit(newTaskForm);

            await waitFor(() => {
                const errorText = 'Что-то пошло не так';
                const emptyLabel = getByText(document.body, errorText);
                expect(emptyLabel.innerHTML).toContain(errorText);
            }, { timeout: 15000 });

            // expect(container).toMatchSnapshot();
            
        }, { timeout: 15000 });
    });
});