<template>
 <transition name="msgbox-fade">
  <div class="confirm-box-wrapper" v-show="visible"   >
    <div class="confirm-box" v-loading="loading">
      <div class="box-header">提示</div>
      <div class="box-msg">{{ confirmMsg }}</div>

      <div class="box-btns">
        <button class="cancel-btn" @click="handleclose">取消</button>
        <button class="yes-btn" @click="handleconfirm">确认</button>
      </div>
    </div>
  </div>
  </transition>
</template>
<script>
export default {
  name: "ConfirmBox",
  components: {},
  props: {
    confirmMsg: {
      type: String,
      default: "你确定要归还这本书吗",
    },
  },
  data() {
    return {
       loading:false,
       visible: false,
       beforeClose:null
    };
  },
  methods: {
    handleclose() {
      this.visible = false
      this.beforeClose && this.beforeClose(this)
      
      this.callback && this.callback();
    },
    handleconfirm() {
      this.beforeClose && this.beforeClose(this)

      this.callback && this.callback('confirm');

    }
  },
  created() {
    
  },
  computed: {},
};
</script>
<style>
.confirm-box-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(128, 128, 128, 0.346);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 2001;
}
.confirm-box {
  display: inline-block;
  width: 26.25rem;
  padding-bottom: 0.625rem;
  vertical-align: middle;
  background-color: #fff;
  border-radius: 0.25rem;
  border: 0.0625rem solid #ebeef5;
  font-size: 18px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  text-align: left;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.box-header{
    padding: .625rem;
    font-size: 1.125rem;
}
.box-msg{
     padding: 0 .625rem;
     color:#606266;
     font-size: .875rem;
    
}
.box-btns {
      padding: .625rem;
      text-align: right;
}
.box-btns button:nth-child(2) {
     margin-left: .625rem;
     background: var(--color-text-active);
     color: white;
     
}
.box-btns button:nth-child(2):hover {
     background: rgba(4, 53, 158, 0.779);
}
.box-btns button:nth-child(1):hover {
    color: var(--color-text-active);
     background: rgba(4, 53, 158, 0.161);
}
.cancel-btn,
.yes-btn{  
    padding: .5625rem .9375rem;
    font-size: .75rem;
    border-radius: .3125rem;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #dcdfe6;
    color: #606266;
    text-align: center;
    outline: none;
    transition:  all 0.1s linear;
}


</style>
