const app = getApp()

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
    }
  },

  data: {
    statusBarHeight: app.globalData.statusBarHeight * 2
  },

  methods: {
    bindBack() {
      wx.navigateBack()
    }
  },
})
