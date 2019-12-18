<template>
  <div>
    <div>
      <h3>{{ title }}</h3>
    </div>
    <div>
        {{ date }}
    </div>
    <div>
        {{ body }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      title: "I am Title",
      date: new Date(),
      tog: [],
      body:"I am a body",
      author: "author"
    };
  },
  mounted: function() {
    console.log(this.$route.params);
  }
};
</script>

<style>
</style>