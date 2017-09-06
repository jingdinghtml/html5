import Vue from 'vue'
import Router from 'vue-router'
// import ElementUI from 'element-ui'
import Home from '../components/Home'
import User from '../components/User'
import HomeA from '../components/HomeA'
import HomeB from '../components/HomeB'
import HomeC from '../components/HomeC'
import HomeD from '../components/HomeD'
import MainHome from '../components/MainHome'
import yonghu from '../components/yonghuLiat/yonghu'
import tieZhiLieBiao from '../components/xiangXILieBiao/tieZhiLieBiao'
import lunBoTu from '../components/xiangXILieBiao/lunBoTu'
import faQiPingYi from '../components/xiangXILieBiao/faQiPingYi'
import pingYILieBiao from '../components/xiangXILieBiao/pingYILieBiao.vue'
import zongJie from '../components/xiangXILieBiao/zongJie.vue'
import siXiangHuiBao from '../components/xiangXILieBiao/siXiangHuiBao.vue'
import newsList from '../components/xiangXILieBiao/newsList.vue'
import tianJiaNews from '../components/xiangXILieBiao/tianJiaNews.vue'
import EditorDemo from '../components/editor/EditorDemo.vue'
import DemocracyUserList from '../components/update/DemocracyUserList.vue'

/* 插件语法 */
// Vue.use(ElementUI)
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/user'
    },
    {
      path: '/index',
      component: MainHome,
      children: [
        // {
        //   path: '',
        //   component: yonghu
        // },
        {
          path: 'yong',
          component: yonghu
        },
        {
          path: 'tieZhi',
          component: tieZhiLieBiao
        },
        {
          path: 'lunbotu',
          component: lunBoTu
        },
        {
          path: 'faqipingyi',
          component: faQiPingYi
        },
        {
          path: 'pingyiliebiao',
          component: pingYILieBiao,
          children: [
            {
              path: 'democracyUserList/:commentId',
              component: DemocracyUserList
            }
          ]
        },
        {
          path: 'zongjie',
          component: zongJie
        },
        {
          path: 'sixianghuibao',
          component: siXiangHuiBao
        },
        {
          path: 'newslist',
          component: newsList
        },
        {
          path: 'tianjianews',
          component: tianJiaNews
        },
        {
          path: 'homea',
          component: HomeA
        }
      ]
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          component: HomeA
        },
        {
          path: 'a',
          component: HomeA
        },
        {
          path: 'c',
          component: HomeC
        },
        {
          path: 'b',
          component: HomeB
        },
        {
          path: 'd',
          component: HomeD
        },
        {
          path: 'e',
          component: EditorDemo
        }
      ]
    },
    {
      path: '/user',
      component: User
    }
  ]
})

