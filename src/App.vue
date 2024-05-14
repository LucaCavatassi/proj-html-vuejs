<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
    }
  },
}
</script>

<template>
  <div>
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<style lang="scss">
</style>