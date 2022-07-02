<template>
  <div class="book-detail-wrapper">
    <h1 class="title">{{ bookItem.bookName }}</h1>
    <div class="book-indent">
      <div class="subject-wrapper">
        <div class="subject">
          <div class="mainpic">
            <img :src="GetImage(bookItem.bookPhoto)" alt="" />
          </div>
          <div class="book-info">
            <span class="pl">作者:</span>
            <span class="val">{{ bookItem.bookAuthor }}</span>
            <br />
            <span class="pl">出版社:</span>
            <span class="val">{{ bookItem.bookPublishing }}</span>
            <br />
            <span class="pl">翻译:</span>
            <span class="val">{{ bookTranslator }}</span>
            <br />
            <span class="pl">出版时间:</span>
            <span class="val">{{ bookPublishingtime }}</span>
            <br />
            <span class="pl">定价:</span>
            <span class="val">{{ bookItem.bookPrice }}</span>
            <br />
            <span class="pl">ISBN:</span>
            <span class="val">{{ bookItem.bookISBN }}</span>
            <br />
          </div>
        </div>
      </div>     
    </div>
     <div class="subject-info">
        <p class="title">图书简介</p>
        <p class="brief">{{bookItem.bookBrief}}</p>
      </div>
  </div>
</template>
<script>
import { ImgUrlMixIn } from "common/mixin.js";
import { getBookById } from "network/library";
export default {
  name: "BookDetail",
  components: {},
  mixins: [ImgUrlMixIn],
 
  data() {
    return {
      bookItem:{}

    };
  },
  methods: {},
  created() {
    let bookId = this.$route.params.id;
    getBookById({ id: bookId }).then((res) => {
      if (res.length != 0) {
        this.bookItem = res
        console.log(this.bookItem)
      } else {
        this.$router.push({
          path: "/notfound",
        });
      }
    });
  },
  computed: {
    bookTranslator() {
      return this.bookItem.bookTranslator ? this.bookItem.bookTranslator : "无"
    },
    bookPublishingtime() {
      if (this.bookItem.bookPublishingtime){
         return this.bookItem.bookPublishingtime.split(" ")[0]

      }
     

    }
}
}
</script>
<style scoped>
.book-detail-wrapper {
  border-radius: 8px;
  padding: 20px 25px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;

  width: 675px;
}
.book-detail-wrapper .title {
  white-space: wrap;
  color: #494949;
  margin: 10px 0;
  word-break: break-all;
}
.book-indent {
  display: flex;
  flex-direction: row;
}
.subject {
  width: 500px;
  display: flex;
  flex-direction: row;
}
.mainpic {
  max-width: 155px;
}
.mainpic img {
  width: 135px;
  height: 200px;
}
.book-info {
  margin-left: 20px;
}
.pl {
  font-size: 12px;
  color: #666666;
  margin-right: 2px;
}
.val {
  font-size: 12px;
  color: black;
}
.subject-info{
  margin: 20px 0;
}
.subject-info .brief{
  font-size: 14px;
  color: #666666;

}
</style>
