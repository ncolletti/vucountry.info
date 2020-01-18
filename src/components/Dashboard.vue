<template>
  <div class="container">
    <div class="row">
      <div class="mx-auto">
        <h1>Random Country</h1>
      </div>
    </div>
    <div class="text-center" v-if="isLoading">
      <div class="spinner-border text-warning" role="status" style="width: 6rem; height: 6rem;">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="row" v-if="!isLoading">
      <div class="col-sm-6">
        <RegionRandom/>
      </div>
      <div class="col-sm-6">
        <RegionRandomFlag/>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <div v-for="flag in flags" v-bind:key="flag">
          <img v-bind:src="flag"/>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="mx-auto">
        <h1>Find more...</h1>
      </div>
    </div>
    <div class="row p-2 justify-content-md-center">
      <div class="search-wrapper justify-content-center">
        <input type="text" v-model="search" placeholder="Search .."/>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            List of Countries
          </div>
          <ul class="list-group list-group-flush">
            <RegionItem v-bind:key="region.name" v-for="region in filteredRegions" v-bind:region="region"/>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegionRandom from './RegionRandom.vue';
import RegionItem from './RegionItem.vue';
import RegionRandomFlag from './RegionRandomFlag.vue';


import store from '../store';

export default {
  name: 'dashboard',
  components: {
    RegionRandom,
    RegionItem,
    RegionRandomFlag
  },
  store,
  data: function() {
    return {
      search: '',
      flags: []
    }
  },
  computed: {
    regions() {
      return store.state.allRegions;
    },
    isLoading: function() {
      return !this.$store.state.isLoaded
    },
    filteredRegions() {
      return store.state.allRegions.filter(item => {
         return item.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    triggerNewRegion: () => {
      // const diff = (Math.random() - Math.random()) * 10;
      // const randomNewPrice = store.getters.currentPrice.amount + diff;
      // store.commit(actions.UPDATE_PRICE, {
      //   amount: randomNewPrice,
      //   timestamp: Date.now()
      // });
    },

  },
  async beforeCreate() {
    await this.$store.dispatch('setAllRegions');
  }

}
</script>

<style>
 @import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
