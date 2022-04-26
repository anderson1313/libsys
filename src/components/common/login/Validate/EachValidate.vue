<template>
  <div>
    <div class="title"><slot name="title"></slot></div>
    <div class="tip"><slot name="tip"></slot></div>
    
  </div>
</template>
<script>

export default {
  name: "EachValidate",
  components: {
    
  },
  props: {},
  data() {
    return {
      password: "",
    };
  },
  methods: {
    inputConfirm() {
      console.log(this.password);
    },
  },
  created() {},
  computed: {},
};
</script>
<style>
.tip {
  color: rgb(134, 131, 131);
  font-size: 0.15rem;
}
.tip .value {
  font-weight: bold;
  color: black;
  margin: 0 0.05rem;
}
</style>
