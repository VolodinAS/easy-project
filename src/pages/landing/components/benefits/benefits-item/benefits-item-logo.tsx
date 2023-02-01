import React, { FC } from 'react';

import {
    BenefitsItemLogoStyled,
    ImageStyled
} from './styles';


import { BenefitsItemLogoFree, BenefitsItemLogoSpeed, BenefitsItemLogoUsefull, BenefitsItemLogoUssr } from '../../../../../assets/images';

const images = {
    free: BenefitsItemLogoFree,
    speed: BenefitsItemLogoSpeed,
    usefull: BenefitsItemLogoUsefull,
    ussr: BenefitsItemLogoUssr
};

export type ImageKey = keyof typeof images;

type BenefitsItemLogoProps = {
    image: ImageKey,
    alt: string
}

const BenefitsItemLogo: FC<BenefitsItemLogoProps> = ({ image, alt }) => {

    return (
        <BenefitsItemLogoStyled>
            <ImageStyled src={images[image]} alt={alt} />
        </BenefitsItemLogoStyled>
    );
}; 

export default BenefitsItemLogo;