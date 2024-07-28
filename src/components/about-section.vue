<script setup>
    import AboutSlider from './about-slider.vue';
    import Separator from './separator.vue';
</script>

<template >
    <div class="section">
        <Separator id="about" title="about" />
        <p class="w-3/6 leading-10">{{ $t('about.description') }}</p>
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


<style >
    
</style>
