<script>

import AppHero from '../components/AppHero.vue';
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
    components: {
        AppHero,
    },
}
</script>

<template>
    <AppHero />
    <div class="container">
        <div class="row">
            <!-- Colonna di sinistra -->
            <div class="col-md-4 left-col">
                <h2>Get a Quote</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde itaque architecto. Odio
                    voluptatibus quasi alias magni accusamus adipisci quam!</p>
                <!-- Card phone -->
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <i class="img-fluid rounded-start"
                                :class="`fa-solid ${this.store.contacts[1].path_icon}`"></i>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Phone Number</h5>
                                <router-link class="card-text d-block" :to="{ name: this.store.contacts[1].routeName }">
                                    {{ this.store.contacts[1].title }}
                                </router-link>
                                <router-link class="card-text d-block" :to="{ name: this.store.contacts[1].routeName }">
                                    {{ this.store.contacts[1].title }}
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Card phone -->

                <!-- Card email -->
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <i class="img-fluid rounded-start"
                                :class="`fa-solid ${this.store.contacts[2].path_icon}`"></i>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Email Address</h5>
                                <router-link class="card-text d-block" :to="{ name: this.store.contacts[2].routeName }">
                                    {{ this.store.contacts[2].title }}
                                </router-link>

                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Card email -->

                <!-- Card address -->
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <i class="img-fluid rounded-start"
                                :class="`fa-solid ${this.store.contacts[0].path_icon}`"></i>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Address</h5>
                                <router-link class="card-text d-block" :to="{ name: this.store.contacts[0].routeName }">
                                    {{ this.store.contacts[0].title }}
                                </router-link>

                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Card phone -->
            </div>
            <!-- /Colonna di sinistra -->

            <!-- Colonna di destra -->
            <div class="col-md-8 left-col bg-secondary">
                <div class="container">
                    <div class="row bg-warning">
                        <div class="col">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam saepe sint quas esse quaerat
                            excepturi, totam expedita doloremque sed ex fugiat omnis, cum, deleniti earum ea. Ducimus
                            quisquam delectus atque?
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Colonna di destra -->

        </div>
    </div>

</template>

<style lang="scss">

</style>