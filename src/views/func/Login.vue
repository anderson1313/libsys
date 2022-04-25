<template>
    <div class="login-container">
       <div class="banner">
           <img src="@/assets/img/loginbanner.png" alt="">
           
       </div>
       <div class="form">
           <final-login></final-login>
       </div>
         
        
    </div>
</template>
<script>

import FinalLogin from "components/common/login/FinalLogin"
export default {
  name: 'Login',
  components:{
      FinalLogin
    
   },
   props:{
   },
   data() {
      return {
      }
   },
   methods:{
   },
   created(){
   },
   computed:{
   },
}
</script>
<style>

.login-container {
    width: 100vw !important;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: var(--main-background);
}

.login-container > div {
    margin: 0 40px;
    
}
.form{
    width: 450px;
  
}
.banner{
    width: 300px;
    height: 300px;
    /* background: aquamarine; */
    
}
img{
    width: 350px;
    height: 350px;
}


</style>
