<script setup>
  import { ref } from 'vue'
  const WEB3FORMS_ACCESS_KEY = "7ef51caf-1c6a-4e79-ba25-c72b0a03041d";
  
  let name = ref('')
  let email = ref('')
  let message = ref('')

  const submitForm = async () => {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    });
    const result = await response.json();
    reset()
    if (result.success) {
      console.log(result);
    }
  }

  const reset = () => {
    name.value = ''
    email.value = ''
    message.value = ''
  }
</script>

<template>
    <form class="translateRightToLeft flex flex-col xl:w-1/3 w-2/3 pb-[24px] gap-4 mb-[64px] overflow-hidden" @submit.prevent="submitForm">
      <div class="flex flex-col">
        <label class="label" for="name">{{ $t('form.name')}}</label>
        <input class="input" type="text" name="name" v-model="name" ref="inputName" :placeholder="$t('placeholder.name')" required />
      </div>
      <div class="flex flex-col">
        <label class="label" for="email">{{ $t('form.email') }}</label>
        <input class="input" type="email" name="email" v-model="email" ref="inputEmail" :placeholder="$t('placeholder.email')" required />
      </div>
      <div class="flex flex-col">
        <label class="label" for="message">{{ $t('form.message') }}</label>
        <textarea class="input h-[200px]" name="message" v-model="message" ref="inputMessage" required></textarea>
      </div>
      <button class="rounded-[10px] border-[#A6BBCC] border-solid border-[1px] h-[50px] px-4 bg-black text-white dark:bg-white dark:text-black" type="submit">{{ $t('form.submit') }}</button>
    </form>
</template>

<style scoped>
  .translateRightToLeft {
    animation: translateRightToLeft both;
    animation-timeline: view(100% 5%);
  }

  @keyframes translateRightToLeft {
    from {
      transform: translateY(100%) scale(0.3);
    }
    to {
      transform: translateY(0) scale(1);
    }
  }
</style>