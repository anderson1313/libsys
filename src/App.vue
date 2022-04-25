<template>
  <div id="app">

    <div>git测试</div>
 
    <keep-alive>
      <router-view class="page-container"></router-view>
    </keep-alive>
    
  </div>
</template>

<script>

export default{
  name: 'App',
  components: {
  
  },
  data() {
    return {
    
    }
  },

 
  
 
 
}

</script>

<style>
@import 'assets/css/base.css';
.page-container{
  width: 90vw !important;
  margin: 0 auto;
  overflow: hidden;
  
}




</style>
