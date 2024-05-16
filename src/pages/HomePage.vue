<script>
import Hero from "../components/Hero.vue"
import AppAboutSection from "../components/AppAboutSection.vue"
import GamesCarouselPage from "../components/GamesCarouselPage.vue"
import BattleCarouselPage from "../components/BattleCarouselPage.vue"
import ShopCarouselPage from "../components/ShopCarouselPage.vue"
import UpcomingMatchPage from "../components/UpcomingMatchPage.vue"
import AppTestimonials from '../components/AppTestimonials.vue'
import AppTeam from '../components/AppTeam.vue'
import AppGaming from '../components/AppGaming.vue'


export default {

    components: {
        Hero,
        AppAboutSection,
        GamesCarouselPage,
        BattleCarouselPage,
        ShopCarouselPage,
        UpcomingMatchPage,
        AppTestimonials,
        AppTeam,
        AppGaming
    },
    data() {
        return {
        }
    },
}
</script>

<template>
    <Hero />
    <GamesCarouselPage title="Choose Who's The Best In The World!" subTitle="Trending Games" />
    <AppAboutSection id="Denis" />
    <AppTestimonials id="Denis" />
    <UpcomingMatchPage title="Upcoming Match" subTitle="Trending Battle" />
    <BattleCarouselPage title="Keep Eyes & Manage upcoming Battle" subTitle="Upcoming Match" />
    <ShopCarouselPage title="Explore Our Shop" subTitle="Gamer Shop" />
    <app-team id="denis" />
    <app-gaming id="denis" />
</template>

<style scoped lang="scss"></style>