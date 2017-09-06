import api from './api'
import axios from 'axios'
axios.defaults.withCredentials = true
var qs = require('qs')
// 登录问题
export const allNewsType = [
  {
    type: 0,
    text: '信工新闻眼'
  },
  {
    'type': 1,
    'text': '特色活动'
  },
  {
    'type': 2,
    'text': '通知早知道'
  },
  {
    'type': 3,
    'text': '党建一点通'
  },
  {
    'type': 4,
    'text': '制度建设'
  },
  {
    'type': 5,
    'text': '党员风采'
  },
  {
    'type': 6,
    'text': '随时随地学'
  },
  {
    'type': 7,
    'text': '随时随地拍'
  },
  {
    'type': 8,
    'text': '政治学习'
  }]
export const login = data => {
  return axios.post(api.login, qs.stringify(data))
}
export const logout = () => {
  return axios.get(api.logout)
}
export const updatePwd = params => {
  return axios.post(api.updatePass, {params: params})
}
export const checkLogin = () => {
  return axios.get(api.checkSession)
}
//
export const uploadFile = formdata => {
  return axios.post(api.uploadFile, formdata)
}
//
// 验证码
export const codeUrl = api.codeUrl
// 新闻列表
export const getNewsList = data => {
  return axios.get(api.newsList, {params: data})
}

export const getNewsInfo = params => {
  return axios.get(api.getNewsInfo, {params: params})
}
export const saveNews = formdata => {
  return axios.post(api.saveNews, formdata)
}
export const updateNews = formdata => {
  return axios.post(api.updateNews, formdata)
}
export const deleteNews = params => {
  return axios.get(api.deleteNews, {params: params})
}
//
export const getForums = data => {
  return axios.get(api.forumList, {params: data})
}
export const getIntegrals = data => {
  return axios.get(api.integralList, {params: data})
}
export const getUserLists = params => {
  return axios.get(api.userList, {params: params})
}
export const getUserDisabled = data => {
  return axios.post(api.userDisabled, createPostParams(data))
}
export const resetPwd = params => {
  return axios.get(api.resetUserPwd, {params: params})
}
export const getIntegralList = params => {
  return axios.get(api.IntegralList, {params: params})
}
//
export const getForumCommentList = params => {
  return axios.get(api.forumCommentList, {params: params})
}
//
// 轮播图操作
export const getCarousels = params => {
  return axios.get(api.getCarousels, {params: params})
}
export const addCarousel = formdata => {
  return axios.post(api.addCarouselList, formdata)
}
export const deleteCarousels = params => {
  return axios.get(api.deleteCarousel, {params: params})
}
export const updateCarousel = params => {
  return axios.get(api.updateCarousel, {params: params})
}
// 获取民主评议
export const getNationComment = params => {
  return axios.get(api.nationComment, {params: params})
}
// 修改民主评议状态
export const changeCommentStatus = data => {
  return axios.get(api.changeCommentStatus, {params: data})
}
//
export const getCommentDetail = params => {
  return axios.get(api.getCommentDetail, {params: params})
}
// 修改评议列表
export const updateComment = data => {
  return axios.post(api.updateComment, data)
}
export const getImpress = params => {
  return axios.get(api.impress, {params: params})
}
export const getReport = params => {
  return axios.get(api.report, {params: params})
}
export const importUsers = formData => {
  return axios.post(api.importUsers, formData)
}
//
// 获取党支部列表
export const getBranchList = params => {
  return axios.get(api.getBranchList, {params: params})
}
export const addComment = data => {
  return axios.post(api.addComment, data)
}
// 心得总结
// 思想汇报列表
export const getReportList = params => {
  return axios.get(api.getReportList, {params: params})
}
// 审核思想报告
export const checkReport = data => {
  return axios.post(api.checkReport, data)
}
//
// /*总结列表*/
export const getImpressList = params => {
  return axios.get(api.getImpressList, {params: params})
}
// /*审核总结*/
export const checkImpress = data => {
  return axios.post(api.checkImpress, data)
}
// /*帖子列表*/
export const getTopicList = params => {
  return axios.get(api.getTopicList, {params: params})
}
export const deleteTopic = params => {
  return axios.get(api.deleteTopic, {params: params})
}
export const getFollowList = params => {
  return axios.get(api.getFollowList, {params: params})
}
export const deleteFollow = params => {
  return axios.get(api.deleteFollow, {params: params})
}

function createPostParams (obj) {
  return qs.stringify(obj)
}
