const DEFAULT_DATA = [
  {
    title: '列表名称',
    description: '列表描述',
    img: '/images/rate.png',
    icon: 'icon-menu',
    iconColor: '#409eff',
    sideName: '22:02',
    sideValue: '',
  }
]

Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true,
  },

  properties: {
    data: {
      type: Array,
      value: DEFAULT_DATA
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
