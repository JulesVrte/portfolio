<template>
    <form class="flex flex-col w-1/3 pb-[24px] gap-4" @submit.prevent="submitForm">
      <div class="flex flex-col">
        <label class="label" for="email">Adresse Email</label>
        <input class="input" type="email" ref="email" v-model="form.email" :placeholder="$t('placeholder.email')" required />
      </div>
      <div class="flex flex-col">
        <label class="label" for="service">Type de Service</label>
        <select class="input" ref="service" v-model="form.service" required>
            <option value="" selected disabled hidden>{{ $t('placeholder.service') }}</option>
            <option value="consulting">Consulting</option>
            <option value="development">Développement</option>
            <option value="design">Design</option>
        </select>
      </div>
      <div class="flex flex-col">
        <label class="label" for="message">Message</label>
        <textarea class="input h-[200px]" ref="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
</template>
  
<script setup>
    import { ref } from 'vue';

    const form = ref({
    email: '',
    service: '',
    message: ''
    });

    const submitForm = () => {
    console.log('Formulaire soumis:', form.value);
    // Ajouter ici la logique pour traiter le formulaire soumis
    };
</script>

<style>
    .input {
        position: relative;
    }

    .input::after .input::before {
        content: '';
        position: absolute;
        top: 10px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #000;
        transform: scaleX(0);
        transition: transform 0.3s;
    }
</style>