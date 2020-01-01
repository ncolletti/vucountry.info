<template>
  <li class="list-group-item">
    <div class="row">
      <div class="col-8">{{region.name}}</div>
      <div class="col-4 text-right">testing</div>
    </div>
  </li>
</template>
<script>
  export default {
    name: 'RegionItem',
    props: {
      name: String,
      region: Object
    },
    methods: {
    },
  };
</script>