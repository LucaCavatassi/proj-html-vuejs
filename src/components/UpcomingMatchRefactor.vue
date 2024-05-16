<script>
export default {
    props: {
        title: "String",
        subTitle: "String",
    },
    data() {
        return{
            isAll: true,
            isFilter: false,

            isPUBG: false,
            isCOD: false,
            isAC: false,
            isMCX: false,

            description: "Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo.",

            filteredArray: [],

            portFolioMatches: [
                {
                    game: "PUBG Battlegrounds",

                    teamOneName: "Ninja Gaming",
                    teamOneImg: "1",
                    teamOneState: "Italy",

                    teamTwoName: "Witch Gaming",
                    teamTwoImg: "5",
                    teamTwoState: "Spain",
                },

                {
                    
                    game: "PUBG Battlegrounds",

                    teamOneName: "King Gaming",
                    teamOneImg: "2",
                    teamOneState: "USA",

                    teamTwoName: "Panda Gaming",
                    teamTwoImg: "4",
                    teamTwoState: "China",
                },

                {

                    game: "Call Of Duty",

                    teamOneName: "Astro Gaming",
                    teamOneImg: "6",
                    teamOneState: "France",

                    teamTwoName: "Skull Gaming",
                    teamTwoImg: "3",
                    teamTwoState: "UK",
                },

                {
                    game: "Assassin's Creed",

                    teamOneName: "Ninja Gaming",
                    teamOneImg: "1",
                    teamOneState: "Italy",

                    teamTwoName: "Panda Gaming",
                    teamTwoImg: "4",
                    teamTwoState: "China",
                },

                {
                    game: "Mortal Combat X",

                    teamOneName: "Witch Gaming",
                    teamOneImg: "5",
                    teamOneState: "Spain",

                    teamTwoName: "Skull Gaming",
                    teamTwoImg: "3",
                    teamTwoState: "UK",
                },
            ]
        }
    },

    methods: {
        getPic(name) {
            return new URL(`../assets/img/${name}.png`, import.meta.url).href
        },

        pubgFilter () {
            // FLAG PER TEXT
            this.isPUBG = true,
            this.isCOD = false,
            this.isAC = false,
            this.isMCX = false,

            this.filteredArray = [];
            this.portFolioMatches.forEach((element) => {
                if (element.game === "PUBG Battlegrounds") {
                    this.isAll = false,
                    this.isFilter = true,
                    this.filteredArray.push(element)
                }  
            });
            console.log(this.filteredArray);
        },

        acFilter () {
            // FLAG PER TEXT
            this.isPUBG = false,
            this.isCOD = false,
            this.isAC = true,
            this.isMCX = false,


            this.filteredArray = [];
            this.portFolioMatches.forEach((element) => {
                if (element.game === "Assassin's Creed") {
                    this.isAll = false,
                    this.isFilter = true,
                    this.filteredArray.push(element)
                }  
            });
            console.log(this.filteredArray);
        },

        codFilter () {
            // FLAG PER TEXT
            this.isPUBG = false,
            this.isCOD = true,
            this.isAC = false,
            this.isMCX = false,

            this.filteredArray = [];
            this.portFolioMatches.forEach((element) => {
                if (element.game === "Call Of Duty") {
                    this.isAll = false,
                    this.isFilter = true,
                    this.filteredArray.push(element)
                }  
            });
            console.log(this.filteredArray);
        },

        mcxFilter () {
            // FLAG PER TEXT
            this.isPUBG = false,
            this.isCOD = false,
            this.isAC = false,
            this.isMCX = true,

            this.filteredArray = [];
            this.portFolioMatches.forEach((element) => {
                if (element.game === "Mortal Combat X") {
                    this.isAll = false,
                    this.isFilter = true,
                    this.filteredArray.push(element)
                }  
            });
            console.log(this.filteredArray);
        },

        showAll () {
            this.filteredArray = [];
            this.isAll = true;
            console.log(this.filteredArray);
        }
    }
}
</script>

<template>
    <div class="container-fluid">
            <div class="container py-5">
                <div class="row flex-column">
                    <div class="text-center"> 
                        <span class="msgreen">{{ subTitle }}</span>
                        <h1 class="text-white">{{ title }}</h1>
                    </div>
                    <div class="filter-buttons p-3 d-flex justify-content-center gap-2" >
                        <button @click="showAll" :class="{ 'msgreen' : this.isAll }">ALL</button>
                        <button @click="pubgFilter" :class="{ 'msgreen' : this.isPUBG }">PUBG</button>
                        <button @click="codFilter" :class="{ 'msgreen' : this.isCOD }">COD</button>
                        <button @click="acFilter" :class="{ 'msgreen' : this.isAC }">AC</button>
                        <button @click="mcxFilter" :class="{ 'msgreen' : this.isMCX }">MCX</button>
                    </div>

                    <!-- ALL -->
                    <div v-if="isAll" class="col" v-for="match in portFolioMatches">
                        <div class="container">
                            <div class="row">

                                <!-- FIGHTERS -->
                                <div class="col-6 d-flex align-items-center">
                                    <div class="cards-container d-flex gap-2 flex-grow-1">
                                        <!-- FIGHTER 1 -->
                                        <div class="ms-card d-flex flex-column">
                                            <img :src="getPic(match.teamOneImg)" class="card-img-top" alt="...">
                                            <div class="card-body p-2" >
                                                <h5 class="card-sub-title">{{ match.teamOneState }}</h5>
                                                <h3 class="card-title fw-bold">{{ match.teamOneName }}</h3>
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
                                            <img :src="getPic(match.teamTwoImg)" class="card-img-top" alt="...">
                                            <div class="card-body p-2">
                                                <h5 class="card-sub-title">{{ match.teamTwoState }}</h5>
                                                <h3 class="card-title fw-bold">{{ match.teamTwoName }}</h3>
                                            </div>
                                        </div>
                                        <!-- /FIGHTER 2 -->
                                    </div>
                                </div>
                                <!-- /FIGHTERS -->

                                <!-- GAME -->
                                <div class="col-3 d-flex flex-column justify-content-center flex-grow-1">
                                    <h1 class="fw-bold text-white fs-2">
                                        {{ match.game }}
                                    </h1>
                                    <span class="text-white"> {{ this.description }}</span>
                                </div>
                                <!-- /GAME -->

                                <!-- MINIBADGE -->
                                <div class="col-2 d-flex align-items-center">
                                    <div class="container-mini d-flex flex-column justify-content-center align-items-center px-0 my-5 mx-3 rounded">
                                        <div class="card-info pt-3 pb-3">
                                            <h1 class="fw-bold fs-3 mb-0 text-center">9.45</h1>
                                            <span class="fw-semibold d-block text-center">1st November, 2022</span>
                                        </div>
                                        <div class="buttons d-flex gap-2 justify-content-center">
                                            <button class="card-btn"><i class="fa-brands fa-youtube"></i></button>
                                            <button class="card-btn"><i class="fa-solid fa-message"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <!-- /MINIBADGE -->
                            </div>
                        </div>
                    </div>
                    <!-- /ALL -->


                    <!-- FILTER -->
                    <div v-if="isFilter" class="col" v-for="match in filteredArray">
                        <div class="container">
                            <div class="row">

                                <!-- FIGHTERS -->
                                <div class="col-6 d-flex align-items-center">
                                    <div class="cards-container d-flex gap-2 flex-grow-1">
                                        <!-- FIGHTER 1 -->
                                        <div class="ms-card d-flex flex-column">
                                            <img :src="getPic(match.teamOneImg)" class="card-img-top" alt="...">
                                            <div class="card-body p-2" >
                                                <h5 class="card-sub-title">{{ match.teamOneState }}</h5>
                                                <h3 class="card-title fw-bold">{{ match.teamOneName }}</h3>
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
                                            <img :src="getPic(match.teamTwoImg)" class="card-img-top" alt="...">
                                            <div class="card-body p-2">
                                                <h5 class="card-sub-title">{{ match.teamTwoState }}</h5>
                                                <h3 class="card-title fw-bold">{{ match.teamTwoName }}</h3>
                                            </div>
                                        </div>
                                        <!-- /FIGHTER 2 -->
                                    </div>
                                </div>
                                <!-- /FIGHTERS -->

                                <!-- GAME -->
                                <div class="col-3 d-flex flex-column justify-content-center flex-grow-1">
                                    <h1 class="fw-bold text-white fs-2">
                                        {{ match.game }}
                                    </h1>
                                    <span class="text-white"> {{ this.description }}</span>
                                </div>
                                <!-- /GAME -->

                                <!-- MINIBADGE -->
                                <div class="col-2 d-flex align-items-center">
                                    <div class="container-mini d-flex flex-column justify-content-center align-items-center px-0 my-5 mx-3 rounded">
                                        <div class="card-info pt-3 pb-3">
                                            <h1 class="fw-bold fs-3 mb-0 text-center">9.45</h1>
                                            <span class="fw-semibold d-block text-center">1st November, 2022</span>
                                        </div>
                                        <div class="buttons d-flex gap-2 justify-content-center">
                                            <button class="card-btn"><i class="fa-brands fa-youtube"></i></button>
                                            <button class="card-btn"><i class="fa-solid fa-message"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <!-- /MINIBADGE -->
                            </div>
                        </div>
                    </div>
                    <!-- /FILTER -->
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

.container-mini {
    background-color: $dark-purple;
    padding: 20px;
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
.col:hover .container-mini  {
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
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

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
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
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

<!-- 
Al click mostra solo quelli dove gioco === a X  -->