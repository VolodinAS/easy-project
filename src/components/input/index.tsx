import React from 'react';

import {
    Wrapper,
    Label,
    InputWrapper,
    StyledInput,
    Errors,
} from './components';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  labelText?: string;
  labelBold?: boolean;
  errors?: string;
}

const Input: React.FC<InputProps> = ({
    labelText,
    labelBold,
    required,
    errors,
    ...rest
}) => {

    return (
        <Wrapper>
            <InputWrapper>
                <Label labelBold={labelBold}>{labelText}{required && '*'}</Label>
                <StyledInput
                    required={required} 
                    {...rest}
                />
            </InputWrapper>
            {errors && (
                <Errors>{errors}</Errors>
            )}
        </Wrapper>
    );
};

Input.defaultProps = {
    labelText: '',
    labelBold: false,
    value: '',
    required: false,
    placeholder: '',
    errors: '',
};

export default Input;
