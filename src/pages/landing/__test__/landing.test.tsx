/* eslint-disable check-file/folder-naming-convention */
import React from 'react';
import { describe, it, expect, jest } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';

import Landing from '../index';
import theme from '../../../theme';

describe('landing', () => {
    it('render', () => {
        render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Landing/>
                </BrowserRouter>
            </ ThemeProvider>
        );
        expect(document.body).toMatchSnapshot();
    });
});