const DEFAULT_DATA = [
  {
    title: '列表名称',
    value: '列表数据',
    url: '',
    icon: 'icon-list',
    image: '/images/rate.png',
    iconColor: '#409eff',
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
      value: DEFAULT_DATA
    },
  },

  data: {

  },

  methods: {
    bindDetail(e) {
      const item = e.currentTarget.dataset.item
      wx.navigateTo({ url: item.url, })
    }
  }
})
