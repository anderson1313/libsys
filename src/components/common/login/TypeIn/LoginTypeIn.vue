<template>
  <div class="login-typein">
    <span class="title">{{ title }}</span>
    <div class="fun-nav">
      <div
        class="eachfun"
        @click="changefun(item)"
        :class="isActive(item) ? 'active' : ''"
        v-for="(item, index) in labels"
        :key="index"
      >
        {{ item.value }}
      </div>
    </div>
    <div class="input">
      <transition name="pfade">
        <phone-type
          v-show="byPhone"
          key="phone"
          v-on:handlephone="handlephone"
        ></phone-type>
      </transition>
      <transition name="efade">
        <email-type
          v-show="byEmail"
          key="email"
          v-on:handleemail="handleemail"
        ></email-type>
      </transition>
    </div>
    <button @click="tovalidate" :disabled="dis">下一步</button>
  </div>
</template>
<script>
import PhoneType from "./PhoneType.vue";
import EmailType from "./EmailType.vue";
export default {
  name: "LoginTypeIn",
  components: {
    PhoneType,
    EmailType,
  },
  props: {
    title: {
      type: String,
      default: "欢迎使用EasyLib",
    },
  },
  data() {
    return {
      labels: [
        {
          id: 0,
          value: "手机",
        },
        {
          id: 1,
          value: "邮箱",
        },
      ],
      dis: true,
      currentFn: 0,
      uphone: undefined,
      uemail: undefined,
    };
  },
  methods: {
    changefun(item) {
      this.currentFn = item.id;
      this.$emit("changefun", item.id);
    },
    handlephone(...arg) {
      this.dis = !arg[0];
      if (arg[1]) {
        this.uphone = arg[1];
      }
    },
    handleemail(...arg) {
      this.dis = !arg[0];
      if (arg[1]) {
        this.uemail = arg[1];
      }
    },
    tovalidate() {
      const valiObj = {
        showtypein: false,
        loginFn: this.currentFn,
        value: this.currentFn === 0 ? this.uphone : this.uemail,
      };

      //网络请求

      this.$emit("tovalidate", valiObj);
    },
  },
  created() {},

  computed: {
    isActive() {
      //实际上是一个对象get方法
      return function (item) {
        return this.currentFn === item.id;
      };
    },
    byPhone() {
      return this.currentFn === 0;
    },
    byEmail() {
      return this.currentFn === 1;
    },
  },
};
</script>
<style>
.login-typein {
  display: flex;
  flex-direction: column;
}
.title {
  display: block;
  font-size: 1.5625rem;
  font-weight: bold;
  margin: 1.25rem 0;
}

.fun-nav > div:hover {
  color: var(--color-text-active);
}

.fun-nav {
  display: flex;
  flex-direction: row;
  margin-bottom: 1.875rem;
}
.fun-nav > div {
  cursor: pointer;

  margin-right: 1.25rem;
}

.eachfun {
  font-size: .9375rem;
}
.login-typein .active {
  color: var(--color-text-active);
  position: relative;
}
.login-typein .active::after {
  display: inline-block;
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.3125rem;
  width: 100%;
  height: .125rem;
  background: var(--color-text-active);
  transform-origin: 0 0;
}

/*input */
.input {
  position: relative;
  width: 100%;
  height: 2.5rem;
  margin-bottom: 1.875rem;
}

.funinput {
  height: 2.5rem;
  position: absolute;
  width: 100%;
}
.funinput input {
  font-size: 1rem;
  height: 2.5rem;
  border: .0625rem solid gainsboro;
  border-radius: .3125rem;
  padding: .3125rem .625rem;
  transition: all 0.2s ease-in;
  width: 100%;
}
.funinput input::placeholder {
  line-height: normal;
  color: rgb(157, 156, 156);
}
.funinput input:focus {
  border: .0625rem solid var(--color-text-active);
}

.login-typein button {
  border: none;
  font-size: 1rem;
  padding: .625rem 0;
  border-radius: .3125rem;
  background: var(--color-text-active);
  color: aliceblue;
  cursor: pointer;
  margin: 2.1875rem 0;
  z-index: 99;
}
.login-typein button[disabled] {
  background: rgba(164, 168, 174, 1);
  color: aliceblue;
  border: none;
  font-size: 1rem;
  padding: .625rem 0;
  border-radius: .3125rem;
}
</style>
