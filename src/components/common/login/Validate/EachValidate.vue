<template>
  <div>
    <div class="title"><slot name="title"></slot></div>
    <div class="tip"><slot name="tip"></slot></div>
    <code-type-in v-on:complete="complete" ref="codetypein"></code-type-in>
    
  </div>
</template>
<script>
import CodeTypeIn from './CodeTypeIn.vue'

export default {
  name: "EachValidate",
  components: {
      CodeTypeIn
  },
  props: {},
  data() {
    return {
      password: "",
    };
  },
  methods: {
      //处理
      complete(...args){
          const finalcode = args[0].reduce((pre, cur) => {
              return pre + cur
          },"")
          console.log(finalcode)
          this.$emit("completeFinalCode",finalcode)

      },
    inputConfirm() {
      console.log(this.password);
    },
  },
  created() {},
  computed: {},
};
</script>
<style>
.tip {
  color: rgb(134, 131, 131);
  font-size: .9375rem;
}
.tip .value {
  font-weight: bold;
  color: black;
  margin: 0 .3125rem;
}
</style>
