<script>
import { store } from '../store';
import { router } from '../router.js';

export default {
    props: {
        storeObj: Object,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <footer>
        <div class="footer-top">
            <div class="team-icons">
                <ul>
                    <li>
                        <img src="../assets/img/1.png" alt="">
                    </li>
                </ul>
            </div>
        </div>

        <ul>
            <li v-for="item in store.menu" :key="item">
                <router-link :to="{ name: item.routeName }">
                    {{ item.title }}
                </router-link>
            </li>
            <li>
                <!-- TEST -->
                <h1>{{ storeObj.menu[2].title }}</h1>
            </li>
        </ul>
    </footer>
</template>

<style scoped lang="scss">
// debug
footer {
    transform: translateY(300px);
    background-color: lightslategray;

    .footer-top {

        .team-icons {
            width: 80%;
            display: flex;
            justify-content: center;
            background-color: lightseagreen;
            margin: 0 auto;
        }
    }
}
</style>