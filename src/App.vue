<template>
  <div id="app">
    <div id="nav">
      <Navbar/>
    </div>
    <router-view/>
    <div class="footer">
      <!-- <Footer/> -->
    </div>
  </div>

</template>

<script>
import Navbar from '@/components/Navbar.vue';
// import Footer from '@/components/Footer.vue';

import store from '@/store';

export default {
    name: 'app',
    components: {
      Navbar,
      // Footer
    },
    store,
    beforeCreate() {
      if(window.localStorage && window.localStorage.vucountryinfo) {
          this.$store.commit('PREFETCH_REGIONS', JSON.parse(window.localStorage.getItem('vucountryinfo')));
      }
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
