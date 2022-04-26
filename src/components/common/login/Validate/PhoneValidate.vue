<template>
  <each-validate class="phone-validate">
    <div slot="title">验证手机号</div>
    <div slot="tip">
      <span>请输入发送至</span>
      <span class="value">{{ uvalue }}</span>
      <span>的6位验证码，有效期10分钟</span>
    </div>
  </each-validate>
</template>
<script>
import EachValidate from "./EachValidate.vue";
export default {
  name: "PhoneValidate",
  components: {
    EachValidate,
  },
  props: {
    value: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
  computed: {
    uvalue() {
      if (this.value) {
        const newvalue =
          this.value.slice(0, 3) +
          this.value
            .slice(3)
            .slice(-2)
            .padStart(this.value.length - 3, "*");
             return newvalue;
      }

     
    },
  },
};
</script>
<style>
</style>
