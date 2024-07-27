<template lang="">
    <div class="mt-12 flex flex-col w-5/6">
        <h2 class="font-medium text-7xl font-Poppins dark:text-white leading-tight ml-6" v-html="$t('hero.name')"></h2>
        
        <h3 class="font-light text-3xl w-2/6 font-Poppins dark:text-white leading-tight ml-6" v-html="$t('hero.presentation')" />

        <a class="w-1/6 mt-6 ml-6 text-center bg-black text-white font-medium rounded-button py-[12px] px-[40px] dark:bg-white dark:text-black" href="#" >{{ $t('hero.download_cv') }}</a>
    </div>
</template>


<script setup>

</script>


<style lang="">
    
</style>