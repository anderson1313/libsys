<template>
    <div class="home-intro">
        <div class="intro-left">

            <div class="each">
                <i class="iconfont icon-a-gongchengshigongrennanrenrenwuxiaoxiang"></i>
                <span>梁梓轩</span>
            </div>
             <div class="each">
                <i class="iconfont icon-a-gongchengshigongrennanrenrenwuxiaoxiang"></i>
                <span>wjf</span>
            </div>



        </div>
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
    /* align-items: center; */
    justify-content: space-between;
  
    

}

.intro-left{
      border-radius:10px ;
    width: 60%;
    height: 70%;
    background: white;
    /* box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px; */
}
.intro-right{
    width: 28%;
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
.each{
 
   
}

</style>
