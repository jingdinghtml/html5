<template>
    <div>
     <el-row>
       <el-col :span="24">
         <el-form ref="form" label-width="80px">
           <el-form-item label="描述">
             <el-input v-model="form.titleDesc"></el-input>
           </el-form-item>

           <el-form-item label="内容">
             <editor ref="myTextEditor" :fileName="'myFile'" :uploadUrl="uploadUrl" v-model="form.content"></editor>
           </el-form-item>

           <el-form-item>
              <el-button type="primary" @click="handleSubmit" :loading="loading">立即创建</el-button>
           </el-form-item>
         </el-form>
       </el-col>
     </el-row>
    </div>
</template>

<script>
  import editor from '../common/editor.vue'
  import api from '../../config/api'
  import {addComment} from '../../config/index'
  function T () {
    return {
      content: '',
      titleDesc: ''
    }
  }
  export default {
    data () {
      return {
        form: T(),
        loading: false,
        name: 'myFile',
        uploadUrl: api.uploadImage,
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
        for (var p in this.form) {
          data.append(p, this.form[p])
        }
        addComment(data).then(function (res) {
          self.loading = false
          if (res.data && res.data.code === 1) {
            self.$message({
              message: '创建成功',
              type: 'success'
            })
//            self.form.titleDesc = ''
//            self.form.content = ''
            self.form = T()
          } else {
            self.$message({
              message: res.data.msg,
              type: 'error'
            })
          }
        }).catch(function () {
          self.loading = false
          self.$mwssage({
            message: '创建失败',
            type: 'error'
          })
        })
      }
    }
  }
</script>

<style>
    .ql-container .ql-editor{
      min-height: 20em;
      padding-bottom: 1em;
      max-height: 25em;
    }
</style>
