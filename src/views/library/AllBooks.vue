<template>
  <div class="all-books">
    <div class="library-main">
      <div class="search-bar-wrapper">
        <search-bar
          :getRelatedResCallBack="getRelatedRes"
          field="bookName"
          :relatedRes="relatedRes"
          @searchFn="searchBook($event)"
        ></search-bar>
      </div>

      <div class="book-list-wrapper">
        <transition name="efade">
          <book-list
            :ani="ani"
            :books="allbooks"
            @toBookDetail="toBookDetail"
            v-loading="loading"
            element-loading-text="拼命加载中"
          ></book-list>
        </transition>
        <book-aside @asideClick="asideClick"></book-aside>
      </div>

      <pagination ref="pager" @change="changePage" :total="total"></pagination>
    </div>
  </div>
</template>
<script>
import BookList from "components/content/books/BookList.vue";
import SearchBar from "components/common/searchbar/SearchBar";
import Pagination from "components/common/pagination/Pagination";
import BookAside from "./childComponents/BookAside";
import { getBooks } from "network/library.js";
import { GetBooks } from "common/mixin.js";
export default {
  name: "AllBooks",
  components: {
    BookAside,
    BookList,
    SearchBar,
    Pagination,
  },
  mixins: [GetBooks],
  props: {},
  data() {
    return {
      ani: "",
      curPage: 1,
      relatedRes: [],
      apiPara: {
        name: null,
        type: null,
        time: null,
        order: 0,
        page: 1,
      },
    };
  },
  methods: {
    //搜索框联想事件
    getRelatedRes(...args) {
      if (args[0] === "") {
        this.relatedRes = [];
        return;
      }
      getBooks({ name: args[0], page: 1, rows: 5 }).then((response) => {
        this.relatedRes = response.rows;
      });
    },

    //搜索事件
    searchBook(...args) {
      //如果输入的字符长度为0，默认获取全部数据
      if (args[0] == "") {
        this.apiPara.name = args[0];
        this.getDefaultBook();
      } else {
        this.apiPara.name = args[0];
        this.loading = true;
        getBooks(this.apiPara).then((response) => {
          this.allbooks = response.rows;
          this.loading = false;
          this.total = response.total;
        });
      }
    },

    //标签栏事件
    asideClick({ activeCat, activeFn, activeTime }) {
      this.$refs.pager.current = 1;
      this.apiPara.page = 1;
      this.apiPara.type = activeCat;
      this.apiPara.time = activeTime;
      this.apiPara.order = activeFn;

      this.loading = true;
      setTimeout(() => {
        getBooks(this.apiPara)
          .then((res) => {
            console.log(res);
            this.allbooks = res.rows;
            this.loading = false;
            this.total = res.total;
          })
          .catch((err) => {
            this.allbooks = [];
            this.loading = false;
          });
      }, 500);
    },

    //点击单本书事件
    toBookDetail(bookid) {
      this.$router.push({
        name: "bookdetail",
        params: { id: bookid },
      });
    },

    //页数改变
    changePage(page) {
      this.apiPara.page = page;
      this.loading = true;
      setTimeout(() => {
        getBooks(this.apiPara).then((res) => {
          this.allbooks = res.rows;
          this.loading = false;
          this.total = res.total;
        });
      }, 500);
      this.curPage = page;
    },
  },

  created() {},
  computed: {},
};
</script>
<style scoped>
.library-main {
  padding: 30px 0;
}
.book-list-wrapper {
  margin: 1.25rem 0;
  display: flex;
  flex-direction: row;
}
.search-bar-wrapper {
  position: relative;
  width: 400px;
  height: 40px;
}
</style>
