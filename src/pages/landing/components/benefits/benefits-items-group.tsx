import React from 'react';

import BenefitsItem from './benefits-item';
import { BenefitsStyled } from './styles';

const BenefitsItemsGroup = () => {
    return (
        <BenefitsStyled>
            <BenefitsItem image='free' alt='Бесплатно'/>
            <BenefitsItem image='speed' alt='Оптимизация и быстрота'/>
            <BenefitsItem image='usefull' alt='Удобное использование'/>
            <BenefitsItem image='ussr' alt='Советские разработчики'/>
        </BenefitsStyled>
    );
};

export default BenefitsItemsGroup;