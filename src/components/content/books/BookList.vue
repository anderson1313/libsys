<template>
  <div class="book-list">
    <!-- <transition-group :name="ani"> -->
    <book-item
    
      v-for="(bookItem, index) in books"
      :key="index"
      :bookItem="bookItem"
      @toBookDetail="toBookDetail"
    ></book-item>
    <!-- </transition-group> -->


    <el-empty v-show=" books.length==0" :image-size="200"></el-empty>
  </div>
</template>
<script>
import BookItem from "./BookItem.vue";
export default {
  name: "BookList",
  components: {
    BookItem,
  },
  watch:{
   

  },
  props: ["books","ani"],
  data() {
    return {};
  },
  methods: {
    toBookDetail(id) {
      this.$emit("toBookDetail", id);
    },
  },
  created() {
  
  },
  computed: {},
};
</script>
<style>
.book-list {
  margin: 0 auto !important;
  width: 800px !important;
  

  
}
</style>
