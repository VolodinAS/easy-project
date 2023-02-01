/* eslint-disable check-file/folder-naming-convention */
import React from 'react';
import { describe, it, expect, jest as jestGlobal, beforeAll, afterAll } from '@jest/globals';
import { render, waitFor } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { StaticRouter } from 'react-router-dom/server';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { Provider } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import 'whatwg-fetch';

import theme from '../../../../../theme';
import taskListData from '../../../../../../stubs/json/dashboard/task-list/success.json';
import projectListData from '../../../../../../stubs/json/dashboard/projects-list/success.json';
import DashboardRoutes from '../../../../../dashboard-routes';
import { store } from '../../../../../data/store';
import { authToken } from '../../../../../utils/token';

// jestGlobal.mock('react-router-dom', () => {

//     const originalModule = jest.requireActual('react-router-dom') as object;

//     const navigate = jest.fn();

//     return {
//         __esModule: true,
//         ...originalModule,
//         useNavigate: () => navigate
//     };
// });

const serverSuccess = setupServer(
    rest.get('*/projects', (req, res, ctx) => {
        return res(
            ctx.json(projectListData)
        );
    }),
    rest.get('*/tasks/2', (req, res, ctx) => {
        return res(
            ctx.json(taskListData)
        );
    })
);

describe('Task List', () => {
    beforeAll( () => {
        serverSuccess.listen();
    } );
    afterAll( () => {
        serverSuccess.close();
    } );
    it('render', async () => {

        authToken.token = 'token';

        const { container, getByText } = render(
            <StaticRouter location={'/easy-project/dashboard/2'}>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <DashboardRoutes/>
                    </ThemeProvider>
                </Provider>
            </StaticRouter>
        );

        

        await waitFor(() => {
            const groupTitle = getByText(/todo \(8\)/i);
            expect(container).toMatchSnapshot();
        }, { timeout: 15000 });

        
    });


});