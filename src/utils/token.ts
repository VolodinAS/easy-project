import { localStorageTokenKey } from '../data/constants';

export const authToken = {
    get token() {
        return localStorage.getItem(localStorageTokenKey);
    },
    set token(token) {
        localStorage.setItem(localStorageTokenKey, token);
    },
    checkToken() {
        return Boolean(localStorage.getItem(localStorageTokenKey));
    },
    clearToken() {
        localStorage.removeItem(localStorageTokenKey);
    }
};