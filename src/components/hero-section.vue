<template>
    <div class="m-12 flex flex-col-reverse md:flex-row md:w-full md:items-center md:justify-center gap-10">
        <div class="showScale flex flex-col">
            <h2 class="font-medium md:text-7xl text-6xl font-Poppins dark:text-white leading-tight ml-6" v-html="$t('hero.name')"></h2>
            
            <h3 class="font-light text-3xl md:w-2/3 font-Poppins dark:text-white leading-tight ml-6" v-html="$t('hero.presentation')" />
    
            <a class="md:w-2/3 mt-6 md:ml-6 mx-6 text-center bg-black text-white font-medium rounded-button py-[12px] px-[40px] dark:bg-white dark:text-black" href="#" >{{ $t('hero.download_cv') }}</a>
        </div>

        <img class="translateRightToLeft w-[500px] h-[500px]" :src="heroImg" alt="heroImage"/>
    </div>
</template>


<script setup>
    import heroImg from '../assets/images/hero.png'
</script>


<style scoped>
    .showScale {
        animation: showScaleAnimation 0.5s ease-in-out;
    }

    @keyframes showScaleAnimation {
        from {
            transform: scale(0.5);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }

    .translateRightToLeft {
        animation: translateRightToLeft 1.5s ease-in-out;
    }
    
    @keyframes translateRightToLeft {
        0% {
            transform: translateX(200%);
        }
        20% {
            transform: translateX(-40%)
        }
        40% {
            transform: translateX(35%);
        }
        60% {
            transform: translateX(-20%);
        }
        80% {
            transform: translateX(10%);
        }
        100% {
            transform: translateX(0);
        }
    }
    
</style>