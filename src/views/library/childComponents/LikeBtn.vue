<template>
  <div>
    <!-- <button @click="userlike = !userlike">想看/不想看</button> -->

    <div class="collectBtn" @click="userlike = !userlike">
      <transition @enter="likeenter" @leave="likeleave" mode="out-in">
        <div
          class="like iconfont icon-jushoucanggift"
          v-if="userlike"
          key="like"
        ></div>
        <div
          class="unlike iconfont icon-jushoucanggift"
          v-else
          key="unlike"
        ></div>
      </transition>
      <transition @enter="enter" @leave="leave" mode="out-in">
        <div class="text" v-if="userlike" key="liketext">已想看</div>
        <div class="text" v-else key="unliketext">想看</div>
      </transition>
    </div>
  </div>
</template>
<script>

import {LikeAni} from "common/mixin.js";
export default {
  mixins:[LikeAni],
  name: "LikeBtn",
  components: {},
  props: {},
  data() {
    return {
      isShow: 1,
      userlike: 1,
      userborrow: 1,
    };
  },
  methods: {
    
  },
  created() {},
  computed: {},
};
</script>
<style scoped>
.collectBtn {
  cursor: pointer;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 100px;
  padding: 5px 0;
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.iconfont {
  text-align: center;
  font-size: 16px !important;
  width: 25%;
  margin: 0;
}
.like {
  color: #e17055;
}
.unlike {
  color: #dfe6e9;
}
.text {
  margin: 0;
  text-align: center;
  font-size: 14px;
  width: 60%;
  font-weight: bold;
}
</style>
