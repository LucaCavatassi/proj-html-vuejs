<script>

import AppHero from '../components/AppHero.vue';
import { store } from '../store';


export default {
    components: {
        AppHero,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <AppHero :page="store" />
    <main>
        <div class="container py-5">
            <div class="row">
                <!-- Colonna di sinistra -->
                <div class="col-md-4 left-col">
                    <h2>Get a Quote</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde itaque architecto.
                        Odio
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
                                    <router-link class="card-text d-block"
                                        :to="{ name: this.store.contacts[1].routeName }">
                                        {{ this.store.contacts[1].title }}
                                    </router-link>
                                    <router-link class="card-text d-block"
                                        :to="{ name: this.store.contacts[1].routeName }">
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
                                    <router-link class="card-text d-block"
                                        :to="{ name: this.store.contacts[2].routeName }">
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
                                    <router-link class="card-text d-block"
                                        :to="{ name: this.store.contacts[0].routeName }">
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

        <div class="contaner-fluid pb-5">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9628136.222063737!2d-109.85605184445477!3d42.707770787818745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sStati%20Uniti!5e0!3m2!1sit!2sit!4v1715700723948!5m2!1sit!2sit"
                style="border:0; width: 100%; height: 450px;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </main>


</template>

<style lang="scss"></style>