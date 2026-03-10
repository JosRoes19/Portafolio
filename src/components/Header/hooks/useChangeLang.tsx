import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { flag_mx, flag_usa  } from '../../../data/img/img-data'; //icons

const LANGS: { [key: string]: any }  = {
    es: flag_mx,
    en: flag_usa
}

export const useChangeLang = () => {
    const current = localStorage.getItem("localStorage_language") || "es";
    const [flag, setFlag] = useState(LANGS[current]);
    const { i18n } = useTranslation();
    
    const changeLanguage = (lang: string) => {
        if (!Object.keys(LANGS).includes(lang)) return;
        setFlag(LANGS[lang]);
        i18n.changeLanguage(lang);
        localStorage.setItem('localStorage_language', lang);
    };

    return { flag, changeLanguage };
};