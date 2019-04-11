//app.js
App({
  globalData: {
    statusBarHeight: 0,
  },
  onLaunch: function() {
    wx.getSystemInfo({
      success: res => {
        this.globalData.statusBarHeight = res.statusBarHeight
      }
    })
  }
})