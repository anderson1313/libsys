<template>
  <div class="admin-books">
    <div class="fun-wrapper">
      <search-bar
      class="bar"
        @searchBook="searchBook"
        ref="bar"
        :getRelatedResCallBack="getRelatedRes"
        :relatedRes="relatedRes"
        field="bookName"
      ></search-bar>
       <el-button type="success">添加书籍</el-button>

      
    </div>

    <div class="book-table-wrapper">
      <book-table
        class="booktable"
        :tableData="allbooks"
        :loading="loading"
      ></book-table>
    </div>

    <div class="bookpagewrapper">
      <pagination
        class="bookpage"
        @change="pageChange"
        :total="total"
      ></pagination>
    </div>
  </div>
</template>
<script>
import { getBooksByPage, getBooksByName } from "network/library.js";
import BookTable from "./childComponents/BookTable.vue";
import Pagination from "components/common/pagination/Pagination";
import SearchBar from "components/common/searchbar/SearchBar";
export default {
  name: "AdminBook",
  components: {
    BookTable,
    Pagination,
    SearchBar,
  },
  props: {},
  data() {
    return {
      allbooks: [],
      loading: false,
      total: 0,
      relatedRes: [],
    };
  },
  methods: {
    //搜索书本
    searchBook(bookname) {
      
      this.loading = true;

      if (bookname != "") {
          getBooksByName(bookname).then((response) => {
      
        this.allbooks = response;
        this.total = response.length;
        this.loading = false;
      });

      }else{
        this.getDefaultBook()
      }
    
    },

    //获取联想结果
    getRelatedRes(...args) {
      this.$refs.bar.originVal = args[0];
      getBooksByName(args[0]).then((response) => {
        this.relatedRes = response;
      });
    },

    //默认获取第一页的书本
    getDefaultBook() {
      this.loading = true;
      getBooksByPage(1).then((res) => {
        this.allbooks = res.rows;
        this.total = res.total;
        this.loading = false;
      });
    },

    //分页器页数改变
    pageChange(page) {
      this.loading = true;
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
    this.getDefaultBook();
  },
  computed: {},
};
</script>
<style scoped>
.book-table-wrapper {
  padding: 10px 0;
}
.fun-wrapper {
  padding:20px 20px;
  /* position: fixed; */
  z-index: 1000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.bookpagewrapper {
  margin: 20px auto;
  display: flex;
  justify-content: center;
}

</style>