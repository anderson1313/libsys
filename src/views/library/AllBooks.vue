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
            v-loading="allbooks.length == 0"
            element-loading-text="拼命加载中"
          ></book-list>
        </transition>
        <div class="filter-list"></div>
      </div>

      <pagination @change="changePage" :total="total"></pagination>
    </div>
  </div>
</template>
<script>
import FinalBar from "components/content/navbar/FinalBar";
import BookList from "components/content/books/BookList.vue";
import SearchBar from "components/common/searchbar/SearchBar";
import Pagination from "components/common/pagination/Pagination";
import { getBooksByPage } from "network/library.js";

export default {
  name: "AllBooks",
  components: {
    FinalBar,
    BookList,
    SearchBar,
    Pagination,
  },
  props: {},
  data() {
    return {
      allbooks: [],
      total: 0,
      ani: "",
      curPage: 1,
    };
  },
  methods: {
    toBookDetail(bookid) {
      this.$router.push({
        name: "bookdetail",
        params: { id: bookid },
      });
    },

    changePage(page) {
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
        });
      }, 500);
      this.curPage = page;
    },
  },
  created() {
    getBooksByPage(1).then((res) => {
      this.allbooks = res.rows;
      this.total = res.total;
    });
  },
  computed: {},
};
</script>
<style>
.book-list-wrapper {
  margin: 1.25rem 0;
  display: flex;
  flex-direction: row;
}
.filter-list {
  width: 300px;
  height: 500px;
  background: antiquewhite;
}
</style>
