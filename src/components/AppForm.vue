<script>
export default {

}
</script>

<template>
    <form>
        <div class="row">
            <div class="col-md-6">
                <!-- Input First Name -->
                <div class="mb-3">
                    <label for="firstname" class="form-label fw-bold pb-1 pb-1">First
                        Name</label>
                    <div class="d-flex justify-content-center align-items-center bg-warning px-2">
                        <input type="text" class="form-control bg-transparent border-0 ps-0" id="firstname"
                            placeholder="First Name">
                        <i class="fa-solid fa-user"></i>
                    </div>
                </div>
                <!-- /Input First Name -->

                <!-- Input Phone number -->
                <div class="mb-3">
                    <label for="phone" class="form-label fw-bold pb-1">Phone</label>
                    <div class="d-flex justify-content-center align-items-center bg-warning px-2">
                        <input type="number" class="form-control bg-transparent border-0 ps-0" id="phone"
                            placeholder="Phone Number">
                        <i class="fa-solid fa-phone"></i>
                    </div>
                </div>
                <!-- /Input Phone Number -->

            </div>
            <div class="col-md-6">

                <!-- Input Last Name -->
                <div class="mb-3">
                    <label for="lastname" class="form-label fw-bold pb-1">Last Name</label>
                    <div class="d-flex justify-content-center align-items-center bg-warning px-2">
                        <input type="text" class="form-control bg-transparent border-0 ps-0" id="lastname"
                            placeholder="Last Name">
                        <i class="fa-solid fa-user"></i>
                    </div>
                </div>
                <!-- /Input Last Name -->

                <!-- Input Email Address -->
                <div class="mb-3">
                    <label for="email" class="form-label fw-bold pb-1">Email</label>
                    <div class="d-flex justify-content-center align-items-center bg-warning px-2">
                        <input type="text" class="form-control bg-transparent border-0 ps-0" id="email"
                            placeholder="Email Address">
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
                    <div class="d-flex justify-content-center align-items-center bg-warning px-2">
                        <input type="text" class="form-control bg-transparent border-0 ps-0" id="subject"
                            placeholder="Subject">
                        <i class="fa-solid fa-file"></i>
                    </div>
                </div>
                <!-- /Input Subject -->

                <!-- Input Message -->
                <div class="mb-3">
                    <label for="message" class="form-label fw-bold pb-1">Message</label>
                    <div class="d-flex justify-content-center align-items-start bg-warning px-2">
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
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;
</style>