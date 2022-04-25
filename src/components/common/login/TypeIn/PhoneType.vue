<template>
  <div class="funinput phone" >
    <input
      type="number"
      v-model="uphone"
      @input="phoneInput"
      placeholder="请输入手机号"
      @keydown="phonekeydown"
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
      uphone: null,
    
    };
  },
  methods: {
    phonekeydown(event) {
      if (
        event.keyCode == "107" ||
        event.keyCode == "109" ||
        event.keyCode == "110" ||
        event.keyCode == "189" ||
        event.keyCode == "190" ||
        event.keyCode == "229"
      ) {
        event.preventDefault();
      }
    },
    phoneInput(e) {

      const uphone = e.target.value;
  
      if (uphone.length >= 11) {
        this.uphone = uphone.slice(0, 11);
        this.$emit("handlephone", true, this.uphone)
        return;
      }
      if (uphone.length == 11) {
          this.$emit("handlephone", true,this.uphone)

      } else {
        this.$emit("handlephone", false)
      }
    },
  },
  
  created() {},
  computed: {},
};
</script>
<style>



</style>
