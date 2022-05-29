<template>
  <el-table
    :data="tableData"
    :style="tableStyle"
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
      :align="item.label === '图书名称' ? 'left' : 'center'"
    >
      <template slot-scope="scope">
        <div v-if="item.label === '图书名称'">
          <span class="bookname" :title="scope.row.bookName">{{
            scope.row.bookName
          }}</span>
        </div>
        <div v-if="item.label === '图书状态'">
          <el-tag v-if="scope.row.bookState === 0" type="danger" size="mini"
            >缺货</el-tag
          >
          <el-tag v-if="scope.row.bookState === 1" type="success" size="mini"
            >有货</el-tag
          >
        </div>
        <div v-if="item.label === '归还状态'">
          <el-tag v-if="scope.row.borrowState === 0" type="danger" size="mini"
            >未还</el-tag
          >
          <el-tag v-if="scope.row.borrowState === 1" type="success" size="mini"
            >已还</el-tag
          >
        </div>
        <div
          v-if="
            item.label != '图书名称' &&
            item.label != '图书状态' &&
            item.label != '归还状态'
          "
        >
          <span class="other">{{ scope.row[item.prop] }}</span>
        </div>
      </template>
    </el-table-column>

    <slot name="extra"></slot>
  </el-table>
</template>

<script>
import { ImgUrlMixIn } from "common/mixin.js";
export default {
  name: "ManageTable",
  props: ["labels", "tableData", "tableStyle"],
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
img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>