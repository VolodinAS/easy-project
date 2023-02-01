/* eslint-disable check-file/folder-naming-convention */
import React from 'react';
import { describe, it, expect } from '@jest/globals';
import { render, fireEvent, screen } from '@testing-library/react';

import LanguageSelect from '../index';

describe('language-select', () => {
    it('button click', () => {
        render(
            <LanguageSelect />
        );
        expect(document.body).toMatchSnapshot();
        fireEvent.click(screen.getByTitle('language select'), {target: {value: 'en'}});
        expect(document.body).toMatchSnapshot();
        fireEvent.click(screen.getByTitle('language select'), {target: {value: 'ru'}});
        expect(document.body).toMatchSnapshot();
    });
});