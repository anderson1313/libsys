<template>
  <div>
    <div class="userInfo">
      <user-info></user-info>
    </div>
    <div>
<<<<<<< Updated upstream
        <final-bar></final-bar>

        <span>user</span>

=======
      <user-tab></user-tab>
>>>>>>> Stashed changes
    </div>
  </div>
</template>
<script>
<<<<<<< Updated upstream
import FinalBar from "components/content/navbar/FinalBar";
export default {
  name: 'User',
  components:{
      FinalBar
   },
   props:{
   },
   data() {
=======
  import UserTab from "./childComponents/UserTab.vue";
  import UserInfo from "./childComponents/UserInfo.vue";
  export default {
    name: 'User',
    components: {
      UserTab,
      UserInfo,
    },
    props: {
    },
    data() {
>>>>>>> Stashed changes
      return {
      };
    },
    methods: {
    },
    created() {
    },
    computed: {
    },
  }
</script>
<style scoped>
  .userInfo {
    margin-top: 10px;
  }
</style>