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
    mounted(){
        console.log("funziona: ", this.store.menu[this.store.activeIndex].title);
    }
}
</script>

<template>
    <div>
        <h1>{{ this.store.menu[this.activeIndex] }}</h1>
        <AppHero :page="store"/>
    </div>
</template>

<style lang="scss" scoped>
</style>