<script>
export default {
    props: {
        storeObj: Object,
    },
    methods: {
        getImagePath(image) {
            return new URL(`../assets/img/${image.src}`, import.meta.url).href;
        },
        getImageName(image) {
            return new String(`${image.name}`);
        },
    },
}
</script>

<template>
    <div class="container rounded">
        <div class="row align-items-center justify-content-center py-5">
            <div class="col ms_teams-icons mx-4" v-for="team in storeObj.teamsArray">
                <img :src="getImagePath(team)" :alt="getImageName(team)">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

.container {
    background-color: $purple;

    .row {
        margin: 0 auto;
        text-align: center;
    }
}

.ms_teams-icons {
    img {
        width: 80%;
        height: 150px;
        object-fit: contain;
    }
}
</style>