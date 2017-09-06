<template>
    <div class="userA">
      <div class="header">
        <img src="../images/data-image-png.png" alt="">
      </div>
      <h4 class="title">系统登录</h4>
      <el-input type="text" v-model="user.username" placeholder="请输入账号:"></el-input>
      <el-input type="password" v-model="user.password" placeholder="请输入密码:"></el-input>
      <el-input v-model="user.checkcode" placeholder=请输入验证码:></el-input>
      <!--<input type="text" v-model="user.username">-->
      <!--<input type="text" v-model="user.password">-->
      <!--<input type="text" v-model="user.checkcode">-->
      <div class="userB">
        <img class="img_A" :src="codeUrl" alt="" @click="changeCode">
        <el-button size="small" type="success" @click="loginUser" >登录</el-button>
        <!--<input type="button" value="登录" @click="loginUser">-->
      </div>
    </div>
</template>

<script>
    import {login, codeUrl} from '../config/index'
    export default{
      data () {
        return {
          user: {
            username: '',
            password: '',
            checkcode: ''
          },
          codeUrl
        }
      },
      methods: {
        loginUser () {
          var self = this
          login(this.user).then(function (res) {
//            如果验证正确，则需要页面跳转到主界面
            if (res.data && res.data.code === 1) {
              console.log(res.data)
              console.log(res.data.code)
              self.$store.commit('login', true)
              self.$router.push('/index')
            }
          })
        },
        changeCode () {
          this.codeUrl = this.codeUrl + '?' + Date.now()
        }
      }
    }
</script>

<style lang="less">
@import '../style/login.less';
  /*.userA{*/
    /*width: 300px;*/
    /*margin: 50px auto;*/
    /*padding: 20px;*/
    /*line-height: 50px;*/
    /*background-color: #ffffff;*/
    /*box-shadow: 0 0 20px #ccc;*/
  /*}*/
  /*.userA .header{*/
    /*margin: -20px -20px 0 -20px;*/
    /*height: 60px;*/
    /*background-color: #20a0ff;*/
    /*position: relative;*/
  /*}*/
  /*.userA .header img{*/
    /*height: 50px;*/
    /*position: absolute;*/
    /*left: 5px;*/
    /*top: 5px;*/
  /*}*/
  /*.userB{*/
    /*position: relative;*/
  /*}*/
  /*.img_A{*/
    /*display: block;*/
    /*position: absolute;*/
    /*top: 9px;*/
    /*left: 23px;*/
  /*}*/
</style>
