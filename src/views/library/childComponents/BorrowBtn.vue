<template>
  <div>
    <!-- <button @click="userlike = !userlike">想看/不想看</button> -->

    <div class="collectBtn" @click="userborrow = !userborrow">
      <transition @enter="enter" @leave="leave" mode="out-in">
        <div
          class="like iconfont icon-changjingguanli"
          v-if="!userborrow"
          key="like"
        ></div>
        <div
          class="unlike iconfont icon-jushoucanggift"
          v-else
          key="unlike"
        ></div>
      </transition>
      <transition @enter="enter" @leave="leave" mode="out-in">
        <div class="text" v-if="!userborrow" key="liketext">借阅</div>
        <div class="text" v-else key="unliketext">去还书</div>
      </transition>
    </div>
    <transition @enter="enter" @leave="leave" mode="out-in">
      <div v-if="userborrow" class="borrowtime">你上次借阅这本书的时间</div>
    </transition>
  </div>
</template>
<script>
import gsap from "gsap";
import { LikeAni } from "common/mixin.js";
export default {
  mixins: [LikeAni],
  components: {},
  props: {},
  data() {
    return {
      userborrow: 1,
    };
  },
  methods: {},
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
  color: #079992;
}
.unlike {
  color: grey;
}
.text {
  margin: 0;
  text-align: center;
  font-size: 14px;
  width: 60%;
  font-weight: bold;
}
.borrowtime{
     font-size: 12px;
  color: #666666;
  margin-right: 2px;
}
</style>
