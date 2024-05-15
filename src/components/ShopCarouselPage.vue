<script>
export default {
    data (){
        return{
            imgUrl: "../src/assets/img/shop-bg.png",
            isShown: true,
            cards_pos: 0,
            portFolio: [
                {
                    name: "Sony PS5",
                    img: "s1",
                    score: "",
                    originalPrice: 599,
                    discountedPrice: 399
                },

                {
                    name: "Gaming Mouse",
                    img: "s2",
                    score: "",
                    originalPrice: 599,
                    discountedPrice: 399
                },

                {
                    name: "Visore Gaming",
                    img: "s3",
                    score: "",
                    originalPrice: 599,
                    discountedPrice: 399
                },

                {
                    name: "Cuffie Beats",
                    img: "s4",
                    score: "",
                    originalPrice: 599,
                    discountedPrice: 399
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

    mounted(){
        // setInterval(this.next,2500);
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
                            <h5 class="ms-green">Gamer Shop</h5>
                            <span class="ms-fs fw-bold text-white">Explore Our Shop</span>
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
                <div class="col" v-for="element in cardsToDisplay">

                    <!-- IMG -->
                    <div class="card">
                        <img :src="getPic(element.img)" :alt="element">
                    </div>
                    <!-- /IMG -->


                    
                    <!-- INFO -->
                    <div class="ms-card-body">
                        <div class="card-container">
                            <div class="row align-items-center">
                                <div class="col-4 ps-3">
                                    <div class="img-cont d-flex justify-content-center align-items-center">
                                        <img :src="getPic(element.teamImg)" alt="">
                                    </div>
                                </div>
                                <div class="col-6 flex-grow-1 ps-1">
                                    <div class="txt-cont"> 
                                        <h5 class="mb-0">{{ element.name }}</h5>
                                        <p class="card-text">{{ element.description }}</p>
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
    // CUSTOM
    .ms-green{
        color: $green
    }

    .ms-bg-green{
        background-color: $green
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
    .container-fluid {
        background-color: $purple;
        height: 100vh;
    }

    .col {
        width: calc(100% / 4);
        position: relative;
    }

    // HOVER
    .col:hover {
        cursor: pointer;
    }

    .col:hover .card-container{
        background-color: $light-green;

    }

    .col:hover .playBadge {
        display: block;
    }


    .all-cont{
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
    .ms-card-body{
        width: 100%;
        margin-top: -20px;
        position: relative;
        z-index: 2;
    }

    .card-container {
        width: 90%;
        background-color: $dark-purple;
        margin: 0 auto;
        padding: 10px;
        
        .img-cont{
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

        .txt-cont{
            color: white;
            h5{
                font-size: 1.2rem;
                font-weight: bold;
            }

            p {
                font-size: 0.8rem;
            }
        }
    }


    .container-fluid {
        position: relative;
    }

    // BLACK LAYER
    .container-fluid::before {
        content: '';
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(32, 32, 70, 0.4);
        z-index: 0;
    }   

</style>