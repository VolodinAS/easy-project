import React from 'react';
import { components, DropdownIndicatorProps } from 'react-select';

import { CustomIndicator } from './components';

export const DropdownIndicator: React.FC<DropdownIndicatorProps> = props => {
    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>
                <CustomIndicator 
                    open={props.selectProps.menuIsOpen}
                />
            </components.DropdownIndicator>
        )
    );
};
