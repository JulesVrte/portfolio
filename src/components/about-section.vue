<script setup>
    import AboutSlider from './about-slider.vue';
    import Separator from './separator.vue';
</script>

<template >
    <div class="w-full flex items-center flex-col gap-16 dark:text-white">
        <Separator id="about" title="about" />
        <p class="w-2/6 leading-10">{{ $t('about.description') }}</p>
        <ul class="flex flex-row gap-32 text-5xl font-bold">
            <li class="li-about">
                <h4>Front-end</h4>
                <p class="p-about">{{ $t('about.experience', { time: `1 ${$t('time.year')}` }) }}</p>
            </li>
            <li class="li-about">
                <h4>Python</h4>
                <p class="p-about">{{ $t('about.experience', { time:`6 ${$t('time.months')}` }) }}</p>
            </li>
            <li class="li-about">
                <h4>Back-end</h4>
                <p class="p-about">{{ $t('about.experience', { time: `60+ ${$t('time.hours')}` }) }}</p>
            </li>
        </ul>

        <h3 class="text-4xl text-center font-semibold" v-html="$t('about.technologies')"></h3>

        <AboutSlider />

    </div>
</template>

<!-- <i18n>
    {
        "en": {
            "about-me": "About me"
        },
        "fr": {
            "about": "A propos de moi",
            "front-end": "Front-end",
            "python": "Python",
            "back-end": "Back-end",
            "experience": "Experience",
            "technologies": "Voici les technologies que j'ai utilisées"
        }
    }
</i18n> -->

<style >
    
</style>
