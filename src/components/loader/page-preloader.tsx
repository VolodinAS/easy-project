import React, { Suspense } from 'react';
import Loader from './loader';

export const PagePreloader = ({ children }) => (
    <Suspense fallback={<Loader />}>
        {children}
    </Suspense>
);