<template>
    <swiper :slidesPerView="4" :spaceBetween="30" :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
    }" :loop="true" :navigation="true" :modules="modules" class="mySwiper">
        <template v-for="(slide, index) in slides" :key="index">
            <swiper-slide>{{ slide }}</swiper-slide>
        </template>
    </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles (essentials and navigation)
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            slides: ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 1", "Slide 2", "Slide 3", "Slide 4"], // Your slide content
            modules: [Autoplay, Pagination, Navigation], // Only include Navigation for arrows
        };
    },
};
</script>

<style></style>
