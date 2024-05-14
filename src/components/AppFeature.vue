<script>
export default {
    data() {
        return {
            cards: [
                {
                    title: "Live Streaming",
                    description: "Nulla porttitor accumsan tincidunt. Pellentesque in. ",
                },
                {
                    title: "Gaming News",
                    description: "Nulla porttitor accumsan tincidunt. Pellentesque in. ",
                },
                {
                    title: "Great Tournament",
                    description: "Nulla porttitor accumsan tincidunt. Pellentesque in. ",
                },
                {
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
                <img src="..." alt="prova">
            </div>
            <!-- inner container right -->
            <div class="w-50">
                <!-- titles & paragraph-->
                <section>
                    <h6 class="fw-semibold text-success">Our Extrem Feature</h6>
                    <h2 class="fw-semibold fs-50 mb-4">The Best Gaming Arena On The World!</h2>
                    <p>
                        Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed,
                        convallis at tellus. Cras ultricies ligula sed magna dictum porta.Praesent sapien massa, convallis.
                    </p>
                </section>
                <!-- arrow slider -->
                <div>
                    <span>
                        <i class="fa-solid fa-arrow-left"></i>
                    </span>
                    <span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </span>
                </div>
                <!-- slider -->
                <div>
                    <div class="card" v-for="card in cards" :key="card">
                        <!-- img circle -->
                        <div>
                            <img src="..." class="card-img-top" alt="...">
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
    </div>
</template>

<style lang="scss"></style>