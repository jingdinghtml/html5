<template>
    <div class="mainA">
      <el-row>
        <el-col :sopan="24">
          <el-form label="form" label-width="80">
            <el-form-item label="描述">
              <el-input v-model="comment.titleDesc"></el-input>
            </el-form-item>
            <el-form-item label="内容">
              <editor ref="myTextEditor" :fileName="'myFile'" :uploadUrl="uploadUrl" v-model="comment.content"></editor>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleSubmit" :loading="loading">保存</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import editor from '../common/editor.vue'
  import api from '../../config/api'
  import {updateComment} from '../../config/index'
  export default {
    props: {
      comment: {
        type: Object
      }
    },
    data () {
      return {
        name: 'myFile',
        uploadUrl: api.uploadImage,
        loading: false,
        rules: {
        }
      }
    },
    components: {
      editor: editor
    },
    methods: {
      handleSubmit () {
        this.loading = true
        var self = this
        var data = new FormData()
        for (var p in this.comment) {
          data.append(p, this.comment[p])
        }
        updateComment(data).then(function (res) {
          self.loading = false
          if (res.data && res.data.code === 1) {
            self.$message({
              message: '操作成功',
              type: 'success'
            })
            self.$emit('updated')
          } else {
            self.$message({
              message: res.data.msg,
              type: 'error'
            })
          }
        }).catch(function () {
          self.loading = false
          self.$message({
            message: '修改失败',
            type: 'error'
          })
        })
      }
    }
  }
</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }
  .ql-container .ql-editor{
    min-width: 20em;
    padding-bottom: 1em;
    max-height: 25em;
  }
</style>
