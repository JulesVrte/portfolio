<script setup>

    import Separator from './separator.vue';
</script>

<template>
    <div class="section">
        <Separator title="projects" />
        <div class="carousel ">
            <div class="list-project">
                <div class="item-project">
                    <img src="../assets/images/projects/1.png" alt="img 1" />
                    <div class="intro">
                        <div class="title">
                            Projet 1
                        </div>
                        <div class="topic">
                            topic 1
                        </div>
                        <div class="description">
                            Description du projet 1
                        </div>
                        <button class="see-more">see more</button>
                    </div>
                    <div class="details">
                        <div class="title">
                            Projet 1
                        </div>
                        <div class="description">
                            Description du projet 1
                        </div>
                        <div class="techs">
                            tech 1 details
                        </div>
                        <div class="preview">
                            <img src="../assets/images/projects/1.png" alt="preview 1" />
                        </div>
                    </div>
                </div>
                <div class="item-project">
                    <img src="../assets/images/projects/2.png" alt="img 2" />
                    <div class="intro">
                        <div class="title">
                            Projet 2
                        </div>
                        <div class="topic">
                           topic 2 
                        </div>
                        <div class="description">
                            Description du projet 2
                        </div>
                        <button class="see-more">see more</button>
                    </div>
                    <div class="details">
                        <div class="title">
                            Projet 2
                        </div>
                        <div class="description">
                            Description du projet 2
                        </div>
                        <div class="techs">
                            tech 2 details
                        </div>
                        <div class="preview">
                            <img src="../assets/images/projects/2.png" alt="preview 2" />
                        </div>
                    </div>
                </div>
                <div class="item-project">
                    <img src="../assets/images/projects/3.png" alt="img 3" />
                    <div class="intro">
                        <div class="title">
                            Projet 3
                        </div>
                        <div class="topic">
                           topic 3
                        </div>
                        <div class="description">
                            Description du projet 3
                        </div>
                        <button class="see-more">see more</button>
                    </div>
                    <div class="details">
                        <div class="title">
                            Projet 3
                        </div>
                        <div class="description">
                            Description du projet 3
                        </div>
                        <div class="techs">
                            tech 3 details
                        </div>
                        <div class="preview">
                            <img src="../assets/images/projects/3.png" alt="preview 3" />
                        </div>
                    </div>
                </div>
                <div class="item-project">
                    <img src="../assets/images/projects/4.png" alt="img 4" />
                    <div class="intro">
                        <div class="title">
                            Projet 4
                        </div>
                        <div class="topic">
                            topic 4 
                        </div>
                        <div class="description">
                            Description du projet 4
                        </div>
                        <button class="see-more">see more</button>
                    </div>
                    <div class="details">
                        <div class="title">
                            Projet 4
                        </div>
                        <div class="description">
                            Description du projet 4
                        </div>
                        <div class="techs">
                            tech 4 details
                        </div>
                        <div class="preview">
                            <img src="../assets/images/projects/4.png" alt="preview 4" />
                        </div>
                    </div>
                </div>
                <div class="item-project">
                    <img src="../assets/images/projects/5.png" alt="img 5" />
                    <div class="intro">
                        <div class="title">
                            Projet 5
                        </div>
                        <div class="topic">
                            topic 5
                        </div>
                        <div class="description">
                            Description du projet 5
                        </div>
                        <button class="see-more">see more</button>
                    </div>
                    <div class="details">
                        <div class="title">
                            Projet 5
                        </div>
                        <div class="description">
                            Description du projet 5
                        </div>
                        <div class="techs">
                            tech 5 details
                        </div>
                        <div class="preview">
                            <img src="../assets/images/projects/5.png" alt="preview 5" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="arrows">
                <button id="prev"><</button>
                <button id="back">Go back &#8599</button>
                <button id="next">></button>
            </div>
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

    .carousel .list-project .item-project img {
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

</style>