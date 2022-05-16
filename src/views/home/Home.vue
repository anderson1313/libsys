<template>
  <div class="home-container">
    <span>home</span>
    <button @click="adminlogin">管理员登陆</button>
    <button @click="userlogin">用户登录</button>
    <button @click="adminlogout">管理员退出</button>
    <button @click="userlogout">用户退出</button>
    <button @click="returnbook">还书</button>
    <span>{{ testdata }}</span>
    <pagination @change="changePage"></pagination>
    <search-bar
      :getRelatedResCallBack="getRelatedRes"
      :relatedRes="relatedRes"
    ></search-bar>
  </div>
</template>
<script>
import Pagination from "components/common/pagination/Pagination";
import SearchBar from "components/common/searchbar/SearchBar";

import { getAllBooks } from "network/library";
import { confirmRequest } from "common/utils";

export default {
  name: "Home",
  components: {
    SearchBar,

    Pagination,
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
    getRelatedRes(...args) {
      // console.log("请求参数",args[0])
      getAllBooks().then((response) => {
        this.relatedRes = response;
      });
    },

    changePage(page) {
      console.log("当前页面", page);
    },
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
      const callBack = function () {
        getAllBooks().then((response) => {
          this.currentInstance.loading = false;
          this.currentInstance.visible = false;
          this.currentInstance = null;
        });
      };
      const _returnbook = confirmRequest.apply(this,[callBack]);
      _returnbook("123")
    },
  },
  created() {
    this.getAllBooks();
  },
  computed: {},
  deactivated() {
    console.log("deactiva");
  },
};
</script>
<style>
/* button {
  border: 1px solid black;
} */
</style>
