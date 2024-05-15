<script>
import Hero from "../components/Hero.vue"
import GamesCarouselPage from "../components/GamesCarouselPage.vue"
import BattleCarouselPage from "../components/BattleCarouselPage.vue"
import ShopCarouselPage from "../components/ShopCarouselPage.vue"
import UpcomingMatchPage from "../components/UpcomingMatchPage.vue"


export default {
    components: {
        Hero,
        GamesCarouselPage, 
        BattleCarouselPage,
        ShopCarouselPage,
        UpcomingMatchPage
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
    <UpcomingMatchPage />
    <BattleCarouselPage />
    <ShopCarouselPage />
</template>

<style scoped lang="scss">
    
</style>