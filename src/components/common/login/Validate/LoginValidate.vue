<template>
  <div class="login-validate">
    <button @click="backToTypeIn">
        返回
        </button>

    <phone-validate v-if="showPhoneValidate" :value= "value"></phone-validate>
    <email-validate v-if="!showPhoneValidate" :value= "value"></email-validate>
   
  </div>
</template>
<script>
import PhoneValidate from "./PhoneValidate.vue";
import EmailValidate from "./EmailValidate.vue";
export default {
  name: "LoginValidate",
  components: {
    PhoneValidate,
    EmailValidate,
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
     
    };
  },
  methods: {
    backToTypeIn() {
      const typeinObj = {
        showtypein: true,
        loginFn: this.loginFn,
        value: this.value,
      };
      this.$emit("totypein", typeinObj);
    },
  },
  created() {},
  computed: {
    showPhoneValidate() {
      return this.loginFn === 0;
    },
  },
};
</script>
<style>
.login-validate button{
    cursor: pointer;
    font-size: 0.14rem;
    color: grey;
    padding: 0.05rem;
    border-radius:0.05rem ;
}
.login-validate button:hover{
    background: gainsboro;
}
</style>
