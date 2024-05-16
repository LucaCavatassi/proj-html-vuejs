<script>
export default {
    data() {
        return{

            isPUBG: true,
            isAC: true,
            isCD: true,
            isMCX: true,
            isAll: true,

            games: ["PUBG Battlegrounds", "Assassin's Creed", "Call Of Duty", "Mortal Combat X"],
            description: "Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo.",

            portFolio: [
                {
                    teamName: "Ninja Gaming",
                    teamImg: "1",
                    state: "Italia"
                },
                {
                    teamName: "King Gaming",
                    teamImg: "2",
                    state: "USA"
                },
                {
                    teamName: "Skull Gaming",
                    teamImg: "3",
                    state: "UK"
                },
                {
                    teamName: "Panda Gaming",
                    teamImg: "4",
                    state: "China"
                },
                {
                    teamName: "Witch Gaming",
                    teamImg: "5",
                    state: "Spain"
                },
                {
                    teamName: "Astro Gaming",
                    teamImg: "6",
                    state: "France"
                },
            ]
        }
    },

    methods: {
        getPic(name) {
            return new URL(`../assets/img/${name}.png`, import.meta.url).href
        },

        pubgFilter () {
            this.isPUBG = true;
            this.isAC = false;
            this.isCD = false;
            this.isMCX = false;
            this.isAll = false;
        },

        acFilter () {
            this.isPUBG = false;
            this.isAC = true;
            this.isCD = false;
            this.isAll = false;
            this.isMCX = false;
        },

        codFilter () {
            this.isPUBG = false;
            this.isAC = false;
            this.isCD = true;
            this.isMCX = false;
            this.isAll = false;
        },

        mcxFilter () {
            this.isPUBG = false;
            this.isAC = false;
            this.isCD = false;
            this.isMCX = true;
            this.isAll = false;

        },

        showAll () {
            this.isPUBG= true;
            this.isAC= true;
            this.isCD= true;
            this.isMCX= true;
            this.isAll= true;
        }
    }
}
</script>

<template>
    <div class="container-fluid">
            <div class="container py-5">
                <div class="row flex-column">
                    <div class="text-center"> 
                        <span class="msgreen">Trending Battle</span>
                        <h1 class="text-white">Upcoming Match</h1>
                    </div>
                    <div class="filter-buttons p-3 d-flex justify-content-center gap-2">
                        <button @click="showAll" :class="{ msgreen: isAll}">ALL</button>
                        <button @click="pubgFilter" :class="{ msgreen: isPUBG}">PUBG</button>
                        <button @click="codFilter" :class="{ msgreen: isCD}">COD</button>
                        <button @click="acFilter" :class="{ msgreen: isAC}">AC</button>
                        <button @click="mcxFilter" :class="{ msgreen: isMCX}">MCX</button>
                    </div>
                    <div v-if="isMCX" class="col">
                        <div class="container">
                            <div class="row">

                                <!-- FIGHTERS -->
                                <div class="col-6 d-flex align-items-center">
                                    <div class="cards-container d-flex gap-2 flex-grow-1">
                                        <!-- FIGHTER 1 -->
                                        <div class="ms-card d-flex flex-column">
                                            <img :src="getPic(this.portFolio[1].teamImg)" class="card-img-top" alt="...">
                                            <div class="card-body p-2" >
                                                <h5 class="card-sub-title">{{ this.portFolio[1].state }}</h5>
                                                <h3 class="card-title fw-bold">{{ this.portFolio[1].teamName }}</h3>
                                            </div>
                                        </div>
                                        <!-- /FIGHTER 1 -->
                                        <!-- VS -->
                                        <div class="vs-container d-flex justify-content-center align-items-center">
                                            <div class="vs-badge text-center d-flex align-items-center flex-grow-1 justify-content-center rounded">
                                                <span class="text-center msgreen fs-2">VS</span>
                                            </div>
                                        </div>
                                        <!-- /VS -->
                                        <!-- FIGHTER 2 -->
                                        <div class="ms-card d-flex flex-column">
                                            <img :src="getPic(this.portFolio[5].teamImg)" class="card-img-top" alt="...">
                                            <div class="card-body p-2">
                                                <h5 class="card-sub-title">{{ this.portFolio[5].state }}</h5>
                                                <h3 class="card-title fw-bold">{{ this.portFolio[5].teamName }}</h3>
                                            </div>
                                        </div>
                                        <!-- /FIGHTER 2 -->
                                    </div>
                                </div>
                                <!-- /FIGHTERS -->

                                <!-- GAME -->
                                <div class="col-3 d-flex flex-column justify-content-center flex-grow-1">
                                    <h1 class="fw-bold text-white fs-2">
                                        {{ this.games[3]}}
                                    </h1>
                                    <span class="text-white"> {{ this.description }}</span>
                                </div>
                                <!-- /GAME -->

                                <!-- MINIBADGE -->
                                <div class="col-2 d-flex flex-column justify-content-center align-items-center px-0 py-5 my-5 mx-3 rounded">
                                    <div class="card-info pt-3 pb-3">
                                        <h1 class="fw-bold fs-3 mb-0 text-center">9.45</h1>
                                        <span class="fw-semibold d-block text-center">1st November, 2022</span>
                                    </div>
                                    <div class="buttons d-flex gap-2 justify-content-center">
                                        <button class="card-btn"><i class="fa-brands fa-youtube"></i></button>
                                        <button class="card-btn"><i class="fa-solid fa-message"></i></button>
                                    </div>
                                </div>
                                <!-- /MINIBADGE -->
                            </div>
                        </div>
                    </div>

                    <div v-if="isPUBG" class="col">
                        <div class="container">
                            <div class="row">

                                <!-- FIGHTERS -->
                                <div class="col-6 d-flex align-items-center">
                                    <div class="cards-container d-flex gap-2 flex-grow-1">
                                        <!-- FIGHTER 1 -->
                                        <div class="ms-card d-flex flex-column">
                                            <img :src="getPic(this.portFolio[4].teamImg)" class="card-img-top" alt="...">
                                            <div class="card-body p-2">
                                                <h5 class="card-sub-title">{{ this.portFolio[4].state }}</h5>
                                                <h3 class="card-title fw-bold">{{ this.portFolio[4].teamName }}</h3>
                                            </div>
                                        </div>
                                        <!-- /FIGHTER 1 -->
                                        <!-- VS -->
                                        <div class="vs-container d-flex justify-content-center align-items-center">
                                            <div class="vs-badge text-center d-flex align-items-center flex-grow-1 justify-content-center rounded">
                                                <span class="text-center msgreen fs-2">VS</span>
                                            </div>
                                        </div>
                                        <!-- /VS -->
                                        <!-- FIGHTER 2 -->
                                        <div class="ms-card d-flex flex-column">
                                            <img :src="getPic(this.portFolio[2].teamImg)" class="card-img-top" alt="...">
                                            <div class="card-body p-2">
                                                <h5 class="card-sub-title">{{ this.portFolio[2].state }}</h5>
                                                <h3 class="card-title fw-bold">{{ this.portFolio[2].teamName }}</h3>
                                            </div>
                                        </div>
                                        <!-- /FIGHTER 2 -->
                                    </div>
                                </div>
                                <!-- /FIGHTERS -->

                                <!-- GAME -->
                                <div class="col-3 d-flex flex-column justify-content-center flex-grow-1">
                                    <h1 class="fw-bold text-white fs-2">
                                        {{ this.games[0]}}
                                    </h1>
                                    <span class="text-white"> {{ this.description }}</span>
                                </div>
                                <!-- /GAME -->

                                <!-- MINIBADGE -->
                                <div class="col-2 d-flex flex-column justify-content-center align-items-center px-0 py-5 my-5 mx-3 rounded">
                                    <div class="card-info pt-3 pb-3">
                                        <h1 class="fw-bold fs-3 mb-0 text-center">9.45</h1>
                                        <span class="fw-semibold d-block text-center">1st November, 2022</span>
                                    </div>
                                    <div class="buttons d-flex gap-2 justify-content-center">
                                        <button class="card-btn"><i class="fa-brands fa-youtube"></i></button>
                                        <button class="card-btn"><i class="fa-solid fa-message"></i></button>
                                    </div>
                                </div>
                                <!-- /MINIBADGE -->
                            </div>
                        </div>
                    </div>

                    <div v-if="isPUBG" class="col">
                        <div class="container">
                            <div class="row">

                                <!-- FIGHTERS -->
                                <div class="col-6 d-flex align-items-center">
                                    <div class="cards-container d-flex gap-2 flex-grow-1">
                                        <!-- FIGHTER 1 -->
                                        <div class="ms-card d-flex flex-column">
                                            <img :src="getPic(this.portFolio[2].teamImg)" class="card-img-top" alt="...">
                                            <div class="card-body p-2">
                                                <h5 class="card-sub-title">{{ this.portFolio[2].state }}</h5>
                                                <h3 class="card-title fw-bold">{{ this.portFolio[2].teamName }}</h3>
                                            </div>
                                        </div>
                                        <!-- /FIGHTER 1 -->
                                        <!-- VS -->
                                        <div class="vs-container d-flex justify-content-center align-items-center">
                                            <div class="vs-badge text-center d-flex align-items-center flex-grow-1 justify-content-center rounded">
                                                <span class="text-center msgreen fs-2">VS</span>
                                            </div>
                                        </div>
                                        <!-- /VS -->
                                        <!-- FIGHTER 2 -->
                                        <div class="ms-card d-flex flex-column">
                                            <img :src="getPic(this.portFolio[5].teamImg)" class="card-img-top" alt="...">
                                            <div class="card-body p-2">
                                                <h5 class="card-sub-title">{{ this.portFolio[5].state }}</h5>
                                                <h3 class="card-title fw-bold">{{ this.portFolio[5].teamName }}</h3>
                                            </div>
                                        </div>
                                        <!-- /FIGHTER 2 -->
                                    </div>
                                </div>
                                <!-- /FIGHTERS -->

                                <!-- GAME -->
                                <div class="col-3 d-flex flex-column justify-content-center flex-grow-1">
                                    <h1 class="fw-bold text-white fs-2">
                                        {{ this.games[0]}}
                                    </h1>
                                    <span class="text-white"> {{ this.description }}</span>
                                </div>
                                <!-- /GAME -->

                                <!-- MINIBADGE -->
                                <div class="col-2 d-flex flex-column justify-content-center align-items-center px-0 py-5 my-5 mx-3 rounded">
                                    <div class="card-info pt-3 pb-3">
                                        <h1 class="fw-bold fs-3 mb-0 text-center">9.45</h1>
                                        <span class="fw-semibold d-block text-center">1st November, 2022</span>
                                    </div>
                                    <div class="buttons d-flex gap-2 justify-content-center">
                                        <button class="card-btn"><i class="fa-brands fa-youtube"></i></button>
                                        <button class="card-btn"><i class="fa-solid fa-message"></i></button>
                                    </div>
                                </div>
                                <!-- /MINIBADGE -->
                            </div>
                        </div>
                    </div>

                    <div v-if="isAC" class="col">
                        <div class="container">
                            <div class="row">

                                <!-- FIGHTERS -->
                                <div class="col-6 d-flex align-items-center">
                                    <div class="cards-container d-flex gap-2 flex-grow-1">
                                        <!-- FIGHTER 1 -->
                                        <div class="ms-card d-flex flex-column">
                                            <img :src="getPic(this.portFolio[0].teamImg)" class="card-img-top" alt="...">
                                            <div class="card-body p-2">
                                                <h5 class="card-sub-title">{{ this.portFolio[0].state }}</h5>
                                                <h3 class="card-title fw-bold">{{ this.portFolio[0].teamName }}</h3>
                                            </div>
                                        </div>
                                        <!-- /FIGHTER 1 -->
                                        <!-- VS -->
                                        <div class="vs-container d-flex justify-content-center align-items-center">
                                            <div class="vs-badge text-center d-flex align-items-center flex-grow-1 justify-content-center rounded">
                                                <span class="text-center msgreen fs-2">VS</span>
                                            </div>
                                        </div>
                                        <!-- /VS -->
                                        <!-- FIGHTER 2 -->
                                        <div class="ms-card d-flex flex-column">
                                            <img :src="getPic(this.portFolio[4].teamImg)" class="card-img-top flex-grow-1" alt="...">
                                            <div class="card-body p-2">
                                                <h5 class="card-sub-title">{{ this.portFolio[4].state }}</h5>
                                                <h3 class="card-title fw-bold">{{ this.portFolio[4].teamName }}</h3>
                                            </div>
                                        </div>
                                        <!-- /FIGHTER 2 -->
                                    </div>
                                </div>
                                <!-- /FIGHTERS -->

                                <!-- GAME -->
                                <div class="col-3 d-flex flex-column justify-content-center flex-grow-1">
                                    <h1 class="fw-bold text-white fs-2">
                                        {{ this.games[1]}}
                                    </h1>
                                    <span class="text-white"> {{ this.description }}</span>
                                </div>
                                <!-- /GAME -->

                                <!-- MINIBADGE -->
                                <div class="col-2 d-flex flex-column justify-content-center align-items-center px-0 py-5 my-5 mx-3 rounded">
                                    <div class="card-info pt-3 pb-3">
                                        <h1 class="fw-bold fs-3 mb-0 text-center">9.45</h1>
                                        <span class="fw-semibold d-block text-center">1st November, 2022</span>
                                    </div>
                                    <div class="buttons d-flex gap-2 justify-content-center">
                                        <button class="card-btn"><i class="fa-brands fa-youtube"></i></button>
                                        <button class="card-btn"><i class="fa-solid fa-message"></i></button>
                                    </div>
                                </div>
                                <!-- /MINIBADGE -->
                            </div>
                        </div>
                    </div>

                    <div v-if="isCD" class="col">
                        <div class="container">
                            <div class="row">

                                <!-- FIGHTERS -->
                                <div class="col-6 d-flex align-items-center">
                                    <div class="cards-container d-flex gap-2 flex-grow-1">
                                        <!-- FIGHTER 1 -->
                                        <div class="ms-card d-flex flex-column">
                                            <img :src="getPic(this.portFolio[3].teamImg)" class="card-img-top" alt="...">
                                            <div class="card-body p-2">
                                                <h5 class="card-sub-title">{{ this.portFolio[3].state }}</h5>
                                                <h3 class="card-title fw-bold">{{ this.portFolio[3].teamName }}</h3>
                                            </div>
                                        </div>
                                        <!-- /FIGHTER 1 -->
                                        <!-- VS -->
                                        <div class="vs-container d-flex justify-content-center align-items-center">
                                            <div class="vs-badge text-center d-flex align-items-center flex-grow-1 justify-content-center rounded">
                                                <span class="text-center msgreen fs-2">VS</span>
                                            </div>
                                        </div>
                                        <!-- /VS -->
                                        <!-- FIGHTER 2 -->
                                        <div class="ms-card d-flex flex-column">
                                            <img :src="getPic(this.portFolio[0].teamImg)" class="card-img-top" alt="...">
                                            <div class="card-body p-2">
                                                <h5 class="card-sub-title">{{ this.portFolio[0].state }}</h5>
                                                <h3 class="card-title fw-bold">{{ this.portFolio[0].teamName }}</h3>
                                            </div>
                                        </div>
                                        <!-- /FIGHTER 2 -->
                                    </div>
                                </div>
                                <!-- /FIGHTERS -->

                                <!-- GAME -->
                                <div class="col-3 d-flex flex-column justify-content-center flex-grow-1">
                                    <h1 class="fw-bold text-white fs-2">
                                        {{ this.games[2]}}
                                    </h1>
                                    <span class="text-white"> {{ this.description }}</span>
                                </div>
                                <!-- /GAME -->

                                <!-- MINIBADGE -->
                                <div class="col-2 d-flex flex-column justify-content-center align-items-center px-0 py-5 my-5 mx-3 rounded">
                                    <div class="card-info pt-3 pb-3">
                                        <h1 class="fw-bold fs-3 mb-0 text-center">9.45</h1>
                                        <span class="fw-semibold d-block text-center">1st November, 2022</span>
                                    </div>
                                    <div class="buttons d-flex gap-2 justify-content-center">
                                        <button class="card-btn"><i class="fa-brands fa-youtube"></i></button>
                                        <button class="card-btn"><i class="fa-solid fa-message"></i></button>
                                    </div>
                                </div>
                                <!-- /MINIBADGE -->
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </div>
        
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

// CUSTOM
.msgreen{
        color: $green!important
    }

.ms-card {
    width: calc(100% / 3);
    height: 100%;
}

// CUSTOM BTN
.card-btn {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: hidden;
    background-color: $light-green;
}

// CONTAINER
.container-fluid {
    background-color: $dark-purple
}

// COLS
.col {
    margin: 20px;
    color: white;
    background-color: $purple;
    border: 1px solid $light-green;
    border-radius: 15px
}

.col-2 {
    background-color: $dark-purple;
}

// FILTERS
.filter-buttons {
    button{
        background: transparent;
        border: none;
        color: white;
        font-weight: bold;
    }

    button:hover {
        cursor: pointer;
    }
}

// HOVER
.col:hover {
    background-color: $violet;
}
.col:hover .col-2  {
    background-color: $light-green;
}
.col:hover .card-btn  {
    background-color: $dark-purple;
    color: white
}

// TEXT
.text-center{
    h1 {
        font-size: 3rem;
        font-weight: bold;
    }
    span {
        font-weight: bolder;
    }
}

// ALL-CARDS 
.cards-container {
    padding: 40px 0;
}

// CARD IMG
.card-img-top {
    background-color: $dark-purple;
    padding: 20px;
    aspect-ratio: 1;
    img {
        width: 100%;
        object-fit: contain;
    }
}
// CARD TEXT
.card-body {
    background-color: $light-violet;
    height: calc(20%);
    .card-sub-title {
        color: $green;
        font-size: .9rem
    }
    .card-title{
        color: white;

    }
}

// VS
.vs-container{
    width: calc(100% / 3);
}
.vs-badge {
    height: 50%;
    padding: 30px 0;
    background-color: $dark-purple;
    
}

</style>


<!-- QUANDO CLICCO IL NOME DEL GIOCO ALLORA LA VARIABILE TRUE DI TALE GIOCO DIVENTA VERA E TUTTE LE ALTRE FALSE -->