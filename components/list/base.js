
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
  },

  methods: {
    bindDetail(e) {
      const item = e.currentTarget.dataset.item
      wx.navigateTo({ url: item.url, })
    }
  }
})
