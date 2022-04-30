<template>
  <div class="home-container">
    <final-bar></final-bar>
    <span>home</span>
    <button @click="adminlogin">管理员登陆</button>
    <button @click="userlogin">用户登录</button>
    <button @click="adminlogout">管理员退出</button>
    <button @click="userlogout">用户退出</button>
    <span>{{testdata}}</span>
  </div>
</template>
<script>

import FinalBar from "components/content/navbar/FinalBar";
import {getAllBooks} from "network/library";

export default {
  name: "Home",
  components: {
    FinalBar
  },
  props: {},
  data() {
    return {
      testdata:null

    };
  },
  methods: {
      getAllBooks() {
      getAllBooks().then(response => {
        this.testdata = response
        console.log(response)
      })

    },
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
  created() {
    this.getAllBooks()
  },
  computed: {

  
  },
};
</script>
<style>
.home-container {
}
</style>
