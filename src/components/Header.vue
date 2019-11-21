<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
  >
    <el-menu-item index="1">主页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">日志</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3">关于我</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      activeIndex: "1"
    };
  }
};
</script>

<style>
.header {
  color: #8590a6;
  border-bottom-width: 1px;
}
</style>