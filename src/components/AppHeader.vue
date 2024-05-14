<script>
import {router} from '../router.js';
import { store } from '../store.js';



export default {
    props:{
        navLinks: Object,
    },
    data() {
        return {
            store,
            isFixed: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollTop = window.scrollY;
            this.isFixed = scrollTop > 160;
        }
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
}
</script>

<template>
    <!-- container -->
    <div class="container text-white">
        <!-- upper header -->
        <div class="d-flex ms-bg-purple justify-content-between py-2">
            <!-- left-upper header -->
            <div class="d-flex">
                <!-- socials -->
                <div class="ms-socials gap-3 px-3 border-end">
                    <!-- facebook icon -->
                    <span class="ms-social ms-icon ms-bg-dark-purple rounded-circle">
                        <i class="fa-brands fa-facebook"></i>
                    </span>
                    <!-- twitter icon -->
                    <span class="ms-social ms-icon ms-bg-dark-purple rounded-circle">
                        <i class="fa-brands fa-twitter"></i>
                    </span>
                    <!-- linkedin icon -->
                    <span class="ms-social ms-icon ms-bg-dark-purple rounded-circle">
                        <i class="fa-brands fa-linkedin"></i>
                    </span>
                    <!-- instagram icon -->
                    <span class="ms-social ms-icon ms-bg-dark-purple rounded-circle">
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
                        this is <a href="#" class="text-success text-decoration-none">RaxG.</a> A template for games,
                        clans & esports
                    </span>
                </div>
                <!-- live streaming -->
                <div class="ms-streaming px-3 border-start">
                    <a href="#" class="ms-bg-light-green ms-color-dark-purple px-3 py-2 rounded text-decoration-none">
                        <i class="fa-solid fa-message"></i>
                        Live streaming
                    </a>
                </div>
            </div>
        </div>
        <!-- lower header -->
        <header class="ms-bg-dark-purple d-flex" :class="{ 'fixed-top': isFixed }"
            :style="{ width: isFixed ? '1296px' : '', margin: isFixed? 'auto': '' }">
            <!-- logo -->
            <div class="ms-logo w-25">
                <img src="../assets/img/menulogo.png" alt="">
            </div>

            <!-- navbar -->
            <ul class="ms-navbar w-50 m-0 list-unstyled gap-3">
                <li v-for="item in navLinks.menu" :key="item">
                    <router-link :to="{ name: item.routeName }" class="text-white text-decoration-none">
                        {{ item.title }}
                        <i class="fa-solid fa-chevron-down"></i>
                    </router-link>
                </li>
            </ul>

            <!-- search/cart -->
            <ul class="ms-search-cart w-25 m-0 list-unstyled gap-3 pe-3">
                <li class="ms-icon bg-white rounded-circle ms-color-purple">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </li>
                <li class="ms-icon bg-white rounded-circle ms-color-purple position-relative">
                    <div
                        class="ms-sm-icon position-absolute top-0 start-100 translate-middle ms-bg-light-purple text-white rounded-circle">
                        0</div>
                    <i class="fa-solid fa-cart-shopping"></i>
                </li>
            </ul>
        </header>
    </div>
</template>

<style lang="scss" scoped>
    @use "../style/partials/variables" as *;
    @use "../style/partials/mixin" as *;

    .ms-bg-light-purple{
        background-color: $light-purple;
    }
    .ms-color-purple{
        color: $light-purple;
    }
    .ms-bg-purple{
        background-color: $purple;
    }
    .ms-color-purple{
        color: $purple;
    }
    .ms-bg-dark-purple{
        background-color: $dark-purple;
    }
    .ms-color-dark-purple{
        color: $dark-purple;
    }
    .ms-bg-light-green{
        background-color: $light-green;
    }

    .ms-icon{
        width: 40px;
        height: 40px;
    }
    .ms-sm-icon{
        width: 25px;
        height: 25px;
    }
    .ms-icon, .ms-sm-icon{
        @include flex(row, center, center)
    }

    .ms-socials, 
    .ms-assistance, 
    .ms-brief, 
    .ms-streaming,
    .ms-logo,
    .ms-navbar,
    .ms-search-cart
    {
        @include flex(row, center, center)
    }

    .ms-search-cart
    {
        justify-content: end;
    }

    .fixed{
        position: fixed;
    }

</style>