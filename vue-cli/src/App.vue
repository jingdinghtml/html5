<template>
  <div id="app">
    <router-view></router-view>
    <router-link to="/">登录界面</router-link>
    <router-link to="/home">列表界面</router-link>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
