import React from 'react';
import { useTranslation } from 'react-i18next';

import { ru, usa } from '../../assets/images';
import { But, Image } from './style';
  
const LanguageSelect: React.FC = () => {
    const { i18n } = useTranslation();
    const lng = i18n.language;
    const pic = lng === 'ru' ? ru  : usa;
    const handleChangeLanguage = () => {    
        i18n.changeLanguage(lng === 'ru'  ? 'en' : 'ru');
    };

    return (
        <>
            <But title='language select' value={lng} onClick={handleChangeLanguage}><Image src={pic}/></But>
        </>
    );     
};

export default LanguageSelect;

