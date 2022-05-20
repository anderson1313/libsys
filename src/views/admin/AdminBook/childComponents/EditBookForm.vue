<template>
  <transition name="msgbox-fade">
    <div class="form-wrapper" v-show="visible">
      <div class="book-form">
        <Form
          formType="edit"
          :formItems="formItems"
          :rules="rules"
          @cancelForm="cancelForm"
        ></Form>
      </div>
    </div>
  </transition>
</template>
<script>
import Form from "components/common/form/Form";
export default {
  name: "EditBookForm",
  components: {
    Form,
  },
  props: {
    editData: {
      type: Object,
      default() {
        return {
          bookName: "",
          bookAuthor: "",
          bookLoannumber: "",
        };
      },
    },
  },
  watch: {
    editData() {
      this.updateformItems();
    },
  },

  data() {
    return {
      visible: false,
      formItems: [
        {
          id: 0,
          label: "书名",
          propName: "bookName",
          type: "text",
          value: this.editData.bookName,
        },
        {
          id: 1,
          label: "作者",
          propName: "bookAuthor",
          type: "text",
          value: this.editData.bookAuthor,
        },
        {
          id: 2,
          label: "借阅量",
          propName: "bookLoannumber",
          type: "text",
          value: this.editData.bookLoannumber,
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
      this.visible = false;
    },
    updateformItems() {
      const tmp = [
        {
          id: 0,
          label: "书名",
          propName: "bookName",
          type: "text",
          value: this.editData.bookName,
        },
        {
          id: 1,
          label: "作者",
          propName: "bookAuthor",
          type: "text",
          value: this.editData.bookAuthor,
        },
        {
          id: 2,
          label: "借阅量",
          propName: "bookLoannumber",
          type: "text",
          value: this.editData.bookLoannumber,
        },
      ];
      this.formItems = tmp;
    },
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
