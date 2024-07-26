import i18n from ".";

const Trans = {
    get supportedLocales() {
        return ['fr', 'en'];
    },

    set currentLocale(newLocale) {
       i18n.global.locale.value = newLocale;
    },

    async switchLanguages(newLocale) {
        Trans.currentLocale = newLocale;
        document.querySelector('html').setAttribute('lang', newLocale);
    }
}

export default Trans