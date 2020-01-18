<template>
  <div class="container">
      <!-- <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol> -->
        <div class="carousel-inner">
            <CarouselItem v-bind:key="region.name" v-for="region in chosenRegions" v-bind:allRegions="allRegions" v-bind:region="region"/>
        </div>
        <!-- <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
      </div> -->
  </div>
</template>

<script>
import CarouselItem from '../components/carousel/CarouselItem';
import { mapGetters } from 'vuex'

import store from '../store';

export default {
  name: 'Saved',
  components: {
    CarouselItem
  },
  store,
  computed: {
    ...mapGetters(['chosenRegions','allRegions'])
  }

}
</script>

<style scoped>
.carousel {
  color: red;
  height: 100%;
  width: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
}
</style>
