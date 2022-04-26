<template>
  <div class="final-bar">
    <admin-bar class="bar" v-if="showAdmin"></admin-bar>
    <main-nav class="bar" v-else></main-nav>
  </div>
</template>
<script>
import MainNav from "components/content/navbar/MainNav.vue";
import AdminBar from "components/content/navbar/AdminBar.vue";
export default {
  name: "FinalBar",
  components: {
    MainNav,
    AdminBar,
  },
  data() {
    return {
      isAdmin: null,
      version: null,
    };
  },

  computed: {
    showAdmin() {
      return this.version === "admin";
    },
  },
  created() {
    this.version = this.sessionCache.getItem("version");
    this.isAdmin = this.sessionCache.getItem("isadmin");
  },

  mounted() {
    window.addEventListener("setItem", this.changeVersion);
  },
  methods: {
    changeVersion() {
      this.version = this.sessionCache.getItem("version");
    },
  },
};
</script>
<style>

</style>
