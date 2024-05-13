<script>
import { store } from '../store';
import {router} from '../router.js';

export default {
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div>
        <header>
            <ul>
                <li v-for="item in store.menu" :key="item">
                    <router-link :to="{ name: item.routeName }">
                        {{ item.title }}
                    </router-link>
                </li>
            </ul>
        </header>
    </div>
</template>

<style lang="scss"></style>