<template>
  <div>
    <h3>Article</h3>
    <h3>{{ this.$route.params }}</h3>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {};
  },
  mounted: function() {
    console.log(this.$route.params);
  }
};
</script>

<style>
</style>