<script>
import { store } from '../store';
import { router } from '../router.js';

export default {
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <footer>
        <h1>test footer</h1>

        <ul>
            <li v-for="item in store.menu" :key="item">
                <router-link :to="{ name: item.routeName }">
                    {{ item.title }}
                </router-link>
            </li>
        </ul>
    </footer>
</template>

<style scoped lang="scss">
// debug
footer {
    transform: translateY(300px);
    background-color: lightslategray;
}
</style>