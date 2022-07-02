<template>
  <div class="home-container">
    <div class="home-bg">
      <div class="mask"></div>
      <img src="@/assets/img/bg2.jpeg" alt="" />
      <div class="text animated fadeInDown">欢迎使用EasyLib</div>
      <div class="loginbtn animated fadeInDown" @click="loginClick">
        <span> {{ getTip() }}</span>
        <i class="iconfont icon-sanjiaoright"></i>
      </div>
    </div>
  

    <ellipse-c></ellipse-c>

    <function></function>
    <introduction></introduction>
  
  </div>
</template>
<script>
import Tab from "components/common/tab/Tab"
import EllipseC from "./childComponents/EllipseC.vue";
import Function from "./childComponents/Function.vue";
import Introduction from "./childComponents/Introduction.vue";

export default {
  name: "Home",
  components: {
    EllipseC,
    Function,
    Introduction,
    Tab
  },
  props: {},
  data() {
    return {
      testdata: null,
      relatedRes: undefined,
      showList: undefined,
    };
  },
  methods: {
    getTip() {
      if (this.sessionCache.getItem("isLogin")) {
        return "借阅书籍";
      } else {
        return "立即登录";
      }
    },
    loginClick() {
      if (this.sessionCache.getItem("isLogin")) {
        this.$router.push("/library");
      } else {
        this.$router.push("/userlogin");
      }
    },
  },
  created() {

  },
  computed: {},
  deactivated() {},
  
};
</script>
<style scoped>
.home-container {
  position: relative;
  width: 100% !important;
  overflow: hidden;
  padding-bottom: 300px;
}
.home-bg {
  width: 100%;
  min-height: calc(100vh - 70px);
  position: relative;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.home-bg img {
  position: absolute;
  width: 80%;
  height: 85%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}
.mask {
  position: absolute;
  width: 80%;
  height: 85%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.587);
  z-index: 10;
  border-radius: 10px;
}
.text,
.loginbtn {
  z-index: 120;
  color: white;
  font-weight: bold;
  font-size: 50px;
  text-align: center;
}
.loginbtn {
  position: absolute;
  top: 10%;
  right: 15%;
  font-weight: 300;
  cursor: pointer;
  font-size: 30px !important;
  margin: 20px 0;
  border-radius: 10px;
  padding: 5px 20px;
  color: white;
  transition: all 0.2s;
}
.loginbtn .iconfont {
  font-size: 30px !important;
}
.loginbtn:hover,
.loginbtn .iconfont:hover {
  color: wheat;
}
</style>
