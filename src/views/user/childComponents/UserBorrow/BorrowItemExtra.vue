<template>
  <el-table-column align="center" label="操作" slot="extra">
    <template slot-scope="scope">
      <el-button size="mini" type="success" @click="handleReturn(scope.row)"
        >还书</el-button
      >
      <el-button size="mini" type="warning" @click="handleRenew(scope.row)"
        >续借</el-button
      >
    </template>
  </el-table-column>
</template>
<script>
import { confirmRequest } from "common/utils";
export default {
  name: "BorrowItemExtra",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    handleReturn(...outerargs) {
      const callBack = function (...allargs) {
        setTimeout(() => {
          //这三句在请求成功之后写
          this.currentInstance.loading = false;
          this.currentInstance.visible = false;
          this.currentInstance = null;
          document.body.removeChild(allargs[1].$el);
        }, 1000);
      };

      const _handleReturn = confirmRequest.apply(this, [
        callBack,
        `你确定要退还《 ${outerargs[0].bookName} 》这本书吗?`,
      ]);
      _handleReturn(...outerargs);
    },
    handleRenew(...outerargs) {
      const callBack = function (...allargs) {
        setTimeout(() => {
          //这三句在请求成功之后写
          this.currentInstance.loading = false;
          this.currentInstance.visible = false;
          this.currentInstance = null;
          document.body.removeChild(allargs[1].$el);
        }, 1000);
      };

      const _handleRenew = confirmRequest.apply(this, [
        callBack,
        `你确定要续借《 ${outerargs[0].bookName} 》这本书吗?`,
      ]);
      _handleRenew(...outerargs);
    },
  },
  created() {},
  computed: {},
};
</script>
<style>
</style>
