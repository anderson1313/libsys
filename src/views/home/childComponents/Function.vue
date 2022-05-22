<template>
  <div class="home-fun">
    <div class="fun-left">
      <p class="title">系统功能</p>
      <p class="left-text">
        EasyLib提供丰富的功能，让用户与管理者都能愉快地使用该系统。
      </p>
    </div>
    <div class="fun-right">
      <transition name="fun-fade">
        <div class="fun" v-show="visible">
          <i class="iconfont icon-shuji"></i>
          <p>海量书籍</p>
        </div>
      </transition>
      <transition name="fun-fade" >
        <div class="fun" v-show="visible">
          <i class="iconfont icon-changjingguanli"></i>
          <p>管理书籍</p>
        </div>
      </transition>
      <transition name="fun-fade" >
        <div class="fun" v-show="visible">
          <i class="iconfont icon-jushoucanggift"></i>
          <p>收藏书籍</p>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "Function",
  components: {},
  props: {},
  data() {
    return {
      visible: false,
    };
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
   
      let showInteo = _scrollTop + 480 > DistanceTostartpoint;

      if (showInteo) {
        this.visible = true;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  computed: {},
};
</script>
<style scoped>
.home-fun {
  width: 100%;
  padding: 0 8vw;
  height: 500px;
  margin-top: 9vw;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.fun-left {
  width: 30%;
  height: 100%;
}
.fun-right {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row;

  justify-content: center;
}
.inner {
  background: rebeccapurple;
}
.title {
  font-size: 50px;
  font-family: "Gilroy-Bold", -apple-system, "Sofia Pro", "Microsoft YaHei",
    "Helvetica", "Arial", sans-serif;
  font-weight: 700;
  color: #333;
  text-align: left;
}
.left-text {
  text-align: left;
  font-size: 20px;
  font-weight: 400;
  color: #333;
  text-align: left;
  line-height: 32px;
  margin: 10px 0;
}

.fun {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  font-size: 22px;
  font-weight: 400;
  color: #333;
  margin: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
}
.fun .iconfont {
  font-size: 28px !important;
  font-weight: 400;
  margin: 15px 0;
  color: var(--color-text-active);
}
.fun:nth-child(1) .iconfont {
  color: #293462;
}
.fun:nth-child(2) .iconfont {
  color: #4e944f;
}
.fun:nth-child(3) .iconfont {
  color: #e04d01;
}
</style>
