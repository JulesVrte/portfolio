<script setup>
    import { ref } from 'vue';

    defineProps({
        projects: Array
    })

    const carousel = ref(null);
    const listProject = ref(null);
    const itemProject = ref([]);
    const nextButton = ref(null);
    const prevButton = ref(null);

    
    const updateItemProject = () => {
    itemProject.value = listProject.value.querySelectorAll('.item-project');
    };

    let UnacceptClick

    const showSlider = (type) => {
        nextButton.value.pointerEvents = 'none';
        prevButton.value.pointerEvents = 'none';

        carousel.value.classList.remove('next', 'prev');
        if (type === 'next' && listProject.value && itemProject.value.length > 0) {
            listProject.value.appendChild(itemProject.value[0]);
            updateItemProject(); 
            carousel.value.classList.add('next');

        } else if (type === 'prev' && listProject.value && itemProject.value.length > 0) {
            let positionLast = itemProject.value.length - 1;
            listProject.value.prepend(itemProject.value[positionLast]);
            updateItemProject();
            carousel.value.classList.add('prev');
        }
        clearTimeout(UnacceptClick);
        UnacceptClick = setTimeout(() => {
            nextButton.value.pointerEvents = 'auto';
            prevButton.value.pointerEvents = 'auto';
        }, 2000);
    };

    const ShowDetails = () => {
        carousel.value.classList.add('show-details');
    }

    const BackToSlider = () => {
        carousel.value.classList.remove('show-details');
    }
</script>

<template lang="">
    <div class="carousel" ref="carousel">
        <div class="list-project" ref="listProject">
            <div class="item-project" v-for="project in projects" :key="project.title" ref="itemProject">
                <div class=container-img>
                    <img :src="project.img" alt="img 1" />
                </div>
                <div class="intro">
                    <div class="title">
                        {{ $t('projects.title') }}
                    </div>
                    <div class="topic">
                        {{ project.topic }}
                    </div>
                    <div class="description">
                        {{ $t(project.description )}}
                    </div>
                    <button class="see-more" @click="ShowDetails">{{ $t('projects.see_more') }} &#8599</button>
                </div>
                <div class="details">
                    <div class="topic">
                        {{ project.topic }}
                    </div>
                    <div class="description">
                        {{ $t(project.description )}}
                    </div>
                    <div class="techs" >
                        <div v-for="tech in project.techs" :key="tech"><p>{{ tech }}</p></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="arrows">
            <button id="prev" @click="showSlider('prev')" ref="nextButton"><</button>
            <button id="back" @click="BackToSlider" >{{ $t('projects.go_back') }} &#8599</button>
            <button id="next" @click="showSlider('next')" ref="prevButton">></button>
        </div>
    </div>
</template>

<style>
    :root {
        --item1-transform: translate(-100%, -5%) scale(1.5);
        --item1-filter: blur(30px);
        --item1-z-index: 11;
        --item1-opacity: 0;

        --item2-transform: translate(0, 0);
        --item2-filter: blur(0);
        --item2-z-index: 10;
        --item2-opacity: 1;

        --item3-transform: translate(50%, 10%) scale(0.8);
        --item3-filter: blur(10px);
        --item3-z-index: 9;
        --item3-opacity: 1;

        --item4-transform: translate(90%, 20%) scale(0.5);
        --item4-filter: blur(20px);
        --item4-z-index: 8;
        --item4-opacity: 1;

        --item5-transform: translate(120%, 30%) scale(0.3);
        --item5-filter: blur(40px);
        --item5-z-index: 7;
        --item5-opacity: 0;
    }
    .carousel {
        margin-top: -50px;
        height: 800px;
        position: relative;
        overflow: hidden;
        width: 100%;
    }

    .carousel .list-project {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 1140px;
        max-width: 90%;
        height: 80%;
    }

    .carousel .list-project .item-project {
        position: absolute;
        left: 0;
        top: 0;
        width: 70%;
        height: 100%;
    }

    .carousel .list-project .item-project .container-img {
        height: 400px;
        overflow: hidden;
        width: 70%;
        position: absolute;
        right: -50px;
        top: 50%;
        transform: translateY(-50%);
    }
    
    .carousel .list-project .item-project .details {
        opacity: 0;
        pointer-events: none;
    }

    .carousel .list-project .item-project .intro {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 400px;
        opacity: 0;
        left: -15%;
        pointer-events: none;
    }

    .carousel .list-project .item-project:nth-child(2) .intro {
        opacity: 1;
        pointer-events: auto;
        transition: opacity 0.5s;
    }

    .carousel .list-project .item-project:nth-child(2){
        transform: var(--item2-transform);
        filter: var(--item2-filter);
        z-index: var(--item2-z-index);
        opacity: var(--item2-opacity);
    }

    .carousel .list-project .item-project:nth-child(1){
        transform: var(--item1-transform);
        filter: var(--item1-filter);
        z-index: var(--item1-z-index);
        opacity: var(--item1-opacity);
        pointer-events: none;
    }

    .carousel .list-project .item-project:nth-child(3){
        transform: var(--item3-transform);
        filter: var(--item3-filter);
        z-index: var(--item3-z-index);
        opacity: var(--item3-opacity);
    }

    .carousel .list-project .item-project:nth-child(4){
        transform: var(--item4-transform);
        filter: var(--item4-filter);
        z-index: var(--item4-z-index);
        opacity: var(--item4-opacity);
    }

    .carousel .list-project .item-project:nth-child(5){
        transform: var(--item5-transform);
        filter: var(--item5-filter);
        z-index: var(--item5-z-index);
        opacity: var(--item5-opacity);
        pointer-events: none;
    }

    .arrows {
        position: absolute;
        bottom: 10px;
        width: 1140px;
        max-width: 90%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .arrows #prev,
    .arrows #next {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-family: monospace;
        font-size: large;
        font-weight: bold;
        border: 1px solid #555;
    }

    .arrows #back {
        font-family: Popins;
        font-weight: 500;
        border: none;
        letter-spacing: 3px;
        border-bottom: 1px solid #555;
        background-color: transparent;
        opacity: 0;
        pointer-events: none;
    }

    .carousel .list-project .item-project .title {
        font-size: 2em;
        line-height: 0.8em;

    }

    .carousel .list-project .item-project .topic {
        font-size: 4em;
        font-weight: 500;
    }

    .carousel .list-project .item-project .description {
        font-size: small
    }

    .carousel .list-project .item-project .see-more {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #555;
        font-family: 'Poppins';
        font-weight: bold;
        margin-top: 1.2em;
        padding: 5px 0px;
    }

    @keyframes showContent {
        from {
            transform: translateY(50%);
            filter: blur(30px);
        } to {
            filter: blur(0);
            transform: translateY(0);
            opacity: 1;
        }
    }

    .carousel .list-project .item-project:nth-child(2) .intro .title,
    .carousel .list-project .item-project:nth-child(2) .intro .topic,
    .carousel .list-project .item-project:nth-child(2) .intro .description,
    .carousel .list-project .item-project:nth-child(2) .intro .see-more {
        opacity: 0;
        animation: showContent 0.5s 0.7s ease-in-out 1 forwards;
    }


    .carousel .list-project .item-project:nth-child(2) .intro .topic {
        animation-delay: 0.9s;
    }

    .carousel .list-project .item-project:nth-child(2) .intro .description {
        animation-delay: 1.1s;
    }

    .carousel .list-project .item-project:nth-child(2) .intro .see-more {
        animation-delay: 1.3s;
    }

    .carousel.next .list-project .item-project:nth-child(1) {
        animation: positionItem2 0.5s ease-in-out 1 forwards;
    }

    @keyframes positionItem2 {
        from {
            transform: var(--item2-transform);
            filter: var(--item2-filter);
            z-index: var(--item2-z-index);
            opacity: var(--item2-opacity);
        }
    }

    .carousel.next .list-project .item-project:nth-child(2) {
        animation: positionItem3 0.7s ease-in-out 1 forwards;
    }

    @keyframes positionItem3 {
        from {
            transform: var(--item3-transform);
            filter: var(--item3-filter);
            z-index: var(--item3-z-index);
            opacity: var(--item3-opacity);
        }
    }

    .carousel.next .list-project .item-project:nth-child(3) {
        animation: positionItem4 0.9s ease-in-out 1 forwards;
    }

    @keyframes positionItem4 {
        from {
            transform: var(--item4-transform);
            filter: var(--item4-filter);
            z-index: var(--item4-z-index);
            opacity: var(--item4-opacity);
        }
    }
    
    .carousel.next .list-project .item-project:nth-child(4) {
        animation: positionItem5 1.1s ease-in-out 1 forwards;
    }

    @keyframes positionItem5 {
        from {
            transform: var(--item5-transform);
            filter: var(--item5-filter);
            z-index: var(--item5-z-index);
            opacity: var(--item5-opacity);
        }
    }

    .carousel.prev .list-project .item-project:nth-child(2) {
        animation: positionItem1 0.5s ease-in-out 1 forwards;
    }

    @keyframes positionItem1 {
        from {
            transform: var(--item1-transform);
            filter: var(--item1-filter);
            z-index: var(--item1-z-index);
            opacity: var(--item1-opacity);
        }
    }

    .carousel.prev .list-project .item-project:nth-child(3) {
        animation: positionItem2 0.7s ease-in-out 1 forwards;
    }

    .carousel.prev .list-project .item-project:nth-child(4) {
        animation: positionItem3 0.9s ease-in-out 1 forwards;
    }

    .carousel.prev .list-project .item-project:nth-child(5) {
        animation: positionItem4 1.1s ease-in-out 1 forwards;
    }

    .carousel.show-details .list-project .item-project:nth-child(3),
    .carousel.show-details .list-project .item-project:nth-child(4) {
        left: 100%;
        opacity: 0;
        pointer-events: none;
    }

    .carousel .list .item {
        transition: left 0.5s, opacity 0.5s;
    }

    .carousel.show-details .list-project .item-project:nth-child(2) {
        width: 100%;
    }

    .carousel.show-details .list-project .item-project:nth-child(2) .intro{
        opacity: 0;
        pointer-events: none;
    }

    .carousel .list-project .item-project:nth-child(2) .container-img {
        transition: right 0.5s;
        overflow: hidden;
    }

    .carousel.show-details .list-project .item-project:nth-child(2) .container-img {
        right: 45%;
    }

    .carousel.show-details .list-project .item-project:nth-child(2) .details {
        opacity: 1;
        pointer-events: auto;
        width: 40%;
        position: absolute;
        right: 0;
        text-align: right;
        top: 50%;
        transform: translateY(-50%);
    }

    .carousel.show-details .list-project .item-project:nth-child(2) .container-img {
        overflow: auto;
    }

    .carousel.show-details .list-project .item-project:nth-child(2) .details .title {
        font-size: 4em;
    }

    .carousel.show-details .list-project .item-project:nth-child(2) .details .techs {
        display: flex;
        gap: 10px;
        width: 100%;
        border-top: 1px solid #555;
        margin-top: 20px;
    }

    .carousel.show-details .list-project .item-project:nth-child(2) .details .techs div{
        width: 90px;
        text-align: center;
        flex-shrink: 0;
    }

    .carousel.show-details .list-project .item-project:nth-child(2) .details .techs div p:nth-child(1) {
        font-weight: bold;
    }

    .carousel.show-details .list-project .item-project:nth-child(2) .details .topic,
    .carousel.show-details .list-project .item-project:nth-child(2) .details .description,
    .carousel.show-details .list-project .item-project:nth-child(2) .details .techs {
        opacity: 0;
        animation: showContent 0.5s 1s ease-in-out 1 forwards;
    }

    .carousel.show-details .list-project .item-project:nth-child(2) .details .description {
        animation-delay: 1.2s;
    }

    .carousel.show-details .list-project .item-project:nth-child(2) .details .techs {
        animation-delay: 1.4s;
    }

    .carousel.show-details #next,
    .carousel.show-details #prev {
        opacity: 0;
        pointer-events: none;
    }

    .carousel.show-details #back {
        font-family: 'Poppins';
        font-weight: bold;
        opacity: 1;
        pointer-events: auto;
    }

    @media screen and (max-width: 1441px) {
        .carousel .list-project .item-project{
            left: 18%;
        }
    }

    @media screen and (max-width: 991px) {
        .carousel .list-project .item-project {
            width: 90%;
        }

        .carousel .list-project .item-project .intro {
            left: 0;
        }

        .carousel .list-project .item-project .container-img {
            right: 0;
            width: 40%;
        }

        .carousel .list-project .item-project .details .techs {
            overflow: auto;
        }
    }

    @media screen and (max-width: 767px) {
        .carousel .list-project .item-project {
            width: 100%;
        }

        .carousel {
            height: 600px;
        }

        .carousel .list-project {
            height: 100%;
        }

        .carousel .list-project .item-project .intro {
            width: 50%;
            left: 0%;
        }

        .carousel .list-project .item-project .container-img {
            right: 0;
            width: 40%;
        }

        .carousel.show-details .list-project .item-project:nth-child(2) .details .title {
            font-size: 2em;
        }

        .carousel.carousel.show-details .list-project .item-project:nth-child(2) .details .description{
            height: 100px;
            overflow: auto;
        }
    }

</style>