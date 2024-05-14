<script>
import AppHero from '../components/AppHero.vue';
import { store } from "../store";

export default {
    props: {
        title: String
    },
    components:{
        AppHero,
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
    </div>
</template>

<style lang="scss" scoped>
</style>