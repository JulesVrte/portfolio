<script setup>
    import AboutSlider from './about-slider.vue';
    import Separator from './separator.vue';
</script>

<template >
    <div class="w-full flex items-center flex-col gap-16 dark:text-white">
        <Separator title="About me" />
        <p class="w-3/6 leading-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.</p>
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

<style >
    
</style>
