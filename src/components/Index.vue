<template>
  <div class="banner">
    
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      msg: "this is index",
      home: this.$axios.Home,
      banner: require("../images/013c77573c2a1a32f8757cb9d5ad4d.jpg@1280w_1l_2o_100sh.jpg")
    };
  },
  methods: {
    getdata: function() {
      this.home.getdata();
    }
  }
};
</script>

<style>
.banner{
    height: 500px;
    background-image: url('~@/images/013c77573c2a1a32f8757cb9d5ad4d.jpg@1280w_1l_2o_100sh.jpg');
    background-size: 100%;
}
</style>