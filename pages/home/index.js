const LIST = [
  {
    title: '导航',
    en: 'Navigator',
    icon: 'zicon_home',
    url: '/pages/example/index?title=导航 Navigator',
  },
  {
    title: '列表',
    en: 'List',
    icon: 'zicon_list',
    url: '/pages/example/index?title=列表 List&type=list',
  },
  {
    title: '卡片',
    en: 'Card',
    icon: 'zicon_card',
    url: '/pages/example/index?title=卡片 Card',
  },
  {
    title: '弹窗',
    en: 'Modal',
    icon: 'zicon_modal',
    url: '/pages/example/index?title=弹窗 Modal&type=modal',
  },
  {
    title: '手风琴',
    en: 'Accordion',
    icon: 'zicon_xiala',
    url: '/pages/example/index?title=手风琴 Accordion',
  },
  {
    title: '宫格',
    en: 'Grid',
    icon: 'zicon_grid',
    url: '/pages/black_example/index?title=宫格 Grid&type=grid&className=bk_light',
  },
  {
    title: '步骤',
    en: 'Stepper',
    icon: 'zicon_stepper',
    url: '/pages/example/index?title=步骤 Stepper&type=stepper',
  },
  {
    title: '按钮',
    en: 'Button',
    icon: 'zicon_button',
    url: '/pages/example/index?title=按钮 Button&type=button',
  },
  {
    title: '徽标',
    en: 'Badge',
    icon: 'zicon_dot',
    url: '/pages/example/index?title=徽标 Badge&type=badge',
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