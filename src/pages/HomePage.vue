<script>
import Hero from "/src/components/Hero.vue"
import GamesCarouselPage from "/src/components/GamesCarouselPage.vue"
import BattleCarouselPage from "/src/components/BattleCarouselPage.vue"
import ShopCarouselPage from "/src/components/ShopCarouselPage.vue"


export default {
    components: {
        Hero,
        GamesCarouselPage, 
        BattleCarouselPage,
        ShopCarouselPage
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
    <ShopCarouselPage />
</template>

<style scoped lang="scss">
    
</style>