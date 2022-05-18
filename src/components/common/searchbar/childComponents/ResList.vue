<template>
  <div class="res-list" v-show="showList">
    <div
      @mousedown="searchbook($event)"
      :class="cactiveRes == index ? 'activeSe' : ''"
      class="each-res"
      v-for="(item, index) in relatedRes"
      :data-keyword ="item[field]"
      :key="index"
    >
      <i class="iconfont icon-sousuo"></i>
      <span>{{ item[field].replace(/\s*/g,"") }}</span>
    </div>
  </div>
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
    field:{
      type:String
    }
  },
  watch: {
    activeRes: function (newVal, oldVal) {
      this.cactiveRes = newVal;
    },
  },
  data() {
    return {
      cactiveRes: this.activeRes,
      click:false
      
    };
  },
  methods: {
    searchbook(e) {
      this.click = true
      this.$emit("searchbook",e.target.dataset.keyword)
    },
  },
  created() {},
  computed: {},
};
</script>
<style>
.res-list {
  position: absolute;
  z-index: 1000;
  border: 1px solid var(--color-text-active);
  width: 500px;
  border-radius: 0 0 10px 10px;
  border-top: none;
  padding: 5px 0;
  background: white;

  transition: all 0.2s ease-in;
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
  font-size: 14px;
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
.activeSe span{
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
