import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { Typography } from '../../../../components';

type TaskItemStyledProps = {
    selected: boolean;
    defaultColor: string;
}

export const TaskItemStyled = styled(Link)<TaskItemStyledProps>`
    text-decoration: none;
    color: ${({theme}) => theme.color.black};
    background-color: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: ${(prop) => prop.selected ? 'border-box' : ''};
    box-shadow: ${(prop) => prop.selected ? 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)' : ''};
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    
    min-height: 150px;
    border-radius: 10px;
    padding: 5px;
    margin-top: 10px;

    position: relative;
`;
export const TaskContentStyled = styled.div`
    display: flex;
    justify-content: space-between;
    flex-basis: 100%;
`;

export const TaskFooterStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;    
    width: 100%;
`;

export const TaskIconStyled = styled.img`
    width: 20px;
    height: 20px;
`;

export const TaskFooterTypeCodeStyled = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

export const TaskFooterTypeStyled = styled.div`
`;

export const TaskFooterCodeStyled = styled.div`
    margin-left: 5px;
    color: ${({theme}) => theme.color.darkGray}
`;

export const TaskFooterExecutorStyled = styled.div`
`;

export const TaskExecutorStyled = styled.div`
    background: ${({theme}) => theme.color.purple};
    width: 32px;
    height: 32px;
    border-radius: 16px;
`;

export const StyledParagraph = styled(Typography.Paragraph)`
    font-weight: 700;
`;

export const Colored = styled.div`
    min-height: 70px;
    min-width: 12px;
    position: absolute;
    background-color: ${(prop: TaskItemStyledProps) => prop.defaultColor};
    top: 34px;
    left: 220px;
`;