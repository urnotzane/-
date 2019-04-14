const DEFAULT_VALUE = [
  {
    title: '列表名称',
    description: '列表描述',
    img: '/images/cat.jpg',
    icon: 'zicon_list',
    iconColor: '#409eff',
    sideName: '22:02',
    sideValue: '',
    value: '我是列表',
  },
  {
    title: '列表名称',
    description: '列表描述',
    img: '/images/cat.jpg',
    icon: 'zicon_list',
    iconColor: '#409eff',
    sideName: '22:02',
    sideValue: '',
    value: '我是列表',
  },
  {
    title: '列表名称',
    description: '列表描述',
    img: '/images/cat.jpg',
    icon: 'zicon_list',
    iconColor: '#409eff',
    sideName: '22:02',
    sideValue: '',
    action: true,
  },
]

Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true,
  },

  properties: {
    data: {
      type: Array,
      value: DEFAULT_VALUE
    },
    type: {
      type: String,
      value: 'base'
    },
    avatarMode: { 
      type: String,
      value: ''
    }
  },

  data: {

  },

  methods: {

  }
})
