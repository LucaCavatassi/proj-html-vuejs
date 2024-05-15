<script>
import PlayButton from "/src/components/PlayButton.vue"

export default {
    components: {
        PlayButton, 
    },
    data (){
        return{
            portfolioImg: ["protfolio1","protfolio2","protfolio3","protfolio4"],
            cards_pos: 0,
        }
    },
    computed: {
        cardsToDisplay() {
            return [...this.portfolioImg, ...this.portfolioImg].slice(this.cards_pos, this.cards_pos + 4)
        },
    },
    methods: {
        getPic(name) {
            return new URL(`../assets/img/${name}.png`, import.meta.url).href
        },
        prev() {
            this.cards_pos = (this.cards_pos + this.portfolioImg.length - 1) % this.portfolioImg.length;
        },
        next() {
            this.cards_pos = (this.cards_pos + 1) % this.portfolioImg.length;
        },
    },
    mounted(){
    setInterval(this.next,2000);
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
                            <h5 class="ms-green">Trending Games</h5>
                            <span class="ms-fs fw-bold text-white">Choose Who's The Best In The World!</span>
                        </div>

                        <div class="w-50 ms-mg text-white">
                            <button @click="prev">
                                &lt;&lt;
                            </button>
                            <button @click="next">
                                &gt;&gt;
                            </button>
                        
                        </div>
                    </div>
                </div>
            </div>
            <!-- /HEADER -->

            <!-- MAIN -->
            <div class="row gap-4 mt-5 justify-content-center">
                <div class="col" v-for="element in cardsToDisplay">
                    <div class="card">
                        <img :src="getPic(element)" class="img-fluid" :alt="element">
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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

    .ms-green{
        color: $green
    }

    .ms-fs{
        font-size: 3rem;
    }

    .ms-mg {
        margin-top: 0px;
    }

    .col {
        width: calc(100% / 4 - 50px);
    }
</style>