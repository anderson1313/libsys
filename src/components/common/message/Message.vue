<template>
  <transition name="el-message-fade" @after-leave="handleAfterLeave">
    <div
      class="message"
      :style="positionStyle"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <i class="iconfont" :class="positionStyle.icon"></i>
      <span class="text">{{ message }}</span>
    </div>
  </transition>
</template>
<script>
export default {
  name: "Message",
  components: {},
  props: {
    type: {
      type: String,
      default: "success",
    },
    message: {
      type: String,
      default: "登录成功",
    },
    top: {
      type: Number,
      default: 20,
    },
  },
  data() {
    return {
      visible: false,
      timer: null,
      closed: false,
      onClose: null,
    };
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.closed = true;
      if (typeof this.onClose === "function") {
        this.onClose();
      }
    },

    clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer() {
      this.timer = setTimeout(() => {
        if (!this.closed) {
          this.close();
        }
      }, 2000);
    },
  },
  created() {
      
  },
  mounted() {
    this.startTimer();
  },
  computed: {
    positionStyle() {
     
      switch (this.type) {
        case "success":
          return {
            icon: "icon-chenggong",
            background: "#f0f9eb",
            top: `${this.top}px`,
            "border-color": "#e1f3d8",
            color:"rgba(0, 98, 102,1.0)"
          };
          break;
        case "error":
          return {
            icon: "icon-cuowu",
            background: "#fef0f0",
            top: `${this.top}px`,
             "border-color": "#fde2e2",
             color:"rgba(237, 76, 103,1.0)"
          
          };
          break;
      }
    },
  },
};
</script>
<style>
.text,
.iconfont {
  font-size: .9375rem;
  margin: 0 10px;
}
.message {
  min-width: 380px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: .25rem;
  border-width: .0625rem;
  border-style: solid;
  border-color: #ebeef5;
  position: fixed;
  left: 50%;
  top: 1.25rem;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #edf2fc;
  -webkit-transition: opacity 0.3s, top 0.4s, -webkit-transform 0.4s;
  transition: opacity 0.3s, top 0.4s, -webkit-transform 0.4s;
  transition: opacity 0.3s, transform 0.4s, top 0.4s;
  transition: opacity 0.3s, transform 0.4s, top 0.4s, -webkit-transform 0.4s;
  overflow: hidden;
  padding: 15px 15px 15px 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.el-message-fade-enter,
.el-message-fade-leave-active {
  opacity: 0;
  -webkit-transform: translate(-50%, -100%);
  transform: translate(-50%, -100%);
}
</style>

