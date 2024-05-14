<script>
import HeroOverlay from "/src/components/HeroOverlay.vue"

export default {
    components: {
        HeroOverlay,
    },

    data() {
        return {
            bannerPhotos: ["banner1", "banner2", "banner3"],
            img: "banner-img"
        }
    },

    methods: {
        getPic(name) {
            return new URL(`../assets/img/${name}.png`, import.meta.url).href
        },
    }
}
</script>

<template>
    <HeroOverlay />
    <div class="container-fluid px-0">
        <div class="row">
            <div class="col px-0">
                <!-- OVERLAY-HERO -->
                <!-- /OVERLAY-HERO -->

                <div class="position-absolute z-1 d-flex w-100 h-100 justify-content-end align-items-center pt-5">
                    <img class="ms_img img-fluid rounded-5" :src="getPic(img)" alt="">
                </div>

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
.carousel-inner {
    position: relative;

    img {
        height: 100vh;
        object-fit: cover;
    }

}

// BLACK LAYER
.carousel-inner::after {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgba(39, 39, 39, 0.4);
    z-index: 3;
}
// /BLACK LAYER

.ms_img{
    transform: rotate(-3deg);
    width: 35%;
    margin-right: 9rem;
    margin-top: 4rem;
}
</style>