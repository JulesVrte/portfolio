<template lang="">
    <div class="mt-12 flex flex-col md:w-5/6">
        <h2 class="font-medium md:text-7xl text-6xl font-Poppins dark:text-white leading-tight ml-6" v-html="$t('hero.name')"></h2>
        
        <h3 class="font-light text-3xl md:w-2/6 font-Poppins dark:text-white leading-tight ml-6" v-html="$t('hero.presentation')" />

        <a class="md:w-2/6 mt-6 md:ml-6 mx-6 text-center bg-black text-white font-medium rounded-button py-[12px] px-[40px] dark:bg-white dark:text-black" href="#" >{{ $t('hero.download_cv') }}</a>
    </div>
</template>


<script setup>

</script>


<style lang="">
    
</style>