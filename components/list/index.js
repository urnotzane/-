const DEFAULT_VALUE = [
  {
    title: '列表名称',
    description: '列表描述',
    img: '/images/cat.jpg',
    icon: 'zicon_camera',
    iconColor: '#99CC33',
    sideName: '20:02',
    sideValue: '',
    value: '我是列表',
  },
  {
    title: '列表名称',
    description: '列表描述列表描述列表描述列表描述列表描述列表描述列表描述列表描述列表描述列表描述列表描述',
    img: '/images/cat.jpg',
    icon: 'zicon_camera',
    iconColor: '#FF9900',
    sideName: '21:02',
    sideValue: '',
    tags: ['啾啾啾', '萌萌哒', '嘤嘤嘤']
  },
  {
    title: '列表名称',
    description: '列表描述',
    img: '/images/cat.jpg',
    icon: 'zicon_camera',
    iconColor: '#FFCC00',
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
