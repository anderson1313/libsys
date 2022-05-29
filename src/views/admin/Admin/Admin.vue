<template>
  <div class="admin-wrapper">
    <div class="ellipse"></div>

    <div class="login-wrapper" v-if="!isadmin">
      <admin-login></admin-login>
    </div>
    <div class="logout-wrapper" v-if="isadmin">
      <admin-logout></admin-logout>
    </div>
  </div>
</template>
<script>
import EllipseC from "../../home/childComponents/EllipseC.vue";
import AdminLogin from "./childComponents/AdminLogin.vue";
import AdminLogout from "./childComponents/AdminLogout.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("auth");
export default {
  name: "Admin",
  components: {
    EllipseC,
    AdminLogin,
    AdminLogout,
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
  computed: {
    ...mapState(["isadmin"]),
  },
};
</script>
<style scoped>
.admin-wrapper {
    width: 100% !important;
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: var(--main-background);
}
.login-wrapper,
.logout-wrapper {
  top: 250px;
  right: 300px;
  width: 400px;
  height: 300px;
}
.ellipse {
  overflow: hidden;
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 51%;
  z-index: -1;
  transition: transform 0.5s linear;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  top: 50%;
  left: 20%;

  background: linear-gradient(
    44.11deg,
    rgba(245, 198, 39, 0.6) 8.94%,
    rgba(255, 255, 255, 0) 86.73%
  );
  transform: translate(-50%,-50%);
}
</style>
