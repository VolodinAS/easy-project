import * as React from 'react';
import {
    LinkProps,
    useMatch,
    useResolvedPath,
} from 'react-router-dom';
import { StyledLink } from './components';

export const CustomLink:React.FC<LinkProps> = ({ children, to, ...props }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    return (
        <StyledLink
            className={match && 'active'}
            to={to}
            {...props}
        >
            {children}
        </StyledLink>
    );
};
