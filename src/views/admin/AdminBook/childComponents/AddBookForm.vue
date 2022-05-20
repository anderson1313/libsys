<template>
  <transition name="msgbox-fade">
    <div class="form-wrapper" v-show="visible">
      <div class="book-form">
        <Form formType="add" :formItems="formItems" :rules="rules" @cancelForm="cancelForm"></Form>
      </div>
    </div>
  </transition>
</template>
<script>
import Form from "components/common/form/Form";
export default {
  name: "AddBookForm",
  components: {
    Form,
  },
  props: [],
  data() {
    return {
      visible:false,
      formItems: [
        {
          id: 0,
          label: "书名",
          propName: "bookName",
          type: "text",
        },
        {
          id: 1,
          label: "作者",
          propName: "bookAuthor",
          type: "text",
        },

        {
          id: 2,
          label: "简介",
          propName: "bookBrief",
          type: "textarea",
        },
      ],
      rules: {
        bookName: [{ required: true, message: "请输入书名", trigger: "blur" }],
        bookAuthor: [
          { required: true, message: "请输入作者", trigger: "change" },
        ],
      },
    };
  },
  methods: {
      cancelForm() {
          this.visible = false
      }
  },
  created() {},
  computed: {},
};
</script>
<style scoped>
.book-form {
  width: 400px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 30px 0;
  padding-right: 40px;
  background: white;
  border-radius: 8px;
}
</style>
