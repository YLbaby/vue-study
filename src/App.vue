<template>
  <div class="container">
    <Count />
  </div>
</template>

<script>
  import Count from "./components/Count";

  export default {
    name: 'App',
    components: {Count},
  }
</script>

<style>
  .container {
    color: #bce8f1;
  }
</style>