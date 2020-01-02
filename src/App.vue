<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-12">
        <h1>Dashboard</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <RegionDetail/>
      </div>
      <div class="col-sm-6">
        <RegionFlag />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <div v-for="flag in flags" v-bind:key="flag">
          <img v-bind:src="flag"/>
        </div>
      </div>
    </div>
    <div class="row p-2 justify-content-md-center">
          <div class="search-wrapper justify-content-center">
            <input type="text" v-model="search" placeholder="Search country.."/>
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
import RegionDetail from './components/RegionDetail.vue';
import RegionItem from './components/RegionItem.vue';
import RegionFlag from './components/RegionFlag.vue';

import store from './store';


export default {
  name: 'app',
  components: {
    RegionDetail,
    RegionItem,
    RegionFlag
  },
  store,
  data: function() {
    return {
      search: '',
      flags: []
    }
  },
  computed: {
    filteredRegions() {
      return store.state.allRegions.filter(region => {
          return region.name.toLowerCase().includes(this.search.toLowerCase())
        })
    },
    regions() {
      return store.state.allRegions;
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
    }
  }
}
</script>

<style>
 @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
