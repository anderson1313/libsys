<template>
    <div>
         <span>记录管理</span>
         <reslot>



            <div slot="extra">
               <span>3</span>

            </div>
         </reslot>
          

    </div>
</template>
<script>
import reslot from "./childComponents/reslot.vue"
export default {
  name: 'AdminRecord',
  components:{
     reslot
     

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
