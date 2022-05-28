<template>
  <navigation-bar>
    <div class="admin-bar-logo">
       <img src="@/assets/img/logoadmin.png" >
      <div>
         
      </div>
          
    
    </div>


    <div class="bar-routes">
         <navigation-bar-item path="/">
        <div slot="item-text">用户版</div>
      </navigation-bar-item>
      <navigation-bar-item path="/admin">
        <div slot="item-text">管理首页</div>
      </navigation-bar-item>
      <navigation-bar-item path="/adminbook">
        <div slot="item-text">书籍管理</div>
      </navigation-bar-item>
      <navigation-bar-item path="/adminrecord">
        <div slot="item-text">借阅管理</div>
      </navigation-bar-item>
       <navigation-bar-item path="/adminuser">
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

@media (max-width: 1024px){
  .nav-bar{
     width:800px !important;
     margin: 0 !important;
  }

}

.nav-bar{
    overflow: hidden;
    width:1000px;
    /* width: 100vw; */
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
     background: var(--main-background);
    /* border-bottom: 1px solid #dcdfe6; */
    height: 4.375rem;
}
.bar-routes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
}
.admin-bar-logo {
  width:12.5rem;
    height: 4.375rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
}
.admin-bar-logo img{
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
.version{
    font-size: 0.1rem;
    margin: 0 0.1rem;
    
}
</style>