<template>
  <div class="funinput phone" >
    <input
      type="text"
      v-model="ueamil"
      @input="eamilInput"
      placeholder="请输入邮箱"
    />
  </div>
</template>
<script>
export default {
  name: "PhoneType",
  components: {},
  props: {},
  data() {
    return {
      ueamil: null,
    };
  },
  methods: {
   
    eamilInput(e) {
      const reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
      const ueamil = e.target.value;
      if (reg.test(ueamil)){
        this.$emit("handleemail", true, this.ueamil)

      }else{
          this.$emit("handleemail", false)
          
      }

   
    },
  },
  
  created() {},
  computed: {},
};
</script>
<style>

</style>
