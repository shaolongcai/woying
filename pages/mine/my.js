Page({
  data: {

  },

  //修改
  onclickus: function () {
    wx.navigateTo({
      url: '../mine/callus/call',
    })
  },

  onclickHistory: function () {
    wx.navigateTo({
      url: 'history/history',
    })
  },

  onclickToday:function(){
    wx.navigateTo({
      url: '../mine/orders/order',
    })
  }
  

})