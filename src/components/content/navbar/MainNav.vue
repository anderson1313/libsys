<template>
  <navigation-bar>
    <div class="bar-logo">
      <span class="iconfont icon-mybook"></span>
      <span>EasyLib</span>
    </div>

    <div class="bar-routes">
      <navigation-bar-item path="/home">
        <div slot="item-text">首页</div>
      </navigation-bar-item>
       <navigation-bar-item path="/library">
        <div slot="item-text">图书库</div>
      </navigation-bar-item>
      <navigation-bar-item path="/user">
        <div slot="item-text">个人中心</div>
      </navigation-bar-item>
      <navigation-bar-item path="/admin">
        <div slot="item-text">管理中心</div>
      </navigation-bar-item>

      
    </div>
  </navigation-bar>
</template>

<script>
import NavigationBar from "./NavigationBar.vue";
import NavigationBarItem from "./NavigationBarItem.vue";
export default {
  name: "MainNav",
  components: {
    NavigationBar,
    NavigationBarItem,
  },
};
</script>

<style>
.nav-bar{
    width:90vw;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    background:white ;
    border-bottom: 1px solid #dcdfe6;
    height: 0.7rem;
}
.bar-routes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
}
.bar-logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.bar-logo > * {
    color: var(--logo-color);
}
.iconfont {
    font-size: 0.3rem !important;
    margin: 0 0.2rem;
}
</style>