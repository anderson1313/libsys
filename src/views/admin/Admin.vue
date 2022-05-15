<template>
  <div class="admin-books">
    <!-- <final-bar></final-bar> -->
    <div>
      <search-item></search-item>
    </div>
    <div class="book-list-wrapper">
      <book-management-list :books="allbooks"></book-management-list>
    </div>
  </div>
</template>
<script>

  import BookManagementList from "components/content/bookmanagement/BookManagementList.vue"
  import SearchItem from "components/content/bookmanagement/SearchItem.vue"


  export default {
    name: 'Admin',
    components: {
      BookManagementList,
      SearchItem
    },
    props: {
    },
    data() {
      return {
        allbooks: [
          {
            "isbn": "9787540765026",
            "Money": "23",
            "Num": "123",
            "Name": "妊娠",
            "Author": "贾平凹",
            "Author_intro": "",
            "Class": "中国现当代文学 ",
            "NumRaters": "2",
            "Average": "0.0",
            "Id": 24523932,
            "Binding": "",
            "Pages": "152",
            "Publisher": "漓江出版社",
            "Origin_title": "",
            "Url": "https://book.douban.com/subject/24523932/",
            "Image": "https://img1.doubanio.com/lpic/s26658789.jpg",
            "Summary": "《原本贾平凹•长篇小说系列:妊娠》讲述的是一些看似平凡但又让人颇为心动的故事。有这样一群人，他们在日复一日的重复生活中平静地活着、爱着、生着、死着，用自己的生命轨迹呈现着生活的不同侧面，在社会变迁的潮流中展示着人性的纯美。作者通过日常生活的细腻描写，充分展示了浓重的时代大背景下那闪光的浪花，显示出对世情的超越，对生命的坦然面对。"
          },
          {
            "isbn": "9787540765033",
            "Money": "23",
            "Num": "123",
            "Name": "商州",
            "Author": "贾平凹",
            "Author_intro": "",
            "Class": "中国现当代文学 ",
            "NumRaters": "6",
            "Average": "0.0",
            "Id": 24523933,
            "Binding": "",
            "Pages": "215",
            "Publisher": "漓江出版社",
            "Origin_title": "",
            "Url": "https://book.douban.com/subject/24523933/",
            "Image": "https://img1.doubanio.com/lpic/s26696078.jpg",
            "Summary": "《原本贾平凹•长篇小说系列:商州》是贾平凹的第一部长篇小说。作者以刘成和珍子的爱情故事为主线，在讲述他们跌宕起伏、艰难曲折的爱情经历的同时，用大量笔墨穿插描绘出商州各地的地域地理、风土人情、历史习俗，展现了讲述了80年代初期安静、美好、民风纯朴的乡村生活，并通过商州一市七县的社会变革，揭示了改革开放后，商州城乡的变化发展与差异。"
          },
          {
            "isbn": "9787540765033",
            "Money": "23",
            "Num": "123",
            "Name": "商州",
            "Author": "贾平凹",
            "Author_intro": "",
            "Class": "中国现当代文学 ",
            "NumRaters": "6",
            "Average": "0.0",
            "Id": 24523933,
            "Binding": "",
            "Pages": "215",
            "Publisher": "漓江出版社",
            "Origin_title": "",
            "Url": "https://book.douban.com/subject/24523933/",
            "Image": "https://img1.doubanio.com/lpic/s26696078.jpg",
            "Summary": "《原本贾平凹•长篇小说系列:商州》是贾平凹的第一部长篇小说。作者以刘成和珍子的爱情故事为主线，在讲述他们跌宕起伏、艰难曲折的爱情经历的同时，用大量笔墨穿插描绘出商州各地的地域地理、风土人情、历史习俗，展现了讲述了80年代初期安静、美好、民风纯朴的乡村生活，并通过商州一市七县的社会变革，揭示了改革开放后，商州城乡的变化发展与差异。"
          },
          {
            "isbn": "9787540765033",
            "Money": "23",
            "Num": "123",
            "Name": "商州",
            "Author": "贾平凹",
            "Author_intro": "",
            "Class": "中国现当代文学 ",
            "NumRaters": "6",
            "Average": "0.0",
            "Id": 24523933,
            "Binding": "",
            "Pages": "215",
            "Publisher": "漓江出版社",
            "Origin_title": "",
            "Url": "https://book.douban.com/subject/24523933/",
            "Image": "https://img1.doubanio.com/lpic/s26696078.jpg",
            "Summary": "《原本贾平凹•长篇小说系列:商州》是贾平凹的第一部长篇小说。作者以刘成和珍子的爱情故事为主线，在讲述他们跌宕起伏、艰难曲折的爱情经历的同时，用大量笔墨穿插描绘出商州各地的地域地理、风土人情、历史习俗，展现了讲述了80年代初期安静、美好、民风纯朴的乡村生活，并通过商州一市七县的社会变革，揭示了改革开放后，商州城乡的变化发展与差异。"
          },
          {
            "isbn": "9787540765033",
            "Money": "23",
            "Num": "123",
            "Name": "商州",
            "Author": "贾平凹",
            "Author_intro": "",
            "Class": "中国现当代文学 ",
            "NumRaters": "6",
            "Average": "0.0",
            "Id": 24523933,
            "Binding": "",
            "Pages": "215",
            "Publisher": "漓江出版社",
            "Origin_title": "",
            "Url": "https://book.douban.com/subject/24523933/",
            "Image": "https://img1.doubanio.com/lpic/s26696078.jpg",
            "Summary": "《原本贾平凹•长篇小说系列:商州》是贾平凹的第一部长篇小说。作者以刘成和珍子的爱情故事为主线，在讲述他们跌宕起伏、艰难曲折的爱情经历的同时，用大量笔墨穿插描绘出商州各地的地域地理、风土人情、历史习俗，展现了讲述了80年代初期安静、美好、民风纯朴的乡村生活，并通过商州一市七县的社会变革，揭示了改革开放后，商州城乡的变化发展与差异。"
          },
          {
            "isbn": "9787540765040",
            "Money": "23",
            "Num": "123",
            "Name": "土门",
            "Author": "贾平凹",
            "Author_intro": "",
            "Class": "中国现当代文学",
            "NumRaters": "5",
            "Average": "0.0",
            "Id": 24523934,
            "Binding": "",
            "Pages": "202",
            "Publisher": "漓江出版社",
            "Origin_title": "",
            "Url": "https://book.douban.com/subject/24523934/",
            "Image": "https://img1.doubanio.com/lpic/s26696077.jpg",
            "Summary": "《原本贾平凹•长篇小说系列:土门》内容简介：如同许多村庄一样，西京的仁厚村也面临着走向城市化的进程。在这村庄里有希望保留村庄、热爱乡村生活的新任村长成义和梅梅等人，也有被城市同化、希望走出村庄、渴望城市现代生活的眉子等人。为了留住仁厚村，从外归来的强势新任村长成义带领大家作了种种努力，最终却因为盗窃文物罪被判死刑；而梅梅和眉子，在仁厚村成为废墟的第三天离开了西京。《土门》以独特的视角，展现了在国家工业化、城镇化进程的必然趋势下，城市生存方式和乡村保守心态的矛盾……"
          }]
      }
    },
    methods: {
    },
    created() {
    },
    computed: {
    },
  }
</script>
<style>

</style>