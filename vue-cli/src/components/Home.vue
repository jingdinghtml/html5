<template>
    <div>
      <header class="home-header">
        <router-link to="/home/a">新闻列表</router-link>
        <router-link to="/home/b">党员云互动列表</router-link>
        <router-link to="/home/c">积分列表</router-link>
        <router-link to="/home/d">积分</router-link>
        <router-link to="/home/e">editor</router-link>
      </header>
      <router-view></router-view>
    </div>
</template>

<script>
    export default{}
</script>

<style lang="less">
  @import '../home.less';
</style>
