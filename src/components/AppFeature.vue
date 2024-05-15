<script>
export default {
    data() {
        return {
            cards: [
                {
                    imgUrl: "feature1",
                    title: "Live Streaming",
                    description: "Nulla porttitor accumsan tincidunt. Pellentesque in. ",
                },
                {
                    imgUrl: "feature2",
                    title: "Gaming News",
                    description: "Nulla porttitor accumsan tincidunt. Pellentesque in. ",
                },
                {
                    imgUrl: "feature3",
                    title: "Great Tournament",
                    description: "Nulla porttitor accumsan tincidunt. Pellentesque in. ",
                },
                {
                    imgUrl: "feature4",
                    title: "Award Cerimony",
                    description: "Nulla porttitor accumsan tincidunt. Pellentesque in. ",
                },
            ]
        }
    },
    methods: {
        getPic(element) {
            return new URL(`../../assets/img/${element}.png`, import.meta.url).href
        },
        
    },
}
</script>

<template>
    <div class="bg-features">
        <!-- container -->
        <div class="container py-200">
            <!-- inner container left -->
            <div class="w-50 position-relative z-2">
                <section class="text-white">
                    <h6 class="fw-semibold text-success">Our Extrem Feature</h6>
                    <h2 class="fw-semibold fs-50 mb-4">The Best Gaming Arena On The World!</h2>
                    <p>
                        Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed,
                        convallis at tellus. Cras ultricies ligula sed magna dictum porta.Praesent sapien massa,
                        convallis.
                    </p>
                </section>
            </div>

            <!-- inner container right -->
            <div class="card-container col-6 position-relative z-2">
                <div v-for="card in cards" :key="card" class="col-6 p-2">
                    <!-- img circle -->
                    <div class="ms-card ms-bg-light-violet text-white p-4 rounded-4">
                        <div class="ms-lg-icon ms-bg-purple p-3 rounded-circle">
                            <img :src="`http://localhost:5173/src/assets/img/${card.imgUrl}.png`" class="img-fluid"
                                :alt="element">
                        </div>
                        <!-- card body -->
                        <div class="card-body w-50">
                            <h3 class="card-title text-center">{{ card.title }}</h3>
                            <p class="card-text text-center">{{ card.description }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss">
@use "../style/partials/variables" as *;
@use "../style/partials/mixin" as *;

.bg-features{
    background-color: $light-violet;
    background-image: url("../assets/img/Vector.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;


    .container{
        @include flex(row, center, center)
    }

    .card-container{
        @include flex(row, center, center);
        flex-wrap: wrap;
        padding: 25px;
        .ms-card{
            @include flex(column, center, center);
        }
    }
}

.bg-features::before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba($color: black, $alpha: 0.5);
    z-index: 1;
    border-radius: 15px;
}
</style>