import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import hi from "./locales/hi/translation.json";
import pa from "./locales/pa/translation.json";

i18n
.use(initReactI18next)
.init({

    resources: {

        en: {
            translation: en
        },

        hi: {
            translation: hi
        },

        pa: {
            translation: pa
        }

    },

    lng: localStorage.getItem("languageCode") || "en",

    fallbackLng: "en",

    interpolation: {
        escapeValue: false
    }

});

export default i18n;