<template>
    <div class="navA" >
      <el-table class="navAA" stripe border fit v-loading="listLoading" @selection-change="handleSelectionChange" :data="tableData" style="width: 100%">
        <el-table-column type="selection" width="60"></el-table-column>
        <el-table-column type="index" label="#" width="60"></el-table-column>
        <el-table-column prop="username" label="缩略图" width="120">
          <template scope="scope">
            <div class="small-img" :style="{backgroundImage: 'url(' + scope.row.imgUrl + ')'}"></div>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="标题" show-overflow-tooltip min-width="100"></el-table-column>
        <el-table-column prop="priority" label="顺序" width="180"></el-table-column>
        <el-table-column prop="status" label="状态" width="180">
          <template scope="scope">
            <el-tag :type="scope.row.status == '0' ? 'success' : 'danger'" close-transition>
              {{scope.row.status == '0' ? '启用' : '禁用'}}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template scope="scope">
            <el-button type="success" size="small" @click="upData(scope.$index, scope.row)">修改</el-button>
            <el-button type="danger" size="small" @click="deleteA(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-col :span="24" class="toolbar">
        <el-button type="info" @click="handleAdd">添加</el-button>
        <el-button type="danger" :disabled="this.sels.length === 0" @click.native="deleteAA">批量删除</el-button>
        <el-pagination layout="prev, pager, next"
                       @current-change="handelPageChange"
                       :page-size="pagesize"
                       :total="total"
                       style="float: right">
        </el-pagination>
      </el-col>
      <el-dialog title="添加轮播图" size="small" v-model="addFormVisible">
        <addcarousel></addcarousel>
      </el-dialog>
      <el-dialog title="编辑" size="small" v-model="editFormVisible" :close-on-click-modal="false">
        <updatecarousel :form="updateData"  @updated="handleUpdated"></updatecarousel>
      </el-dialog>
    </div>
</template>

<script>
  import {deleteCarousels, getCarousels} from '../../config/index'
  import lunBoUpData from './lunBoUpData.vue'
  import lunBoAdd from './lunBoAdd.vue'
  export default {
    data () {
      return {
        listLoading: false,
        tableData: [],
        page: 1,
        rows: 10,
        total: 0,
        sels: [],
        pagesize: 10,
        type: 0,
        editFormVisible: false,
        addFormVisible: false,
        updateData: {},
        status: ''
      }
    },
    components: {
      updatecarousel: lunBoUpData,
      addcarousel: lunBoAdd
    },
    mounted () {
      this.getLunBoImage()
    },
    methods: {
      upData (index, row) {
        this.editFormVisible = true
        this.updateData = Object.assign({}, row)
        this.updateData.status += ''
        delete this.updateData.createTime
      },
      handleUpdated () {
        this.getLunBoImage()
      },
      handleAdd () {
        this.addFormVisible = true
      },
      deleteA (index, row) {
        this.deleteData(row.id, '你确定要删除数据吗？')
      },
      deleteAA () {
        var ids = this.sels.map(function (item) {
          return item.id
        }).toString()
        this.deleteData(ids, '你确定要删除多条数据吗？')
      },
      handelPageChange (val) {
        this.page = val
        this.getLunBoImage()
      },
      handleSelectionChange (sels) {
        this.sels = sels
      },
      getLunBoImage () {
        this.listLoading = true
        var self = this
        getCarousels({page: this.page, rows: this.pagesize, type: this.type}).then(function (res) {
          self.listLoading = false
          if (res.data && res.data.code === 1) {
            self.total = res.data.total
            self.tableData = res.data.rows
          }
        })
      },
      deleteData (ids, tip) {
        var self = this
        this.$confirm(tip, '提示', {
          type: 'waring'
        }).then(function () {
          self.listLoading = true
          let cids = {carousel_ids: ids}
          deleteCarousels(cids).then(function (res) {
            self.listLoading = false
            self.$message({
              message: '删除成功',
              type: 'success'
            })
            self.getLunBoImage()
          }).catch(function () {
            console.log('cancel delete')
          })
        })
      }
    }
  }
</script>

<style>
  .navA{
    padding: 20px 20px 0 20px;
  }
  .small-img{
    width: 50px;
    height: 30px;
    background: center no-repeat;
    background-size: cover;
  }
</style>
