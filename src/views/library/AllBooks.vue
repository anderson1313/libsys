<template>
  <div class="all-books">
    
    <div class="library-main">
      <search-bar></search-bar>
      <div class="book-list-wrapper">
        <transition name="efade">
          <book-list
            :ani="ani"
            :books="allbooks"
            @toBookDetail="toBookDetail"
            v-loading="loading"
            element-loading-text="拼命加载中"
          ></book-list>
        </transition>
        <book-aside @asideClick="asideClick"></book-aside>
      </div>

      <pagination @change="changePage" :total="total"></pagination>
    </div>
  </div>
</template>
<script>
import BookList from "components/content/books/BookList.vue";
import SearchBar from "components/common/searchbar/SearchBar";
import Pagination from "components/common/pagination/Pagination";
import BookAside from "./childComponents/BookAside";
import { getBooksByPage } from "network/library.js";
import {GetBooks} from "common/mixin.js"
export default {
  name: "AllBooks",
  components: {
    BookAside,
    BookList,
    SearchBar,
    Pagination,

  },
  mixins:[GetBooks],
  props: {},
  data() {
    return {
    
      ani: "",
      curPage: 1,
    };
  },
  methods: {
    //标签栏事件
    asideClick(idObj) {
      console.log(idObj);
    },
    toBookDetail(bookid) {
      this.$router.push({
        name: "bookdetail",
        params: { id: bookid },
      });
    },

    //页数改变
    changePage(page) {
      this.loading = true;
      this.allbooks = [];
      if (page > this.curPage) {
        this.ani = "brfade";
      }
      if (page < this.curPage) {
        this.ani = "blfade";
      }
      setTimeout(() => {
        getBooksByPage(page).then((res) => {
          this.allbooks = res.rows;
          this.loading = false;
        });
      }, 500);
      this.curPage = page;
    },

  },

  created() {
   
  },
  computed: {},
};
</script>
<style scoped>
.library-main{
  padding: 30px 0;
}
.book-list-wrapper {
  margin: 1.25rem 0;
  display: flex;
  flex-direction: row;
}
</style>
