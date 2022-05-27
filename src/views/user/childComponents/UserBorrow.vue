<template>
  <div>
    <!--表格区-->
    <div class="borrow-table-wrapper">
      <borrow-table class="borrowtable" :tableData="allbooks" :loading="loading">
      </borrow-table>
    </div>

    <!--分页区-->
    <div class="borrow-page-wrapper">
      <pagination class="borrowpage" @change="pageChange" :total="total"></pagination>
    </div>
  </div>

</template>
<script>

  import { getBooksByPage } from "network/library.js";
  import BorrowTable from "./BorrowTable.vue";
  import Pagination from "components/common/pagination/Pagination";

  export default {
    name: 'UserBorrow',
    components: {
      BorrowTable,
      Pagination,
    },
    props: {

    },
    data() {
      return {
        "allbooks": [
          {
            "borrowNo":"123456",
            "bookName":"活着",
            "borrowDate":"2021-05-01",
            "returnDate":"2021-06-01"
          },
          {
            "borrowNo":"123456",
            "bookName":"活着",
            "borrowDate":"2021-05-01",
            "returnDate":"2021-06-01"
          },
          {
            "borrowNo":"123456",
            "bookName":"活着",
            "borrowDate":"2021-05-01",
            "returnDate":"2021-06-01"
          },
          {
            "borrowNo":"123456",
            "bookName":"活着",
            "borrowDate":"2021-05-01",
            "returnDate":"2021-06-01"
          },
          {
            "borrowNo":"123456",
            "bookName":"活着",
            "borrowDate":"2021-05-01",
            "returnDate":"2021-06-01"
          },
          {
            "borrowNo":"123456",
            "bookName":"活着",
            "borrowDate":"2021-05-01",
            "returnDate":"2021-06-01"
          },
          {
            "borrowNo":"123456",
            "bookName":"活着",
            "borrowDate":"2021-05-01",
            "returnDate":"2021-06-01"
          },


        ],
      };
    },
    methods: {
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
    computed: {
    },
  }
</script>
<style scoped>
  .borrow-table-wrapper {
    padding: 0 0;
  }

  .borrow-page-wrapper {
    margin: 20px auto;
    display: flex;
    justify-content: center;
  }
  .borrowtable{
    height: 450px;
  }
</style>