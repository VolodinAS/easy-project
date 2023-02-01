import styled from '@emotion/styled';
import React, { Children, FC } from 'react';

type ErrorTextProps = {
    color?: string;
}


const ErrorText:FC<ErrorTextProps> = ({ color, children }) => {
    return (
        <div style={ { color: color, textAlign: 'center', fontWeight: 'bolder', padding: '10px', border: 'solid 1px red', borderRadius: '5px', margin: '10px' } }>
            {children}
        </div>
    );
};

ErrorText.defaultProps = {
    color: '#ff0000',
};


export default ErrorText;