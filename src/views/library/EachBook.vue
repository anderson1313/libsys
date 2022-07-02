<template>
    <div class="book-detail">
        <book-detail></book-detail>
        <div class="fun">
            <like-btn></like-btn>
        <borrow-btn></borrow-btn>
        </div>
    </div>
</template>
<script>
import BookDetail from "./childComponents/BookDetail.vue"
import LikeBtn from "./childComponents/LikeBtn.vue"
import BorrowBtn from "./childComponents/BorrowBtn.vue"
export default {
  name: 'EachBook',
  components:{
      BookDetail,
      LikeBtn,
      BorrowBtn
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
.book-detail{
    margin: 50px auto;
    display: flex;
    
}
.fun{

    margin: 0 50px;
}
.fun > div{
    margin: 20px 0;
}
</style>
