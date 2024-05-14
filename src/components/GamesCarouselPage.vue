<script>
import PlayButton from "/src/components/PlayButton.vue"

export default {
    components: {
        PlayButton, 
    },
    data (){
        return{
        }
    },
}
</script>

<template>
    <div class="container">

    </div>

</template>

<style scoped lang="scss">
    @use "../style/partials/variables" as *;

    .container {
        background-color: blue;
        height: 100vh;
    }

</style>