Page({
  data: {
    title: 'ZANE组件库',
    className: '',
    type: '',
  },

  onLoad: function(options) {
    this.setData({
      title: options.title,
      className: options.className ? options.className : '',
      type: options.type ? options.type : '',
    })
  },

})