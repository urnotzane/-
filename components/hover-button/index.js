// 因为 properties 会自动绑定到 组件的data，所以将初始化的值存储起来
let right = 0;  
let bottom = 0;

// 用于页面下方的按钮，增加拖拽移动效果，避免对下方内容区域造成掩盖
Component({

  properties: {
    right: Number,
    bottom: Number
  },

  methods: {
    onMove: function (e) {
      wx.getSystemInfo({
        success: res => {

          const screenW = res.windowWidth
          const screenH = res.windowHeight

          const moveL = Math.abs(screenW - e.touches[0].pageX - 25)
          const moveT = Math.abs(screenH - e.touches[0].pageY - 25)

          this.setData({
            right: moveL,
            bottom: moveT
          })
        }
      })
    },
    onTap: function (e) {
      this.triggerEvent('myevent', "1", "2")
    },
    onEnd: function(e) {
      this.setData({
        right,
        bottom
      })
    }
  },

  ready: function () {
    right = this.properties.right
    bottom = this.properties.bottom
  }
})
