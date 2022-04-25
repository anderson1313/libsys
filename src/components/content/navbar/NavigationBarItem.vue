<template>
  <div class="nav-bar-item" @click="itemClick">
    <div class="item-text" :class="isActive ? 'active' : ''">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBarItem",
  data() {
    return {};
  },
  props: {
    path: String,
  },
  computed: {
    isActive() {
      //对admin路由嵌套进行edge case
      if (this.$route.path.indexOf("admin") !== -1) {
        return this.$route.path == this.path 

      }
      return this.$route.path.indexOf(this.path) !== -1;
    },
  },

  methods: {
    itemClick() {
      if (this.path == "/") {
        this.sessionCache.setItem("version", "user")
      
      }
       if (this.path == "/admin") {
         if(this.sessionCache.getItem("isadmin")){
            this.sessionCache.setItem("version", "admin")
         }
      }
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
.nav-bar-item {
  height: 100%;
  cursor: pointer;
  font-size: 0.16rem;
  display: flex;
  align-content: center;
  justify-content: center;
  line-height: 0.7rem;
  margin: 0 0.26rem;
  
  position: relative;
}
.item-text {
  color: var(--color-text-inactive);
  transition: all 0.2s;
}
.item-text:hover {
   color: var(--color-text-active);
  
}
.active {
  color: var(--color-text-active);
  transition: all 0.4s linear;
  position: relative;
}
.active::after {

  display: inline-block;
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.02rem;
  background: var(--color-text-active);
  transform-origin: 0 0;
 
}
</style>