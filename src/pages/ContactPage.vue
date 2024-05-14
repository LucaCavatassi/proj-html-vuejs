<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    mounted() {
        console.log("funziona: ", this.store.menu[this.store.activeIndex].title);
    }
}
</script>

<template>
    <div>
        <h1>contatti</h1>
    </div>
</template>

<style lang="">

</style>