<template>
  <div class="serach">
    <div class="search-bar" :class="barClass">
      <i class="iconfont icon-sousuo"></i>
      <input
        type="text"
        v-model="searchVal"
        @input="getRelatedRes(searchVal, $event)"
        @keydown.enter="searchBook"
        @focus="barFoucus"
        @blur="cancelFocus"
        @click="clickShow"
        @keydown="keyboardDown"
      />
    </div>
    <res-list
      @serachbook="searchBook"
      :showList="cshowList"
      :relatedRes="relatedRes"
      :activeRes="activeRes"
    ></res-list>
  </div>
</template>
<script>
import ResList from "./childComponents/ResList.vue";
import { debounce } from "common/utils";

export default {
  name: "SearchBar",
  components: {
    ResList,
  },
  props: {
    getRelatedResCallBack: {
      type: Function,
    },

    relatedRes: {
      type: Array,
    },
  },
  watch: {
    relatedRes: function (newVal, oldVal) {
      if (newVal.length > 0 && this.barfoucus) {
        this.cshowList = true;
      }
    },
  },

  data() {
    return {
      activeRes: -1,
      searchVal: "",
      getRelatedRes: debounce(this.getRelatedResCallBack, 400, true),
      barfoucus: false,
      cshowList: false,
      winBlur: false,
      keyboardDown: this._keyboardDown(),
    };
  },
  methods: {
    _keyboardDown() {
      let curIndex = -1;
      const inner = (e) => {
        switch (e.keyCode) {
          case 40:
            if (this.relatedRes) {
              if (curIndex < this.relatedRes.length - 1) {
                this.activeRes = ++curIndex;
                this.searchVal = this.relatedRes[curIndex].option;
                return;
              }

              if (curIndex === this.relatedRes.length - 1) {
                this.activeRes = 0;
                curIndex = 0;
                this.searchVal = this.relatedRes[curIndex].option;
                return;
              }
            }
            break;

          case 38:
            if (this.relatedRes) {
              if (curIndex <= 0) {
                this.activeRes = this.relatedRes.length - 1;
                curIndex = this.relatedRes.length - 1;
                this.searchVal = this.relatedRes[curIndex].option;
                return;
              }
              if (curIndex < this.relatedRes.length) {
                this.activeRes = --curIndex;
                this.searchVal = this.relatedRes[curIndex].option;
                return;
              }
            }
            break;
        }
      };
      inner.cancel = () => {
        this.curIndex = -1;
        this.activeRes = -1;
      };
      return inner;
    },
    clickShow() {
      this.winBlur = false;
      if (!this.winBlur && this.relatedRes && this.relatedRes.length > 0) {
        this.cshowList = true;
      }
    },
    barFoucus() {
      this.barfoucus = true;
      if (!this.winBlur && this.relatedRes && this.relatedRes.length > 0) {
        this.cshowList = true;
      }
      this.winBlur = false;
    },
    cancelFocus() {
      this.barfoucus = false;
      this.cshowList = false;
      this.keyboardDown.cancel();
    },

    searchBook(keyword) {
      if (typeof keyword == 'string') {
        console.log("发送请求", keyword);
        return;
      } else {
        console.log("发送请求", this.searchVal);
        return
      }
    },
  },
  created() {
    window.addEventListener("blur", () => {
      this.winBlur = true;
    });
  },
  computed: {
    barClass() {
      if (this.searchVal === "") {
        this.cshowList = false;
      }
      var arr = [];
      if (this.barfoucus) {
        arr.push("focus");
      }
      if (this.cshowList && this.barfoucus) {
        arr.push("bar-list-show");
      }

      return arr;
    },
  },
};
</script>
<style>
.search-bar {
  width: 500px;
  border: 1px solid #dfe1e5;
  border-radius: 10px;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  transition: border 0.1s ease-in;
}
.search-bar i {
  font-size: 15px !important;

  text-align: center;
  line-height: 20px;
}
.search-bar input {
  width: 400px;
  margin-left: 10px;
  height: 34px;
  font-size: 16px;
  line-height: 34px;
  font-weight: normal;
}
.focus,
.search-bar:hover {
  border: 1px solid var(--color-text-active);
}
.bar-list-show {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 1px solid #dfe1e5 !important;
}
</style>
