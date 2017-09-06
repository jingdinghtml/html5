<template>
    <div class="navA">
      <el-table :data="tableData" v-loading="listLoading" scripe border style="width: 100%">
        <el-table-column type="index" label="#" width="60"></el-table-column>
        <el-table-column prop="titleDesc" label="描述" show-overflow-tooltip min-width="100">
          <template scope="scope">
            <router-link :to="'/democracyUserList/' + scope.row.id" class="comment-name" >
              {{scope.row.titleDesc}}
            </router-link>
          </template>
        </el-table-column>
        <el-table-column label="状态" width="120">
          <template scope="scope">
            <el-tag type="gray" v-if="scope.row.isOpen == 0">未开启</el-tag>
            <el-tag type="success" v-if="scope.row.isOpen == 1">进行中</el-tag>
            <el-tag type="danger" v-if="scope.row.isOpen == 2">已结束</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="timeFormat" label="时间" show-overflow-tooltip min-width="100"></el-table-column>
        <el-table-column  label="操作" width="220">
          <template scope="scope">
            <el-button v-if="scope.row.isOpen != 2" size="small" type="info" @click="handleEdit(scope.row)">修改</el-button>
            <el-button v-if="scope.row.isOpen == 0" size="small" type="success" @click="handleStatus(scope.row)">开启</el-button>
            <el-button v-if="scope.row.isOpen == 1" size="small" type="danger" @click="handleStatus(scope.row)">结束</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-col :span="24" class="toolbar">
        <el-pagination layout="prev, pager, next" @current-change="handlePageChange"
                       :page-size="pagesize" :total="total"
                       style="float: right;"></el-pagination>
      </el-col>
      <el-dialog title="用户列表" size="large" v-model="democracyUserListVisible" :close-on-click-modal="false">
        <usercomment :comment="comment" ></usercomment>
      </el-dialog>
      <el-dialog title="修改" v-model="dialogEditVisible">
        <updatacomment :comment="comment" @updated="handleUpdated"></updatacomment>
      </el-dialog>
    </div>
</template>

  <script>
    import {changeCommentStatus, getNationComment} from '../../config/index'
    import updateComment from '../update/upDateComment.vue'
    import userComment from '../update/demoCracyUserList.vue'
    export default {
      data () {
        return {
          tableData: [],
          page: 1,
          total: 0,
          democracyUserListVisible: false,
          listLoading: false,
          pagesize: 10,
          dialogEditVisible: false,
//          dialogUsersVisible: false,
          comment: {}
        }
      },
      components: {
        updatacomment: updateComment,
        usercomment: userComment
      },
      mounted () {
        this.getData()
      },
      methods: {
        handleUsers (row) {
          this.democracyUserListVisible = true
          this.comment = {id: row.id}
        },
        handleEdit (row) {
          this.dialogEditVisible = true
          this.comment = {id: row.id, titleDesc: row.titleDesc, content: row.content}
        },
        handleStatus (row) {
          var self = this
          changeCommentStatus({is_open: row.isOpen, comment_id: row.id})
            .then(function (res) {
              if (res.data && res.data.code === 1) {
                self.$message({
                  message: '操作成功',
                  type: 'success'
                })
                self.getData()
              } else {
                self.$message({
                  message: res.data.msg,
                  type: 'error'
                })
              }
            }).catch(function () {
              self.$message({
                message: '操作失败',
                type: 'error'
              })
            })
        },
        handlePageChange (val) {
          this.page = val
          this.getData()
        },
        handleUpdated () {
          this.getData()
        },
        getData () {
          this.listLoading = true
          var self = this
          getNationComment({page: this.page, rows: this.pagesize})
            .then(function (res) {
              self.listLoading = false
              if (res.data && res.data.code === 1) {
                self.total = res.data.total
                self.tableData = res.data.rows
              }
            })
        }
      }
    }
  </script>

<style scoped lang="less">
  .comment-name{
    color: #20a0ff;
  }
</style>
