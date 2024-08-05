<template >
  <nav class="flex justify-between items-center backdrop-blur-md bg-[#121212] text-white w-5/6 m-12 p-6 rounded-navbar shadow-navbar dark:bg-[#efefef] dark:text-black dark:shadow-navbar-black">
      <h1 class="font-K2D text-2xl font-extrabold">Jules Vérité</h1>
      <ul class="md:flex md:flex-row md:gap-20 font-K2D xl:text-xl uppercase md:items-center">
          <li class="li-navbar"><a href="#about">{{ $t('nav.about') }}</a></li>
          <li class="li-navbar"><a href="#projects">{{ $t('nav.projects') }}</a></li>
          <li class="li-navbar"><a href="#contact">{{ $t('nav.contact') }}</a></li>
      </ul>
      <a href="https://github.com/julesvrte"><GithubIcon/></a>
  </nav>
</template>

<script setup>
  import GithubIcon from './icons/github-icon.vue';
</script>