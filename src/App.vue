<script setup>
import { RouterView } from 'vue-router';
import Navbar from '~/components/Navbar.vue';
import HeroSection from './components/hero-section.vue';
</script>

<template>
  <div class="flex flex-col items-center min-h-screen font-Raleway bg-white dark:bg-black">
    <Navbar/>
    <HeroSection />
    <RouterView />
  </div>
</template>

<style lang="scss" >

</style>