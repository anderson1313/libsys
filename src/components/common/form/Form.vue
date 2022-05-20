<template>
  <el-form ref="ruleForm" :model="form" :rules="rules" label-width="80px">
    <!--纯文本text类别-->
    <el-form-item
      v-for="item in formItems.filter((i) => i.type == 'text')"
      :key="item.id"
      :label="item.label"
      :prop="item.propName"
    >
      <el-input v-model="form[item.propName]"></el-input>
    </el-form-item>

    <!--多文字textarea类别-->
    <el-form-item
      v-for="item in formItems.filter((i) => i.type == 'textarea')"
      :key="item.id"
      :label="item.label"
      :prop="item.propName"
    >
      <el-input type="textarea" v-model="form[item.propName]"></el-input>
    </el-form-item>

    <!-- <slot name="extraItem"></slot> -->

    <el-form-item>
      <el-button type="primary" @click="submitForm">完成</el-button>
      <el-button @click="cancelForm">取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "Form",
  props: {
    formItems: {
      type: Array,
      default() {
        return [];
      },
    },
    rules: {
      type: Object,
      default() {
        return {};
      },
    },
    formType: {
      type: String,
      default: "add",
    },
  },
  data() {
    return {
      form: undefined,
    };
  },
  watch:{
      formItems(newVal,oldVal){
        
          this.initialEditData()
      }

  },
  methods: {
    //取消事件
    cancelForm() {
      this.$emit("cancelForm");
    },

    //完成事件

    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //初始化数据,如果是add，数据为空
    initialAddData() {
      const form = {};
      for (const item of this.formItems) {
        form[item.propName] = "";
      }
      this.form = form;
    },
    //初始化数据,如果是edit，数据为传过来的数据
    initialEditData() {
      const form = {};
      for (const item of this.formItems) {
        form[item.propName] = item.value;
      }
      this.form = form;
    },
  },

  created() {
    if (this.formType == "add") {
      this.initialAddData();
    }
    if (this.formType == "edit") {
        this.initialEditData()
      
    }
  },
};
</script>
<style scoped>
input {
  cursor: pointer !important;
}
.form-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(186, 184, 184, 0.2);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 2001;
}
</style>