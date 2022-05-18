<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 80%"
      :row-style="{ height: '10px' }"
      :cell-style="{
        padding: '2px',
        height: '10px !important',
        'font-size': '10px',
        overflow: 'hidden',
      }"
    >
      <!-- 图片的情况-->
      <el-table-column
        height="20"
        v-for="item in labels.filter((i) => i.label == '图片')"
        :width="item.width"
        :key="item.id"
        :label="item.label"
        :prop="item.prop"
        align="center"
      >
        <template slot-scope="scope">
          <img :src="GetImage(scope.row.bookPhoto)" width="35" height="50" />
        </template>
      </el-table-column>

      <!-- 除了图片以外的情况-->
      <el-table-column
        height="20"
        v-for="item in labels.filter((i) => i.label != '图片')"
        :width="item.width"
        :key="item.id"
        :label="item.label"
        :prop="item.prop"
        :align="item.label ==='图书库存'?'center':'left'"
      >
        <template slot-scope="scope">
          <div v-if="item.label === '图书名称'">
            <span class="bookname" :title="scope.row.bookName">{{
              scope.row.bookName
            }}</span>
          </div>
          <div v-else>
            <span class="other">{{ scope.row[item.prop] }}</span>
          </div>
        </template>
      </el-table-column>

      <slot name="extra"></slot>
    </el-table>
  </div>
</template>

<script>
import { ImgUrlMixIn } from "common/mixin.js";
export default {
  name: "ManageTable",
  props: ["labels", "tableData"],
  mixins: [ImgUrlMixIn],
  data() {
    return {
      multipleSelection: [],
    };
  },

  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>
<style scoped>
.other {
  color: var(--common-text);
}
.bookname {
  white-space: wrap;
  line-height: 50px;
  display: block;
  color: var(--bold-text);
  width: 200px;
  height: 50px;
  overflow: hidden;
  font-weight: 550;
}
img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>