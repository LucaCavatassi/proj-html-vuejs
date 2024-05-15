<script>
export default {

}
</script>

<template>
    <form class="rounded">
        <div class="row">
            <div class="col-md-6">
                <!-- Input First Name -->
                <div class="mb-4">
                    <label for="firstname" class="form-label fw-bold pb-1">First
                        Name</label>
                    <div class="d-flex justify-content-center align-items-center px-2 ms_form 
                    ">
                        <input type="text" class="form-control bg-transparent border-0 ps-2" id="firstname"
                            placeholder="First Name">
                        <i class="fa-solid fa-user pe-2"></i>
                    </div>
                </div>
                <!-- /Input First Name -->

                <!-- Input Phone number -->
                <div class="mb-4">
                    <label for="phone" class="form-label fw-bold pb-1">Phone</label>
                    <div class="d-flex justify-content-center align-items-center px-2 ms_form
                    ">
                        <input type="text" class="form-control bg-transparent border-0 ps-2" id="phone"
                            placeholder="Phone Number">
                        <i class="fa-solid fa-phone pe-2"></i>
                    </div>
                </div>
                <!-- /Input Phone Number -->

            </div>
            <div class="col-md-6">

                <!-- Input Last Name -->
                <div class="mb-4">
                    <label for="lastname" class="form-label fw-bold pb-1">Last Name</label>
                    <div class="d-flex justify-content-center align-items-center px-2 ms_form
                    ">
                        <input type="text" class="form-control bg-transparent border-0 ps-2" id="lastname"
                            placeholder="Last Name">
                        <i class="fa-solid fa-user" pe-2></i>
                    </div>
                </div>
                <!-- /Input Last Name -->

                <!-- Input Email Address -->
                <div class="mb-4">
                    <label for="email" class="form-label fw-bold pb-1">Email</label>
                    <div class="d-flex justify-content-center align-items-center px-2 ms_form
                    ">
                        <input type="text" class="form-control bg-transparent border-0 ps-2" id="email"
                            placeholder="Email Address">
                        <i class="fa-solid fa-envelope pe-2"></i>
                    </div>
                </div>
                <!-- /Input Email address -->



            </div>
        </div>
        <div class="row">
            <div class="col">
                <!-- Input Subject -->
                <div class="mb-4">
                    <label for="subject" class="form-label fw-bold pb-1 pb-1">Subject</label>
                    <div class="d-flex justify-content-center align-items-center px-2 ms_form">
                        <input type="text" class="form-control bg-transparent border-0 ps-2" id="subject"
                            placeholder="Subject">
                        <i class="fa-solid fa-file pe-2" pe-2></i>
                    </div>
                </div>
                <!-- /Input Subject -->

                <!-- Input Message -->
                <div class="mb-4 message-box">
                    <label for="message" class="form-label fw-bold pb-1">Message</label>
                    <div class="d-flex justify-content-center align-items-start ps-2 ms_form">
                        <textarea class="form-control bg-transparent border-0 ps-2" id="phone"
                            placeholder="Your Message" rows="7"></textarea>
                        <i class="fa-solid fa-pencil pe-2 pt-3 inner-icon"></i>
                    </div>
                </div>
                <!-- /Input Message -->

            </div>
        </div>
        <button type="submit" class="btn btn-primary fs-5 fw-semibold p-3 my-4">Send Message</button>
    </form>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

form {
    background-color: $purple;
    padding: 2em;


    input,
    textarea {
        color: #fFF;
        padding: 1em;
    }

    input:focus,
    textarea:focus {
        color: #FFF;
        outline: none;
    }

    label {
        color: #FFF;
    }

    button {
        background-color: $light-green;
        color: $purple;
        border: 0;

    }

    .ms_form {
        background-color: $dark-purple;
        color: grey;

        input::placeholder,
        textarea::placeholder {
            color: grey;
        }
    }

    .message-box {
        position: relative;
    }

    .inner-icon {
        position: absolute;
        right: 5px;
        z-index: 5;
    }
}
</style>