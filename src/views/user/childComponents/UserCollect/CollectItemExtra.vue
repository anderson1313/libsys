<template>

  <el-table-column align ="center" label="操作">
    <template slot-scope="scope">
      <el-button size="mini" type="success" @click="handleBorrow(scope.row)"
        >借阅</el-button
      >
      <el-button size="mini" type="danger" @click="handleCancle(scope.row)"
        >取消收藏</el-button
      >
    </template>
  </el-table-column>
  
</template>
<script>
import { confirmRequest } from "common/utils";
export default {
  name: "CollectItemExtra",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    handleCancle(...outerargs) {
      const callBack = function (...allargs) {
        setTimeout(() => {
          //这三句在请求成功之后写
          this.currentInstance.loading = false;
          this.currentInstance.visible = false;
          this.currentInstance = null;
          document.body.removeChild(allargs[1].$el);
        }, 1000);
      };

      const _handleCancle = confirmRequest.apply(this, [
        callBack,
        `你确定要取消收藏《 ${outerargs[0].bookName} 》这本书吗?`,
      ]);
      _handleCancle(...outerargs);
    },
    handleBorrow(...outerargs) {
      const callBack = function (...allargs) {
        setTimeout(() => {
          //这三句在请求成功之后写
          this.currentInstance.loading = false;
          this.currentInstance.visible = false;
          this.currentInstance = null;
          document.body.removeChild(allargs[1].$el);
        }, 1000);
      };

      const _handleBorrow = confirmRequest.apply(this, [
        callBack,
        `你确定要借阅《 ${outerargs[0].bookName} 》这本书吗?`,
      ]);
      _handleBorrow(...outerargs);
    },
  },
  created() {},
  computed: {},
};
</script>
<style>
</style>
