import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 应用初始状态
const state = {
  user: null
}
// 定义所需的mutations
const mutations = {
  login (state, user) {
    state.user = user
    console.log(state.user)
  },
  logout (state) {
    state.user = null
  }
}
// 创建store实例
export default new Vuex.Store({
  state,
  mutations
})
