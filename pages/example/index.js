Page({
  data: {
    title: 'ZANE组件库',
    className: '',
    type: '',
    show: false,
  },

  onLoad: function(options) {
    this.setData({
      title: options.title,
      className: options.className ? options.className : '',
      type: options.type ? options.type : '',
    })
  },

  bindShow() {
    this.setData({ show: true })
  }

})