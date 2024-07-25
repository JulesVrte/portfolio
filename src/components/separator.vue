<script setup>
    defineProps({
        title: String
    })
</script>
<template lang="">
    <div class="flex items-center justify-between mt-16 text-primary w-5/6 gap-16">
        <h2 class="font-K2D text-7xl font-extrabold text-center whitespace-nowrap">{{ title }}</h2>
        <div class="border-4 w-full rounded-navbar border-primary" />
        
    </div>
</template>
<style lang="">
    
</style>