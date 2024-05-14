<script>
import PlayButton from "./PlayButton.vue";

export default {
    components: {
        PlayButton,
    },
    data() {
        return {
            person: [
                {
                    imgUrl: "protfolio1",
                    name: "Assassin's Creed",
                    role: "lorem ipsum dolor sit",
                },
                {
                    imgUrl: "protfolio2",
                    name: "Call of Duty",
                    role: "lorem ipsum dolor sit",
                },
                {
                    imgUrl: "protfolio3",
                    name: "Tomb Rider",
                    role: "lorem ipsum dolor sit",
                },
                {
                    imgUrl: "protfolio4",
                    name: "Mortal Combat X",
                    role: "lorem ipsum dolor sit",
                },
            ]

        }
    },
    methods: {
        getPic(element) {
            return new URL(`../../assets/img/${element}.png`, import.meta.url).href
        },
    }
}
</script>

<template>
    <div class="container-fluid">
        <div class="container">
            <!-- HEADER -->
            <div class="row">
                <div class="col mt-5">
                    <div class="d-flex justify-content-between">
                        <div class="w-50 ms-mg">
                            <h5 class="ms-green"> Trending Games </h5>
                            <span class="ms-fs fw-bold text-white">Choose Who Is The Best In World! </span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /HEADER -->
            <!-- MAIN -->
            <div class="row gap-4 mt-5 justify-content-center">
                <div class="col" v-for="pers in person" :key="pers">
                    <div class="card">
                        <img :src="`http://localhost:5173/src/assets/img/${pers.imgUrl}.png`" class="img-fluid"
                            :alt="element">
                        <div class="card-body">
                            <h2 class="card-title">{{ pers.name }}</h2>
                            <p class="card-text">{{ pers.role }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /MAIN -->
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;


.container-fluid {
    background-color: $purple;
    height: 100vh;
}

.ms-green {
    color: $green
}

.ms-fs {
    font-size: 3rem;
}

.ms-mg {
    margin-top: 0px;
}

.col {
    width: calc(100% / 4 - 50px);
}
</style>