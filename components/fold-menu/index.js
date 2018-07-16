// AUTHOR @ ZANE

Component({
  properties: {
    tabs: {
      type: Array,
      value: []
    },
  },

  data: {
    screenWidth: 0, // 屏幕高度
    height: 50, // 菜单高度
    submenuLeft: 0, // 子元素左位置
    maskHidden: true, // 遮罩显示与否
  },

  methods: {
    // 菜单点击
    _bindMenu: function(e) {
      const index = e.currentTarget.dataset.index
      const length = this.data.tabs.length
      // console.log(this.data.tabs[index])
      if (this.data.tabs[index].submenu.length > 0) {
        // 如果子菜单已显示则隐藏
        if (!this.data.tabs[index].hidden) {
          this.data.tabs[index].hidden = true
        } else {
          // 如果子菜单未显示，显示子菜单并隐藏其它子菜单
          this.data.tabs.map(item => {
            item.hidden = true
          })
          this.data.tabs[index].hidden = false
        }
        this.setData({
          submenuLeft: index == 0 ? 5 : this.data.screenWidth / length * index,
          tabs: this.data.tabs,
        })
      } else {
        console.log(e.currentTarget.dataset)
        // 如果子菜单未显示，显示子菜单并隐藏其它子菜单
        this.data.tabs.map(item => {
          item.hidden = true
        })
        this.setData({
          tabs: this.data.tabs,
        })
      }
      this.triggerEvent("bindGetInfo", this.data.tabs[index]);
    },

    // 子菜单跳转
    _bindTo: function(e) {
      this.data.tabs.map(item => {
        item.hidden = true
      })
      this.setData({
        tabs: this.data.tabs,
      })
      // wx.redirectTo({
      //   url: 'e.currentTarget.dataset.url',
      // })
      this.triggerEvent("bindGetInfo", e.currentTarget.dataset.item);
    }

  },

  ready: function() {
    wx.getSystemInfo({
      success: res => {
        if (res.model.indexOf("iPhone X") != -1) {
          this.setData({
            height: this.data.height + 30
          })
        }
        this.setData({
          screenWidth: res.screenWidth
        })
      },
    })
    // 设置子菜单隐藏
    this.data.tabs.forEach(item => {
      item.hidden = true
    })
    this.setData({
      tabs: this.data.tabs
    })

    // 兼容iphonex、
    this.triggerEvent("bindGetInfo", {
      height: this.data.height
    });
  }


})