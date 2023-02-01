import React, { FC } from 'react';
import { Typography } from '../../../../components';

import {
    UniqItemTextStyled,
    UniqItemTextNumberStyled,
    UniqItemTextHeaderStyled,
    UniqItemTextAddonStyled
} from './styles';

const UniqItemText: FC<{index: string}> = ({ index }) => {
    return (
        <UniqItemTextStyled>
            <UniqItemTextNumberStyled>
                {`${index}`.padStart(2, '0')}
            </UniqItemTextNumberStyled>
            <UniqItemTextHeaderStyled>
                <Typography.H3>Lorem ipsum dolor sit amet</Typography.H3>
            </UniqItemTextHeaderStyled>
            <UniqItemTextAddonStyled>
                <Typography.Paragraph size='large'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Typography.Paragraph>
            </UniqItemTextAddonStyled>
        </UniqItemTextStyled>
    );
};

export default UniqItemText;