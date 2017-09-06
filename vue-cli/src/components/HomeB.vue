<template>
    <div>
      <div>
        <el-table stripe border :data="forumData" style="width: 100%">
          <!--<el-checkbox v-model="checked">备选项</el-checkbox>-->
          <!--<el-table-column prop="forumId" label="帖子ID" width="180"></el-table-column>-->
          <el-table-column prop="userId" label="用户ID" width="180"></el-table-column>
          <el-table-column prop="username" label="用户名" width="180"></el-table-column>
          <!--<el-table-column prop="header" label="用户头像" width="180"></el-table-column>-->
          <el-table-column prop="currentTime" label="发布时间" width="180"></el-table-column>
          <el-table-column prop="createTime" label="时间" width="180"></el-table-column>
          <el-table-column prop="commentCount" label="评论数量" width="180"></el-table-column>
          <el-table-column prop="content" label="帖子内容" width="180"></el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script type="application/ecmascript">
  import {getForums} from "../config/index";

  export default{
    data () {
      return {
        forumData: [],
        page: 1,
        rows: 15,
        total: 0
      }
    },
    created() {
      this.bb()
    },
    methods: {
      bb() {
        var self = this
        getForums({page:this.page, rows:this.rows}).then(function (res) {
          self.forumData = res.data.rows
        })
      }
    }
  }
</script>

<style>
  /*.el-table .info-row {*/
    /*background: #c9e5f5;*/
  /*}*/

  /*.el-table .positive-row {*/
    /*background: #e2f0e4;*/
  /*}*/
</style>
