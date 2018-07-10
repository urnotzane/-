// AUTHOR @ ZANE

Component({
  properties: {
    list: {                 //选项列表
      type: Array,
      value: []
    },
    selectedColor: {        //选中颜色
      type: String,
      value: ''
    }
  },

  data: {
    list: []
  },

  methods: {
    // 点击选中
    _bindSelect: function (e) {
      const index = e.currentTarget.dataset.index
      const title = e.currentTarget.dataset.title
      this.data.list.forEach(item => {
        item.selected = false
      })
      this.data.list[index].selected = !this.data.list[index].selected
      this.setData({ list: this.data.list })
      this.triggerEvent('bindSelect',{title})
    }
  },

  ready: function () {

  }

})