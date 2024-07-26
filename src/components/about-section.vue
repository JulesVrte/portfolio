<script setup>
    import AboutSlider from './about-slider.vue';
    import Separator from './separator.vue';
</script>

<template >
    <div class="w-full flex items-center flex-col gap-16 dark:text-white">
        <Separator id="about" title="About me" />
        <p class="w-2/6 leading-10">Passionate about IT since I was child, I discover web developping about 1 year ago and I immediately enjoy it and study it. I started with an apprentenship of 1 year in a company but my desire to create website from scratch make me want to launch myself into freelance. In September I will begin a new cursus at 42' school to develop my skills in computer science.</p>
        <ul class="flex flex-row gap-32 text-5xl font-bold">
            <li class="li-about">
                <h4>Front-end</h4>
                <p class="p-about">1 Year Experience</p>
            </li>
            <li class="li-about">
                <h4>Python</h4>
                <p class="p-about">6 Months Experience</p>
            </li>
            <li class="li-about">
                <h4>Back-end</h4>
                <p class="p-about">60+ Hours Experience</p>
            </li>
        </ul>

        <h3 class="text-4xl text-center font-semibold">These are the <br> technologies I've been using</h3>

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
