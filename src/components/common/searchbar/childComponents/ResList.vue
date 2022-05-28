<template>
<transition name="serach-fade">
  <div class="res-list" v-show="showList">
    <div class="triangle triangle_border" />
    <div class="triangle triangle_bg" />
    <div
      @mousedown="searchFn($event)"
      :class="cactiveRes == index ? 'activeSe' : ''"
      class="each-res"
      v-for="(item, index) in relatedRes"
      :data-keyword="item[field]"
      :key="index"
    >
      <i class="iconfont icon-sousuo"></i>
      <!-- <span>{{ item[field].replace(/\s*/g,"") }}</span> -->
      <span>{{ item[field] }}</span>
    </div>
    <div class="each-res" v-if="relatedRes.length ==0">
      <span>无匹配结果</span>

    </div>
    
  </div>
  </transition>
</template>
<script>
export default {
  name: "ResList",
  components: {},
  props: {
    showList: {
      type: Boolean,
      default: false,
    },
    relatedRes: {
      type: Array,
      default() {
        return [];
      },
    },
    activeRes: {
      type: Number,
      default: -1,
    },
    field: {
      type: String,
    },
  },
  watch: {
    activeRes: function (newVal, oldVal) {
      this.cactiveRes = newVal;
    },
  },
  data() {
    return {
      cactiveRes: this.activeRes,
      click: false,
    };
  },
  methods: {
    searchFn(e) {
      this.click = true;
      this.$emit("searchFn", e.target.dataset.keyword);
    },
  },
  created() {},
  computed: {},
};
</script>
<style>
.res-list {
  position: relative;
  z-index: 1000;
  top: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 100%;
  border-radius: 5px;
  border-top: none;
  padding: 5px 0;
  background: white;
  transition: all 0.2s ease-in;
  border: 1px solid #e4e7ed;
}
.triangle {
  position: absolute;
  left: 22px;
  overflow: hidden;
  width: 0;
  height: 0;
  border-width: 10px;
  border-style: dashed solid dashed dashed;
}
.triangle_bg {
  top: -20px;

  z-index: 3;
  border-color: transparent transparent white transparent;
}
.triangle_border {
  top: -21px;
  border-color: transparent transparent #e4e7ed transparent;
}

.each-res {
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 28px;
  line-height: 28px;
  margin: 5px 0;
  padding: 0 10px;
}
.each-res span {
  width: 80%;
  font-size: 12px;
  color: rgba(45, 52, 54, 0.8);
  display: inline-block;
  margin-left: 10px;
  line-height: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.activeSe,
.each-res:hover {
  background: rgba(128, 128, 128, 0.111);
  color: var(--color-text-active) !important;
}
.each-res:hover span,
.activeSe span {
  color: var(--color-text-active) !important;
}
.each-res i {
  font-size: 15px !important;
  width: 20px !important;
  height: 20px !important;
  text-align: center;
  line-height: 20px;
}
</style>
