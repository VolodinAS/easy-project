/* eslint-disable check-file/folder-naming-convention */
import React from 'react';
import { describe, it, expect, jest as jestGlobal, beforeAll, afterAll } from '@jest/globals';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { StaticRouter } from 'react-router-dom/server';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import 'whatwg-fetch';
import DashboardRoutes from '../../../dashboard-routes';

import theme from '../../../theme';
import dataProjectListSuccess from '../../../../stubs/json/dashboard/projects-list/success.json';

import { Provider } from 'react-redux';
import { store } from '../../../data/store';
import { authToken } from '../../../utils/token';

// jestGlobal.mock('react-router-dom', () => {

//     const originalModule = jest.requireActual('react-router-dom') as object;

//     const useOutletContext = () => [null, jest.fn()];

//     return {
//         __esModule: true,
//         ...originalModule,
//         useOutletContext
//     };
// });

const serverSuccess = setupServer(
    rest.get('*/projects', (req, res, ctx) => {
        return res(
            ctx.json(dataProjectListSuccess)
        );
    })
);

describe('test common Dashboard', () => {
    beforeAll( () => {
        serverSuccess.listen();
    } );
    afterAll( () => {
        serverSuccess.close();
    } );
    it('check Dashboard', async () => {

        authToken.token = 'token';

        const fieldRequired = 'My second project [можно нажимать]';
        const { container, getAllByText, getByTestId } = render(
            <StaticRouter location={'/easy-project/dashboard'}>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <DashboardRoutes/>
                    </ThemeProvider>
                </Provider>
            </StaticRouter>
        );

        await waitFor(() => {
            const [labelChanged] = getAllByText(fieldRequired);
            expect(labelChanged.innerHTML).toContain(fieldRequired);

            const buttonDelete = getAllByText('Удалить')[1];

            fireEvent.click(buttonDelete);

        }, { timeout: 15000 });

        expect(container).toMatchSnapshot();

        await waitFor(() => {
            // const overlayData = screen.getByText(/Да/i);
            const overlayData = getByTestId('button-delete');
            expect(overlayData).toMatchSnapshot();
        }, { timeout: 15000 });

        
    });
});