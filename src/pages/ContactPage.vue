<script>

import AppHero from '../components/AppHero.vue';
import AppMaps from '../components/AppMaps.vue';
import AppCard from '../components/AppCard.vue';
import { store } from '../store';


export default {
    components: {
        AppHero,
        AppMaps,
        AppCard,
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
                            <form>
                                <div class="row">
                                    <div class="col-md-6">
                                        <!-- Input First Name -->
                                        <div class="mb-3">
                                            <label for="firstname" class="form-label fw-bold pb-1 pb-1">First
                                                Name</label>
                                            <div
                                                class="d-flex justify-content-center align-items-center bg-warning px-2">
                                                <input type="text" class="form-control bg-transparent border-0 ps-0"
                                                    id="firstname" placeholder="First Name">
                                                <i class="fa-solid fa-user"></i>
                                            </div>
                                        </div>
                                        <!-- /Input First Name -->

                                        <!-- Input Phone number -->
                                        <div class="mb-3">
                                            <label for="phone" class="form-label fw-bold pb-1">Phone</label>
                                            <div
                                                class="d-flex justify-content-center align-items-center bg-warning px-2">
                                                <input type="number" class="form-control bg-transparent border-0 ps-0"
                                                    id="phone" placeholder="Phone Number">
                                                <i class="fa-solid fa-phone"></i>
                                            </div>
                                        </div>
                                        <!-- /Input Phone Number -->

                                    </div>
                                    <div class="col-md-6">

                                        <!-- Input Last Name -->
                                        <div class="mb-3">
                                            <label for="lastname" class="form-label fw-bold pb-1">Last Name</label>
                                            <div
                                                class="d-flex justify-content-center align-items-center bg-warning px-2">
                                                <input type="text" class="form-control bg-transparent border-0 ps-0"
                                                    id="lastname" placeholder="Last Name">
                                                <i class="fa-solid fa-user"></i>
                                            </div>
                                        </div>
                                        <!-- /Input Last Name -->

                                        <!-- Input Email Address -->
                                        <div class="mb-3">
                                            <label for="email" class="form-label fw-bold pb-1">Email</label>
                                            <div
                                                class="d-flex justify-content-center align-items-center bg-warning px-2">
                                                <input type="text" class="form-control bg-transparent border-0 ps-0"
                                                    id="email" placeholder="Email Address">
                                                <i class="fa-solid fa-envelope"></i>
                                            </div>
                                        </div>
                                        <!-- /Input Email address -->



                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <!-- Input Subject -->
                                        <div class="mb-3">
                                            <label for="subject" class="form-label fw-bold pb-1 pb-1">Subject</label>
                                            <div
                                                class="d-flex justify-content-center align-items-center bg-warning px-2">
                                                <input type="text" class="form-control bg-transparent border-0 ps-0"
                                                    id="subject" placeholder="Subject">
                                                <i class="fa-solid fa-file"></i>
                                            </div>
                                        </div>
                                        <!-- /Input Subject -->

                                        <!-- Input Message -->
                                        <div class="mb-3">
                                            <label for="message" class="form-label fw-bold pb-1">Message</label>
                                            <div
                                                class="d-flex justify-content-center align-items-start bg-warning px-2">
                                                <textarea class="form-control bg-transparent border-0 ps-0" id="phone"
                                                    placeholder="Your Message" rows="5"></textarea>
                                                <i class="fa-solid fa-pencil pt-2"></i>
                                            </div>
                                        </div>
                                        <!-- /Input Message -->

                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Send Message</button>
                            </form>


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