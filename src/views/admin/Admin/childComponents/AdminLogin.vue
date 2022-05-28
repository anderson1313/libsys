<template>
  <div class="admin-login">
    <span class="title">欢迎使用EasyLib管理平台</span>
    <div class="input-item">
      <i class="iconfont icon-zhanghaoquanxianguanli" ></i>
      <input v-model="adminAcct.name" @input="accInput"  type="text" />
    </div>
    <div class="input-item">
      <i class="iconfont icon-mima1"></i>
      <input  v-model="adminAcct.pass" @input="accInput" type="password" />
    </div>
    <button :disabled="dis">登陆</button>
  </div>
</template>
<script>
export default {
  name: "AdminLogin",
  components: {},
  props: {},
  data() {
    return {
      dis: true,
      adminAcct:{
          name:"",
          pass:""
      }
    };
  },
  methods: {
      accInput() {
          
          if (this.adminAcct.name !=="" && this.adminAcct.pass!== "") {
              this.dis = false
          }else{
              this.dis = true
          }
      }

  },
  created() {},
  computed: {},
};
</script>
<style scoped>
.admin-login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  position: relative;
}
.title {
  position: absolute;
  left: 30px;
  top: 10px;
  display: block;
  font-size: 20px;
  font-weight: bold;
  margin: 1.25rem 0;
  color: #333;
}

/*input */

.input-item {
  height: 2.5rem;
  width: 80%;
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.input-item input {
  font-size: 13px;
  height: 30px;
  border: 0.0625rem solid gainsboro;
  border-radius: 0.3125rem;
  padding: 0.3125rem 0.625rem;
  transition: all 0.2s ease-in;
  width: 50%;
}

.input-item input:focus {
  border: 0.0625rem solid var(--color-text-active);
}
.input-item i {
  font-size: 20px !important;
  display: inline-block;
  width: 12%;
  text-align: left;
  color: #0a3d62;
  font-size: 15px;
}

/*button */
.admin-login button {
  position: absolute;
  bottom: 40px;
  width: 50%;
  border: none;
  font-size: 14px;
  padding: 5px 0;
  border-radius: 0.3125rem;
  background: var(--color-text-active);
  color: aliceblue;
  cursor: pointer;
  z-index: 99;
}
.admin-login button[disabled] {
  background: rgba(164, 168, 174, 1);
  color: aliceblue;
  border: none;
  font-size: 14px;
  padding: 6px 0;
  border-radius: 0.3125rem;
}
</style>
