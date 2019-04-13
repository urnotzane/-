const ITEM = {
  title: '',
  icon: '',
  url: '',
}

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
    
    columns: {
      type: Number,
      value: 4
    },

    border: {
      type: Boolean,
      value: true
    },
  },

  data: {
    data: [],
  },

  methods: {
    bindDirect(e) {
      wx.navigateTo({ url: e.currentTarget.dataset.url })
    }
  },

  ready() {
    const { data, columns } = this.properties
    const remainder = data.length % columns

    if(remainder !== 0) {
      for (let i = 0; i < columns - remainder; i++){
        data.push(ITEM)
      }
    }

    this.setData({ data })
  }
})
