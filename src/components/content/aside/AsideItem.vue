<template>
  <div class="aside-item">
    <div class="item-name">
      <slot name="aside-item-name"></slot>
    </div>
    <slot name="aside-item-list">
       <span  @click="handleClick(item.id,item.name)" class="option" :class="activeId == item.id ? 'activeop' : ''" v-for="item in options" :key="item.id">{{
        item.name
      }}</span>
      </slot>
  </div>
</template>
<script>
export default {
  name: "AsideItem",
  components: {},
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    activeId:{
       type:Number,
       default:0
    }
  },
  data() {
    return {
       

    };
  },
  methods: {
     handleClick(id,name){
        this.$emit("handleClick",id,name)
     }
  },
  created() {},
  computed: {
     isActive() {

     }
  },
};
</script>
<style scoped>
.aside-item {
  padding: 10px 18px;
  
}
.item-name {
  color: #333;
  font-weight: 600;
  margin-bottom:10px ;
}
.option{
   font-size: 13px;
   color: #73777B;
   display: inline-block;
 
   padding: 4px 5px;
   border-radius: 5px;
   cursor: pointer;
   transition: all 0.2s;
   white-space: nowrap;
   margin:2px 0 ;
   margin-right: 5px;
}
.option:hover{
      background: #a0bcc228;
      color:#205375 ;

}
.activeop{
   background: #E8F9FD;
   color:#205375 ;
   font-weight: 500;
   

}
</style>
