<template>
  <div>
    <!--表格区-->
    <div class="collect-table-wrapper">
      <collect-table class="collecttable" :tableData="allbooks" :loading="loading">
      </collect-table>
    </div>

    <!--分页区-->
    <div class="collect-page-wrapper">
      <pagination class="collectpage" @change="pageChange" :total="total"></pagination>
    </div>
  </div>

</template>
<script>

  import { getBooksByPage } from "network/library.js";
  import CollectTable from "./CollectTable.vue";
  import Pagination from "components/common/pagination/Pagination";

  export default {
    name: 'UserCollect',
    components: {
      CollectTable,
      Pagination,
    },
    props: {

    },
    data() {
      return {
        "allbooks": [
          
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
  .collect-table-wrapper {
    padding: 0 0;
  }

  .collect-page-wrapper {
    margin: 20px auto;
    display: flex;
    justify-content: center;
  }
  .collecttable{
    height: 450px;
  }
</style>