<template>
  <div class="res-list" v-show="showList">
    <div
      @click="serachbook($event)"
      :class="cactiveRes == index ? 'activeSe' : ''"
      class="each-res"
      v-for="(item, index) in relatedRes"
      :data-keyword ="item.option"
      :key="index"
    >
      <i class="iconfont icon-sousuo"></i>
      <span>{{ item.option }}</span>
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
  },
  watch: {
    activeRes: function (newVal, oldVal) {
      this.cactiveRes = newVal;
    },
  },
  data() {
    return {
      cactiveRes: this.activeRes,
    };
  },
  methods: {
    serachbook(e) {
        
        this.$emit("serachbook",e.target.dataset.keyword)
    },
  },
  created() {},
  computed: {},
};
</script>
<style>
.res-list {
  border: 1px solid var(--color-text-active);
  width: 500px;
  border-radius: 0 0 10px 10px;
  border-top: none;
  padding: 5px 0;

  transition: all 0.2s ease-in;
}
.each-res {
  cursor: pointer;
  height: 28px;
  line-height: 28px;
  margin: 5px 0;
  padding: 0 10px;
}
.each-res span {
  font-size: 14px;
  color: rgba(45, 52, 54, 0.8);
  display: inline-block;
  margin-left: 10px;
  line-height: 28px;
}
.activeSe,
.each-res:hover {
  background: rgba(128, 128, 128, 0.111);
  color: var(--color-text-active);
}
.each-res i {
  font-size: 15px !important;
  width: 20px !important;
  height: 20px !important;
  text-align: center;
  line-height: 20px;
}
</style>
