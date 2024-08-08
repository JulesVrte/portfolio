<template>
    <div class="bars fixed z-20 top-20 right-0 bg-black py-2 pl-2 rounded-l-[10px] text-white dark:bg-white dark:text-black">
      <BarsIcon />
      <div class="switcher fixed top-12 right-0 translate-x-full py-2 px-2 rounded-l-[10px] bg-black dark:bg-white">
          <div class="checkbox-wrapper-2 flex content-center gap-3 pl-1 items-center">
                  <label for="dark-mode" class="cursor-pointer">{{ $t('nav.light') }}</label>
                  <input type="checkbox" class="sc-gJwTLC ikxBAC" v-model="isDark">
                  <label for="dark-mode" class="cursor-pointer">{{ $t('nav.dark') }}</label>
          </div>
          <LanguageSwitcher />
      </div>
    </div>
</template>
<script setup>
    import { useDark } from '@vueuse/core'
    import LanguageSwitcher from './language-switcher.vue';
    import BarsIcon from './icons/bars-icon.vue';
    const isDark = useDark()
</script>

<style scoped>
  .switcher {
    transition: transform 0.5s ease-in-out;
  }

  .bars:hover .switcher {
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
  }

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

