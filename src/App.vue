<template>
  <el-container>
  <el-header><router-view name="header"></router-view></el-header>
  <el-main><router-view name="index"></router-view></el-main>
  <el-footer><router-view name="footer"></router-view></el-footer>
  </el-container>
</template>

<script>
export default {
  name:'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
