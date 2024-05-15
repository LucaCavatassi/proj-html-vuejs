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
    <div class="ms-bg-dark-purple">
        <!-- container -->
        <div class="container py-200">

            <!-- inner container left -->
            <div class="w-50 left-container thumb position-relative rounded-4 text-white">
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
            <div class="w-50 right-container">
                <div class="mb-3" v-for="(card, index) in cards" :key="index">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img :src="`http://localhost:5173/src/assets/img/${card.imgUrl}.png`" class="img-fluid h-100"
                                :alt="card.title">
                        </div>
                        <div class="col-md-8">
                            <div class="text-white ms-bg-purple rounded-end-4 p-3 h-100">
                                <h5 class="card-title mb-1 fw-bold">{{ card.title }}</h5>
                                <p class="card-text mb-2">{{ card.description }}</p>
                                <div class="client">
                                    <!-- client img -->
                                    <div>
                                        <img :src="`http://localhost:5173/src/assets/img/${clients[this.clientIndex[index]].imgUrl}.png`"
                                            class="img-fluid ms-md-icon" :alt="clients.name">
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
@use "../style/partials/mixin" as *;

.container{
    @include flex(row, center, center);
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

.thumb{
    background-image: url("../assets/img/newsleft.png");
    background-image: cover;
    background-position: center;
}

.img-user{
    width: 60px;
    height: 60px;
}

.client{
    @include flex(row, start, center);
}

.left-container, .right-container{
    height: 760px;
    padding: 20px;
}

.right-container {
    @include flex(column, space-between, center)
}
</style>