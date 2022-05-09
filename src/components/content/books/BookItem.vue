<template>
  <div class="book-item">
    <div class="book-img">
      <img
        :src="bookItem.Image"
        alt=""
        @mouseenter="showCardFn"
        @mouseleave="hideCardFn"
      />
    </div>
    <div class="book-info">
      <div class="book-title">
        <span>{{ bookItem.Title }}</span>
      </div>
    
      <div class="book-author">{{ bookItem.Author }}</div>
    </div>

    <book-item-card :visible="showCrad" :bookItem="bookItem"></book-item-card>
  </div>
</template>
<script>
import BookItemCard from "./BookItemCard.vue";

export default {
  name: "BookItem",
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
  },
  created() {},
  computed: {},
};
</script>
<style>
.book-item {
  margin: 0.625rem 1.25rem;
  width: 7.5rem;
  height: 13.75rem;
  padding: 0.9375rem;
  box-sizing: content-box;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: relative;
  border-radius: 0.3125rem;
}

.book-img {
  margin: 0 auto;

  width: 7.1875rem;
  height: 10.625rem;
  position: relative;
  background: aquamarine;
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
.book-info {
  white-space: nowrap;
  width: 7.1875rem;
  margin: 0 auto;
  margin-top: 0.75rem;
}
.book-title,
.book-author {
  text-overflow: ellipsis;
  height: 0.875rem;
  line-height: 0.875rem;
  width: 7.1875rem;
  font-size: 0.625rem;
  white-space: nowrap;
  overflow: hidden;
  margin: 0.375rem 0;
}
.book-title {
  cursor: pointer;
  color: var(--color-text-active);
}
.book-author {
  color: rgba(128, 128, 128, 0.679);
}
.book-title span:hover {
  background: var(--color-text-active);
  color: white;
}
</style>
