<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <div v-on:click="getdata">Main</div>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      msg: "this is index",
      home: this.$axios.Home
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