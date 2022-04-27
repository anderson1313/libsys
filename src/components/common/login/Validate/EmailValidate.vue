<template>
  <each-validate v-on:completeFinalCode="sendEmailVali" ref="eachvali">
    <div slot="title">验证邮箱</div>
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
  name: "EmailValidate",
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
  methods: {
      sendEmailVali(...args) {
           const valiBody = {
              value: this.value,
              code: args[0]
          }
          this.$emit("sendVali",valiBody)
      }
  },
  created() {},
  computed: {
    uvalue() {
      if (this.value) {
        var avg, splitted, part1, part2;
        splitted = this.value.split("@");
        part1 = splitted[0];
        avg = part1.length / 2;
        part1 = part1.substring(0, part1.length - avg);
        part2 = splitted[1];
        return part1 + "******@" + part2;
      }
    },
  },
};
</script>
<style>
</style>
