import styled from '@emotion/styled';

import { Typography } from '../../../../components';

export const StyledParagraph = styled(Typography.Paragraph)`
    font-weight: 700;
    color: #9C9C9C;
`;

export const TaskGroupStyled = styled.div`
    background: #fff;
    min-width: 250px;
    max-width: 250px;
    border-radius: 10px;
    border: 1px solid #9C9C9C;
    margin-right: 5px;
    margin-left: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;