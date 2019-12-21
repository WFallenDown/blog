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
            <el-menu-item index="2">
              <div style="text-align:center">
                <router-link to="/Journal">日志</router-link>
              </div>
            </el-menu-item>
          </el-col>
          <el-col :xs="{span:2}" :sm="{span:2}" :md="{span:2}" :lg="{span:1}" :xl="{span:1}">
            <el-menu-item index="3">
              <div style="text-align:center">关于我</div>
            </el-menu-item>
          </el-col>
          <el-col v-if="showImg"
            :xs="{span:4,offset:8}"
            :sm="{span:4,offset:2}"
            :md="{span:2,offset:5}"
            :lg="{span:2,offset:3}"
            :xl="{span:1,offset:5}"
          >
          <el-avatar :size="50" style="margin-top:2px" :src="images"></el-avatar>
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
      activeIndex: "1",
      showImg: false
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
