<template>
  <div class="demo-image__placeholder">
  <div class="block">
    <el-image :src="banner"></el-image>
  </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      msg: "this is index",
      home: this.$axios.Home,
      banner:require('../images/013c77573c2a1a32f8757cb9d5ad4d.jpg@1280w_1l_2o_100sh.jpg')
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
</style>