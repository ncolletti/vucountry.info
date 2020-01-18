<template>
  <li class="list-group-item">
    <div class="row">
      <div class="col-8">{{region.name}}</div>
      <div class="col-4 text-right"><button type="button" class="btn btn-primary" @click="saveRegion">Add to Saved</button></div>
    </div>
  </li>
</template>
<script>
  export default {
    name: 'RegionItem',
    props: {
      region: Object
    },
    methods: {
      saveRegion() {
        let regionName = this.$props.region.name;
        let regionIndex = this.$props.region.index;
        this.$store.dispatch('addSavedRegion', {regionName, regionIndex});
      }
    },
  };
</script>