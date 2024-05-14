<script>
import { store } from './store';

import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <div>
    <AppHeader />
    <router-view></router-view>

    <AppFooter :storeObj="store" />
  </div>
</template>

<style lang="scss"></style>