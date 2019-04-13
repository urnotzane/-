const CLASS_NAMES = [
  'bk_red white_color',
  'bk_orange white_color',
  'bk_green white_color',
  'bk_cyan white_color',
  'bk_blue white_color',
  'bk_night_call white_color',
  'bk_north_miracle white_color',
  'bk_dark white_color',
  'bk_gagarin white_color',
]

Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true,
  },

  properties: {
    data: {
      type: Array,
      value: []
    }
  },

  data: {
    classNames: CLASS_NAMES,
  },

  methods: {
    bindDirect(e) {
      wx.navigateTo({ url: e.currentTarget.dataset.url })
    }
  },

  ready() {
    const multiple = this.properties.data.length / CLASS_NAMES.length
    let newClassNames = []

    for (let i = 0; i < Math.ceil(multiple); i++) {
      newClassNames = newClassNames.concat(CLASS_NAMES)
    }

    this.setData({ classNames: newClassNames })

  }
})
