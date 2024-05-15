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
            <div class="row g-5">
                <!-- Colonna di sinistra -->
                <div class="col-md-4 left-col text-white g-5">
                    <h2 class="fs-1">Get a Quote</h2>
                    <p class="pb-4">Curabitur non nulla sit amet nisl tempus coallis quis ac lectus. Vivamus suscipit
                        tortor eget
                        felis porttitor volutpat.</p>
                    <!-- Card phone -->
                    <!-- <AppCard :contactCard="store.contacts[1]" :nameCard="phone" /> -->
                    <!-- /Card phone -->

                    <!-- Card email -->
                    <!-- <AppCard :contactCard="store.contacts[2]" :nameCard="email" /> -->
                    <!-- /Card email -->

                    <!-- Card address -->
                    <!-- <AppCard :contactCard="store.contacts[0]" :nameCard="address" /> -->
                    <!-- /Card address -->
                </div>
                <!-- /Colonna di sinistra -->

                <!-- Colonna di destra -->
                <div class="col-md-8 right-col">


                    <AppForm />


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