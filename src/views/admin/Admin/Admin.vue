<template>
  <div class="admin-wrapper">
    <ellipse-c :auto="true"></ellipse-c>
    <div class="login-wrapper">
       <admin-login></admin-login>
    </div>
    

  </div>
</template>
<script>
import EllipseC from "../../home/childComponents/EllipseC.vue";
import AdminLogin from "./childComponents/AdminLogin.vue"
export default {
  name: "Admin",
  components: {
    EllipseC,
    AdminLogin
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
  computed: {},
};
</script>
<style scoped>
.login-wrapper{
   position: absolute;
   top: 250px;
   right: 300px;
   width: 400px;
   height: 300px;
}
</style>
