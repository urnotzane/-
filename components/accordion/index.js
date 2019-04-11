const DEFAULT_DATA = {
  title: '数据名',
  enTitle: 'name',
  description: 'description',
  icon: 'icon-menu',
  img: '/images/rate.png'
}

const DEFAULT_COLOR = "#409EFF"

Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true,
  },

  properties: {
    data: {
      type: Object,
      value: DEFAULT_DATA
    },
    iconColor: {
      type: String,
      value: DEFAULT_COLOR
    }
  },

  data: {
    extend: false,
  },

  methods: {
    bindExtend() {
      this.setData({ extend: !this.data.extend })
    }
  },
})