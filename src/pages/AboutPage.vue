<script>
import AppAboutSection from '../components/AppAboutSection.vue';
import AppHero from '../components/AppHero.vue';
import AppPortfolioSection from '../components/AppPortfolioSection.vue';
import { store } from "../store";

export default {
    props: {
        title: String
    },
    components:{
        AppHero,
        AppAboutSection,
        AppPortfolioSection,
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
    </div>
</template>

<style lang="scss" scoped>
</style>