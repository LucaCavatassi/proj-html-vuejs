<script>
import GamesCarouselPage from './GamesCarouselPage.vue'


export default {
    components:{
        GamesCarouselPage,
    },
    data() {
        return {
        }
    },
}
</script>

<template>
    <div>
        <GamesCarouselPage/>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;


.container-fluid {
    background-color: $purple;
    height: 100vh;
}

.ms-green {
    color: $green
}

.ms-fs {
    font-size: 3rem;
}

.ms-mg {
    margin-top: 0px;
}

.col {
    width: calc(100% / 4 - 50px);
}
</style>