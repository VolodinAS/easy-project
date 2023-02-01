// eslint-disable-next-line check-file/folder-naming-convention
import { describe, test, expect } from '@jest/globals';

import { authToken } from '../token';
import { localStorageTokenKey } from '../../data/constants';

describe('token', () => {
    test('success', ()=> {
        const token = 'token';
        //localStorage.setItem(localStorageTokenKey, token);
        
        authToken.token = token;
        expect(authToken.token).toBe(token);
        expect(authToken.checkToken()).toBe(true);
        authToken.clearToken();
        expect(authToken.checkToken()).toBe(false);
    });
});