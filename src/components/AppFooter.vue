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
            teamsArray: [
                {
                    src: "1.png",
                    name: "Logo Ninja Team",
                },
                {
                    src: "2.png",
                    name: "Logo King Team",
                },
                {
                    src: "3.png",
                    name: "Logo SkullG Team",
                },
                {
                    src: "4.png",
                    name: "Logo Panda Team",
                },
                {
                    src: "5.png",
                    name: "Logo Witch Team",
                },
                {
                    src: "6.png",
                    name: "Logo Astro Team",
                },
            ],
        }
    },
    methods: {
        getImagePath(image) {
            return new URL(`../assets/img/${image.src}`, import.meta.url).href;
        },
        getImageName(image) {
            return new String(`${image.name}`);
        },
    },
}
</script>

<template>
    <footer class="pt-5">
        <div class="ms_footer-top">
            <div class="container rounded">
                <div class="row align-items-center">
                    <div class="col ms_teams-icons p-4" v-for="team in teamsArray">
                        <img :src="getImagePath(team)" :alt="getImageName(team)">
                    </div>
                </div>
            </div>

        </div>
        <div class="ms_footer-center">
            <div class="container position-relative z-2">
                <div class="row text-white">
                    <!-- Box footer -->
                    <div class="col">
                        <img src="../assets/img/menulogo.png" alt="Logo RaxG">
                        <p>Lorem ipsum dolor sit elit. Consectetur facilis exercitationem,
                            libero ad dolor sapiente! Sequi quae.</p>
                        <div class="email-subscribe d-flex pb-4">
                            <input type="text" placeholder="Enter Your Email" aria-label="Email">
                            <button>Subscribe</button>
                        </div>
                        <div class="socials-icons">
                            <span class="bg-success rounded-circle p-1 mx-2">
                                <i class="fa-brands fa-facebook"></i>
                            </span class="bg-success rounded-circle p-1 mx-2">
                            <span class="bg-success rounded-circle p-1 mx-2">
                                <i class="fa-brands fa-twitter"></i>
                            </span class="bg-success rounded-circle p-1 mx-2">
                            <span class="bg-success rounded-circle p-1 mx-2">
                                <i class="fa-brands fa-instagram"></i>
                            </span class="bg-success rounded-circle p-1 mx-2">
                            <span class="bg-success rounded-circle p-1 mx-2">
                                <i class="fa-brands fa-linkedin"></i>
                            </span class="bg-success rounded-circle p-1 mx-2">
                        </div>
                    </div>
                    <!-- /Box footer -->

                    <!-- Lista quick links (menu) -->
                    <div class="col">
                        <h3>Quick Links</h3>
                        <ul v-for="item in storeObj.menu">
                            <li>
                                <router-link :to="{ name: item.routeName }">
                                    {{ item.title }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <!-- /Lista quick links (menu) -->

                    <!-- Lista services -->
                    <div class="col">
                        <h3>Our Services</h3>
                        <ul v-for="item in storeObj.services">
                            <li>
                                <router-link :to="{ name: item.routeName }">
                                    {{ item.title }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <!-- /Lista services -->

                    <!-- Lista contacts -->
                    <div class="col">
                        <h3>Contact Us</h3>
                        <ul v-for="item in storeObj.contacts">
                            <li>
                                <i :class="`fa-solid ${item.path_icon}`"></i>
                                <router-link :to="{ name: item.routeName }">
                                    {{ item.title }}

                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <!-- /Lista contacts -->
                </div>
            </div>
            <div class="ms_overlay"></div>
        </div>



        <div class="ms_footer-bottom text-center py-4 fw-bold">
            <p class="text-white">Copyright © RaxG | Designed by <span class="text-success">NextGenerationDev</span></p>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

footer {
    background-color: $dark-purple;

    .ms_footer-top {
        position: relative;
        top: 50px;
        z-index: 2;

        .container {
            background-color: $purple;
        }

        .ms_teams-icons {
            img {
                max-width: 100px;
            }
        }
    }

    .ms_footer-center {
        background-image: url('../assets/img/footer-bg.png');
        background-size: cover;
        position: relative;
        padding-top: 10em;
        padding-bottom: 4em;

        .ms_overlay {
            background-color: rgba(32, 32, 70, 0.50);
            position: absolute;
            top: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
        }
    }

    .ms_footer-bottom {
        background-color: $purple;
    }
}
</style>
