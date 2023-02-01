/* eslint-disable check-file/folder-naming-convention */
import React from 'react';
import { describe, it, expect, jest } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';

import ConfirmModal from '../confirm-modal';
import theme from '../../theme';

describe('confirmModal', () => {
    it('render', () => {
        const onClose = jest.fn();
        const onConfirm = jest.fn();
        render(
            <ThemeProvider theme={theme}>
                <ConfirmModal onClose={onClose} onConfirm={onConfirm} />
            </ThemeProvider>    
        );
        expect(document.body).toMatchSnapshot();
    });
});