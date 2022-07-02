<template>
<!-- <transition name="bfade"> -->
  <div class="book-item">
    <div class="book-img" @click="toBookDetail">
      <img
        :src="GetImage(bookItem.bookPhoto)"
        alt=""
        @mouseenter="showCardFn"
        @mouseleave="hideCardFn"
      />
    </div>
    <div class="book-info">
      <div class="book-title" >
        <span @click="toBookDetail">{{ bookItem.bookName }}</span>
      </div>
    
      <div class="book-author">{{ bookItem.bookAuthor }}</div>
    </div>

    <book-item-card :visible="showCrad" :bookItem="bookItem"></book-item-card>
  </div>
  <!-- </transition> -->
</template>
<script>
import BookItemCard from "./BookItemCard.vue";
import {ImgUrlMixIn} from "common/mixin.js"
export default {
  name: "BookItem",
  mixins:[ImgUrlMixIn],
  components: {
    BookItemCard,
  },
  props: {
    bookItem: {
      type: Object,
      default() {
        return {};
      },
    },
    
  },
  data() {
    return {
      showCrad: false,
    };
  },
  methods: {
    showCardFn() {
      this.showCrad = true;
    },
    hideCardFn() {
      this.showCrad = false;
    },
    toBookDetail() {
      this.showCrad = false
      this.$emit("toBookDetail", this.bookItem.bookId)
    }
  },
  created() {

  },
  computed: {},
};
</script>
<style> 
.book-item {
  transition: all 1s;
  float: left;
  margin: 0.625rem 0;
  margin-right: 15px;
  width: 7.5rem;
  height: 13.75rem;
  /* padding: 0.9375rem;
  box-sizing: content-box;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  position: relative;
  border-radius: 0.3125rem;
}

.book-img {
  margin: 0 auto;

  width: 7.1875rem;
  height: 10.625rem;
  position: relative;
  background: rgba(220, 220, 220, 0.278);
  border-radius: 5px;
}
.book-img img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.book-item .book-info {
  white-space: nowrap;
  width: 6.875rem;
  margin: 0 auto;
  margin-top: 0.75rem;
}
.book-item .book-title,
.book-item .book-author {
  text-overflow: ellipsis;
  height: 0.875rem;
  line-height: 0.875rem;
  width: 7.1875rem;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  margin: 0.375rem 0;
}
.book-item .book-title {
  cursor: pointer;
  color: var(--color-text-active);
}
.book-item .book-author {
  color: rgba(128, 128, 128, 0.679);
}
.book-item .book-title span:hover {
  background: var(--color-text-active);
  color: white;
}
</style>
