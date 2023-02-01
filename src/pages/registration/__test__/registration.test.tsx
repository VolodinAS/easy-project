/* eslint-disable check-file/folder-naming-convention */
import React from 'react';
import { describe, it, expect, jest, beforeAll, afterAll } from '@jest/globals';
import { render, waitFor, screen, fireEvent, getAllByText, getByText } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import 'whatwg-fetch';

import theme from '../../../theme';
import { api } from '../../../data/services/auth';
import Registration from '../index';

import signUpDataSuccess from '../../../../stubs/json/signup/success.json';
import signUpDataExistEmail from '../../../../stubs/json/signup/error-exist-email.json';
import signUpDataExistLogin from '../../../../stubs/json/signup/error-exist-login.json';

const serverSuccess = setupServer(
    rest.post('/api/registration', (req, res, ctx) => {
        return res(
            ctx.json(signUpDataSuccess)
        );
    })
);

const serverExistEmail = setupServer(
    rest.post('/api/registration', (req, res, ctx) => {
        return res(
            ctx.status(400),
            ctx.json(signUpDataExistEmail)
        );
    })
);

const serverExistLogin = setupServer(
    rest.post('/api/registration', (req, res, ctx) => {
        return res(
            ctx.status(400),
            ctx.json(signUpDataExistLogin)
        );
    })
);

describe('Testing Registration Component COMMON', () => {
    beforeAll( () => {
        serverSuccess.listen();
    } );
    afterAll( () => {
        serverSuccess.close();
    } );
    it('check render', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <ApiProvider api={api}>
                        <Registration/>
                    </ApiProvider>
                </BrowserRouter>
            </ThemeProvider>
        );
        expect(container).toMatchSnapshot();
    });

    it('submit empty form', async () => {
        const errorEmpty = 'Поле не должно быть пустым';
        const { getByTestId, getByLabelText } = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <ApiProvider api={api}>
                        <Registration/>
                    </ApiProvider>
                </BrowserRouter>
            </ThemeProvider>
        );
        const signUpForm = getByTestId('signup-form');

        fireEvent.submit(signUpForm);

        await waitFor(() => {
            const emptyLabel = getAllByText(signUpForm, errorEmpty)[0] as HTMLParagraphElement;
            expect(emptyLabel.textContent).toContain(errorEmpty);
        });

        expect(signUpForm).toMatchSnapshot();
    });
});

describe('Testing Registration Component EXIST EMAIL', () => {
    beforeAll( () => {
        serverExistEmail.listen();
    } );
    afterAll( () => {
        serverExistEmail.close();
    } );

    it('submit exist email', async () => {
        const errorEmpty = 'Email уже занят';
        const { getByTestId, getByLabelText } = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <ApiProvider api={api}>
                        <Registration/>
                    </ApiProvider>
                </BrowserRouter>
            </ThemeProvider>
        );

        fireEvent.change(getByLabelText(/Почта/i), {
            target: { value: 'alex_vovkin@mail.ru' }
        });

        fireEvent.change(getByLabelText(/Логин/i), {
            target: { value: 'some login' }
        });

        fireEvent.change(getByLabelText(/Фамилия Имя/i), {
            target: { value: 'some fio' }
        });

        fireEvent.change(getByLabelText(/Пароль/i), {
            target: { value: 'some password' }
        });

        const signUpForm = getByTestId('signup-form');

        fireEvent.submit(signUpForm);

        await waitFor(() => {
            const emptyLabel = getByText(document.body, errorEmpty);
            expect(emptyLabel.innerHTML).toContain(errorEmpty);
        });

        expect(signUpForm).toMatchSnapshot();
    });
});

describe('Testing Registration Component EXIST LOGIN', () => {
    beforeAll( () => {
        serverExistLogin.listen();
    } );
    afterAll( () => {
        serverExistLogin.close();
    } );

    it('submit exist login', async () => {
        const errorEmpty = 'Логин уже занят';
        const { getByTestId, getByLabelText } = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <ApiProvider api={api}>
                        <Registration/>
                    </ApiProvider>
                </BrowserRouter>
            </ThemeProvider>
        );

        fireEvent.change(getByLabelText(/Почта/i), {
            target: { value: 'testing@test.test' }
        });

        fireEvent.change(getByLabelText(/Логин/i), {
            target: { value: 'VolodinAS' }
        });

        fireEvent.change(getByLabelText(/Фамилия Имя/i), {
            target: { value: 'some fio' }
        });

        fireEvent.change(getByLabelText(/Пароль/i), {
            target: { value: 'some password' }
        });

        const signUpForm = getByTestId('signup-form');

        fireEvent.submit(signUpForm);

        await waitFor(() => {
            const emptyLabel = getByText(document.body, errorEmpty);
            expect(emptyLabel.innerHTML).toContain(errorEmpty);
        });

        expect(signUpForm).toMatchSnapshot();
    });
});