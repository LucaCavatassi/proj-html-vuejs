<script>
import PlayButtonSmall from "./PlayButtonSmall.vue"

export default {
    components: {
        PlayButtonSmall,
    },
    data() {
        return {
            isShown: true,
            cards_pos: 0,
            portFolio: [
                {
                    name: "Cristiano Messi",
                    img: "team1",
                    description: "Lorem ipsum dolor sit.",
                    teamImg: "1"
                },

                {
                    name: "Sergio Neymar",
                    img: "team2",
                    description: "Lorem ipsum dolor sit.",
                    teamImg: "5"
                },

                {
                    name: "Antonella Roccuzzo",
                    img: "team3",
                    description: "Lorem ipsum dolor sit.",
                    teamImg: "6"
                },

                {
                    name: "Lionel Ramos",
                    img: "team4",
                    description: "Lorem ipsum dolor sit.",
                    teamImg: "3"
                },

            ]
        }
    },
    computed: {
        cardsToDisplay() {
            return [...this.portFolio, ...this.portFolio].slice(this.cards_pos, this.cards_pos + 4)
        },
    },

    methods: {
        getPic(name) {
            return new URL(`../assets/img/${name}.png`, import.meta.url).href
        },
        prev() {
            this.cards_pos = (this.cards_pos + this.portFolio.length - 1) % this.portFolio.length;
        },
        next() {
            this.cards_pos = (this.cards_pos + 1) % this.portFolio.length;
        },
    },

    mounted() {
        setInterval(this.next, 2500);
    },
}
</script>

<template>
    <div class="container-fluid">
        <div class="container">
            <!-- HEADER -->
            <div class="row">
                <div class="col mt-5">
                    <div class="d-flex justify-content-between">

                        <!-- TEXT -->
                        <div class="w-50 ms-mg">
                            <h5 class="ms-green">Trending Games</h5>
                            <span class="ms-fs fw-bold text-white">Choose Who's The Best In The World!</span>
                        </div>
                        <!-- TEXT -->

                        <!-- BUTTONS -->
                        <div class="w-50 ms-mg text-white d-flex gap-2 justify-content-end align-items-end">
                            <!-- PREV -->
                            <button class="ms-btn rounded-circle" @click="prev">
                                <i class="fa-solid fa-arrow-left"></i>
                            </button>
                            <!-- PREV -->

                            <!-- NEXT -->
                            <button class="ms-btn rounded-circle ms-bg-green text-white" @click="next">
                                <i class="fa-solid fa-arrow-right"></i>
                            </button>
                            <!-- NEXT -->
                        </div>
                        <!-- /BUTTONS -->

                    </div>
                </div>
            </div>
            <!-- /HEADER -->

            <!-- MAIN CARDS -->
            <div class="row mt-5 justify-content-center">
                <div class="col" v-for="element in cardsToDisplay" :key="element">

                    <!-- IMG -->
                    <div class="card">
                        <img :src="getPic(element.img)" :alt="element">
                    </div>
                    <!-- /IMG -->



                    <!-- INFO -->
                    <div class="ms-card-body">
                        <div class="card-container">
                            <div class="row align-items-center">
                                <div class="col-12 flex-grow-1 ps-1">
                                    <div class="txt-cont">
                                        <h5 class="mb-0 fs-4 text-center">{{ element.name }}</h5>
                                        <p class="card-text fs-6 text-center">{{ element.description }}</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <!-- /INFO -->

                </div>
            </div>
            <!-- /MAIN CARDS-->
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;
@use "../style/partials/mixin" as *;

// CUSTOM
.ms-green {
    color: $green
}

.ms-bg-green {
    background-color: $green
}

.ms-fs {
    font-size: 3rem;
}

.ms-mg {
    margin-top: 0px;
}

.ms-btn {
    height: 40px;
    width: 40px;
    border: hidden;
}

// SIZING
.container-fluid {
    background-color: $purple;
    padding-bottom: 100px;
}

.col {
    width: calc(100% / 4);
    position: relative;
}

// HOVER
.col:hover {
    cursor: pointer;
}

.col:hover .card-container {
    background-color: $light-green;

}

.col:hover .playBadge {
    display: block;
}


.all-cont {
    position: relative;
}

// CARDS
.card {
    border: hidden;
    position: relative;
}

.newBadge {
    position: absolute;
    color: black;
    background-color: $light-green;
    padding: 3px 10px;
}

.playBadge {
    position: absolute;
    top: 5px;
    right: 5px;
    display: none;
}

// CARD BODY
.ms-card-body {
    width: 100%;
    position: relative;
    z-index: 2;
}

.card-container {
    background-color: #152258;
    @include flex(row, center, center);
    padding: 30px;

    .img-cont {
        width: 60px;
        height: 60px;
        background-color: $light-purple;
        border-radius: 50%;
        padding: 10px;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .txt-cont {
        color: white;


        h5 {
            font-size: 1.2rem;
            font-weight: bold;
        }

        p {
            font-size: 0.8rem;
        }
    }
}
</style>