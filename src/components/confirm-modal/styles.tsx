import styled from '@emotion/styled';

export const OverlayConfirmButtonStyled = styled.button`
	width: 200px;
	height: 60px;
	background: ${({theme}) => theme.color.dashboardColors.overlayButtonYes};
	border-radius: 4px;
	border: 0;
	margin-left: 100px;
	margin-right: 100px;
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
`;

export const OverlayRemoveStyled = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(172, 172, 172, 0.5);
	align-items: center;
	justify-content: center;
	text-align: center;
	vertical-align: auto;
	z-index: 9999;
`;

export const OverlayConfirmStyled = styled.div`
	position: absolute;
	width: 800px;
	height: 300px;
	margin: -150px 0 0 0;
	left: 50%;
	margin-left: -400px;
	top: 50%;
	background: ${({theme}) => theme.color.white};
	border-radius: 4px;
`;

export const OverlayHeaderStyled = styled.div`
	display: flex;
	justify-content: right;
	padding: 16px;
`;

export const OverlayHeaderButtonCloseStyled = styled.button`
	display: flex;
	justify-content: right;
	background: transparent;
	border: 0;
	cursor: pointer;
`;

export const OverlayBodyStyled = styled.div`
	height: 150px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const OverlayFooterStyled = styled.div`
	display: flex;
	justify-content: space-between;
`;