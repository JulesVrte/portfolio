<template>
    <form class="flex flex-col xl:w-1/3 w-2/3 pb-[24px] gap-4 mb-[64px]" action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="7ef51caf-1c6a-4e79-ba25-c72b0a03041d">
      <div class="flex flex-col">
        <label class="label" for="name">{{ $t('form.name')}}</label>
        <input class="input" type="text" name="name" :placeholder="$t('placeholder.name')" required />
      </div>
      <div class="flex flex-col">
        <label class="label" for="email">{{ $t('form.email') }}</label>
        <input class="input" type="email" name="email" :placeholder="$t('placeholder.email')" required />
      </div>
      <div class="flex flex-col">
        <label class="label" for="message">{{ $t('form.message') }}</label>
        <textarea class="input h-[200px]" name="message" required></textarea>
      </div>
      <button class="rounded-[10px] border-[#A6BBCC] border-solid border-[1px] h-[50px] px-4 bg-black text-white dark:bg-white dark:text-black" type="submit">{{ $t('form.submit') }}</button>
    </form>
</template>