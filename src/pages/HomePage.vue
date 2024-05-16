<script>
import Hero from "../components/Hero.vue"
import GamesCarouselPage from "../components/GamesCarouselPage.vue"
import BattleCarouselPage from "../components/BattleCarouselPage.vue"
import ShopCarouselPage from "../components/ShopCarouselPage.vue"
import UpcomingMatchRefactor from "../components/UpcomingMatchRefactor.vue"


export default {

    components: {
        Hero,
        GamesCarouselPage, 
        BattleCarouselPage,
        ShopCarouselPage,
        UpcomingMatchRefactor
    },
    data (){
        return{
        }
    },
}
</script>

<template>
    <Hero />
    <GamesCarouselPage title="Choose Who's The Best In The World!" subTitle="Trending Games" />
    <UpcomingMatchRefactor title="Upcoming Match" subTitle="Trending Battle"/>
    <BattleCarouselPage title="Keep Eyes & Manage upcoming Battle" subTitle="Upcoming Match" />
    <ShopCarouselPage title="Explore Our Shop" subTitle="Gamer Shop" />
</template>

<style scoped lang="scss">
    
</style>