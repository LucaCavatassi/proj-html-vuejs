<script>

import AppHero from '../components/AppHero.vue';
import AppMaps from '../components/AppMaps.vue';
import AppCard from '../components/AppCard.vue';
import AppForm from '../components/AppForm.vue';
import { store } from '../store';


export default {
    components: {
        AppHero,
        AppMaps,
        AppCard,
        AppForm,
    },
    data() {
        return {
            store,
            phone: "Phone Number",
            email: "Email Address",
            address: "Address"
        }
    },
}
</script>

<template>
    <AppHero :page="store" />
    <main>
        <div class="container py-5">
            <div class="row ">
                <!-- Colonna di sinistra -->
                <div class="col-md-4 left-col text-white">
                    <h2>Get a Quote</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde itaque architecto.
                        Odio
                        voluptatibus quasi alias magni accusamus adipisci quam!</p>
                    <!-- Card phone -->
                    <AppCard :contactCard="store.contacts[1]" :nameCard="phone" />
                    <!-- /Card phone -->

                    <!-- Card email -->
                    <AppCard :contactCard="store.contacts[2]" :nameCard="email" />
                    <!-- /Card email -->

                    <!-- Card address -->
                    <AppCard :contactCard="store.contacts[0]" :nameCard="address" />
                    <!-- /Card address -->
                </div>
                <!-- /Colonna di sinistra -->

                <!-- Colonna di destra -->
                <div class="col-md-8 right-col bg-secondary">
                    <div class="container">
                        <div class="row p-4">

                            <AppForm />


                        </div>
                    </div>
                </div>
                <!-- /Colonna di destra -->

            </div>
        </div>

    </main>

    <AppMaps />

</template>

<style lang="scss">
@use "../style/partials/variables" as *;

main {
    background-color: $dark-purple;
}
</style>