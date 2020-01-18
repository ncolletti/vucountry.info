<template>
<div class="container">
  <div>
    <p>
      {{region.regionName}}
    </p>
  </div>
    <div class="carousel-item">
        <div class="carousel-caption d-none d-md-block">
            <h5>{{region.regionName}}</h5>
            <p>...</p>
        </div>
    <img class="d-block w-100" src="" alt="Second slide">
    </div>
</div>
</template>



<script>
import store from '@/store';
  export default {
    name: 'CarouselItem',
    store,
    props: {
      region: Object,
      allRegions: Array
    },
    methods: {
    },
    computed: {
      regionUrl() {
        return '';
        // return this.store.allRegions[this.$props.region.regionIndex].url;
      }
    }
  };
</script>
