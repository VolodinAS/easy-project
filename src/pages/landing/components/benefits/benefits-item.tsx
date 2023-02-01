import React, { FC } from 'react';

import BenefitsItemLogo, { ImageKey } from './benefits-item/benefits-item-logo';
import BenefitsItemTexts from './benefits-item/benefits-item-texts';
import { BenefitsItemStyled } from './styles';

interface BenefitsItemProps {
    image: ImageKey,
    alt: string
}

const BenefitsItem: FC<BenefitsItemProps> = ({ image, alt }) => {
    return (
        <BenefitsItemStyled>
            <BenefitsItemLogo image={image} alt={alt}/>
            <BenefitsItemTexts header={image}/>
        </BenefitsItemStyled>
    );
};

export default BenefitsItem;