<template>
    <div>
      <div class="nav">
        <img src="../images/data-image-png.png" alt="">
        <img src="../images/right_top.png" alt="">
      </div>
      <div id="aside">
        <div id="asideA">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu default-active="7" :unique-opened="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">

                <el-submenu index="1">
                  <template slot="title"><i class="el-icon-message"></i>用户管理</template>
                  <!--<el-menu-item-group>-->
                    <el-menu-item @click="cc" index="1-1">用户列表</el-menu-item>
                  <!--</el-menu-item-group>-->
                </el-submenu>

                <el-submenu index="2">
                  <template slot="title"><i class="el-icon-menu"></i>党员互动</template>
                  <!--<el-menu-item-group>-->
                    <el-menu-item @click="dd" index="2-1">帖子列表</el-menu-item>
                  <!--</el-menu-item-group>-->
                </el-submenu>

                <el-submenu index="3">
                <template slot="title" ><i class="el-icon-setting"></i>轮播图列表</template>
                  <!--<el-menu-item-group>-->
                    <el-menu-item index="3-1" @click="db">轮播图</el-menu-item>
                  <!--</el-menu-item-group>-->
                </el-submenu>

                <el-submenu index="4">
                  <template slot="title"><i class="el-icon-message"></i>民主评议</template>
                  <!--<el-menu-item-group>-->
                    <el-menu-item index="4-1" @click="dc">发起评议</el-menu-item>
                    <el-menu-item index="4-2" @click="de">评议列表</el-menu-item>
                  <!--</el-menu-item-group>-->
                </el-submenu>

                <el-submenu index="5">
                  <template slot="title"><i class="el-icon-message"></i>心得总结</template>
                  <!--<el-menu-item-group>-->
                    <el-menu-item index="5-1" @click="df">总结列表</el-menu-item>
                  <!--</el-menu-item-group>-->
                </el-submenu>

                <el-submenu index="6">
                  <template slot="title"><i class="el-icon-message"></i>思想汇报</template>
                  <!--<el-menu-item-group>-->
                    <el-menu-item index="6-1" @click="dg">汇报列表</el-menu-item>
                  <!--</el-menu-item-group>-->
                </el-submenu>

                <el-submenu index="7">
                  <template slot="title"><i class="el-icon-message"></i>新闻管理</template>
                  <!--<el-menu-item-group>-->
                    <el-menu-item index="7-1" @click="dh">添加新闻</el-menu-item>
                    <el-menu-item index="7-2" @click="dj">新闻列表</el-menu-item>
                  <!--</el-menu-item-group>-->
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </div>
        <div class="asideB">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      methods: {
        handleOpen () {
        },
        handleClose () {
        },
        cc () {
          this.$router.push('/index/yong')
        },
        dd () {
          this.$router.push('/index/tieZhi')
        },
        db () {
          this.$router.push('/index/lunbotu')
        },
        dc () {
          this.$router.push('/index/faqipingyi')
        },
        de () {
          this.$router.push('/index/pingyiliebiao')
        },
        df () {
          this.$router.push('/index/zongjie')
        },
        dg () {
          this.$router.push('/index/sixianghuibao')
        },
        dh () {
          this.$router.push('/index/tianjianews')
        },
        dj () {
          this.$router.push('/index/newslist')
        }
      }
    }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .nav{
    width: 100%;
    height: 60px;
    background-color: #20a0ff;
    position: relative;
  }
  .nav img:nth-child(1){
    width: 160px;
    height: 40px;
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .nav img:nth-child(2){
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    right: 20px;
    top: 10px;
  }

  i:nth-child(1){
    position: absolute;
    left: 0;
    top: 21px;
  }
  i:nth-child(2){
    position: absolute;
    right: 0;
    top: 21px;
  }
  /*.el-menu-item-group__title{*/
    /*padding-top: 0;*/
  /*}*/
  /*.nav li.el-menu-item:hover{*/
    /*!*color: white;*!*/
  /*}*/
  #aside{
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }
  #asideA{
    /*height: 100%;*/
    width: 230px;
    /*padding: 10px;*/
    text-align: center;
    background-color: #eef1f6;
  }
  .asideB{
    flex: 1;
    overflow: auto;

  }
  el-menu{
    height: 100%;
  }
  .el-menu .el-submenu{
    position: relative;
  }
  .el-menu .el-submenu i:nth-child(1){
    margin-left: 20px;
  }
  .el-menu .el-submenu i:nth-child(2){
    margin-right: 20px;
  }
</style>
