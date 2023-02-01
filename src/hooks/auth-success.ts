import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../constants/routes';
import { authToken } from '../utils/token';

export const useAuthSuccess = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (authToken.checkToken()){
            navigate((ROUTES.DASHBOARD.url), { replace: true });
        }
    }, [navigate]);
};

