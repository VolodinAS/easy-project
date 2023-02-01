import React, { Children, FC } from 'react';
import { useTranslation } from 'react-i18next';

import { OverlayButtonClose } from '../../assets/images';
import { Typography } from '..';

import {
    OverlayConfirmButtonStyled,
    OverlayRemoveStyled,
    OverlayConfirmStyled,
    OverlayHeaderStyled,
    OverlayHeaderButtonCloseStyled,
    OverlayBodyStyled,
    OverlayFooterStyled
} from './styles';

type ConfirmModalProps = {
	onClose: (data) => void; // закрыть модалку
    onConfirm: (data) => void; // подтвердить действие
}

const ConfirmModal: FC<ConfirmModalProps> = ({ onClose, onConfirm, children }) => {
    const {t, i18n} = useTranslation();

    return (
        <OverlayRemoveStyled id="overlay">
            <OverlayConfirmStyled>
                <OverlayHeaderStyled>
                    <OverlayHeaderButtonCloseStyled onClick={onClose}>
                        <img src={OverlayButtonClose} alt={t('easy-project.overlay.buttonClose')} />
                    </OverlayHeaderButtonCloseStyled>
                </OverlayHeaderStyled>
                <OverlayBodyStyled>
                    <Typography.Paragraph size='bolderlarge'>
                        {children}
                    </Typography.Paragraph>
                </OverlayBodyStyled>
                <OverlayFooterStyled>
                    <OverlayConfirmButtonStyled onClick={onClose}>{t('easy-project.overlay.cancel')}</OverlayConfirmButtonStyled>
                    <OverlayConfirmButtonStyled data-testid="button-delete" onClick={onConfirm}>{t('easy-project.overlay.confirm')}</OverlayConfirmButtonStyled>
                </OverlayFooterStyled>
            </OverlayConfirmStyled>
        </OverlayRemoveStyled>
    );
};

export default ConfirmModal;