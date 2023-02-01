import styled from '@emotion/styled';
import React, { FC } from 'react';

import UniqItemText from './uniq-item-text';
import { UniqItemImageStyled } from './styles';

import { UniqGraph1Image } from '../../../../assets/images';

type WrapperProps = {
    imageRight: boolean; // картинка справа?
}

const Wrapper = styled.div<WrapperProps>`
    display: flex;
    margin-top: 80px;
    align-items: center;
    justify-content: center;
    flex-direction: ${(props) => props.imageRight ? 'row' : 'row-reverse' };
`;



type UniqItemProps = WrapperProps & {
    npp: string; // номер по порядку
}

const UniqItem: FC<UniqItemProps> = ({ npp, imageRight }) => {

    return (
        <Wrapper imageRight={imageRight}>
            <UniqItemText index={npp}/>
            <UniqItemImageStyled src={UniqGraph1Image}/>
        </Wrapper>
    );
    
};

export default UniqItem;