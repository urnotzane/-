// AUTHOR @ ZANE

Component({
  properties: {
    marqueeSpeed: Number,            //速度
    scrollWay: String,               //滚动方式：up/down/left/right
    notice: Array,                   //通知文字
    bkCol: String,                   //背景颜色
  },

  data: {
    marqueeHeight: 0,            //top
    marqueeWidth: 0,             //left
    marqueeSpeed: 1,
    top: 25,
    left: 0
  },

  methods: {
    
  },

  ready: function () {
    let query = wx.createSelectorQuery().in(this)
    if (this.data.marqueeSpeed > 6 || this.data.marqueeSpeed <= 0) {
      this.setData({ marqueeSpeed: 2 })
    } else {
      this.setData({ marqueeSpeed: 2 })
    }
    if (this.data.scrollWay == 'left' || this.data.scrollWay == 'right' || this.data.scrollWay == 'up' || this.data.scrollWay == 'down') {
      query.select('.font-area').boundingClientRect(res => {
        // 这个组件内 #the-id 节点的上边界坐标
        console.log(res)
        this.setData({
          marqueeHeight: res.height,          //8/25
          marqueeWidth: res.width,
          marqueeSpeed: this.data.scrollWay == 'left' || 'right' ? parseInt(res.width / this.data.marqueeSpeed / 13) : parseIntres.height / this.data.marqueeSpeed / 13,
        })
        // setInterval(() => {
        //   if (this.data.scrollWay == 'up') {
        //     if (this.data.top < -res.height - 25) {
        //       this.setData({ top: 25 })
        //     }
        //     this.setData({ top: this.data.top - 1 })
        //   } else if (this.data.scrollWay == 'down') {
        //     if (this.data.top > res.height + 25) {
        //       this.setData({ top: res.height + 25})
        //     }
        //     this.setData({ top: this.data.top + 1 })
        //   } else if (this.data.scrollWay == 'left') {
        //     if (this.data.left > res.width) {
        //       this.setData({ left: res.width })
        //     }
        //     this.setData({ left: this.data.left - 1 })
        //   } else if (this.data.scrollWay == 'right') {
        //     if (this.data.left < -res.width) {
        //       this.setData({ left: -res.width})
        //     }
        //     this.setData({ left: this.data.left + 1 })
        //   }
        // }, 100)
      }).exec()
    } else {
      this.setData({ scrollWay: 'left' })
      query.select('.font-area').boundingClientRect(res => {
        // 这个组件内 #the-id 节点的上边界坐标
        console.log(res)
        this.setData({
          marqueeHeight: res.height,          //8/25
          marqueeWidth: res.width,
          marqueeSpeed: this.data.scrollWay == 'left' || 'right' ? parseInt(res.width / this.data.marqueeSpeed / 13) : parseIntres.height / this.data.marqueeSpeed / 13,
        })
      }).exec()
    }


  }

})