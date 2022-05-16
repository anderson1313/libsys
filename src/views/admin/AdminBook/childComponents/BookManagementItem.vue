<template>
   <div class="book-manage">
      <el-table :data="bookManageItem" style="width: 100%" height="590">
         <el-table-column fixed type="selection" width="45">
         </el-table-column>
         <el-table-column prop="isbn" label="图书编号" width="120">
         </el-table-column>
         <el-table-column prop="Name" label="图书名称" width="100">
         </el-table-column>
         <el-table-column prop="Class" label="图书分类" width="140">
         </el-table-column>
         <el-table-column  prop="Num" label="销量" width="80">
         </el-table-column>
         <el-table-column prop="Money" label="售价" width="80">
         </el-table-column>
         <el-table-column prop="Author" label="作者" width="120">
         </el-table-column>
         <el-table-column label="图片" width="120">
            <template width="90" slot-scope="scope">
               <img style="width:60px;height:80px;border:none;" :src="scope.row.Image">
            </template>
         </el-table-column>
         <el-table-column prop="Publisher" label="出版社" width="120">
         </el-table-column>
         <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
               <el-button @click.native.prevent="deleteRow(scope.$index, bookManageItem)" type="text" size="small">
                  删除
               </el-button>
               <el-button @click.native.prevent="changeRow(scope.$index, bookManageItem)" type="text" size="small">
                  修改
               </el-button>
            </template>
         </el-table-column>
      </el-table>

   </div>

</template>

</template>
<script>
   export default {
      name: 'BookManagementItem',
      components: {
      },
      props: {
         bookManageItem: {
            type: Array,
            default() {
               return {};
            },
         },
      },
      data() {
         return {
         }
      },
      methods: {
         deleteRow(index, rows) {
            rows.splice(index, 1);
         },
         changeRow(index, rows) {
            rows.splice(index, 1);
         }
      },
      created() {
      },
      computed: {
      },
   }
</script>
<style>
   .book-manage {
      margin-top: 0;
      margin: 0 auto;
      width: 100%;

   }
</style>