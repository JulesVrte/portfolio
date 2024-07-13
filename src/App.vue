<script setup>
import { RouterView } from 'vue-router';
import Navbar from '~/components/Navbar.vue';
</script>

<template>
  <div class="flex items-center flex-col min-h-screen font-Raleway">
    <Navbar />
    <RouterView />
  </div>
</template>

<style lang="scss" >

</style>