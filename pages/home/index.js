const LIST = [
  {
    name: '导航',
    enName: 'Navgator',
    // description: '列表数据',
    // icon: 'icon-menu',
  },
  {
    name: '列表',
    enName: 'List',
    description: '列表数据',
    // icon: 'icon-menu',
    img: '/images/rate.png',
    detailList: [
      {
        title: '基础列表',
        description: '/page/my/index',
      },
      {
        title: '描述列表',
        description: '/page/my/index'
      },
      {
        title: '消息列表',
        description: '/page/my/index'
      },
    ]
  },
  {
    name: '卡片',
    enName: 'Card',
    // description: '列表数据',
    icon: 'icon-menu',
    img: '/images/rate.png'
  },
  {
    name: '弹窗',
    enName: 'Modal',
    description: '列表数据列表数据列表数据列表数据列表数据列表数据列表数据列表数据',
    icon: 'icon-menu',
  },
  {
    name: '手风琴',
    enName: 'Accordion',
    description: '基础手风琴、扩展手风琴',
    icon: 'icon-menu',
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