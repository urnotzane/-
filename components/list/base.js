const DEFAULT_VALUE = [
  {
    title: '列表名称',
    url: '',
    description: '列表描述'
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
  },

  data: {

  },

  methods: {

  }
})
