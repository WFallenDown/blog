<template>
  <div>
    <div>
      <ul>
        <li v-for="i in count" :key="i">{{ i }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Journal",
  data() {
    return {
      count: 70,
      loading: false,
      bottomHeight: 50
    };
  },
  computed: {
    noMore() {
      return this.count >= 500;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  methods: {
    load() {
        if (this.getScrollBottomHeight() <= this.bottomHeight) {
            this.loading = true;
            setTimeout(() => {
            this.count += 20;
            this.loading = false;
        });
      }
    },

    //滚动条到底部的距离
    getScrollBottomHeight() {
      return this.getPageHeight() - this.getScrollTop() - this.getWindowHeight();
    },
    //页面高度
    getPageHeight() {
      return document.querySelector("html").scrollHeight;
    },
    //滚动条顶 高度
    getScrollTop() {
      var scrollTop = 0,
        bodyScrollTop = 0,
        documentScrollTop = 0;
      if (document.body) {
        bodyScrollTop = document.body.scrollTop;
      }
      if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
      }
      scrollTop =
        bodyScrollTop - documentScrollTop > 0
          ? bodyScrollTop
          : documentScrollTop;
      return scrollTop;
    },
    getWindowHeight() {
      var windowHeight = 0;
      if (document.compatMode == "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight;
      } else {
        windowHeight = document.body.clientHeight;
      }
      return windowHeight;
    }
  },
  mounted() {
            window.addEventListener('scroll', this.load)
        },
};
</script>

<style>
</style>