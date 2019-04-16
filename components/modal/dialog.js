// components/modal/custom.js
Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true,
  },

  properties: {
    title:{
      type: String,
      value: '弹窗'
    },

    text: {
      type: String,
      value: '弹窗内容'
    },

    footer: {
      type: Boolean,
      value: true,
    },

    cancel: {
      type: Boolean,
      value: true,
    },

    show: {
      type: Boolean,
      value: false
    },
  },

  data: {
    show: false,
  },
 
  methods: {
    bindHide() {
      this.setData({ show: false })
    }
  },

  ready() {
    console.log(this.properties)
  }
})
