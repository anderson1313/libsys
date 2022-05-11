<template>
  <div id="app">
     <final-bar></final-bar>

    <keep-alive exclude="Login">
      <router-view class="page-container"></router-view>
    </keep-alive>
    
  </div>
</template>

<script>
import FinalBar from "components/content/navbar/FinalBar";
export default{
  name: 'App',
  components: {
    FinalBar
  
  },
  data() {
    return {
    
    }
  },
  created(){
  
  }

 
  
 
 
}

</script>

<style>
@import 'assets/css/base.css';
.page-container{
  width: 1040px !important;
  margin: 0 auto;
  /* overflow: hidden; */
  
}




</style>
