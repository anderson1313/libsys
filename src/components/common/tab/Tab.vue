<template>
  <div class="tab-wrapper">
    <span
      class="tab-item"
      :class="{ activetab: currentTab == 0 }"
      @click="changetab(0)"
      >所有通话</span
    >
    <span
      class="tab-item"
      :class="{ activetab: currentTab == 1 }"
      @click="changetab(1)"
      >未接电话</span
    >
    <span class="tab-switch"></span>
  </div>
</template>
<script>
import gsap from "gsap";
export default {
  name: "Tab",
  components: {},
  props: {},
  data() {
    return {
      currentTab: 0,
    };
  },
  methods: {
    changetab(...args) {
      let tab = args[0];
      if (tab == 1 && this.currentTab == 0) {
        gsap.to(".tab-switch", {
          x: 70,
        });
        this.currentTab = 1;
      }
      if (tab == 0 && this.currentTab == 1) {
        gsap.to(".tab-switch", {
          x: 0,
        });
        this.currentTab = 0;
      }
    },
  },
  created() {},
  computed: {},
};
</script>
<style scoped>
.tab-wrapper {
  padding: 1px;
  background: rgba(128, 128, 128, 0.2);
  border-radius: 6px;
  display: inline-block;
  position: relative;
  z-index:0;
}
.activetab {
  font-weight: bold;
}
.tab-item {
  z-index: unset;
  display: inline-block;
  text-align: center;
  width: 70px;
  height: 23px;
  line-height: 23px;
  cursor: pointer;
  font-size: 10px;
}
.tab-switch {
  top: 50%;
  transform: translate( 0,-50%);
  left: 1px;
  width: 70px;
  height: 23px;
  border-radius: 5px;
  position: absolute;
  background: white;
  z-index: -1;
}
</style>
