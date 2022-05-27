<template>
  <div class="user-info">
    <div class="PersonTop_img">
      <img v-image-preview :src="userImg" />
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
          <el-button class="el-icon-edit" v-if="this.$route.params.id === this.$store.state.id" type="primary"
            size="medium" plain @click="edit">编辑</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'UserInfo',
    components: {

    },
    props: {
    },
    data() {
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
  .user-info {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 100%;
    height: 130px;
    border-radius: 5px;
    display: flex;
  }

  .PersonTop_img {
    width: 130px;
    height: 110px;
    background-color: #8c939d;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 10px;
    overflow: hidden;
    border-radius: 20px;
    display: flex;
    align-items: center;
  }

  .PersonTop_img img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
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