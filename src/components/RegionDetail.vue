<template>
  <div id="counter" class="bg-success text-white">
    <div class="row p-3">
      <div class="col-2">
        <i class="fas fa-globe fa-2x"></i>
      </div>
      <div class="col-10 text-right">
        <h2>{{format(region)}}</h2>
        <div class="col-1 text-left">
          <p><strong>Capital:</strong> {{region.capital}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'RegionDetail',
    data: function () {
      return {
        region: ''
      }
    },
    methods: {
        format: region => {
          window.console.log(region)
            return region.name.toUpperCase();
        },
        random() {
            return this.$store.getters.randomRegion;
        },
    },
    created() {
      this.region = this.$store.getters.selectedRegion;
    }
};
</script>