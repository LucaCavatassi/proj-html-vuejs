<script>
import PlayButton from "/src/components/PlayButton.vue"
export default {
    components: {
        PlayButton,
    },
    data() {
        return {
            card: [
                {
                    title: "League of Legends",
                    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                    imgUrl: "small1"
                },
                {
                    title: "Call of Duty",
                    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                    imgUrl: "small2"
                },
            ]
        }
    },
    methods: {
        getPic(name) {
            return new URL(`../assets/img/v-${name}.png`, import.meta.url).href
        },
    }
}
</script>

<template>
    <div class="bg-streaming">
        <!-- container -->
        <div class="container py-150 position-relative z-3">
            <!-- inner container left -->
            <div class="w-50 h-100 container-video">
                <div class="thumb-video rounded-4">
                    <div class="position-relative z-3 text-white button">
                        <PlayButton />
                        <p class="mt-2">League of Legends</p>
                    </div>
                </div>
            </div>
            <!-- inner container right -->
            <div class="w-50 text-white">
                <!-- titles -->
                <h6 class="fw-semibold text-success">Live Streaming</h6>
                <h2 class="fw-semibold fs-50 mb-4">Checkout Our Live Streaming</h2>
                <!-- slider -->
                <div class="slider-container">
                    <div class="outer-card-container">
                        <div class="card-container" v-for="(curCard, index) in card" :key="index">
                            <div>
                                <img :src="getPic(curCard.imgUrl)" alt="" class="img-fluid card-item">
                            </div>
                            <section>
                                <h3 class="card-title text-center">{{curCard.title}}</h3>
                                <p class="card-text text-center">{{ curCard.desc }}</p>
                            </section>
                        </div>
                    </div>
                    <!-- arrow slider -->
                    <div class="arrow-container w-100">
                        <span class="me-2 mb-3 ms-icon bg-white text-black rounded-circle">
                            <i class="fa-solid fa-arrow-left"></i>
                        </span>
                        <span class="me-5 mb-3 ms-icon ms-bg-light-green rounded-circle">
                            <i class="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
        @use "../style/partials/variables" as *;
        @use "../style/partials/mixin" as *;
        .bg-streaming{
            background-image: url("../assets/img/live-streming-bg.png");
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            position: relative;
        }
        .bg-streaming::before {
            position: absolute;
            content: "";
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba($color: $purple, $alpha: 0.5);
            z-index: 1;
            border-radius: 15px;
        }
        .container{
            @include flex(row, center, center);

            .container-video {
                    @include flex(row, center, center);
                }
            
                .thumb-video {
                    background-image: url("../assets/img/v-1.png");
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    position: relative;
                    padding: 140px 200px;
            
                    .ms-lg-icon {
                        position: relative;
                        z-index: 10;
                    }
                }
            
                .thumb-video::before {
                    position: absolute;
                    content: "";
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background-color: rgba($color: $purple, $alpha: 0.1);
                    z-index: 2;
                    border-radius: 15px;
                }
            
                .button {
                    @include flex(column, center, center);
                }

                .slider-container{
                    @include flex(column-reverse, center, center);

                    .outer-card-container{
                        @include flex(row, center, center);
                    }

                    .card-container{
                        @include flex(column, center, center);
                        .card-item{
                            width: 270px;
                            height: 180px;
                        }

                        .card{
                            border-radius: 20px;
                        }
                    }
                    .arrow-container{
                        @include flex(row, end, center);

                        span{
                            @include flex(row, center, center);
                        }
                    }
                }
        }

        
</style>