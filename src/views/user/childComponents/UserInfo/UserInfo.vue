<template>
  <div class="user-info ">
    <div class="PersonTop_img " >
      <avatar
        username="梁"
        :size="100"
        :rounded="true"
        class="avatar"
        :lighten="20"
        color="rgba(48, 51, 107,1.0)"
        backgroundColor="rgba(255, 190, 118,1.0)"
      ></avatar>
    </div>
    <div class="PersonTop_text">
      <div class="user_text">
        <div class="user_name">
          <span> skxsakx </span>
        </div>
        <div class="user_qianming">
          <span> 个性签名</span>
        </div>
        <div class="user_anniu">
          <el-button
            class="el-icon-edit"
            v-if="this.$route.params.id === this.$store.state.id"
            type="primary"
            size="medium"
            plain
            @click="edit"
            >编辑</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Avatar from "vue-avatar";
export default {
  name: "UserInfo",
  components: {
    Avatar,
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
.user-info {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 100%;
  height: 150px;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.avatar {
  margin: 0 20px;
}

.PersonTop_text {
  height: 120px;
  margin-top: 10px;
  width: 880px;
  display: flex;
}

.user_text {
  width: 60%;
  height: 100%;
  line-height: 30px;
}

.user_name {
  font-weight: bold;
}

.user_qianming {
  font-size: 14px;
  color: #999;
}
</style>