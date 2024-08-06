<script setup>
    import AboutSlider from './about-slider.vue';
    import Separator from './separator.vue';
</script>

<template >
    <div class="section">
        <Separator id="about" title="about" />
        <p class="md:w-3/6 w-5/6 leading-10 autoShow">{{ $t('about.description') }}</p>
        <ul class="flex flex-col md:flex-row gap-32 text-5xl font-bold">
            <li class="li-about autoBlur">
                <h4>Front-end</h4>
                <p class="p-about">{{ $t('about.experience', { time: `1 ${$t('time.year')}` }) }}</p>
            </li>
            <li class="li-about autoBlur">
                <h4>Python</h4>
                <p class="p-about">{{ $t('about.experience', { time:`6 ${$t('time.months')}` }) }}</p>
            </li>
            <li class="li-about autoBlur">
                <h4>Back-end</h4>
                <p class="p-about">{{ $t('about.experience', { time: `60+ ${$t('time.hours')}` }) }}</p>
            </li>
        </ul>

        <h3 class="autoShow2 text-4xl text-center font-semibold" v-html="$t('about.technologies')"></h3>

        <AboutSlider class="showSlider" />

    </div>
</template>


<style scoped>
    .autoShow {
        animation: autoShowAnimation both; 
        animation-timeline: view(70% 5%);
    }

    @keyframes autoShowAnimation {
        from {
            opacity: 0;
            transform: translateY(200px) scale(0.3);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    .showSlider {
        animation: showSliderAnimation both;
        animation-timeline: view(0%);
    }

    @keyframes showSliderAnimation {
        from {
            opacity: 0;
            transform: translateY(200px);
        }
        30% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .autoShow2 {
        animation: autoShow2Animation both; 
        animation-timeline: view(70% 0%);
    }

    @keyframes autoShow2Animation {
        0% {
            opacity: 0;
            transform: translateY(-200px) scale(0.3);
        }
        30% {
            opacity: 0;
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    .autoBlur {
        animation: autoBlurAnimation both;
        animation-timeline: view(70% 5%);
    }

    @keyframes autoBlurAnimation {
        from {
            filter: blur(40px);
        }
        to {
            filter: blur(0);
        }
    }
</style>
