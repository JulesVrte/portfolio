<script setup>
  import Header from '~/components/header.vue';
  import HeroSection from './components/hero-section.vue';
  import AboutSection from '~/components/about-section.vue';
  import ContactSection from '~/components/contact-section.vue';
  import ProjectsSection from '~/components/projects-section.vue';
  import Footer from '~/components/footer.vue';
</script>

<template>
  <div class="flex items-center flex-col min-h-screen font-Poppins bg-white dark:bg-[#121212]">
    <Header />
    <HeroSection />
    <AboutSection id="about"/>
    <ProjectsSection id="projects"/>
    <ContactSection id="contact"/>
    <Footer />
  </div>
</template>