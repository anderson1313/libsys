<template>
  <div class="home-container">
    <final-bar></final-bar>
    <span>home</span>
    <button @click="adminlogin">管理员登陆</button>
    <button @click="userlogin">用户登录</button>
    <button @click="adminlogout">管理员退出</button>
    <button @click="userlogout">用户退出</button>
    <button @click="returnbook">还书</button>
    <span>{{ testdata }}</span>

    <confirm-box></confirm-box>
  </div>
</template>
<script>
import FinalBar from "components/content/navbar/FinalBar";
import { getAllBooks } from "network/library";
import ConfirmBox from "components/common/confirmbox/src/ConfirmBox";

export default {
  name: "Home",
  components: {
    FinalBar,
    ConfirmBox,
  },
  props: {},
  data() {
    return {
      testdata: null,
    };
  },
  methods: {
    getAllBooks() {
      getAllBooks().then((response) => {
        this.testdata = response;
      });
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
    returnbook() {
      var that = this
      this.$popconfirm({
        confirmMsg: "testmsg",
        beforeClose: (instance) => {
          that.currentInstance = instance
        },
      })
        .then((res) => {
           setTimeout(() => {
            //请求
            this.currentInstance.loading = false;
            this.currentInstance.visible = false;

          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    
    },
  },
  created() {
    this.getAllBooks();
  },
  computed: {},
};
</script>
<style>
button {
  border: 1px solid black;
}
</style>
