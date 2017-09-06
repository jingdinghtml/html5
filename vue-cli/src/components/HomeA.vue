<template>
      <el-table stripe :data="tableData" style="width: 100%">
        <!--<el-checkbox v-model="checked">备选项</el-checkbox>-->
        <el-table-column prop="newsId" label="ID" width="180"></el-table-column>
        <el-table-column prop="author" label="作者" width="180"></el-table-column>
        <el-table-column prop="title" label="标题" width="180"></el-table-column>
        <el-table-column prop="createTime" label="发布时间" width="180"></el-table-column>
        <el-table-column prop="type" label="新闻类别" width="180"></el-table-column>
        <el-table-column prop="count" label="点击量" width="180"></el-table-column>
        <el-table-column prop="comment" label="评论数量" width="180"></el-table-column>
      </el-table>
</template>

<script type="application/ecmascript">
  import {getNews} from '../config/index'
  export default{
    data () {
      return {
        cc: true,
        tableData: [],
        page: 1,
        rows: 20,
        total: 0
      }
    },
    created(){
      this.aa()
    },
    methods: {
      aa() {
        var self = this
        getNews({page:this.page, rows:this.rows}).then(function (res) {
          self.tableData = res.data.rows
        })
      }
    }
  }
</script>

<style>

</style>
