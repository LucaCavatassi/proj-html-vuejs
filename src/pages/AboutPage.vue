<script>
import AppAboutSection from '../components/AppAboutSection.vue';
import AppHero from '../components/AppHero.vue';
import AppTeam from '../components/AppTeam.vue';
import AppTestimonials from '../components/AppTestimonials.vue';
import AppPortfolio from '../components/AppPortfolio.vue';
import { store } from "../store";

export default {
    props: {
        title: String
    },
    components:{
        AppHero,
        AppAboutSection,
        AppTeam,
        AppTestimonials,
        AppPortfolio,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div>
        <AppHero :page="store"/>
        <AppAboutSection />
        <AppTeam/>
        <AppTestimonials/>
        <AppPortfolio />
    </div>
</template>

<style lang="scss" scoped>
</style>