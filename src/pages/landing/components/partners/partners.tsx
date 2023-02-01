import React from 'react';

import {
    PartnersStyled,
    PartnersBlock,
    PartnerInnopolisStyled,
    PartnerRedcoderStyled
} from './styles';

import { PartnerInnopolisImage } from '../../../../assets/images';
import { PartnerRedcoderImage } from '../../../../assets/images';

const Partners = () => {
    return (
        <PartnersStyled>
            <PartnersBlock>
                <PartnerInnopolisStyled>
                    <img src={PartnerInnopolisImage} alt="Логотип Иннополис" />
                </PartnerInnopolisStyled>
                <PartnerRedcoderStyled>
                    <img src={PartnerRedcoderImage} alt="Логотип RedCoder" />
                </PartnerRedcoderStyled>
            </PartnersBlock>
        </PartnersStyled>
    );
};

export default Partners;