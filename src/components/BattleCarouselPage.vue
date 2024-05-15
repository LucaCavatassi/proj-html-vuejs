<script>
import PlayButtonSmall from "./PlayButtonSmall.vue"

export default {
    components: {
        PlayButtonSmall, 
    },
    data (){
        return{
            imgUrl: "../src/assets/img/bg2.png",
            cards_pos: 0,
            portFolio: [
                {
                    name: "Ninja Warrior Gaming",
                    img: "protfolio1",
                    description: "Donec sollicitudin malesuada.",
                    teamImg: "1"
                },

                {
                    name: "Ninja Warrior Gaming",
                    img: "protfolio1",
                    description: "Donec sollicitudin malesuada.",
                    teamImg: "1"
                },

                {
                    name: "Witch Gaming",
                    img: "protfolio2",
                    description: "Donec sollicitudin malesuada.",
                    teamImg: "5"
                },

                {
                    name: "Skull-G Gaming",
                    img: "protfolio4",
                    description: "Donec sollicitudin malesuada.",
                    teamImg: "3"
                },

            ]
        }
    },
    computed: {
        cardsToDisplay() {
            return [...this.portFolio, ...this.portFolio].slice(this.cards_pos, this.cards_pos + 3)
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

    mounted(){
        setInterval(this.next,2500);
    },
}
</script>

<template>
    <div class="container-fluid" :style='{ backgroundImage: `url("${imgUrl}")`, backgroundSize: "cover" }'>
        <div class="container">
            <!-- HEADER -->
            <div class="row">
                <div class="col mt-5">
                    <div class="d-flex justify-content-between">

                        <!-- TEXT -->
                        <div class="w-50 ms-mg">
                            <h5 class="ms-green">Upcoming Match</h5>
                            <span class="ms-fs fw-bold text-white">Keep Eyes & Manage upcoming Battle</span>
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
                <div class="col-4" v-for="element in cardsToDisplay">
                    <!-- INFO -->
                    <div class="ms-card-body">
                        <div class="card pb-4">
                            <img :src="getPic(element.teamImg)" class="card-img-top mt-4 m-auto" alt="...">
                            <div class="card-body text-center">
                                <h5 class="card-title">{{ element.name }}</h5>
                                <div class="buttons d-flex gap-2 justify-content-center">
                                    <button class="card-btn"><i class="fa-brands fa-youtube"></i></button>
                                    <button class="card-btn"><i class="fa-solid fa-message"></i></button>
                                </div>

                                <div class="card-info pt-3 pb-3">
                                    <h1 class="fw-bold mb-0">9.45</h1>
                                    <span class="fw-semibold">1st November, 2022</span>
                                </div>
                                <a href="#" class="btn btn-primary">View More</a>
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
    // CUSTOM
    .ms-green{
        color: $green
    }

    .ms-bg-green{
        background-color: $green;
    }

    .ms-fs{
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
    .container {
        padding-bottom: 60px;
    }

    // BTN
    .btn {
        background-color: $light-green;
        font-weight: bold;
        border: hidden;
        padding: 15px 30px;
        color: $purple;
    }

    .btn:hover {
    background: transparent;
    border: 1px solid $light-green;
    color: $light-green;
    }

    // CARDS
    .card {
        border: hidden;
        background-color: $purple;
        color: white;
        img {
            width: 85%;
            aspect-ratio: 1;
        }
        .card-img-top{
            background-color: $dark-purple;
            border-radius: 10px;
            padding: 60px;
        }

        .card-body {
            h5 {
                font-size: 1.5rem;
                font-weight: bold;
            }
        }
    }
    

    .card-btn{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        border: hidden;
        background-color: $light-green;
    }

</style>