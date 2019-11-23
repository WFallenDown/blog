<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="my-el-menu"
        mode="horizontal"
        background-color="#fff"
        text-color="#000000"
      >
        <el-row>
          <el-col
            :xs="{span:3}"
            :sm="{span:2,offset:11}"
            :md="{span:2,offset:10}"
            :lg="{span:1,offset:15}"
            :xl="{span:1,offset:14}"
          >
            <el-menu-item index="1">
              <div style="text-align:center">
                <router-link to="/Index">主页</router-link>
              </div>
            </el-menu-item>
          </el-col>
          <el-col :xs="{span:5}" :sm="{span:3}" :md="{span:3}" :lg="{span:2}" :xl="{span:1}">
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
          </el-col>
          <el-col :xs="{span:2}" :sm="{span:2}" :md="{span:2}" :lg="{span:1}" :xl="{span:1}">
            <el-menu-item index="3">
              <div style="text-align:center">关于我</div>
            </el-menu-item>
          </el-col>
          <el-col
            :xs="{span:4,offset:8}"
            :sm="{span:4,offset:2}"
            :md="{span:2,offset:5}"
            :lg="{span:2,offset:3}"
            :xl="{span:1,offset:5}"
          >
            <el-image
              style="width: 50px; height: 50px; border-radius:50%;overflow: hidden; top:4px;"
              :src="images"
            ></el-image>
          </el-col>
        </el-row>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <div>Footer</div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      images: require("./images/myheadportrait.png"),
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

.my-el-menu {
  border-bottom-color: #444444 !important ;
  border: 0 !important;
}

a {
  text-decoration: none;
  color: #000000;
}

header {
  padding: 0 !important;
  height: auto !important;
}

main {
  padding: 0 !important;
}

body {
  margin: 0;
  width: 100%;
  height: 100%;
  position: relative;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
