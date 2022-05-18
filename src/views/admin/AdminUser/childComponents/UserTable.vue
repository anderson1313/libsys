<template>
  <div>
    <manage-table :tableData="tableData" :labels="labels">

        <!-- 如果需要额外操作可以在这里添加-->
        <user-table-item-extra slot="extra"></user-table-item-extra>
        
    </manage-table>
  </div>
</template>
<script>
import ManageTable from "components/common/managetable/ManageTable";
import UserTableItemExtra from "./UserTableItemExtra.vue"
export default {
  name: "UserTable",
  components: {
    ManageTable,
    UserTableItemExtra
  },
  props: {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],

      labels: [
        {
          id: 0,
          label: "日期",
          prop:"date",
          width:"120"
        },
        {
          id: 1,
          label: "姓名",
          prop:"name",
          width:"120"
        },
        {
          id: 2,
          label: "地址",
          prop:"address",
          
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
