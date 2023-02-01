import React, { FC } from 'react';
import { Typography } from '../../../../../components';

import {
    BenefitsItemTextsStyled,
    BenefitsItemHeaderStyled,
    BenefitsItemAddonStyled
} from './styles';

interface BenefitsItemTextsProps {
    header: string
}

const BenefitsItemTexts: FC<BenefitsItemTextsProps> = ({ header }) => {

    let HeaderText = '';
    let AddonText = '';
    switch(header)
    {
    case 'free':
        HeaderText = 'Абсолютно бесплатный';
        AddonText = 'Весь доступный функционал навсегда в вашем распоряжении';
        break;
    case 'speed':
        HeaderText = 'Полная оптимизация';
        AddonText = 'Не требует установки программ. Потянет даже на старом ведре';
        break;
    case 'usefull':
        HeaderText = 'Удобный интерфейс';
        AddonText = 'Качественный, красочный и интуитивно понятный интерфейс';
        break;
    case 'ussr':
        HeaderText = 'Советские разработчики';
        AddonText = 'Сервис всегда будет работать стабильно, несмотря на любые жестокие санкции';
        break;
    default:
        HeaderText = 'НЕИЗВЕСТНОЕ ЗНАЧЕНИЕ';
        AddonText = 'НЕИЗВЕСТНОЕ ЗНАЧЕНИЕ';
        break;
    }

    return (
        <BenefitsItemTextsStyled>
            <BenefitsItemHeaderStyled>
                <Typography.Paragraph size='bolder'>
                    {HeaderText}
                </Typography.Paragraph>
            </BenefitsItemHeaderStyled>
            <BenefitsItemAddonStyled>
                <Typography.Paragraph>{AddonText}</Typography.Paragraph>
            </BenefitsItemAddonStyled>
        </BenefitsItemTextsStyled>
    );
};

export default BenefitsItemTexts;