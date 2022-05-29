<template>
  <div class="tab">
    <el-tabs type="border-card" v-model="activeTab" :tab-position="tabPosition" style="height: 550px; box-shadow:none">
      <el-tab-pane label="个人中心" disabled="true" ></el-tab-pane>
      <el-tab-pane label="我的借阅" name="my">
        <user-borrow></user-borrow>
      </el-tab-pane>
      <el-tab-pane label="我的收藏">
        <user-collect></user-collect>
      </el-tab-pane>
      <el-tab-pane label="个人简介">
        <user-information ></user-information>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import UserBorrow from "./UserBorrow/UserBorrow.vue";
  import UserCollect from "./UserCollect/UserCollect.vue";
  import UserInformation from "./UserInfo/UserInformation.vue";
  export default {
    name: 'UserTab',
    components: {
      UserBorrow,
      UserCollect,
      UserInformation
    },
    props: {
    },
    data() {
      return {
        tabPosition: 'left',
        activeTab: 'my',
      };
    },
    methods: {
    },
    created() {
    },
    computed: {
    },
  }
</script>
<style scoped>
  .tab {
    width: 100%;
    margin: 0 auto;
    padding: 30px 0;
    
  }

  ::v-deep .el-tabs__nav-wrap {
    background-color: #F7F5F2 !important
  }

  ::v-deep .el-tabs__item {
    font-size: 16px;
    height: 60px;
    line-height: 60px;
    padding: 0px 20px;
  }
  ::v-deep .el-tabs__item.is-disabled {
    font-size: 18px;
    height: 80px;
    line-height: 80px;
    color: rgba(19, 15, 64,1.0) !important
  }
</style>