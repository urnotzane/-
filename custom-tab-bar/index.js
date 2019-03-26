const TABS = [{
    title: '提示组件',
  url: '/pages/my/index',
  },
  {
    title: '交互组件',
    url: '/pages/home/index',
  }
]

Component({
  data: {
    tabs: TABS,
    active: 0,
  },

  methods: {
    handleTabs(e) {
      const item = e.currentTarget.dataset.item
      const active = e.currentTarget.dataset.index
      
      wx.switchTab({
        url: item.url,
      })
    }
  },
})