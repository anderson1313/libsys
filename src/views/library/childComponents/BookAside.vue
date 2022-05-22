<template>
  <div class="book-aside">
    <my-aside>
      <aside-item :options="catName" :activeId="id.activeCat" @handleClick="catClick">
        <p slot="aside-item-name">类别</p>
      </aside-item>
      <aside-item
        :options="TimeName"
        :activeId="id.activeTime"
        @handleClick="timeClick"
      >
        <p slot="aside-item-name">时间</p>
      </aside-item>
      <aside-item :options="FnName" :activeId="id.activeFn" @handleClick="fnClick">
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

      catName: [
        {
          id: 0,
          name: "全部",
        },
        {
          id: 1,
          name: "科幻",
        },
        {
          id: 2,
          name: "爱情",
        },
      ],
      TimeName: [
           {
          id: 0,
          name: "全部",
        },
        {
          id: 1,
          name: "2022",
        },
        {
          id: 2,
          name: "2021",
        },
        {
          id: 3,
          name: "2020",
        },
        {
          id: 4,
          name: "2019",
        },
        {
          id: 5,
          name: "2018",
        },
      ],
      FnName: [
        {
          id: 0,
          name: "按借阅次数排序",
        },
        {
          id: 1,
          name: "按评分排序",
        },
        {
          id: 2,
          name: "按价格排序",
        },
      ],
    };
  },
  methods: {
    catClick(id) {
      this.id.activeCat = id;
      this.$emit("asideClick",this.id)
    },
    timeClick(id) {
      this.id.activeTime = id;
        this.$emit("asideClick",this.id)
    },
    fnClick(id) {
      this.id.activeFn = id;
        this.$emit("asideClick",this.id)
    },
  },
  created() {},
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
