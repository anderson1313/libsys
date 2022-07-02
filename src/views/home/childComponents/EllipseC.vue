<template>
  <div class="bg-ellipse-full-wrapper">
    <div class="bg-ellipse-wrapper">
      <div class="bg-ellipse bg-ellipse-1" :style="ellipseStyle(1)"></div>
      <div class="bg-ellipse bg-ellipse-2" :style="ellipseStyle(2)"></div>
      <div class="bg-ellipse bg-ellipse-3" :style="ellipseStyle(3)"></div>
      <div class="bg-ellipse bg-ellipse-4" :style="ellipseStyle(4)"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EllipseC",
  components: {},
  props: {
    auto: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    const stash = this.sessionCache.getItem("stash");
    return Object.assign(
      {
        ypos: 0,
        scrollTop: 0,
      },
      stash
    );
  },
  methods: {
    handleScroll(e) {
      let startpoint =
        document.getElementsByClassName("home-intro")[0].offsetTop;
      let bgoffsetTop = document.getElementsByClassName("home-bg")[0].offsetTop;
      let bgoffsetHeight =
        document.getElementsByClassName("home-bg")[0].offsetHeight;
      let _scrollTop = document.documentElement.scrollTop;
      let diff = _scrollTop - this.scrollTop;
      let DistanceTostartpoint = startpoint - bgoffsetHeight;
      let showInteo = _scrollTop > DistanceTostartpoint;

      //   if (!showInteo) return;

      this.scrollTop = _scrollTop;
      //Chrome,Safari下为0)

      //向上
      if (diff > 0) {
        this.ypos = diff * 2;
        return;
      }
      //向下
      if (diff < 0) {
        this.ypos = diff * 2;
        return;
      }
    },
  },
  created() {},

  mounted() {
    if (this.auto) {
        //监听鼠标滚动事件
    window.addEventListener("scroll", this.handleScroll);
    //在页面加载时读取sessionStorage里的状态信息

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      this.sessionCache.setItem("stash", this.$data);
    });

    }
  
  },
  computed: {
    ellipseStyle() {
      return function (index) {
        let _style = "";
        switch (index) {
          case 1:
            _style = {
              transform: "translate3d(0," + (this.ypos + 100) + "px,0)",
            };
            break;
          case 2:
            _style = {
              transform: "translate3d(0," + (this.ypos + 200) + "px,0)",
            };
            break;
          case 3:
            _style = {
              transform: "translate3d(0," + (this.ypos + 100) + "px,0)",
            };
            break;
          case 4:
            _style = {
              transform: "translate3d(0," + (this.ypos + 200) + "px,0)",
            };
            break;
        }

        return _style;
      };
    },
  },

  created() {
   
   

  },
};
</script>
<style scoped>
.bg-ellipse-full-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  background: linear-gradient(
    98.63deg,
    rgba(248, 249, 251, 0.546) 20.59%,
    rgba(120, 230, 220, 0) 89.33%
  );
}
.bg-ellipse {
  overflow: hidden;
  position: absolute;
  width: 699px;
  height: 699px;
  border-radius: 51%;
  z-index: -1;
  transition: transform 0.5s linear;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  perspective: 1000;
}

.bg-ellipse-wrapper .bg-ellipse-1 {
  left: -210px;
  top: calc(100vh - 300px);
  background: linear-gradient(
    44.11deg,
    rgba(124, 177, 235, 0.6) 8.94%,
    rgba(255, 255, 255, 0) 86.73%
  );
  -webkit-transform: rotate(-85.35deg);
  -ms-transform: rotate(-85.35deg);
  transform: rotate(-85.35deg);
}
.bg-ellipse-wrapper .bg-ellipse-2 {
  right: -138px;
  top: calc(100vh + 300px);
  background: linear-gradient(
    44.11deg,
    rgba(245, 198, 39, 0.6) 8.94%,
    rgba(255, 255, 255, 0) 86.73%
  );
  -webkit-transform: rotate(-85.35deg);
  -ms-transform: rotate(-85.35deg);
  transform: rotate(-85.35deg);
}
.bg-ellipse-wrapper .bg-ellipse-3 {
  left: -232px;
  top: calc(100vh + 600px);
  background: linear-gradient(
    44.11deg,
    rgba(139, 233, 223, 0.75) 8.94%,
    rgba(255, 255, 255, 0) 86.73%
  );
  -webkit-transform: rotate(-85.35deg);
  -ms-transform: rotate(-85.35deg);
  transform: rotate(-85.35deg);
}
.bg-ellipse-wrapper .bg-ellipse-4 {
  right: -190px;
  top: calc(100vh - 1000px);
  background: linear-gradient(
    44.11deg,
    rgba(245, 198, 39, 0.6) 8.94%,
    rgba(255, 255, 255, 0) 86.73%
  );
  -webkit-transform: rotate(-85.35deg);
  -ms-transform: rotate(-85.35deg);
  transform: rotate(-85.35deg);
}
</style>
