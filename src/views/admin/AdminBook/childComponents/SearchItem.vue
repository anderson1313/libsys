<template>
  <div class="search">
    <div class="search-i">
      图书名称
      <el-input placeholder="请输入内容" style="width:200px" prefix-icon="el-icon-search" v-model="input1">
      </el-input>
    </div>

    <div class="search-bar">
      <el-button icon="el-icon-search" circle></el-button>
    </div>

    <div class="add">
      <el-button plain @click="add()" >添加</el-button>
    </div>
    <add-book v-if="dialogFormVisible" ></add-book>
  </div>
</template>
<script>
  import AddBook from './AddBook.vue'
  export default {
    name: 'SearchItem',
    components: {
      AddBook
    },
    props: {},
    data() {
      return {
        input1: '',
        dialogFormVisible:false
      }
    },
    methods: {
      add() {
        this.dialogFormVisible=true;
        console.log(this.dialogFormVisible);
      }
    },
    created() {
    },
    computed: {
    },
  }
</script>
<style scoped>
  .search {
    width: 100%;
    margin-top: 20px;
  }

  .search-bar {
    float: left;
    width: 30%;
    margin-bottom: 12px;
  }

  .search-i {
    width: 280px;
    float: left;
  }

  .add {
    float: right;
  }
</style>