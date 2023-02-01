/* eslint-disable @typescript-eslint/no-var-requires */
const locales = require('../locales/ru.json');

module.exports = {
    useTranslation: () => ({
        t: (key, props={}) => {
            let lk = locales[key];
            Object.entries(props).forEach( ([ key, value ]) => {
                lk = lk.replace(`{{${key}}}`, value);
            } );
            return lk;
        },
        i18n: {
            language: 'ru',
            changeLanguage: () => new Promise(() => {'';}),
        }
    })
};

