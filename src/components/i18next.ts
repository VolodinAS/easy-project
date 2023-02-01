import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';
import  LanguageDetector  from 'i18next-browser-languagedetector';

const loadPath = () => `${__webpack_public_path__}/locales/{{lng}}.json`;

export const i18nextConfigReact = (i18next) => i18next
    .use(XHR)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallback: 'ru',
        keySeparator: '.',
        load: 'currentOnly',
        supportedLngs: ['ru', 'en'],
        backend: {
            loadPath,    
        }
    });