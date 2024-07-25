<script setup>
import { RouterView } from 'vue-router';
import Navbar from '~/components/navbar.vue';
import HeroSection from './components/hero-section.vue';
import AboutSection from '~/components/about-section.vue';
import ContactSection from '~/components/contact-section.vue';
import ProjectsSection from '~/components/projects-section.vue';
</script>

<template>
  <div class="flex items-center flex-col min-h-screen font-Poppins bg-white dark:bg-[#121212]">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
    <RouterView />
  </div>
</template>

<style lang="scss" >

</style>