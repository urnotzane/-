const DEFAULT_VALUE = [
  {
    title: '列表名称',
    icon: "icon-menu",
    description: '列表描述',
    url: '',
    img: '/images/rate.png',
    iconColor:'',
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
    }
  },

  data: {

  },

  methods: {

  }
})
