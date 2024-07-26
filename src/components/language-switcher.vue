<script setup>
    import { useI18n } from 'vue-i18n';
    import Trans from '../i18n/translate';

    const { locale } = useI18n();

    const supportedLocales = Trans.supportedLocales

    console.log(supportedLocales)

    const switchLanguages = async (event) => {
        const newLocale = event.target.value;

        await Trans.switchLanguages(newLocale);
    }
</script>

<template>
    <select @change="switchLanguages" class="bg-transparent">
        <option 
            v-for="slocale in supportedLocales" 
            :key="`locale-${slocale}`" 
            :value="slocale"
            :selected="locale === slocale"
            >{{ $t(`locale.${slocale}`) }}
        </option>
    </select>
</template>

<style>
    
</style>