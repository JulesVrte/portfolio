<script setup>
import { useDark } from '@vueuse/core'
const isDark = useDark()

</script>

<template >
    <nav class="flex justify-between gap-24 backdrop-blur-md bg-[#121212] text-white w-5/6 mt-12 p-6 rounded-navbar shadow-navbar dark:bg-[#efefef] dark:text-black dark:shadow-navbar-black">
        <h1 class="font-K2D text-xl font-extrabold">Jules Vérité</h1>
        <ul class="flex flex-row gap-10 font-K2D text-l uppercase items-center">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/projects">Projects</a></li>
        </ul>
        <div class="checkbox-wrapper-2 flex content-center gap-3 items-center">
            <label for="dark-mode" class="cursor-pointer">Dark Mode</label>
            <input type="checkbox" class="sc-gJwTLC ikxBAC" v-model="isDark">
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

