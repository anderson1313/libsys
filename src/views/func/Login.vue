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
<style scopoed>

.login-container {
    width: 100% !important;
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: var(--main-background);
}

.login-container > div {
    margin: 0 2.5rem;
    
}
.form{
    width: 28.125rem;
  
}
.banner{
    width: 18.75rem;
    height: 18.75rem;
    /* background: aquamarine; */
    
}
.banner img{
    width: 21.875rem;
    height: 21.875rem;
}


</style>
