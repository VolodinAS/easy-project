import styled from '@emotion/styled';

export const ProjectItemStyled = styled.div`
	border-bottom-width: 1px; /* Толщина линии внизу */
    border-bottom-style: solid; /* Стиль линии внизу */
    border-bottom-color: ${({theme}) => theme.color.purple}; /* Цвет линии внизу */
	display: flex;
	align-content: center;
	padding: 16px;
	margin-top: 32px;
`;

export const ProjectItemAuthorStyled = styled.div`
	color: ${({theme}) => theme.color.smallText};
	width: 200px;
`;

export const ProjectItemNameStyled = styled.div`
	width: 500px;
`;

export const ProjectItemInfoStyled = styled.div`
	display: flex;
	align-items: center;
`;

export const ProjectItemActionsStyled = styled.div`
	margin-left: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 350px;	
`;

export const ProjectItemUpdatedStyled = styled.div`
	color: ${({theme}) => theme.color.smallText};	
	margin-left: 50px;
`;