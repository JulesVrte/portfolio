<script setup>
import CssIcon from './icons/css-icon.vue';
import FigmaIcon from './icons/figma-icon.vue';
import HtmlIcon from './icons/html-icon.vue';
import JavaScriptIcon from './icons/javascript-icon.vue';
import NuxtIcon from './icons/nuxt-icon.vue';
import VueIcon from './icons/vue-icon.vue';
import TailwindCssIcon from './icons/tailwind-css-icon.vue';
import ExpressIcon from './icons/express-icon.vue';

</script>

<template >
    <div class="w-full h-[200px] overflow-hidden group">
        <div class="flex w-full min-w-[calc(300px*8)] relative">
            <div class="item" style="--position: 1;--color: #f6c9b2">
                <htmlIcon />
                <h5>HTMl</h5>
            </div>
            <div class="item" style="--position: 2;--color: #c0dff7">
                <CssIcon />
                <h5>CSS</h5>
            </div>
            <div class="item" style="--position: 3;--color: #C3C99E">
                <JavaScriptIcon />
                <h5>JavaScript</h5>
            </div>
            <div class="item" style="--position: 4;--color: #b1e9ca">
                <VueIcon />
                <h5>Vue</h5>
            </div>
            <div class="item" style="--position: 5; --color: #5bfac3">
                <NuxtIcon />
                <h5>Nuxt</h5>
            </div>
            <div class="item" style="--position: 6;--color: #89ccb7">
                <FigmaIcon />
                <h5>Figma</h5>
            </div>
            <div class="item" style="--position: 7;--color: #bae8fd">
                <TailwindCssIcon />
                <h5>Tailwind CSS</h5>
            </div>
            <div class="item" style="--position: 8;--color: #ded8ca">
                <ExpressIcon />
                <h5>Express JS</h5>
            </div>
        </div>
    </div>
</template>

<style >
</style>