/* eslint-disable check-file/folder-naming-convention */
import React from 'react';
import { describe, it, expect, beforeAll, jest as jestGlobal, afterAll } from '@jest/globals';
import { fireEvent, render, cleanup, waitFor, getByText, getAllByText } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import 'whatwg-fetch';

import theme from '../../../theme';
import { api } from '../../../data/services/auth';
import SignIn from '../index';

import signInSuccess from '../../../../stubs/json/signin/success.json';
import signInFail from '../../../../stubs/json/signin/error.json';

const server = setupServer(
    rest.post('/api/sign-in', (req, res, ctx) => {
        return res(
            ctx.json(signInSuccess)
        );
    })
);

const serverError = setupServer(
    rest.post('/api/sign-in', (req, res, ctx) => {
        return res(
            ctx.status(400),
            ctx.json(signInFail)
        );
    })
);

jestGlobal.mock('react-router-dom', () => {

    const originalModule = jest.requireActual('react-router-dom') as object;

    const navigate = jest.fn();

    return {
        __esModule: true,
        ...originalModule,
        useNavigate: () => navigate
    };
});

describe('Testing SignIn SUCCESS', () => {
    beforeAll( () => {
        jestGlobal.clearAllMocks();
        cleanup();

        server.listen();
    } );
    afterAll( () => {
        server.close();
    } );
    it('check sign-in component render', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <ApiProvider api={api}>
                        <SignIn/>
                    </ApiProvider>
                </BrowserRouter>
            </ThemeProvider>
        );
        expect(container).toMatchSnapshot();
    });

    it('submit empty sign-in form', async () => {
        const errorEmpty = 'Поле не должно быть пустым';
        const { getByTestId, getByLabelText } = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <ApiProvider api={api}>
                        <SignIn/>
                    </ApiProvider>
                </BrowserRouter>
            </ThemeProvider>
        );
        const loginForm = getByTestId('signin-form');

        fireEvent.submit(loginForm);

        await waitFor(() => {
            const emptyLabel = getAllByText(loginForm, errorEmpty)[0] as HTMLParagraphElement;
            expect(emptyLabel.textContent).toContain(errorEmpty);
        });
    });

    it('submit sign-in form with only login', async () => {
        const errorEmpty = 'Поле не должно быть пустым';
        const { getByTestId, getByLabelText } = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <ApiProvider api={api}>
                        <SignIn/>
                    </ApiProvider>
                </BrowserRouter>
            </ThemeProvider>
        );

        fireEvent.change(getByLabelText(/Почта/i), {
            target: { value: 'alex_vovkin@mail.ru' }
        });

        const loginForm = getByTestId('signin-form');

        fireEvent.submit(loginForm);

        await waitFor(() => {
            const emptyLabel = getAllByText(loginForm, errorEmpty)[0] as HTMLParagraphElement;
            expect(emptyLabel.textContent).toContain(errorEmpty);
        });

        expect(loginForm).toMatchSnapshot();
    });

    it('submit sign-in form with only password', async () => {
        const errorEmpty = 'Поле не должно быть пустым';
        const { getByTestId, getByLabelText } = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <ApiProvider api={api}>
                        <SignIn/>
                    </ApiProvider>
                </BrowserRouter>
            </ThemeProvider>
        );

        fireEvent.change(getByLabelText(/Пароль/i), {
            target: { value: '12121992' }
        });

        const loginForm = getByTestId('signin-form');

        fireEvent.submit(loginForm);

        await waitFor(() => {
            const emptyLabel = getAllByText(loginForm, errorEmpty)[0] as HTMLParagraphElement;
            expect(emptyLabel.textContent).toContain(errorEmpty);
        });
        
        expect(loginForm).toMatchSnapshot();
    });

    it('submit sign-in form with incorrect email', async () => {
        const errorInvalid = 'Почта или пароль введены неправильно';
        const { getByTestId, getByLabelText } = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <ApiProvider api={api}>
                        <SignIn/>
                    </ApiProvider>
                </BrowserRouter>
            </ThemeProvider>
        );

        fireEvent.change(getByLabelText(/Почта/i), {
            target: { value: 'any email' }
        });

        const loginForm = getByTestId('signin-form');

        fireEvent.submit(loginForm);

        await waitFor(() => {
            const emptyLabel = getAllByText(loginForm, errorInvalid)[0] as HTMLParagraphElement;
            expect(emptyLabel.textContent).toContain(errorInvalid);
        });
        
        expect(loginForm).toMatchSnapshot();
    });

    it('submit sign-in form success', async () => {
        const { getByTestId, getByLabelText } = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <ApiProvider api={api}>
                        <SignIn/>
                    </ApiProvider>
                </BrowserRouter>
            </ThemeProvider>
        );

        fireEvent.change(getByLabelText(/Почта/i), {
            target: { value: 'alex_vovkin@mail.ru' }
        });

        fireEvent.change(getByLabelText(/Пароль/i), {
            target: { value: '12121992' }
        });

        const loginForm = getByTestId('signin-form');

        fireEvent.submit(loginForm);

        await waitFor(() => {
            const isSuccess = useNavigate();
            expect(isSuccess).toHaveBeenCalled();
        });
        
        expect(loginForm).toMatchSnapshot();
    });
});


describe('Testing SignIn FAIL', () => {
    beforeAll( () => {
        jestGlobal.clearAllMocks();
        cleanup();

        serverError.listen();
    } );
    afterAll( () => {
        serverError.close();
    } );

    it('submit sign-in form failed', async () => {
        const errorFailed = 'Email или пароль не корректный';
        const { getByTestId, getByLabelText } = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <ApiProvider api={api}>
                        <SignIn/>
                    </ApiProvider>
                </BrowserRouter>
            </ThemeProvider>
        );

        fireEvent.change(getByLabelText(/Почта/i), {
            target: { value: 'alex_vovkin@mail.ru' }
        });

        fireEvent.change(getByLabelText(/Пароль/i), {
            target: { value: 'any password' }
        });

        const loginForm = getByTestId('signin-form');

        fireEvent.submit(loginForm);

        await waitFor(() => {
            const errorLabel = getByText(document.body, errorFailed) as HTMLParagraphElement;
            expect(errorLabel.textContent).toContain(errorFailed);
        });
        
        expect(document.body).toMatchSnapshot();
    });
});