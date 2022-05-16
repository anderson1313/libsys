<template>
  <transition name="book-fade">
    <div class="book-item-card" v-show="visible">
      <span class="card-title">{{ bookItem.Title }}</span>
      <span class="card-author">{{ bookItem.Author }}</span>
      <div class="card-summary">{{ bookItem.Summary }}</div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "BookItemCard",
  components: {},
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    bookItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
  computed: {},
};
</script>
<style>
.book-item-card {
  transition: all 0.6s;
  width: 15.625rem;
  height: 15.625rem;
  background: var(--card-color);
  position: absolute;
  z-index: 1100;
  top: 0;
  left: 110%;
  padding: 0.875rem;
}
.book-item-card:before {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px 8px 8px 0;
  border-color: transparent transparent transparent transparent;
  content: "\A";
  position: absolute;
  border-right-color: var(--card-color);
  position: absolute; /*绝对定位不占位置*/
  top: 6.875rem;
  left: -0.5rem; /*相对于矩形宽度的位置*/
}
.book-fade-enter,
.book-fade-leave-active {
  opacity: 0;
  -webkit-transform: translate(-20%, 0%);
  transform: translate(-20%, 0%);
}
.card-title,
.card-author{
  display: inline-block;
  margin-right: .625rem;
  color: var(--bold-text);
  font-size: 1rem;
  font-weight: bold;
}
.card-summary {
  font-size: .875rem;
  margin: 0.3125rem 0;
  /* width: 14.375rem;
  height: 11.25rem; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 9;
  overflow: hidden;
  color: var(--common-text);
}
</style>
