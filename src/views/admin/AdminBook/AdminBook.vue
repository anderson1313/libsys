<template>
  <div class="admin-books">
  
    <!--功能区-->
    <div class="fun-wrapper">
      <search-bar
        class="bar"
        @searchFn="searchBook"
        ref="bar"
        :getRelatedResCallBack="getRelatedRes"
        :relatedRes="relatedRes"
        field="bookName"
        :useRelated="true"
      ></search-bar>
      <el-button type="success" @click="showForm(undefined, 'add')"
        >添加书籍</el-button
      >
    </div>

    <!--表格区-->

    <div class="book-table-wrapper">
      <book-table
        class="booktable"
        :tableData="allbooks"
        :loading="loading"
        @handleEdit="showForm($event, 'edit')"
      ></book-table>
    </div>

    <!--分页区-->
    <div class="book-page-wrapper">
      <pagination
        class="bookpage"
        @change="pageChange"
        :total="total"
      ></pagination>
    </div>

    <add-book-form ref="addform" ></add-book-form>
    <edit-book-form
      ref="editform"
      :editData="editData"
    ></edit-book-form>
  </div>
</template>
<script>
import { getBooksByPage, getBooksByName } from "network/library.js";
import BookTable from "./childComponents/BookTable.vue";
import Pagination from "components/common/pagination/Pagination";
import SearchBar from "components/common/searchbar/SearchBar";
import AddBookForm from "./childComponents/AddBookForm.vue";
import EditBookForm from "./childComponents/EditBookForm";
import {GetBooks} from "common/mixin.js"
export default {
  name: "AdminBook",
  components: {
    BookTable,
    Pagination,
    SearchBar,
    AddBookForm,
    EditBookForm
    
  },
  mixins:[GetBooks],
  props: {},
  data() {
    return {
      visible: false,
      allbooks: [],
      relatedRes: [],
      editData: undefined,
    };
  },
  methods: {
    //展示form，新增or修改
    showForm(...args) {
      if (args[1] === "add") {
        this.$refs.addform.visible = true;
      }
      if ((args[1] === "edit")) {
        this.editData = args[0];
        this.$refs.editform.visible = true;
      }
    },

    //搜索书本
    searchBook(bookname) {
      this.loading = true;
      if (bookname != "") {
        getBooksByName(bookname).then((response) => {
          this.allbooks = response;
          this.total = response.length;
          this.loading = false;
        });
      } else {
        this.getDefaultBook();
      }
    },

    //获取联想结果
    getRelatedRes(...args) {
      this.$refs.bar.originVal = args[0];
      getBooksByName(args[0]).then((response) => {
        this.relatedRes = response;
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
   
  },
  computed: {},
};
</script>
<style scoped>
.book-table-wrapper {
  padding: 10px 0;
}
.fun-wrapper {
  width: 90%;
  margin: 0 auto;
  padding: 20px 20px;
  padding-right: 80px;
  /* position: fixed; */
  z-index: 1000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.book-page-wrapper {
  margin: 20px auto;
  display: flex;
  justify-content: center;
}
</style>