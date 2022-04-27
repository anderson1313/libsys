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
            background: "rgba(120, 224, 143,.6)",
            top: `${this.top}px`,
          };
          break;
        case "error":
          return {
            icon: "icon-cuowu",
            background: "#fab1a0",
            top: `${this.top}px`,
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
  font-size: 0.15rem;
}
.message {
  min-width: 380px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: #ebeef5;
  position: fixed;
  left: 50%;
  top: 20px;
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

