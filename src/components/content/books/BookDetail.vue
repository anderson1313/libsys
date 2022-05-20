<template>
  <div class="book-detail">
    <h1 class="title">{{bookItem.bookname}}</h1>
    <div class="book-indent">
      <div class="subject-wrapper">
        <div class="subject">
          <div class="mainpic">
            <img :src="GetImage(bookItem.bookphoto)" alt="" />
          </div>
          <div class="book-info">
            <span class="pl">作者:</span>
            <span class="val">{{bookItem.author}}</span>
            <br />
            <span class="pl">出版社:</span>
              <span class="val">{{bookItem.publishing}}</span>
            <br />
            <span class="pl">翻译:</span>
              <span class="val">{{bookItem.translator}}</span>
            <br />
            <span class="pl">出版时间:</span>
              <span class="val">{{bookItem.publishingtime}}</span>
            <br />
            <span class="pl">定价:</span>
              <span class="val">{{bookItem.price}}</span>
            <br />
            <span class="pl">ISBN:</span>
              <span class="val">{{bookItem.isbn}}</span>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {ImgUrlMixIn} from "common/mixin.js"
export default {
  name: "BookDetail",
  components: {},
  mixins:[ImgUrlMixIn],
  props: {
    bookItem: {
      type: Object,
      default() {
        return {
          bookid: "AQ002",
          bookname: "亲密关系",
          bookphoto:
            "https://img3.doubanio.com/view/subject/s/public/s29497110.jpg",
          type: "爱情/社会",
          author: "[美] 罗兰·米勒 (Rowland S. Miller)",
          translator: "王伟平 译、彭凯平 校",
          publishing: "人民邮电出版社",
          publishingtime: "2015-06-01",
          price: "140.00",
          brief:
            "亲密关系与泛泛之交有什么区别；大丈夫与小女子真的般配吗；吸引力的秘密是什么；男人与女人真的是不同的动物吗；同性恋真的是由基因决定的吗；单亲家庭的孩子长大后更...",
          stolocal: "01030402",
          stotime: "2015-08-05 00:00:00",
          loannumber: "10",
          state: "0",
          isbn:"9787559848048"
        };
      },
    },
  },
  data() {
    return {};
  },
  methods: {},
  created() {
    //   let bookId = this.$route.params.id
    //   console.log(bookId)
    //   if (bookId != "24523932"){
    //      this.$router.push({
    //         path:"/notfound"
    //      })
    //   }
  },
  computed: {},
};
</script>
<style scoped>
.book-detail {

  width: 675px;
}
.book-detail .title{
   color:#494949 ;
   margin: 10px 0;
}
.book-indent{
   display: flex;
   flex-direction: row;
}
.subject{
   width: 500px;
   display: flex;
   flex-direction: row;
}
.mainpic{
   max-width: 155px;
   
}
.mainpic img{
   width: 135px;
    height: 200px;

}
.book-info{
   margin-left:20px ;
}
.pl{
   font-size: 12px;
   color: #666666;
   margin-right: 2px;
}
.val{
   font-size: 12px;
   color: black;

}
</style>
