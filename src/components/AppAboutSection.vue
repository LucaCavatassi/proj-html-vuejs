<script>
import PlayButton from './PlayButton.vue'
export default {
  components: { PlayButton },

}
</script>

<template>
    <div class="ms-bg-dark-purple">
        <div class="container py-120 text-white">
            <!-- right container -->
            <div class="w-50">
                <!-- title -->
                <h6 class="fw-semibold text-success">12 Year Experience</h6>
                <!-- section -->
                <section>
                    <!-- title -->
                    <h2 class="fw-semibold fs-50 mb-4">We Are The Best Gaming Company</h2>
                    <!-- paragraphs -->
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quasi consequuntur
                        voluptate
                        temporibus nisi tempora facilis dolor, quisquam, possimus cum unde quaerat ratione quo saepe
                        officiis quod,
                        minus eum recusandae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptas
                        reprehenderit
                        earum sapiente ab explicabo excepturi nisi dicta libero mollitia soluta veniam vel dolorum vero
                        magnam,
                        voluptatem doloribus accusamus repellendus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consectetur, veritatis officiis
                        laudantium
                        voluptate illum, eveniet itaque dolor alias soluta deserunt quam. Laborum ullam, suscipit
                        doloremque
                        voluptatibus sequi aliquam a.</p>
                </section>
                <!-- list -->
                <ul class="ps-0 mb-5">
                    <li>
                        <i class="fa-regular fa-circle-check fs-5 me-2 ms-color-light-green"></i>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                        <i class="fa-regular fa-circle-check fs-5 me-2 ms-color-light-green"></i>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                        <i class="fa-regular fa-circle-check fs-5 me-2 ms-color-light-green"></i>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                        <i class="fa-regular fa-circle-check fs-5 me-2 ms-color-light-green"></i>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </li>
                </ul>
                <!-- media-section -->
                <div class="container-media">
                    <a href="#" class="text-decoration-none p-3 ms-bg-light-green rounded ms-color-purple me-5">Discover
                        More <i class="fa-solid fa-arrow-right-long"></i></a>
                    <!-- <div class="ms-lg-icon ms-bg-light-green rounded-circle">
                        <a href="#" class="ms-bg-light-green"><i class="fa-solid fa-play fs-5 ms-color-purple"></i></a>
                    </div> -->
                    <PlayButton class="position-relative z-2" />
                </div>
            </div>
            <!-- left container -->
            <div class="w-50 h-100 container-video">
                <div class="thumb-video p-250">
                    <!-- <div class="ms-lg-icon ms-bg-light-green rounded-circle">
                        <a href="#" class="ms-bg-light-green"><i class="fa-solid fa-play fs-5 ms-color-purple"></i></a>
                    </div> -->
                    <PlayButton class="position-relative z-2" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixin" as *;

    .container{
        @include flex(row, center, center);
    }
    .py-120{
        padding: 120px 0;
    }
    .p-250{
        padding: 250px;
    }
    .fs-50{
        font-size: 50px;
    }
    li{
        @include flex(row, start, center);
        list-style-type: none;
        margin-bottom: 10px;
    }
    .container-media{
        @include flex(row, start, center);
    }

    .ms-lg-icon {
        @include flex(row, center, center);
        width: 70px;
        height: 70px;
    }

    .container-video{
        @include flex(row, center, center);
    }
    .thumb-video {
        // width: 500px;
        // height: 500px;
        background-image: url("../assets/img/main-about.png");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;

        .ms-lg-icon{
            position: relative;
            z-index: 10;
        }
    }
    .thumb-video::before {
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba($color: $purple, $alpha: 0.6);
        z-index: 2;
    }
    
</style>