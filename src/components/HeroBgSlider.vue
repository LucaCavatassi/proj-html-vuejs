<script>
import HeroOverlay from "/src/components/HeroOverlay.vue"

export default {
    components: {
        HeroOverlay,
    },

    data (){
        return{
            bannerPhotos: ["banner1", "banner2", "banner3"]
        }
    },

    methods:{
        getPic (name) {
            return new URL(`../assets/img/${name}.png`, import.meta.url).href
        },
    }
}
</script>

<template>
    <div class="container-fluid px-0">
        <div class="row">
            <div class="col">
                <!-- OVERLAY-HERO -->
                <HeroOverlay />
                <!-- /OVERLAY-HERO -->

                <!-- CAROUSEL -->
                <div id="bg_carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img :src="getPic(bannerPhotos[0])" class="d-block w-100" :alt="bannerPhotos[0]">
                        </div>
                        <div class="carousel-item">
                            <img :src="getPic(bannerPhotos[1])" class="d-block w-100" :alt="bannerPhotos[1]">
                        </div>
                        <div class="carousel-item">
                            <img :src="getPic(bannerPhotos[2])" class="d-block w-100" :alt="bannerPhotos[2]">
                        </div>
                    </div>
                </div>
                <!-- /CAROUSEL -->
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.carousel-inner{
    position: relative;
    img{
        height: 100vh;
        object-fit: cover;
    }
    
}

// BLACK LAYER
    .carousel-inner::after {
        content:'';
        position:absolute;
        left:0px;
        top:0px;
        width:100%;
        height:100%;
        background: rgba(0, 0, 0, 0.4);
    }
// /BLACK LAYER

</style>