<script>

export default {
    props:{
        page: Object,
    },
    data() {
        return {
        }
    },
    methods:{
        getStore(){
            console.log(this.page);
        }
    }
}
</script>

<template>
    <div class="ms-hero text-white container-fluid">
        <section class="position-relative z-index-1">
            <!-- <h1 class="fw-semibold">{{ this.page.menu[this.page.activeIndex].title }}</h1> -->
            <span>
                <span>Home</span>
                <i class="fa-solid fa-arrow-right-long ms-color-light-green mx-1"></i>
                <!-- <span>{{ this.page.menu[this.page.activeIndex].title }}</span> -->
            </span>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixin" as *;

.ms-bg-light-purple {
    background-color: $light-purple;
}
.ms-color-purple {
    color: $light-purple;
}
.ms-bg-purple {
    background-color: $purple;
}
.ms-color-purple {
    color: $purple;
}
.ms-bg-dark-purple {
    background-color: $dark-purple;
}
.ms-color-dark-purple {
    color: $dark-purple;
}
.ms-color-light-green {
    color: $light-green;
}
.ms-bg-light-green {
    background-color: $light-green;
}

.ms-hero{
    @include flex(row, center, center);
    background-image: url("../assets/img/breadcump-banner.png");
    background-size: cover;
    background-position: center;
    padding: 350px 0 150px;
    position: relative;
    top: 0;
    left: 0;
    overflow: hidden;
}

.ms-hero::before{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(26, 25, 53, 0.6);
}
</style>