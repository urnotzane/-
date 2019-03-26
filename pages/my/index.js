Page({
  data: {

  },

  onLoad: function(options) {

  },

  onShow: function() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        active: 0
      })
    }
  },


})