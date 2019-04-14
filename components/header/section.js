const STATUS_BAR_HEIGHT = getApp().globalData.statusBarHeight * 2

Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true,
  },

  properties: {
    title: {
      type: String,
      value: ''
    },

    url: {
      type: String,
      value: ''
    },

    className: {
      type: String,
      value: ''
    },

    border: {
      type: String,
      value: '',
    }
  },

  data: {
    show: false
  },

  methods: {
    bindShow() {
      this.setData({ show: !this.data.show })
    }
  },

})
