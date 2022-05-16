<template>
  <div>
    <el-dialog  title="添加图书" :visible.sync="dialogFormVisible" @close='closeDialog()' :close-on-press-escape="false" :close-on-click-modal="false">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="图书名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="图书类型" prop="class">
          <el-select v-model="ruleForm.region" placeholder="请选择图书类型">
            <el-option label="小说" value="小说"></el-option>
            <el-option label="文学" value="文学"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="图书介绍" prop="summary">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>
<script>

  export default {
    name: 'AddBook',
    components: {

    },
    props: {
      
    },
    data() {
      return {
        ruleForm: {
          name: '',
          class: '',
          desc: ''
        },
        dialogFormVisible: true,
        rules: {
          name: [
            { required: true, message: '请输入图书名称', trigger: 'blur' },
            { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          ],
          class: [
            { required: true, message: '请选择图书类型', trigger: 'change' }
          ],
          summary: [
            { required: true, message: '请填写图书介绍', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      closeDialog() {
        this.dialogFormVisible=false;
        console.log(this.dialogFormVisible);
      }
    },
    created() {
    },
    computed: {
    },
  }
</script>
<style>

</style>