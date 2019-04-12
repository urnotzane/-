const STATUS_BAR_HEIGHT = getApp().globalData.statusBarHeight * 2

Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true,
  },

  properties: {
    title: {
      type: String,
      value: 'ZANE组件库'
    },
    
    url: {
      type: String,
      value: ''
    },

    className: {
      type: String,
      value: ''
    }
  },

  data: {
    statusBarHeight: STATUS_BAR_HEIGHT,
  },

  methods: {
    bindBack() {
      wx.navigateBack()
    }
  },

})
