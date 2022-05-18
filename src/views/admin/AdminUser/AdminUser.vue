<template>
    <div>
         <span>用户管理</span>
         <user-table></user-table>

    </div>
</template>
<script>
import UserTable from "./childComponents/UserTable"
export default {
  name: 'AdminUser',
  components:{
     UserTable
     
   },
   props:{
   },
   data() {
      return {
      }
   },
   methods:{
   },
   created(){
   },
   computed:{
   },
}
</script>
<style>

</style>
