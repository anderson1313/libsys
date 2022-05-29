<template>
  <manage-table
    :tableData="tableData"
    :labels="labels"
    v-loading="loading"
    :tableStyle="tableStyle"
  >
    <!-- 如果需要额外操作可以在这里添加-->

    <borrow-item-extra slot="extra"></borrow-item-extra>
 
  </manage-table>
</template>
<script>
import ManageTable from "components/common/managetable/ManageTable";
import BorrowItemExtra from "./BorrowItemExtra.vue";
export default {
  name: "BorrowTable",
  components: {
    ManageTable,
    BorrowItemExtra,
  },
  props: ["tableData", "loading"],
  data() {
    return {
      tableStyle: {
        width: "90%",
        margin: "0 auto",
      },
      labels: [
        {
          id: 0,
          label: "记录编号",
          width: "120",
          prop: "borrowNo",
        },

        {
          id: 1,
          label: "图书名称",
          prop: "bookName",
          width: "130",
        },

        {
          id: 2,
          label: "借阅日期",
          prop: "borrowDate",
          width: "100",
        },
        {
          id: 3,
          label: "归还日期",
          prop: "returnDate",
          width: "100",
        },
        {
          id: 4,
          label: "归还状态",
          prop: "borrowState",
          width: "100",
        },
      ],
    };
  },
  methods: {},
  created() {},
  computed: {},
};
</script>
<style>
</style>
