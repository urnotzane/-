const DEFAULT_VALUE = [
  {
    title: '列表名称',
    description: '列表描述',
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
