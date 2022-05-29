<template>
  <div>
    
    <div class="userInfo">
      <user-info></user-info>
    </div>
    <div>
      <user-tab></user-tab>
    </div>
  </div>
</template>
<script>
import FinalBar from "components/content/navbar/FinalBar";
import UserTab from "./childComponents/UserTab.vue";
import UserInfo from "./childComponents/UserInfo/UserInfo.vue";

export default {
  name: "User",
  components: {
    UserTab,
    UserInfo,
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
.userInfo {
  margin-top: 20px;
}
</style>