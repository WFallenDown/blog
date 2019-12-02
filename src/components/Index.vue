/* <template>
  <div>
    <div class="banner">
      <img src="../images/e5bd25f8f6aab99e15bafe76cfee4998.jpg" class="bannerImg" />
      <div class="bannerTitle">
        <span style="font-size: 45px;">Welcome to ALEX Home</span>
        <p style="font-size: 20px;">Thought, story and thought</p>
      </div>
    </div>
    <div class="card">
      <el-row>
        <el-col :span="18" :offset="4">Articles I like</el-col>
      </el-row>
      <el-row>
        <el-col :span="18" :offset="4">
          <el-row>
            <el-col :span="3" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 1 : 0">
              <el-card :body-style="{ padding: '0px' }">
                <img
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  class="image"
                />
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <time class="time">2019-11-30</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="list">
      <el-row>
        <el-col :span="8" :offset="4">
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </el-col>
        <el-col :span="8" :offset="2">
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </el-col>
      </el-row>
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
      banner: require("../images/e5bd25f8f6aab99e15bafe76cfee4998.jpg")
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
.banner {
  position: relative;
  text-align: center;
  margin-bottom: 10px;
}
.bannerImg {
  width: 100%;
}
.bannerTitle {
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 25%;
  color: #fff;
  font-size: 30px;
}

.card{
  margin-bottom: 10px;
}

.list{
  margin-bottom: 10px;
}
</style>