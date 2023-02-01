/* eslint-disable check-file/folder-naming-convention */
import React from 'react';
import { describe, it, expect, jest } from '@jest/globals';
import { render } from '@testing-library/react';


import Intro from '../intro';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import theme from '../../../../../theme';


describe('intro', () => {
    it('video link enable', () => {
        render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Intro />
                </BrowserRouter>
            </ ThemeProvider>    
        );
        expect(document.body).toMatchSnapshot();
    });
});

