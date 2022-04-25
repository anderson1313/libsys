<template>
  <navigation-bar>
    <div class="admin-bar-logo">
      <span class="iconfont icon-mybook"></span>
      <span>EasyLib</span>
      <div>
           <span class="version">管理者版</span>
      </div>
          
    
    </div>


    <div class="bar-routes">
         <navigation-bar-item path="/">
        <div slot="item-text">用户版</div>
      </navigation-bar-item>
      <navigation-bar-item path="/admin">
        <div slot="item-text">管理首页</div>
      </navigation-bar-item>
      <navigation-bar-item path="/admin/adminbook">
        <div slot="item-text">书籍管理</div>
      </navigation-bar-item>
      <navigation-bar-item path="/admin/adminrecord">
        <div slot="item-text">借阅管理</div>
      </navigation-bar-item>
       <navigation-bar-item path="/admin/adminuser">
        <div slot="item-text">会员管理</div>
      </navigation-bar-item>
      
    </div>
  </navigation-bar>
</template>

<script>
import NavigationBar from "./NavigationBar.vue";
import NavigationBarItem from "./NavigationBarItem.vue";
export default {
  name: "AdminBar",
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
.admin-bar-logo {
    color: #16a085;
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
.version{
    font-size: 0.1rem;
    margin: 0 0.1rem;
    
}
</style>