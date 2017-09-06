// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import store from '../store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import locale from 'element-ui/lib/locale/lang/en'
import {checkLogin} from './config/index'
// import * as api from './config/api'
// Vue.prototype.$api = api
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  created () {
    checkLogin().then(function (res) {
      if (res.data && res.data.code === 1) {
        store.commit('login', true)
      } else {
        router.push('/user')
      }
    })
  },
  //
  template: '<App/>',
  components: { App }
})

axios.interceptors.response.use(function (res) {
  if (res.data && res.data.code === 2) {
    App.$alert('登录超时', '提示', {
      confirmButtonText: '确定',
      type: 'waring',
      closeOnClickModel: false
      // callback: action => {
      //   router.push('/login')
      // }
    })
  }
  return res
}, function (err) {
  return Promise.reject(err)
})

router.beforeEach((to, from, next) => {
  if (to.path === '/user') {
    next()
  } else {
    if (!store.state.user) {
      next({path: '/user'})
    } else {
      next()
    }
  }
})
