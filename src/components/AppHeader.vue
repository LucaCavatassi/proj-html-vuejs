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
    <div class="container text-white">
        <!-- upper header -->
        <div class="d-flex ms-bg-light-purple justify-content-between py-2">
            <!-- left-upper header -->
            <div class="d-flex">
                <!-- socials -->
                <div class="ms-socials gap-3 px-3 border-end">
                    <!-- facebook icon -->
                    <span class="ms-social ms-bg-dark-purple rounded-circle">
                        <i class="fa-brands fa-facebook"></i>
                    </span>
                    <!-- twitter icon -->
                    <span class="ms-social ms-bg-dark-purple rounded-circle">
                        <i class="fa-brands fa-twitter"></i>
                    </span>
                    <!-- linkedin icon -->
                    <span class="ms-social ms-bg-dark-purple rounded-circle">
                        <i class="fa-brands fa-linkedin"></i>
                    </span>
                    <!-- instagram icon -->
                    <span class="ms-social ms-bg-dark-purple rounded-circle">
                        <i class="fa-brands fa-instagram"></i>
                    </span>
                </div>
                <!-- assistance phone number -->
                <div class="ms-assistance p-3">
                    <!-- headphones icon -->
                    <span class="text-success me-1">
                        <i class="fa-solid fa-headphones-simple"></i>
                    </span>
                    <!-- phone number -->
                    <span>
                        +880 222 333 2580
                    </span>
                </div>
            </div>
            <!-- right-upper header -->
            <div class="d-flex">
                <!-- brief -->
                <div class="ms-brief me-3">
                    <span>
                        this is <a href="#" class="text-success">RaxG.</a> A template for games, clans & esports
                    </span>
                </div>
                <!-- live streaming -->
                <div class="ms-streaming px-3 border-start">
                    <a href="#" class="bg-success ms-color-dark-purple px-3 py-2 rounded">
                        <i class="fa-solid fa-message"></i>
                        Live streaming
                    </a>
                </div>
            </div>
        </div>
        <!-- lower header -->
        <header class="ms-bg-dark-purple d-flex">
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

<style lang="scss" scoped>
    @use "../style/partials/variables" as *;
    @use "../style/partials/mixin" as *;

    .ms-bg-light-purple{
        background-color: $light-purple;
    }
    .ms-bg-dark-purple{
        background-color: $dark-purple;
    }
    .ms-color-dark-purple{
        color: $light-purple;
    }

    .ms-social{
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ms-socials, .ms-assistance, .ms-brief, .ms-streaming{
        @include flex(row, center, center)
    }

</style>