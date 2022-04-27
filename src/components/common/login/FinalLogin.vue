<template>
  <div class="login-form">
    <transition name="pfade">
      <login-type-in
        v-on:tovalidate="tovalidate"
        v-show="typeinP"
        key="typeinP"
      ></login-type-in>
    </transition>

    <transition name="efade">
      <login-validate
        v-if="!typeinP"
        key="validateP"
        v-on:totypein="totypein"
        :value="uvalue"
        :loginFn="loginFn"
        ref="validateCom"
      ></login-validate>
    </transition>
  </div>
</template>
<script>
import LoginTypeIn from "./TypeIn/LoginTypeIn";
import LoginValidate from "./Validate/LoginValidate.vue";

export default {
  name: "FinalLogin",
  components: {
    LoginTypeIn,
    LoginValidate,
  },
  props: {},
  data() {
    return {
      showtypein: true,
      loginFn: 0,
      uvalue: undefined,
    };
  },
  methods: {
    tovalidate({ showtypein, loginFn, value }) {
      this.showtypein = showtypein;
      this.loginFn = loginFn;
      this.uvalue = value;
      //获取验证码
      setTimeout(() => {
        this.$refs.validateCom.$refs.timer.getCode();
      }, 0);
     
    },
    totypein({ showtypein, loginFn, value }) {
      this.showtypein = showtypein;
      this.loginFn = loginFn;

    },
   
  },
  created() {
 
  },
  computed: {
    typeinP() {
      return this.showtypein === true;
    },
  },
  beforeDestroy() {
    console.log();
   
  },
  mounted() {
   
  },
};
</script>
<style>
.login-form {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  overflow: hidden;
  background: white;
  border-radius: 0.1rem;
  width: 360px;
  height: 400px;
  padding: 0.2rem;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
}
.login-form > div {
  width: 320px;
  position: absolute;
}
</style>
