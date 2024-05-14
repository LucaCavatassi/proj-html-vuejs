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
    <div class="bg-danger">
        <!-- container -->
        <div class="container">
            
            <!-- inner container left -->
            <div class="w-50">
                <section>
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
            <div>
                <div class="card" v-for="card in cards" :key="card">
                    <!-- img circle -->
                    <div class="ms-bg-purple">
                        <img :src="`http://localhost:5173/src/assets/img/${card.imgUrl}.png`" class="img-fluid" :alt="element">
                    </div>
                    <!-- card body -->
                    <div class="card-body">
                        <h3 class="card-title">{{ card.title }}</h3>
                        <p class="card-text">{{ card.description }}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss">
@use "../style/partials/variables" as *;
</style>