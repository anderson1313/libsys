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
      @searchbook="searchBook"
      :showList="cshowList"
      :relatedRes="relatedRes"
      :activeRes="activeRes"
      :field="field"
       ref="resList"
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
    field: {
      type: String,
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
      getRelatedRes: debounce(this.getRelatedResCallBack, 300, true),
      barfoucus: false,
      cshowList: true,
      winBlur: false,
      keyboardDown: this._keyboardDown(),
      originVal:"",
      search:false
      
    };
  },
  methods: {

    //上下键与回车键
    _keyboardDown() {      
      let curIndex = -1;
      const inner = (e) => {
        //向下
        switch (e.keyCode) {
          case 40:
         
            if (this.relatedRes.length!=0) {
              
              if (curIndex < this.relatedRes.length - 1) {
                this.activeRes = ++curIndex;
                this.searchVal = this.relatedRes[curIndex][this.field].replace(
                  /\s*/g,
                  ""
                );
                return;
              }
              //最后一个的情况

              if (curIndex === this.relatedRes.length - 1) {
                this.activeRes = -1;
                curIndex = -1;
                this.searchVal = this.originVal
                return;
              }
            }
            break;

          //向上
          case 38:
            e.preventDefault();
            if (this.relatedRes.length!=0) {

              if (curIndex == 0) {
                this.activeRes = -1;
                curIndex = -1;
                this.searchVal = this.originVal
                return;

              }
              if (curIndex < 0) {
                this.activeRes = this.relatedRes.length - 1;
                curIndex = this.relatedRes.length - 1;
                this.searchVal = this.relatedRes[curIndex][this.field].replace(
                  /\s*/g,
                  ""
                );
                return;
              }
              if (curIndex < this.relatedRes.length) {
                this.activeRes = --curIndex;
                this.searchVal = this.relatedRes[curIndex][this.field].replace(
                  /\s*/g,
                  ""
                );
                return;
              }
            }
            break;
            //回车
          case 8:
            
            if (this.searchVal.length === 1) {
    
              this.searchBook("")
            }
           
            curIndex = -1;
            this.activeRes = -1;
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


    //搜索框对焦
    barFoucus() {
      this.barfoucus = true;
      if (!this.winBlur && this.relatedRes && this.relatedRes.length > 0) {
        this.cshowList = true;
      }
      this.winBlur = false;
    },

    //搜索框取消对焦
    cancelFocus() {
    
      this.barfoucus = false;
      this.cshowList = false
      this.keyboardDown.cancel();
    },

    //按回车键的回调函数

    searchBook(keyword) {
      if (typeof keyword == "string") {
        this.cshowList = false

        this.$emit("searchBook",keyword)
        return;
      } else {
        this.cshowList = false
    
        this.$emit("searchBook",this.searchVal)
        return;
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
  cursor: pointer;
  width: 500px;
  border: 1px solid #dfe1e5;
  border-radius: 10px;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  transition: border 0.5s;
}
.search-bar i {
  font-size: 15px !important;

  text-align: center;
  line-height: 20px;
}
.search-bar input {
  cursor: pointer;
  width: 400px;
  margin-left: 10px;
  height: 34px;
  font-size: 16px;
  line-height: 34px;
  font-weight: normal;
}
.focus {
  border: 1px solid var(--color-text-active);
}
.bar-list-show {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 1px solid #dfe1e5 !important;
}
</style>
