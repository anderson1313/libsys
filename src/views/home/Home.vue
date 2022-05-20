<template>
  <div class="home-container">
    <span>home</span>
    <button @click="adminlogin">管理员登陆</button>
    <button @click="userlogin">用户登录</button>
    <button @click="adminlogout">管理员退出</button>
    <button @click="userlogout">用户退出</button>
    <button @click="returnbook" class="re">还书</button>
    <span>{{ testdata }}</span>
  
 

    
  </div>
</template>
<script>
import Pagination from "components/common/pagination/Pagination";
import SearchBar from "components/common/searchbar/SearchBar";
import { getBooksByName} from "network/library";
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
      getBooksByName(args[0]).then((response) => {
        this.relatedRes = response;
      });
    },

    changePage(page) {

      //
      console.log("当前页面", page);
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
      const _returnbook = confirmRequest.apply(this,[callBack,"你确定要删除吗？"]);
      _returnbook("123")
    },
  },
  created() {
    
  },
  computed: {},
  deactivated() {
    
  },
};
</script>
<style>
/* button {
  border: 1px solid black;
} */
.re{
  width: 50px;
  height: 50px;
  background: red;
}
.test{
  width: 120px;
  height: 90px;
  font-size: 1px;
 
  
}
</style>
