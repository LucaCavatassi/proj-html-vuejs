<script>
import AppAboutSection from '../components/AppAboutSection.vue';
import AppHero from '../components/AppHero.vue';
import { store } from "../store";

export default {
    props: {
        title: String
    },
    components:{
        AppHero,
        AppAboutSection,
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
    </div>
</template>

<style lang="scss" scoped>
</style>