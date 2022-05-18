<template>
  <el-table-column align ="center" label="操作">
    <template slot-scope="scope">
      
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
    handleDelete(...outerargs) {
      const callBack = function (...allargs) {
        setTimeout(() => {
          //这三句在请求成功之后写
          this.currentInstance.loading = false;
          this.currentInstance.visible = false;
          this.currentInstance = null;
          document.body.removeChild(allargs[1].$el);
        }, 1000);
      };

      const _handleDelete = confirmRequest.apply(this, [
        callBack,
        `你确定要删除《 ${outerargs[0].bookName} 》这本书吗?`,
      ]);
      _handleDelete(...outerargs);
    },
  },
  created() {},
  computed: {},
};
</script>
<style>
</style>
