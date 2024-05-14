<script>
import PlayButton from "/src/components/PlayButton.vue"

export default {
    components: {
        PlayButton,
    },
    data() {
        return {
            person:[
                {
                    portfolioImg: "team1",
                    name: "Cristiano Messi",
                    role: "CEO/Founder",
                },
                {
                    portfolioImg:"team2",
                    name: "Sergio Neymar",
                    role: "Programmer",
                },
                {
                    portfolioImg:"team3",
                    name: "Antonella Roccuzzo",
                    role: "Project Manager",
                },
                {
                    portfolioImg: "team4",
                    name: "Lionel Ramos",
                    role: "Game Designer",
                },
            ]
            
        }
    },
    methods: {
        getPic(element) {
            return new URL(`../../assets/img/${element}.png`, import.meta.url).href
        },
        getPerson(){
            console.log(this.person);
        }
    }
}
</script>

<template>
    <div class="container-fluid">
        <div class="container">
            <!-- HEADER -->
            <div class="row">
                <div class="col mt-5">
                    <div class="d-flex justify-content-between">
                        <div class="w-50 ms-mg">
                            <h5 class="ms-green"> Team Members </h5>
                            <span class="ms-fs fw-bold text-white">Our Experts Team Members </span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /HEADER -->
            <button @click="getPerson">person</button>
            <!-- MAIN -->
            <div class="row gap-4 mt-5 justify-content-center">
                <div class="col" v-for="pers in person" :key="pers">
                    <div class="card">
                        <img :src="`http://localhost:5173/src/assets/img/${pers.portfolioImg}.png`" class="img-fluid"
                            :alt="element">
                        <div class="card-body">
                            <h2 class="card-title">{{ pers.name }}</h2>
                            <p class="card-text">{{ pers.role }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /MAIN -->
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;


.container-fluid {
    background-color: $purple;
    height: 100vh;
}

.ms-green {
    color: $green
}

.ms-fs {
    font-size: 3rem;
}

.ms-mg {
    margin-top: 0px;
}

.col {
    width: calc(100% / 4 - 50px);
}
</style>