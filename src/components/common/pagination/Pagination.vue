<template>
  <div id="pagination">
    <input
      class="btn-prev"
      type="button"
      value="<"
      @click="setPage(current - 1)"
    />
   
    <pager
      :total-page="totalPage"
      :default-current-page="current"
      @change="pageChange"
    ></pager>
   
    <input
      class="btn-next"
      type="button"
      value=">"
      @click="setPage(current + 1)"
    />
  </div>
</template>
<script>
import Pager from "./Pager";
export default {
  name: "Pagination",
  components: {
    Pager,
  },
  props: {
    // 默认当前页码
    defaultCurrentPage: {
      type: Number,
      default() {
        return 1;
      },
    },
    // 默认每页数据的条数
    defaultPageSize: {
      type: Number,
      default() {
        return 10;
      },
    },
    // 数据的总条数
    total: {
      type: Number,
      default() {
        return 100;
      },
    },
  },
  data() {
    return {
      current: this.defaultCurrentPage,
    };
  },
  methods: {
    setPage(page) {
     
     
      // 左边越界
      if (page < 1) {
        this.current = 1;
        return
        }
      // 右边越界
      else if (page > this.totalPage) {
        this.current = this.totalPage;
        return

      }
      // 正常情况
      else {
        this.current = page;
      }
      // 发出事件，让外部知道页码改变了
    
      this.$emit("change", this.current);
    },

    // 接收pager中发出的改变页码事件，并再次发送出去
    pageChange(page) {
      this.current = page
      
      this.$emit("change", page);
    },
  },
  created() {},
  computed: {
    totalPage() {
      return this.total? Math.ceil(this.total / this.defaultPageSize) :1;
    },
  },
};
</script>
<style>
#pagination{
        display: flex;
    }
.btn-prev, .btn-next{
  font-size: 12px;
  font-weight: bold;
  float: left;
  width: 30px;
  height: 30px;
  line-height: 30px;
  margin: 0 8px 0 0;
  padding: 0 6px;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
  background: #f4f4f5;
  color: #606266;
}


</style>
