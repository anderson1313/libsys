<template>
  <div class="login-form">
    <login-type-in ></login-type-in>
  
  </div>
</template>
<script>
import LoginTypeIn from "./TypeIn/LoginTypeIn";

export default {
  name: "FinalLogin",
  components: {
    LoginTypeIn,
  },
  props: {},
  data() {
    return {
    
    };
  },
  methods: {
  
    
  },
  created() {},
  computed: {},
};
</script>
<style>

.login-form {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  overflow: hidden;
  background: white;
  border-radius: 0.1rem;
  width: 90%;
  height:300px;
  padding: 0.2rem;
  margin: 0 auto;
}

</style>
