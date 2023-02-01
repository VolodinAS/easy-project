import styled from '@emotion/styled';

export const Wrapper = styled.div(`
  width: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center;
`);

export const InputWrapper = styled.label(() => `
  width: 100%;
  display: flex;
  flex-direction: column; 
  gap: 8px;
`);

export const Label = styled.span<{ labelBold: boolean }>(({ labelBold }) => `
  font-weight: ${labelBold ? 700 : 400};
  font-size: ${labelBold ? '16px' : '14px'};
`);

export const Errors = styled.p(({ theme }) => `
  font-weight: 400;
  font-size: 14px;
  color: ${theme.color.red};
`);

export const CustomIndicator = styled.span<{ open: boolean }>(({ open, theme }) => `
  width: 12px;
  height: 12px;
  margin-top: ${open ? '0' : '-6px'};
  margin-right: 16px;
  border-left: 1px solid ${theme.color.purple};
  border-bottom: 1px solid ${theme.color.purple};
  transform: rotate(${open ? '135deg' : '-45deg'});
  box-sizing: border-box;
  transition: all 0.3s ease-out;
`);
