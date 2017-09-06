<template>
  <div class="navA">
    <!--导航栏部分-->
    <div class="nav_A">
      <el-input type="text" v-model="zz" class="inputA" placeholder="请输入内容"></el-input>
      <el-button type="success" @click="handelSearch" :loading="searchLoading" :disabled="listLoading">查询</el-button>
      <el-button type="primary" @click="handelAdd">导入用户</el-button>
    </div>
    <!--列表部分-->
    <div class="content_A">
      <el-table :data="tableData" v-loading="listLoading" @selection-change="selectionChange" border stripe fit style="width:100%">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column type="index" label="#" width="60"></el-table-column>
        <el-table-column label="用户名" width="180" >
          <template scope="scope">
            <a href="" class="username" @click.prevent="handleInfo(scope.row)">{{scope.row.username}}</a>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="证件" width="180"></el-table-column>
        <el-table-column prop="phone" label="电话" width="180"></el-table-column>
        <el-table-column prop="totalScore" label="积分" width="180">
          <template scope="scope">
            <el-tooltip class="item" effect="dark" content="查看积分" placement="top">
              <el-tag type="gray" class="integral" @click.native="handleIntegral(scope.row.id)">{{scope.row.totalScore}}</el-tag>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="240">
          <template scope="scope">
            <el-button size="small" @click="qiyong(scope.row.id, 0)" type="success" v-if="scope.row.disabled == 1">启用</el-button>
            <el-button size="small" @click="qiyong(scope.row.id, 1)" type="danger" v-if="scope.row.disabled == 0">禁用</el-button>
            <el-button size="small" @click="resetMima(scope.row.id)">密码重置</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="footerA">
      <el-button type="success" class="footer_A" :disabled="this.sels.length === 0" @click.native="batchReset">批量重置密码</el-button>
      <div class="block footer_B" >
        <!--<span class="demonstration"></span>-->
        <el-pagination v-show="!listLoading" layout="prev,pager,next"
                       @current-change="handelPageChange"
                       :page-size="pagesize"
                       :total="total">
        </el-pagination>
      </div>
    </div>
    <el-dialog title="积分列表" size="large" v-model="userIntegralVisible" :close-on-click-model="false">
      <userjifen :userid="userid" v-model="userIntegralVisible"></userjifen>
    </el-dialog>
    <el-dialog title="用户信息" v-model="userInfoVisible">
      <userxinxi :user="user" type="large"></userxinxi>
    </el-dialog>
  </div>
</template>

<script>
  import {getUserDisabled, getUserLists, importUsers, resetPwd} from '../../config/index'
  import {openFile} from '../../util/core'
  import userxinxi from './userxinxi.vue'
  import userjifen from './userjifen.vue'
  export default {
    data () {
      return {
        searchLoading: false,
        listLoading: false,
        page: 1,
        pagesize: 8,
//        row: 13,
        zz: '',
        tableData: [],
        total: 0,
        sels: [],
        userIntegralVisible: false,
        userInfoVisible: false,
        user: {},
        userid: ''
      }
    },
    components: {
      userxinxi: userxinxi,
      userjifen: userjifen
    },
    mounted () {
      this.getData()
    },
    methods: {
      handleInfo (row) {
        this.userInfoVisible = true
        this.user = Object.assign({}, row)
      },
      handleIntegral (uid) {
        this.userIntegralVisible = true
        this.userid = uid
      },
      resetMima (id) {
        this.resetPWD(id)
      },
      selectionChange (sels) {
        this.sels = sels
      },
      batchReset () {
        var ids = this.sels.map(function (item) {
          return item.id
        }).toString()
        this.resetPWD(ids)
      },
      handelSearch () {
        this.getData()
      },
      qiyong (id, aa) {
        var self = this
        getUserDisabled({user_id: id, disabled: aa}).then(function (res) {
          if (res.data && res.data.code === 1) {
            self.$message({
              message: '操作成功',
              type: 'success'
            })
            self.getData()
          } else {
            self.$message({
              message: '操作失败',
              type: 'danger'
            })
          }
        })
      },
      handelAdd () {
        var input = openFile('myFile', 'application/vnd.ms-excel')
        var self = this
        input.onchange = function () {
          if (input.files.length === 0) {
            return
          }
          var data = new FormData()
          data.append('myFile', input.files[0])
          self.listloading = true
          importUsers(data).then(function (res) {
            self.listloading = false
            if (res.data && res.data.code === 1) {
              self.$message({
                message: '操作成功',
                type: 'success'
              })
              self.getData()
            } else {
              self.$message({
                message: '操作失败',
                type: 'error'
              })
            }
          }).catch(function () {
          })
        }
      },
      handelPageChange (val) {
        this.page = val
        this.getData()
      },
      getData () {
        this.listLoading = true
//        self.searchLoading = true
        var self = this
        getUserLists({page: this.page, rows: this.pagesize, keyword: this.zz})
          .then(function (res) {
            self.searchLoading = false
            self.listLoading = false
            if (res.data && res.data.code === 1) {
//              console.log(res.data)
//              console.log(res.data.total)
              self.total = res.data.total
              self.tableData = res.data.rows
            } else {
            }
          })
          .catch(function () {
            self.listLoading = false
          })
      },
      resetPWD (ids) {
        var self = this
        resetPwd({userIds: ids}).then(function (res) {
          if (res.data && res.data.code === 1) {
            self.$message({
              message: '操作成功',
              type: 'success'
            })
          } else {
            self.$message({
              message: '操作失败',
              type: 'info'
            })
          }
        }).catch(function (err) {
          console.log(err)
        })
      }
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .navA{
    padding: 20px;
    position: relative;
  }
  .navA .nav_A .inputA{
    width: 300px;
    position: relative;
  }

  .footerA{
    height: 56px;
    width: 100%;
    background-color: #ccc;
    position: relative;
  }
  .footerA .footer_A{
    position: absolute;
    left: 10px;
    top: 10px;
  }
  .footerA .footer_B{
    position: absolute;
    right: 10px;
    top: 14px;
  }
  .el-dialog__title{
    float: right;
  }
  /*.el-dialog__header{*/
    /*float: left;*/
  /*}*/
</style>
