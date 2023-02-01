import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LinkWrapper = styled(Link)`
    text-decoration: none;
    color: ${({theme}) => theme.color.black};
`;