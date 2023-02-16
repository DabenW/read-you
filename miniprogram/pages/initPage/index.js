var app = getApp()

Page({
    // 返回首页
    onClickHome() {
      wx.switchTab({
          url: '../home/home',
      })
    },
})