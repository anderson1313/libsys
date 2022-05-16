<template>
  <div class="login-validate" v-loading="loading">
    <button @click="backToTypeIn" class="backbtn">
        返回
        </button>
    <phone-validate v-show="showPhoneValidate" :value= "value" v-on:sendVali="sendVali" ref="phone"></phone-validate>
    <email-validate v-show="!showPhoneValidate" :value= "value" v-on:sendVali="sendVali"></email-validate>
   <validate-timer :timeCount="timeCount" ref="timer" ></validate-timer>
  </div>
</template>
<script>
import PhoneValidate from "./PhoneValidate.vue";
import EmailValidate from "./EmailValidate.vue";
import ValidateTimer from "../Timer/ValidateTimer.vue"
import {TIME_COUNT} from "common/const.js"


export default {
  name: "LoginValidate",
  components: {
    PhoneValidate,
    EmailValidate,
    ValidateTimer
  },
  props: {
    loginFn: {
      type: Number,
      default: 0,
    },
    value: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
        loading:false,
        timeCount:TIME_COUNT
    };
  },
  methods: {

      sendVali({value,code}) {

          console.log(`正在发送${this.loginFn ==0?"电话":"邮箱"}验证请求`)
          this.loading =true
          console.log("code",code)
          console.log("value",value)

          //模拟成功
        //   setTimeout(() => {
        //       console.log("通过验证")
        //       this.sessionCache.setItem("isLogin", true);
        //       this.$router.push("user")
        //        this.$popmessage({
        //         type:"success",
        //         message:"登录成功"
        //     })
        //   },3000)

        //模拟失败
        setTimeout(() => {
            this.$refs.phone.$refs.eachvali.$refs.codetypein.clearall = !this.$refs.phone.$refs.eachvali.$refs.codetypein.clearall
            this.loading =false
            this.$popmessage({
                type:"error",
                message:"验证码错误，请重新输入"
            })

        },1000)



      },

     
    backToTypeIn() {
      const typeinObj = {
        showtypein: true,
        loginFn: this.loginFn,
        value: this.value,
      };
      this.$emit("totypein", typeinObj);
    },
  },
  created() {
     
    
     
  },
  computed: {
    showPhoneValidate() {
      return this.loginFn === 0;
    },
  },
};
</script>
<style>
.login-validate .backbtn{
    cursor: pointer;
    font-size: .875rem;
    color: grey;
    padding: .3125rem;
    border-radius:.3125rem ;
}
.login-validate .backbtn:hover{
    background: gainsboro;
}
</style>
