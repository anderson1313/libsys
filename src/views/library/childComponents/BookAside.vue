<template>
  <div class="book-aside">
    <my-aside>
      <aside-item
        :options="catName"
        :activeId="id.activeCat"
        @handleClick="catClick"
      >
        <p slot="aside-item-name">类别</p>
      </aside-item>
      <aside-item
        :options="TimeName"
        :activeId="id.activeTime"
        @handleClick="timeClick"
      >
        <p slot="aside-item-name">时间</p>
      </aside-item>
      <aside-item
        :options="FnName"
        :activeId="id.activeFn"
        @handleClick="fnClick"
      >
        <p slot="aside-item-name">排序偏好</p>
      </aside-item>
    </my-aside>
  </div>
</template>

<script>
import MyAside from "components/content/aside/MyAside";
import AsideItem from "components/content/aside/AsideItem";

export default {
  name: "BookAside",
  components: {
    MyAside,
    AsideItem,
  },

  data() {
    return {
      id: {
        activeCat: 0,
        activeTime: 0,
        activeFn: 0,
      },
      params:{
        activeCat: null,
        activeTime: null,
        activeFn: 0,

      },
      catNameArr: [
        "小说",
        "历史",
        "文学",
        "哲学",
        "传记",
        "艺术",
        "科幻",
        "社会",
        "心理",
        "经济",
        "金融",
        "编程",
      ],
      FnName: [
        {
          id: 0,
          name: "按评分排序",
        },
        {
          id: 1,
          name: "按借阅次数排序",
        },
        {
          id: 2,
          name: "按价格排序",
        },
      ],
    };
  },
  methods: {
    catClick(id,name) {
    
      this.id.activeCat = id;
      this.params.activeCat = name == "全部"?null:name;
      this.$emit("asideClick", this.params);
    },
    timeClick(id,name) {
      this.id.activeTime = id;
       this.params.activeTime = name == "全部"?null:name;
      this.$emit("asideClick", this.params);
    },
    fnClick(id,name) {
      this.id.activeFn = id;
      this.params.activeFn = id
      this.$emit("asideClick", this.params);
    },
    initialCatName() {
      let obj = [];
      let i = 1;
      for (let _name of this.catNameArr) {
        let _obj = {};
        (_obj.id = i), (_obj.name = _name);
        i += 1;
        obj.push(_obj);
      }
      this.catName = obj;
      this.catName.unshift({id:0,name:"全部"})
    },
     initialTimeName() {
      let obj = [];
      let i = 1;
      for (let year = 2022; year > 2015;year--) {
        let _obj = {};
        (_obj.id = i), (_obj.name = year);
        i += 1;
        obj.push(_obj);
      }
    
      this.TimeName = obj;
      this.TimeName.unshift({id:0,name:"全部"})

    },
  },
  created() {
    this.initialCatName();
    this.initialTimeName()
  },
  computed: {},
};
</script>
<style scoped>
.book-aside {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 300px;
  height: 500px;
  border-radius: 10px;
}
</style>
