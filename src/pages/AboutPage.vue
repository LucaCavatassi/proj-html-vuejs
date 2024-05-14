<script>
import AppAboutSection from '../components/AppAboutSection.vue';
import AppHero from '../components/AppHero.vue';
import AppPortfolioSection from '../components/AppPortfolioSection.vue';
import AppTestimonials from '../components/AppTestimonials.vue';
import { store } from "../store";

export default {
    props: {
        title: String
    },
    components:{
        AppHero,
        AppAboutSection,
        AppPortfolioSection,
        AppTestimonials,
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
        <AppPortfolioSection/>
        <AppTestimonials/>
    </div>
</template>

<style lang="scss" scoped>
</style>