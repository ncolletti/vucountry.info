<template>
    <div class="card">
        <img class="card-img-top" :src="flag" alt="National flag">
    </div>
</template>
<script>
export default {
    name: 'RegionRandomFlag',
    data: function () {
      return {
        flag: ''
      }
    },
    created() {
      this.flag = this.$store.getters.highlightedRegion.flag;
    },
};
</script>