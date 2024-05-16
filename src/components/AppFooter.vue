<script>
import { store } from '../store';
import { router } from '../router.js';
import AppTeamsBanner from './AppTeamsBanner.vue'
import AppSocialsLinks from './AppSocialsLinks.vue'



export default {
    props: {
        storeObj: Object,
    },
    data() {
        return {
            store,
        }
    },
    components: {
        AppTeamsBanner,
        AppSocialsLinks,
    }
}
</script>

<template>
    <footer class="pt-5">
        <div class="ms_footer-top">
            <!-- Banner Teams -->
            <AppTeamsBanner :storeObj="store" />
            <!-- /Banner Teams -->
        </div>
        <div class="ms_footer-center">
            <div class="container position-relative z-2">
                <div class="row text-white px-5 g-5">
                    <!-- Box footer -->
                    <div class="col">
                        <img src="../assets/img/menulogo.png" alt="Logo RaxG">
                        <p>Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id
                            enim. Mauris blandit aliquet elit</p>
                        <div class="email-subscribe d-flex pb-4">
                            <input type="text" placeholder="Enter Your Email" aria-label="Email">
                            <button>Subscribe</button>
                        </div>

                        <AppSocialsLinks />
                    </div>
                    <!-- /Box footer -->

                    <!-- Lista quick links (menu) -->
                    <div class="col">
                        <div class="row">
                            <h3 class="pb-2">Quick Links</h3>
                            <ul v-for="item in storeObj.menu">
                                <li>
                                    <router-link :to="{ name: item.routeName }"
                                        class="text-white text-decoration-none fw-semibold">
                                        {{ item.title }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <!-- /Lista quick links (menu) -->

                    <!-- Lista services -->
                    <div class="col">
                        <div class="row">
                            <h3 class="pb-2">Our Services</h3>
                            <ul v-for="item in storeObj.services">
                                <li>
                                    <router-link :to="{ name: item.routeName }"
                                        class="text-white text-decoration-none fw-semibold">
                                        {{ item.title }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <!-- /Lista services -->

                    <!-- Lista contacts -->
                    <div class="col">
                        <div class="row">
                            <h3 class="pb-2">Contact Us</h3>
                            <ul v-for="item in storeObj.contacts">
                                <li class="d-flex align-items-start">
                                    <i :class="`fa-solid ${item.path_icon}`"></i>
                                    <router-link :to="{ name: item.routeName }"
                                        class="text-white text-decoration-none fw-bold">
                                        {{ item.title }}

                                    </router-link>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <!-- /Lista contacts -->
                </div>
            </div>
            <div class="ms_overlay"></div>
        </div>



        <div class="ms_footer-bottom text-center py-4 fw-bold">
            <p class="text-white">Copyright © RaxG | Designed by <span>NextGenerationDev</span></p>
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


    }

    .ms_footer-center {
        background-image: url('../assets/img/footer-bg.png');
        background-size: cover;
        position: relative;
        padding-top: 10em;
        padding-bottom: 4em;

        input::placeholder {
            color: lightgrey;
        }

        .ms_overlay {
            background-color: rgba(32, 32, 70, 0.50);
            position: absolute;
            top: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
        }

        .email-subscribe {

            input {
                background-color: $dark-purple;
                border-radius: 10px 0 0 10px;
            }

            button {
                background-color: $light-green;
                border-radius: 0 10px 10px 0;
                color: $dark-purple;
                font-weight: 500;
            }

            input,
            button {
                border: 0;
                padding: .7em;
            }
        }

        ul {
            list-style-type: none;


            i {
                color: $green;
                padding-right: .5em;
                font-size: 1.5rem;
            }
        }
    }

    .ms_footer-bottom {
        background-color: $purple;

        span {
            color: $green;


        }
    }
}
</style>
