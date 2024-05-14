<script>
import PlayerButton from "./PlayerButton.vue";

export default {
    components: {
        PlayerButton
    },

    data(){
        return{
            
        }
    },
}
</script>

<template>
    <!-- OVERLAY-HERO -->
    <div class="container">
        <div class="row overlay h-100 w-50">
            <div class="col ms_margin h-100 d-flex flex-column justify-content-center">
                <h5 class="ms-green">WELCOME TO RAGX</h5>

                <!-- TEXT CAROUSEL -->
                <div id="bg_carousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <h1 class="text-white fw-bold my-hero-fs">WE FALL. THEN <br> WE RISE.</h1>
                        </div>
                        <div class="carousel-item">
                            <h1 class="text-white fw-bold my-hero-fs">YOU SPEAK OF JUSTICE.</h1>
                        </div>
                        <div class="carousel-item">
                            <h1 class="text-white fw-bold my-hero-fs">THEY NOT GONNA WIN.</h1>
                        </div>
                    </div>
                </div>
                <!-- /TEXT CAROUSEL -->

                <!-- BUTTONS -->
                <div class="d-flex gap-4 align-items-center">
                    <button class="btn p-2 py-3 fs-5">Read More &RightArrow; </button>
                    <PlayerButton/>
                </div>  
                <!-- /BUTTONS -->
            </div>
        </div>
    </div>
    <!-- /OVERLAY-HERO -->
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

.overlay {
    position: absolute; 
    z-index: 999;

    .ms_margin{
        padding-top: 100px;
    }

    .ms-green{
        color: $green
    }

    .my-hero-fs{
        font-size: 5rem;
    }

    .btn {
        background-color: $light-green;
        font-weight: bold;
        width: 30%;
    }

    .btn:hover {
    background: transparent;
    border: 1px solid $light-green;
    color: $light-green;
    }

    .carousel-fade .active.carousel-item-start, .carousel-fade .active.carousel-item-end {
        transition: opacity .8s 0s;
    }
}
</style>