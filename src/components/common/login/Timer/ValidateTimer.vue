<template>
  <div class="timer">
    <transition name="pfade">
      <div v-if="showloginCode" @click="getCode" class="timer-btn">
        获取验证码
      </div>
    </transition>
    <transition name="efade">
      <div v-if="!showloginCode" class="count">
        {{ count }}秒后可以获取验证码
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "ValidateTimer",
  components: {},
  props: {
    timeCount: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      showloginCode: true,
      timer: null,
      count: 0,
    };
  },
  methods: {
    getStorage() {
      let localDelay = {};
      localDelay.delay = this.localCache.getItem("dalay");
      localDelay.sec = this.localCache.getItem("_time");
      return localDelay;
    },
    setStorage(parm) {

      this.localCache.setItem("dalay", parm);
      this.localCache.setItem("_time", new Date().getTime());
    },

    getCode() {
      //网络请求
      if (this.showloginCode) {
        this.count = this.timeCount;
        this.showloginCode = false;
        let interval = setInterval(() => {
          this.setStorage(this.count);

          if (this.count-- <= 1) {
            this.showloginCode = true;
            clearInterval(interval);
          }
        }, 1000);
      }
    },

    judgeCode() {
      var that = this;
    
      let localDelay = this.getStorage();
      let secTime = parseInt((new Date().getTime() - localDelay.sec) / 1000);
      if (secTime > localDelay.delay) {
        console.log("验证码已过期")
        this.showloginCode = true;
      } else {
        this.showloginCode = false;
        let _delay = localDelay.delay - secTime;
        this.count = _delay;
        this.timer = setInterval(function () {
            //这个function是独立调用的所以this指向window,要从上层作用域查找that
          if (_delay > 1) {
            _delay--;
            that.setStorage(_delay);
            that.count = _delay;
            that.showloginCode = false;
          } else {
            // 此处赋值时为了让浏览器打开的时候,直接就显示剩余的时间
            that.showloginCode = true;
            clearInterval(that.timer);
          }
        }, 1000);
      }
    },
  },
  created() {

    this.judgeCode();
  },
  computed: {},
  destroyed() {},
};
</script>
<style>
.timer {
  margin: 3.75rem 0;
  height: 1.25rem;
  position: relative;
}
.timer > * {
  position: absolute;
  height: 100%;
  line-height: 1.25rem;
}
.timer .timer-btn,
.timer .count {
  font-size: .8125rem !important;
  color: grey;
}
.timer .count {
  width: 80%;
}
.timer .timer-btn {
  box-sizing: content-box;
  cursor: pointer;
  border-radius: .3125rem;
  color: rgba(4, 52, 158, 0.6);
}
.timer .timer-btn:hover {
  color: var(--color-text-active);
}
</style>
