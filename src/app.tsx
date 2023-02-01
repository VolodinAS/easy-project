import React from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter,
} from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import './global-style';
import theme from './theme';

import { store } from './data/store';
import DashboardRoutes from './dashboard-routes';

const App = () => {
    return(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <DashboardRoutes/>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
