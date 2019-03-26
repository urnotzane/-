
Page({
  data: {

  },
  onLoad: function (options) {

  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        active: 1
      })
    }
  },


})