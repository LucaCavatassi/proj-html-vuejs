<script>
export default {
    data() {
        return {
            cards: [
                {
                    imgUrl: "small1",
                    title: "Ghost Rider Retrunsg",
                    description: "Pellentesque in ipsum id orci porta dapibus. Proin ins eget tortor risus. in sollicitfdudin molestie malesuada... ",
                },
                {
                    imgUrl: "small2",
                    title: "League of Legends",
                    description: "Pellentesque in ipsum id orci porta dapibus. Proin ins eget tortor risus. in sollicitfdudin molestie malesuada... ",
                },
                {
                    imgUrl: "small3",
                    title: "Mortal Combat X",
                    description: "Pellentesque in ipsum id orci porta dapibus. Proin ins eget tortor risus. in sollicitfdudin molestie malesuada... ",
                },
            ],
            clients: [
                {
                    imgUrl: "client1",
                    name: "Zalatan Suwarge",
                    description: "25 October, 2022",
                },
                {
                    imgUrl: "client2",
                    name: "Rajita Raw",
                    description: "25 October, 2022",
                },
            ],
            clientIndex: [0, 1, 0],
        }
    },
}
</script>

<template>
    <div class="bg-primary">
        <!-- container -->
        <div class="container">

            <!-- inner container left -->
            <div class="w-50">
                <img src="../assets/img/newsleft.png" alt="">
                <!-- client -->
                <div>
                    <!-- client img -->
                    <div>
                        <img :src="`http://localhost:5173/src/assets/img/${clients[0].imgUrl}.png`" class="img-fluid"
                            :alt="clients[0].name">
                    </div>
                    <section>
                        <!-- name -->
                        <h6>{{ this.clients[0].name }}</h6>
                        <p>{{ this.clients[0].description }}</p>
                    </section>
                </div>
                <!-- news -->
                <section>
                    <h2 class="fw-semibold fs-50 mb-4">Assassain Creed 5 Most Amazing Fact That You Never Known Before.
                    </h2>
                    <p>
                        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante sum primis in
                        faucibus orci luctus amet nisl tempus et ultrices posuere cubilia Curae....
                    </p>
                    <button class="btn p-2 py-3 fs-5">Read More &RightArrow; </button>
                </section>
            </div>

            <!-- inner container right -->
            <div>
                <div class="card mb-3" v-for="(card, index) in cards" :key="index">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img :src="`http://localhost:5173/src/assets/img/${card.imgUrl}.png`" class="img-fluid"
                                :alt="card.title">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{{ card.title }}</h5>
                                <p class="card-text">{{ card.description }}</p>
                                <div>
                                    <!-- client img -->
                                    <div>
                                        <img :src="`http://localhost:5173/src/assets/img/${clients[this.clientIndex[index]].imgUrl}.png`"
                                            class="img-fluid" :alt="clients.name">
                                    </div>
                                    <section>
                                        <!-- name -->
                                        <h6>{{ this.clients[this.clientIndex[index]].name }}</h6>
                                        <p>{{ this.clients[this.clientIndex[index]].description }}</p>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

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
</style>