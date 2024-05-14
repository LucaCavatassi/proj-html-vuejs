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
        <div class="footer-top">
            <div class="teams-icons">
                <ul v-for="team in teamsArray">
                    <li>
                        <img :src="getImagePath(team)" :alt="getImageName(team)">
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-center container py-4">
            <div class="row">
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

        <div class="footer-bottom text-center py-4 bg-dark fw-bold">
            <p class="text-white">Copyright © RaxG | Designed by <span class="text-success">NextGenerationDev</span></p>
        </div>
    </footer>
</template>

<style scoped lang="scss">
// debug
footer {
    background-color: lightslategray;

    .footer-top {
        // da sistemare
        transform: translateY(-50px);

        .teams-icons {
            width: 80%;
            display: flex;
            justify-content: center;
            background-color: lightseagreen;
            margin: 0 auto;

            img {
                max-width: 80%;
            }
        }
    }
}
</style>