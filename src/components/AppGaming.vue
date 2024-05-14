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
            <div class="w-50 position-relative thumb rounded-4 text-white">
                <!-- client -->
                <div class="position-absolute left-0 bottom-0 p-3 h-50">
                    <div class="d-flex align-items-center">
                        <!-- client img -->
                        <div class="img-user me-2">
                            <img :src="`http://localhost:5173/src/assets/img/${clients[0].imgUrl}.png`"
                                class="img-fluid" :alt="clients[0].name">
                        </div>
                        <section>
                            <!-- name -->
                            <h6 class="m-0">{{ this.clients[0].name }}</h6>
                            <p class="m-0">{{ this.clients[0].description }}</p>
                        </section>
                    </div>
                    <!-- news -->
                    <section>
                        <h2 class="fw-bold mb-4">Assassain Creed 5 Most Amazing Fact That You Never Known
                            Before.
                        </h2>
                        <p>
                            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante sum
                            primis in
                            faucibus orci luctus amet nisl tempus et ultrices posuere cubilia Curae....
                        </p>
                        <button class="btn py-3 px-2">Read More &RightArrow; </button>
                    </section>
                </div>
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

.thumb{
    height: 760px;
    background-image: url("../assets/img/newsleft.png");
    background-image: cover;
    background-position: center;
}

.img-user{
    width: 60px;
    height: 60px;
}
</style>