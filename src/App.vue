<template>
  <div id="app">
    <div class="bar-con">
      <final-bar></final-bar>
    </div>

    <keep-alive exclude="Login,EachBook,AdminBook,Admin">
      <router-view class="page-container"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import FinalBar from "components/content/navbar/FinalBar";
export default {
  name: "App",
  components: {
    FinalBar,
  },
  data() {
    return {};
  },
  created() {
    
    // try {
    //   if (window.atob(this.sessionCache.getItem("isadmin")) == "true") {
    //     this.$store.commit("auth/adminLogin");
    //   } else {
    //     this.$store.commit("auth/adminLogout");
    //   }
    // } catch {
    //   this.sessionCache.setItem("isadmin",window.btoa(false))

    // }
  },
  mounted() {
    //token验证

  },
};
</script>

<style >
@import "assets/css/base.css";
@media (max-width: 1024px) {
  .bar-con {
    width: 1024px !important;
  }
}
.bar-con {
  background: var(--main-background);
}

.page-container {
  width: 1040px !important;
  margin: 0 auto;
  /* overflow: hidden; */
}
</style>
