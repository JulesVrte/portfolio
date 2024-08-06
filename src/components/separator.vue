<script setup>
    defineProps({
        title: String
    })
</script>

<template>
    <div class="translateRight flex items-center xl:justify-between mt-16 text-primary w-5/6 xl:gap-16 gap-10">
        <h2 class="font-K2D xl:text-7xl text-5xl font-extrabold text-center whitespace-nowrap">{{ $t(`nav.${title}`) }}</h2>
        <div class="border-4 w-full rounded-navbar border-primary" />
        
    </div>
</template>

<style scoped>
    .translateRight {
        animation: translateRightAnimation both;
        animation-timeline: view(40% 5%);
    }
    
    @keyframes translateRightAnimation {
        from {
            transform: translateX(50%) scale(0.1);
            opacity: 0;
        }
        to {
            opacity: 1;
            transform: scale(1)
        }
    }
</style>