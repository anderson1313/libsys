<template>
  <ul class="pager">
    <li
      class="number"
      :class="{ liactive: current === 1 }"
      @click="setPage(1)"
    >
      1
    </li>

    <li
      class="el-icon more btn-quickprev"
      :class="[quickprevIconClass]"
   
      v-if="totalPage > centerSize + 2 && current - centerSize/2 - 1 >1 "
      @click="setPage(current - jumpSize)"
      @mouseenter="onMouseenter('left')"
      @mouseleave="quickprevIconClass = 'el-icon-more'"
    >
      
    </li>

    <li
      class="number"
      v-for="(page, index) in centerPages"
      :class="{ liactive: current === page }"
      :key="index"
      @click="setPage(page)"
    >
      {{ page }}
    </li>

    <li
      class="el-icon more btn-quickprev"
      :class="[quicknextIconClass]"
      @mouseenter="onMouseenter('right')"
      @mouseleave="quicknextIconClass = 'el-icon-more'"
      v-if="
        totalPage > centerSize + 2 && current + centerSize / 2 + 1 < totalPage
      "
      @click="setPage(current + jumpSize)"
    ></li>

    <li
      class="number"
      v-if="totalPage !== 1"
      :class="{ liactive: current === totalPage }"
      @click="setPage(totalPage)"
    >
      {{ totalPage }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "Pager",
  components: {},
  props: {
    totalPage: Number, //数据总页数
    defaultCurrentPage: Number, //默认当前页码
    //中间页码数默认为5
    centerSize: {
      type: Number,
      default() {
        return 5;
      },
    },
    jumpSize: {
      type: Number,
      default() {
        return 5;
      },
    },
  },
  data() {
    return {
      current: this.defaultCurrentPage,
      quicknextIconClass: "el-icon-more",
      quickprevIconClass: "el-icon-more",
    };
  },
  watch: {

    // 监听props中defaultCurrentPage值的改变，更新current的值
    defaultCurrentPage: function (newValue, oldValue) {
      this.current = newValue;
    },
  },

  methods: {
    setPage(page) {
    
        this.quickprevIconClass = "el-icon-more";
        this.quicknextIconClass = "el-icon-more";

      // 左边越界
      if (page < 1) this.current = 1;
      // 右边越界
      else if (page > this.totalPage) {
        this.current = this.totalPage;
      }
      // 正常情况
      else {
        this.current = page;
      }
      // 发出pager中页码被改变的事件
      this.$emit("change", this.current);

    },
    onMouseenter(direction) {
      if (direction === "left") {
        this.quickprevIconClass = "el-icon-d-arrow-left";
      } else {
        this.quicknextIconClass = "el-icon-d-arrow-right";
      }
    },
  },
  created() {},
  computed: {
    centerPages() {
      let centerPage = this.current;
      if (this.current > this.totalPage - 3) {
        centerPage = this.totalPage - 3;
      }
      if (this.current <= 4) {
        centerPage = 4;
      }
      if (this.totalPage <= this.centerSize + 2) {
        const centerArr = [];
        for (let i = 2; i < this.totalPage; i++) {
          centerArr.push(i);
        }
        return centerArr;
      } else {
        const centerArr = [];
        for (let i = centerPage - 2; i <= centerPage + 2; i++) {
          centerArr.push(i);
        }
        return centerArr;
      }
    },
    moreRight() {
      return this.moreActive ? "el-icon-d-arrow-right" : "el-icon-more";
    },
    moreLeft() {
      return this.moreActive ? "el-icon-d-arrow-left" : "el-icon-more";
    },
  },
};
</script>
<style>
.pager {
  list-style: none;
  height: 32px;
}
.pager li {
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
.pager :not(.liactive):hover {
  color: var(--color-text-active);
}
.pager .liactive {
  background: var(--color-text-active);
  color: white;
  cursor: default;
}


</style>
