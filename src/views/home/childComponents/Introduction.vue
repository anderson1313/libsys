<template>
    <div class="home-intro">
        <div class="intro-left"></div>
        <div class="intro-right">
             <p class="title">关于我们</p>
            <p class="right-text">我们是1908与1905的结合体</p>
        </div>


    </div>
</template>
<script>
export default {
  name: 'Introduction',
  components:{
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
<style scoped>
.home-intro {
    width: 100%;
    padding: 0 9vw;
    height: 500px;
    margin-top:9vw ;
    overflow: hidden;
       display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    

}

.intro-left{
    width: 60%;
    height: 100%;
}
.intro-right{
    width: 30%;
    height: 100%;
}

.title{
    font-size: 50px;
    font-family: "Gilroy-Bold",-apple-system,"Sofia Pro","Microsoft YaHei","Helvetica","Arial",sans-serif;
    font-weight: 700;
    color: #333;
    text-align: left;
}
.right-text{
    text-align: left;
    font-size: 20px;
    font-weight: 400;
    color: #333;
    text-align: left;
    line-height: 32px;
    margin: 10px 0;
}


</style>
