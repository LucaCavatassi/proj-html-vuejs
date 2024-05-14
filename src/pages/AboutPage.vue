<script>
import AppHero from '../components/AppHero.vue';
import { store } from "../store";

export default {
    props: {
        title: String,
    },
    components:{
        AppHero,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getProp(){
            console.log(this.title);
        }
    }
}
</script>

<template>
    <div>
        <button @click="getProp">prova</button>
        <AppHero :page="store"/>
    </div>
</template>

<style lang="scss" scoped>
</style>