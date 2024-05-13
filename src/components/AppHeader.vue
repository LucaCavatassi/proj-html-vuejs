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
    <!-- container -->
    <div class="container">
        <!-- upper header -->
        <div>
            <!-- left-upper header -->
            <div>
                <!-- socials -->
                <div>
                    <!-- facebook icon -->
                    <span>
                        <i class="fa-brands fa-facebook"></i>
                    </span>
                    <!-- twitter icon -->
                    <span>
                        <i class="fa-brands fa-twitter"></i>
                    </span>
                    <!-- linkedin icon -->
                    <span>
                        <i class="fa-brands fa-linkedin"></i>
                    </span>
                    <!-- instagram icon -->
                    <span>
                        <i class="fa-brands fa-instagram"></i>
                    </span>
                </div>
                <!-- assistance phone number -->
                <div>
                    <!-- headphones icon -->
                    <span class="text-success">
                        <i class="fa-solid fa-headphones-simple"></i>
                    </span>
                    <!-- phone number -->
                    <span>
                        +880 222 333 2580
                    </span>
                </div>
            </div>
            <!-- right-upper header -->
            <div>
                <!-- brief -->
                <div>
                    <span>
                        this is <a href="#">RaxG</a>. A template for games, clans & esports
                    </span>
                </div>
                <!-- live streaming -->
                <div>
                    <a href="#">
                        <i class="fa-solid fa-message"></i>
                        Live streaming
                    </a>
                </div>
            </div>
        </div>
        <!-- lower header -->
        <header class="bg-secondary">
            <div>
                <img src="../assets/img/menulogo.png" alt="">
            </div>
            <ul>
                <li v-for="item in store.menu" :key="item">
                    <router-link :to="{ name: item.routeName }" class="text-white">
                        {{ item.title }}
                        <i class="fa-solid fa-chevron-down"></i>
                    </router-link>
                </li>
            </ul>
            <div>
                <span>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                <span>
                    <i class="fa-solid fa-cart-shopping"></i>
                </span>
            </div>
        </header>
    </div>
</template>

<style lang="scss"></style>