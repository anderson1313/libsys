<template>
  <el-table-column label="操作">
    <template slot-scope="scope">
      <el-button size="mini" @click="handleEdit(scope.row)">修改</el-button>
      <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
        >删除</el-button
      >
    </template>
  </el-table-column>
</template>
<script>
import { confirmRequest } from "common/utils";
export default {
  name: "BookItemExtra",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    handleDelete(...args) {
      const callBack = function () {
        //请求后段接口
      };

      const _handleDelete = confirmRequest.apply(this,[callBack,`你确定要删除《 ${args[0].bookName} 》这本书吗?`])
      _handleDelete(...args)
    },
  },
  created() {},
  computed: {},
};
</script>
<style>
</style>
