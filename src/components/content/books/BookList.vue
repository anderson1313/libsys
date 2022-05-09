<template>
  <div class="book-list">
    
          <book-item v-for="(bookItem, index) in books" :key="index" :bookItem="bookItem" ></book-item>

  </div>
</template>
<script>
import BookItem from "./BookItem.vue"
export default {
  name: "BookList",
  components: {
      BookItem
  },
  props: ["books"],
  data() {
    return {
      
    
    };
  },
  methods: {},
  created() {},
  computed: {},
};
</script>
<style>
.book-list{
    margin: 3.125rem auto;
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

</style>
