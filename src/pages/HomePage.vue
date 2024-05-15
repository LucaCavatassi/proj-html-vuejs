<script>
import Hero from "/src/components/Hero.vue"
import GamesCarouselPage from "/src/components/GamesCarouselPage.vue"
import BattleCarouselPage from "/src/components/BattleCarouselPage.vue"

export default {
    components: {
        Hero,
        GamesCarouselPage, 
        BattleCarouselPage,
    },
    data (){
        return{
        }
    },
}
</script>

<template>
    <Hero />
    <GamesCarouselPage />
    <BattleCarouselPage />
</template>

<style scoped lang="scss">
    
</style>