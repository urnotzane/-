const DEFAULT_DATA = [
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
    url: '/pages/example/index?title=弹窗 Modal',
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
    icon: 'zicon_xiala',
    url: '/pages/black_example/index?title=宫格 Grid&type=grid&className=bk_light',
  },
  {
    title: '步骤',
    en: 'Stepper',
    icon: 'zicon_xiala',
    url: '/pages/example/index?title=步骤 Stepper&type=stepper',
  },
  {
    title: '按钮',
    en: 'Button',
    icon: 'zicon_xiala',
    url: '/pages/example/index?title=按钮 Button&type=button',
  },
  {
    title: '徽标',
    en: 'Badge',
    icon: 'zicon_xiala',
    url: '/pages/example/index?title=徽标 Badge&type=badge',
  },
]

Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true,
  },

  properties: {
    type: {
      type: String,
      value: ''
    },

    data: {
      type: Array,
      value: DEFAULT_DATA
    },

    columns: {
      type: Number,
      value: 4
    },

    border: {
      type: Boolean,
      value: true
    },
  },

  data: {

  },

  methods: {

  }
})