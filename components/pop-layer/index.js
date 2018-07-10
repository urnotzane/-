Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  properties: {
    estyle: String
  },

  data: {
    show: false,
    left: 0,
    top: 0
  },

  methods: {
    bindHide: function() {
      this.setData({
        show: false
      })
    },
    show: function(id) {
      wx.createSelectorQuery().select(id).boundingClientRect( rect => {
        this.setData({
          show: true,
          left: rect.left + rect.width / 2,
          top: rect.top + rect.height + 8
        })

        setTimeout(() => {
          this.setData({
            show: false
          })
        },2000)
      }).exec()
      
    },
    hide: function() {
      this.setData({
        show: false
      })
    }
  },

  ready: function() {
    console.log(this.data.mask)
  }
  
})
