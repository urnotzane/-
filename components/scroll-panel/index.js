// AUTHOR @ ZANE
let timer = null

Component({
  properties: {
    marqueeSpeed: Number, //速度
    scrollWay: String, //滚动方式：up/down/left/right
    notice: Array, //通知文字
    bkCol: String, //背景颜色
  },

  data: {
    marqueeSpeed: 1,
    top: 25,
    left: 0
  },

  methods: {

  },

  ready: function() {
    clearInterval(timer)
    let query = wx.createSelectorQuery().in(this)
    let screenW = 0
    this.setData({
      top: 25,
      left: 0
    })
    wx.getSystemInfo({
      success: res => {
        screenW = res.windowWidth
      },
    })
    if (this.data.scrollWay == 'left' || this.data.scrollWay == 'right' || this.data.scrollWay == 'up' || this.data.scrollWay == 'down') {
      query.select('.font-area').boundingClientRect(res => {
        // 这个组件内 #the-id 节点的上边界坐标
        console.log(res)
        if (this.data.scrollWay == 'right') {
          this.setData({
            left: -res.width,
          })
        }
        timer = setInterval(() => {
          if (this.data.scrollWay == 'up') {
            if (this.data.top < -res.height - 25) {
              this.setData({
                top: 25
              })
            }
            this.setData({
              top: this.data.top - this.data.marqueeSpeed * 0.5
            })
          } else if (this.data.scrollWay == 'down') {
            if (this.data.top > res.height + 25) {
              this.setData({
                top: res.height + 25
              })
            }
            this.setData({
              top: this.data.top + 1
            })
          } else if (this.data.scrollWay == 'left') {
            // iPhone X设备向左滚动字体会变大
            if (this.data.left < -res.width) {
              this.setData({
                left: screenW,
              })
            }
            this.setData({
              left: this.data.left - this.data.marqueeSpeed,
              top: 0
            })
          } else if (this.data.scrollWay == 'right') {
            if (this.data.left > screenW) {
              this.setData({
                left: 0
              })
            }
            this.setData({
              left: this.data.left + 1,
              top: 0
            })
          }
        }, 50)
      }).exec()
    } else {
      this.setData({
        scrollWay: 'left'
      })
    }


  }

})