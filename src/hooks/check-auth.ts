import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../constants/routes';
import { authToken } from '../utils/token';

export const useCheckAuth = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!authToken.checkToken()){
            navigate((ROUTES.SIGN_IN.url), { replace: true });
        }
    }, [navigate]);
};

