/**
 * tab 点击可移动
 */

let start = 0;
let screenW = 0;

Component({

  properties: {
    list: Array,
    itemW: Number,
    active: Number
  },

  data: {
    list: [],
    itemW: 100,
    left: 0,
    active: 0
  },

  methods: {

    bindtouchstart: function(e) {
      start = e.touches[0].pageX
    },

    bindtouchend: function(e) {
      let move = e.changedTouches[0].pageX - start
      let end = this.data.left + move
      let min = screenW - this.data.list.length * this.data.itemW
      
      if (end < 0 && end > min) {
        this.setData({
          left: end
        })
      }
    },
    
    bindtap: function(e) {
      const index = e.currentTarget.dataset.index
      // 设置选中
      this.setData({active: index})
      // 当前的位置如果是位于屏幕的左侧，则不需要移动，否则的话要移动位置
      if (e.detail.x > screenW / 2) {
        let end = screenW / 2 - e.detail.x + this.data.left
        let min = screenW - this.data.list.length * this.data.itemW
      
        if (end > min) {
          this.setData({
            left: end
          })
        } else {
          this.setData({
            left: min
          })
        }
      } else {
        let end = screenW / 2 - e.detail.x + this.data.left
        if (end < 0) {
          this.setData({
            left: end
          })
        } else {
          this.setData({
            left: 0
          })
        }
      }

      this.triggerEvent('tab', index)
    }
  },

  ready: function() {
    // 获取当前窗口的宽度
    wx.getSystemInfo({
      success: res => {
        screenW = res.windowWidth
      }
    })
  }
})
