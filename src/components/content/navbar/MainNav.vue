<template>
  <navigation-bar>
    <div class="bar-logo">
      <img src="@/assets/img/logouser.png" >
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
@media (max-width: 1100px){
  .nav-bar{
     width:800px !important;
     margin: 0 !important;

  }

}
.nav-bar{
  overflow: hidden;
    width:1300px;
    /* width: 100vw; */
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    /* border-bottom: 0.01rem solid #dcdfe6; */
    height: 4.375rem;
    background: var(--main-background);
}
.bar-routes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
}
.bar-logo {
   width:12.5rem;
    height: 4.375rem;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
}
.bar-logo img{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.bar-logo > * {
    color: var(--logo-color);
}
.iconfont {
    font-size: 0.3rem !important;
    margin: 0 0.2rem;
}
</style>