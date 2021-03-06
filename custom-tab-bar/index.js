const TABS = [{
    title: '首页',
    url: '/pages/home/index',
    icon: 'zicon_home'
  },
  {
    title: '关于',
    url: '/pages/my/index',
    icon: 'zicon_user'
  }
]

Component({
  options: {
    addGlobalClass: true,
  },

  data: {
    tabs: TABS,
    active: 0,
  },

  methods: {
    handleTabs(e) {
      const item = e.currentTarget.dataset.item
      const active = e.currentTarget.dataset.index 
      wx.switchTab({ url: item.url, })
    }
  },
})