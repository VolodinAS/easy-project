import React, { useState, useEffect, useCallback } from 'react';
import StateManagedSelect from 'react-select';
import Select from 'react-select';

import {
    Wrapper,
    Label,
    InputWrapper,
    Errors,
} from './components';
import { DropdownIndicator } from './dropdown-indicator';
import { selectStyles } from './styles';

type Option = {
    label: string;
    value: string;
}

type CustomSelectProps = {
  labelText?: string;
  labelBold?: boolean;
  isMulti?: boolean;
  name: string;
  value?: string | string[];
  required?: boolean;
  placeholder?: string;
  options?: Option[];
  errors?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    labelText,
    labelBold,
    isMulti,
    value,
    required,
    placeholder,
    options,
    errors,
    ...rest
}) => {
    
    const setDefaultValue = () => {
        if(!value) {
            return isMulti ? [''] : '';
        }
        if(isMulti) {
            const res = [];

            for (const item of value) {
                res.push(options.filter(option => option.value === item)[0]);
            }
            return res;
        }
        return options.filter(option => option.value === value);
    };

    return (
        <Wrapper>
            <InputWrapper>
                <Label labelBold={labelBold}>{labelText}{required && '*'}</Label>
                <Select
                    options={options}
                    defaultValue={setDefaultValue}
                    placeholder={placeholder}
                    isMulti={isMulti}
                    styles={selectStyles}
                    isSearchable={false}
                    components={{ DropdownIndicator }}
                    {...rest}
                />
            </InputWrapper>
            {errors && (
                <Errors>{errors}</Errors>
            )}
        </Wrapper>
    );
};

CustomSelect.defaultProps = {
    labelText: '',
    isMulti: false,
    labelBold: false,
    required: false,
    placeholder: '',
    options: [{value: '', label: ''}],
    errors: '',
};

export default CustomSelect;
