<script setup>
    import Separator from './separator.vue';
    import ContactForm from './contact-form.vue';
</script>

<template>
    <div class="section contact">
        <Separator title="contact" />
        <ContactForm />
    </div>
</template>

<style>
    .contact {
        border: none;
        position: relative;
        overflow: visible;

    }

    .contact::before {
        z-index: 0;
        position: absolute;
        width: 800px;
        height: 400px;
        content: '';
        background-image: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(166,187,204,1) 100%);
        position: absolute;
        border-radius: 20% 30% 80% 10% ;
        filter: blur(150px);
        top: -25%;
        left: 50%;
        transform: translate(-10%, -50%);
        transition: 1s;
    }
</style>