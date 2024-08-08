<script setup>
    import Separator from './separator.vue';
    import ProjectsSlider from './projects-slider.vue';
    import projects from '~/assets/projects.js';
</script>

<template>
    <div class="section projects">
        <Separator title="projects" />
        <ProjectsSlider class="autoBlur" :projects="projects" />
    </div>
</template>

<style scoped>
    .projects {
        position: relative;
        overflow: visible;
    }

    .projects::before {
        width: 800px;
        height: 400px;
        content: '';
        background-image: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(166,187,204,1) 100%);
        position: absolute;
        border-radius: 20% 30% 80% 10% ;
        filter: blur(150px);
        top: 50%;
        left: 50%;
        transform: translate(-10%, -50%);
        transition: 1s;
        z-index: 0;
    }

    @media screen and (max-width: 767px) {
        .projects::before {
            width: 200px;
            height: 200px;
            content: '';
            background-image: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(166,187,204,1) 100%);
            position: absolute;
            border-radius: 20% 30% 80% 10% ;
            filter: blur(150px);
            top: 50%;
            left: 50%;
            transform: translate(-10%, -50%);
            transition: 1s;
            z-index: 0;
        }
    }

</style>
