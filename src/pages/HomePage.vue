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
    <GamesCarouselPage title="Choose Who's The Best In The World!" subTitle="Trending Games" />
    <UpcomingMatchPage title="Upcoming Match" subTitle="Trending Battle"/>
    <BattleCarouselPage title="Keep Eyes & Manage upcoming Battle" subTitle="Upcoming Match" />
    <ShopCarouselPage title="Explore Our Shop" subTitle="Gamer Shop" />
</template>

<style scoped lang="scss">
    
</style>