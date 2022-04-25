<template>
  <div class="home-container">
    <final-bar></final-bar>
    <span>home</span>
    <button @click="adminlogin">管理员登陆</button>
    <button @click="userlogin">用户登录</button>
    <button @click="adminlogout">管理员退出</button>
    <button @click="userlogout">用户退出</button>
  </div>
</template>
<script>

import FinalBar from "components/content/navbar/FinalBar";

export default {
  name: "Home",
  components: {
    FinalBar
  },
  props: {},
  data() {
    return {};
  },
  methods: {
    adminlogin() {
      this.sessionCache.setItem("isadmin", true);
    
    },
    userlogin() {
      this.sessionCache.setItem("isLogin", true);

    },
    adminlogout() {
      this.sessionCache.setItem("isadmin", false);

    },
    userlogout() {
      this.sessionCache.setItem("isLogin", false);

    },
  },
  created() {},
  computed: {},
};
</script>
<style>
.home-container {
}
</style>
