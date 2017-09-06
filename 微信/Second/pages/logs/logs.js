//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '逗比',
      success:function(res){

      }
    })

    

    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  onReady:function(){
    wx.hideNavigationBarLoading();
  }
})
