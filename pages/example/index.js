Page({
  data: {
    title: 'ZANE组件库',
    className: '',
  },

  onLoad: function(options) {
    this.setData({
      title: options.title,
      className: options.className ? options.className : ''
    })
  },

})