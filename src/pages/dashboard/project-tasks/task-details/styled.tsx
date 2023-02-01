import styled from '@emotion/styled';

type TaskDetailsStyledProps = {
    defaultColor: string;
}

export const TaskDetailsStyled = styled.div`
    position: absolute;
    min-width: 320px;
    background-color: #fff;
    border: solid 1px #9C9C9C;
    padding: 5px;
    
`;

export const WrapperTaskDetailsStyled = styled.div`
    position: fixed;
    min-width: 320px;
    right: 32px;
    top: 122px;
    min-height: 800px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border: solid 1px #9C9C9C;
`;

export const TaskDetailsHeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px 14px 0px;
`;

export const TaskDetailsHeaderTitleStyled = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`;

export const TaskDetailsHeaderTitleIcon = styled.img`
    margin-right: 4px;
    width: 30px;
    height: 30px;
`;

export const TaskDetailsHeaderCloseStyled = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 14px;
`;

export const TaskDetailsTitleStyled = styled.div`
    margin: 0px 14px;
    padding: 15px 0 15px 0;
    max-width: 320px;
`;

export const TaskDetailsButtonEditStyled = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 14px;
`;

export const TaskDetailsInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin:0px 14px;
`;

export const TaskDetailsInfoItemStyled = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 0;
    max-width: 320px;
`;

export const ColorBlock = styled.div<TaskDetailsStyledProps>`
    width: 100%;
    height: 24px;
    margin-top: 8px;
    background-color: ${(prop) => prop.defaultColor};
`;

export const ButtonEdit = styled.button`
    width: 150px;
    height: 32px; 
    margin-bottom : 8px;
    text-align: center;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    background-color: ${({theme}) => theme.color.dashboardColors.overlayButtonCreate};
`;

export const ButtonDelete = styled.button`
    width: 150px;
    height: 32px;
    margin-bottom : 8px;
    text-align: center;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    background-color: #E90A0A;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
`;

export const Avatar = styled.img`
    width: 32px;
    height: 32px;
    margin: 0px 8px;
`;

export const DateWrapper = styled.div`
    margin: 0px 14px;
`;