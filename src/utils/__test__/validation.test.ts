/* eslint-disable check-file/folder-naming-convention */
import { describe, it, expect } from '@jest/globals';

import composeValidators from '../validation';

describe('validation', () => {
    it('composeValidators', () => {
        const getError = () => 'error';
        const validator = composeValidators(getError);
        
        expect(validator('')).toBe('error');
    });
});