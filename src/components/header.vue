<script setup>
    import Navbar from '~/components/navbar.vue';
    import Switcher from '~/components/switcher.vue';
</script>

<template>
    <header class="section relative overflow-hidden">
        <Navbar class="translateTopToBottom"/>
        <Switcher />
    </header>
</template>

<style scoped>
    .translateTopToBottom {
        animation: translateTopToBottomAnimation 0.5s ease-in-out;
    }

    @keyframes translateTopToBottomAnimation {
        from {
            transform: translateY(-200%);
        }
        to {
            transform: translateY(0);
        }
    }

</style>