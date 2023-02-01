import React, { FC } from 'react';

import {
    Wrapper,
    ButtonWrapper
} from './styles';

type LayoutWithBottomButtonProps = {
    button?: JSX.Element; 
    form?: boolean; 
}

const LayoutWithBottomButton: FC<LayoutWithBottomButtonProps> = ({ 
    button,
    form,
    children 
}) => {
    return (
        <Wrapper as={form ? 'form' : 'div'}>
            { children }
            <ButtonWrapper>
                {button}
            </ButtonWrapper>
        </Wrapper> 
    );
};

LayoutWithBottomButton.defaultProps = {
    form: false,
};

export default LayoutWithBottomButton;
