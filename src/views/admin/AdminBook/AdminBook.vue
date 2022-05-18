<template>
  <div class="admin-books">
    <book-table :tableData="allbooks" :loading = "loading"></book-table>
    
    <pagination @change="pageChange" :total="total"></pagination>
  </div>
</template>
<script>
import { getBooksByPage } from "network/library.js";
import BookTable from "./childComponents/BookTable.vue"
import Pagination from "components/common/pagination/Pagination";
export default {
  name: "AdminBook",
  components: {

    BookTable,
    Pagination
  },
  props: {},
  data() {
    return {
      allbooks:[],
      loading:false,
      total:0
      
    };
  },
  methods: {
    pageChange(page) {
      this.loading = true
      setTimeout(() => {
        getBooksByPage(page).then((res) => {
          this.allbooks = res.rows;
          this.loading = false
        });
      }, 500);
      this.curPage = page;

    }
  },
  created() {
    this.loading = true
    getBooksByPage(1).then((res) => {
      this.allbooks = res.rows;
      this.total = res.total
      this.loading = false
    });

  },
  computed: {},
};
</script>
<style>
</style>