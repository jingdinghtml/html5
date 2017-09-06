<template>
    <div>
        <el-table stripe :data="integralData" style="width: 100%">
          <el-table-column prop="id" label="积分记录的ID" width="180"></el-table-column>
          <el-table-column prop="userId" label="ID" width="180"></el-table-column>
          <el-table-column prop="type" label="积分获取途径" width="180"></el-table-column>
          <el-table-column prop="typeName" label="积分获取途径对应的名字" width="180"></el-table-column>
          <el-table-column prop="curMax" label="当前已经获取的" width="180"></el-table-column>
          <el-table-column prop="singleDesc" label="每次的增量" width="180"></el-table-column>
          <el-table-column prop="macNum" label="最多不超过" width="180"></el-table-column>
        </el-table>
    </div>
</template>

<script type="application/ecmascript">
    import {getIntegrals} from "../config/index";

    export default{
      data() {
        return {
          integralData: [],
          page: 1,
          rows: 10,
          total: 0
        }
      },
      created() {
        this.getIntegral()
      },
      methods: {
        getIntegral() {
          var self = this
          getIntegrals({page:this.page, rows:this.rows}).then(function (res) {
            self.tableData = res.data.rows
          })
        }
      }
    }
</script>

<style>

</style>
