const LIST = [
  {
    title: '导航 Navgator',
    icon: 'zicon_home',
    url: '/pages/example/index?title=导航 Navgator',
  },
  {
    title: '列表 List',
    icon: 'zicon_list',
    url: '/pages/example/index?title=列表 List',
  },
  {
    title: '卡片 Card',
    icon: 'zicon_card',
    url: '/pages/example/index?title=卡片 Card',
  },
  {
    title: '弹窗 Modal',
    icon: 'zicon_modal',
    url: '/pages/example/index?title=弹窗 Modal',
  },
  {
    title: '手风琴 Accordion',
    icon: 'zicon_xiala',
    url: '/pages/example/index?title=手风琴 Accordion',
  },
]

Page({
  data: {
    list: LIST
  },
  onLoad: function (options) {
    
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ active: 0 })
    }
  },


})