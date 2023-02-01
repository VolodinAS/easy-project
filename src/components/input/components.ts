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

export const StyledInput = styled.input(({ theme }) => `
  min-height: 56px;
  font-size: 16px;
  padding: 16px;
  border: 1px solid ${theme.color.purple};
  border-radius: 4px;
  color: ${theme.color.black};
`);

export const StyledTextarea = styled.textarea(({ theme }) => `
  height: 112px;
  font-size: 16px;
  padding: 16px;
  border: 1px solid ${theme.color.purple};
  border-radius: 4px;
  color: ${theme.color.black};
`);

export const StyledSelect = styled.select(({ theme }) => `
  min-height: 56px;
  font-size: 16px;
  padding: 16px;
  border: 1px solid ${theme.color.purple};
  border-radius: 4px;
  color: ${theme.color.black};
`);

export const Errors = styled.p(({ theme }) => `
  font-weight: 400;
  font-size: 14px;
  color: ${theme.color.red};
`);
