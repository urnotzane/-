const BK_NAMES = ['bk_stick_green', 'bk_stick_orange','bk_stick_yellow']

Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true,
  },
  
  properties: {
    data: {
      type: Array,
      value: []
    },
  },

  data: {
    checked: false,
    bkNames: BK_NAMES,
  },

  methods: {
    bindDetail(e) {
      const item = e.currentTarget.dataset.item
      wx.navigateTo({ url: item.url, })
    }
  },

  ready() {
    
  }
})
