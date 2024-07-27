import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import fr from "./locales/fr.json";

export default createI18n({
    locale: "fr",
    fallbackLocale: "en",
    legacy: false,
    messages: { en, fr, },
    globalInjection: true,
});