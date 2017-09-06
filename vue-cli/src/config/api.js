let base = 'http://192.168.1.110:8081/hhdj'

export default {
  // 登录
  login: `${base}/login/login.do`,
  // 登出
  logout: `${base}/login/logout.do`,
  // 更改密码
  updatePass: `${base}/login/updatePwd.do`,
  // 检查登录状态
  checkSession: `${base}/login/checkSession.do`,
  // 验证码
  codeUrl: `${base}/validatecode.jsp`,
  // 上传图片
  uploadImage: `${base}/image/upload.do`,
  // 上传文件
  uploadFile: `${base}/image/upload.do`,
  // 党支部列表
  getBranchList: `${base}/branch/findAll.do`,
  //
  // 民主评议
  addComment: `${base}/nationComment/addComment.do`,
  // 新闻列表
  newsList: `${base}/news/newsList.do`,
  saveNews: `${base}/news/save.do`,
  updateNews: `${base}/news/update.do`,
  deleteNews: `${base}/news/delete.do`,
  getNewsInfo: `${base}/news/newContent.do`,
  // 新闻操作

  forumList: `${base}/forum/forumList.do`,
  integralList: `${base}/integral/integralList.do`,
  // 用户列表
  userList: `${base}/user/userList.do`,
  userDisabled: `${base}/user/isDisable.do`,
  resetUserPwd: `${base}/user/resetPwd.do`,
  IntegralList: `${base}/integral/integralList.do`,
  // 党员互动
  getTopicList: `${base}/forum/forumList.do`,
  getFollowList: `${base}/forum/forumCommentList.do`,
  deleteTopic: `${base}/forum/deleteForum.do`,
  deleteFollow: `${base}/forum/deleteComment.do`,
  // 轮播图列表
  getCarousels: `${base}/carousel/carouselList.do`,
  deleteCarousel: `${base}/carousel/delCarousel.do`,
  updateCarousel: `${base}/carousel/modifyCarousel.do`,
  addCarouselList: `${base}/carousel/addCarousel.do`,
  // 民主评议
  nationComment: `${base}/nationComment/nationCommentList.do`,
  // 民主评议状态修改
  changeCommentStatus: `${base}/nationComment/modifyStatus.do`,
  // 修改民主列表
  updateComment: `${base}/nationComment/modifyComment.do`,
  //
  getCommentDetail: `${base}/nationComment/commentDetail.do`,
  //
  // 心得总结
  getImpressList: `${base}/impress/impressList.do`,
  checkImpress: `${base}/impress/checked.do`,
  //
  checkReport: `${base}/report/checked.do`,
  // 思想汇报
  getReportList: `${base}/report/reportList.do`,

  impress: `${base}/impress/impressList.do`,
  report: `${base}/report/reportList.do`,
  importUsers: `${base}/user/importExcel.do`
}

