<script setup>
  import { useDark } from '@vueuse/core'
  import LanguageSwitcher from './language-switcher.vue';
  const isDark = useDark()

</script>

<template >
  <nav class="flex justify-between items-center gap-24 backdrop-blur-md bg-[#121212] text-white w-5/6 mt-12 p-6 rounded-navbar shadow-navbar dark:bg-[#efefef] dark:text-black dark:shadow-navbar-black">
      <h1 class="font-K2D text-2xl font-extrabold">Jules Vérité</h1>
      <ul class="flex flex-row gap-20 font-K2D text-xl uppercase items-center">
          <li class="li-navbar"><a href="#about">{{ $t('nav.about') }}</a></li>
          <li class="li-navbar"><a href="#projects">{{ $t('nav.projects') }}</a></li>
          <li class="li-navbar"><a href="#contact">{{ $t('nav.contact') }}</a></li>
      </ul>
      <div class="flex flex-col gap-2">
        <div class="checkbox-wrapper-2 flex content-center gap-3 items-center">
            <label for="dark-mode" class="cursor-pointer">{{ $t('nav.dark_mode') }}</label>
            <input type="checkbox" class="sc-gJwTLC ikxBAC" v-model="isDark">
        </div>
        <LanguageSwitcher />
      </div>
  </nav>
</template>

<style>
  .checkbox-wrapper-2 .ikxBAC {
    appearance: none;
    background-color: #dfe1e4;
    border-radius: 72px;
    border-style: none;
    flex-shrink: 0;
    height: 20px;
    margin: 0;
    position: relative;
    width: 30px;
  }

  .checkbox-wrapper-2 .ikxBAC::before {
    bottom: -6px;
    content: "";
    left: -6px;
    position: absolute;
    right: -6px;
    top: -6px;
  }

  .checkbox-wrapper-2 .ikxBAC,
  .checkbox-wrapper-2 .ikxBAC::after {
    transition: all 300ms ease-out;
  }

  .checkbox-wrapper-2 .ikxBAC::after {
    background-color: #fff;
    border-radius: 50%;
    content: "";
    height: 14px;
    left: 3px;
    position: absolute;
    top: 3px;
    width: 14px;
  }

  .checkbox-wrapper-2 input[type=checkbox] {
    cursor: default;
  }

  .checkbox-wrapper-2 .ikxBAC:hover {
    background-color: #c9cbcd;
    transition-duration: 0s;
  }

  .checkbox-wrapper-2 .ikxBAC:checked {
    background-color: #A6BBCC;
  }

  .checkbox-wrapper-2 .ikxBAC:checked::after {
    background-color: #fff;
    left: 13px;
  }

  .checkbox-wrapper-2 :focus:not(.focus-visible) {
    outline: 0;
  }

  .checkbox-wrapper-2 .ikxBAC:checked:hover {
    background-color: #444f64;
  }
</style>

