<template>
  <div>
    <manage-table :tableData="tableData" :labels="labels" v-loading="loading">

        <!-- 如果需要额外操作可以在这里添加-->
        <book-item-extra slot="extra"></book-item-extra>
        
    </manage-table>
  </div>
</template>
<script>
import ManageTable from "components/common/managetable/ManageTable";
import BookItemExtra from './BookItemExtra.vue'
export default {
  name: "BookTable",
  components: {
    ManageTable,
    BookItemExtra
  },
  props: ['tableData',"loading"],
  data() {
    return {
      labels: [
        {
          id: 0,
          label: "图书编号",
          width:"120",
          prop:"bookId",
          
        },
        {
          id: 1,
          label: "图书名称",
          prop:"bookName",
          width:"220",

        },
        {
          id: 2,
          label: "图书库存",
          prop:"bookLoannumber",
          
        },
          {
          id: 3,
          label: "图片",
          prop:"bookPhoto",
          width:"80"
          
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
