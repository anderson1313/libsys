<template>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index)">修改</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index)">删除</el-button>
      </template>
    </el-table-column>
</template>
<script>
export default {
  name: 'UserTableItemExtra',
  components:{
   },
   props:{
   },
   data() {
      return {
      }
   },
   methods:{
      handleEdit(...args) {
         console.log(args)
      }
   },
   created(){
   },
   computed:{
   },
}
</script>
<style>

</style>
