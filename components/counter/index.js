// AUTHOR @ ZANE

Component({
  properties: {
    counterNum: Number,
    maxNum: Number,
    minNum: Number
  },

  data: {
    counterNum: 0,
    maxNum: 0,              //最低计数
    minNum: 0,              //最大计数
  },

  methods: {

    // 加减
    _countControl: function (e) {
      const controlType = e.currentTarget.dataset.type
      if (this.data.counterNum > this.data.minNum && controlType == "sub") {
        this.setData({ counterNum: this.data.counterNum - 1 })
      } else if (this.data.counterNum < this.data.maxNum && controlType == "add") {
        this.setData({ counterNum: this.data.counterNum + 1 })
      }
      this.triggerEvent('countControl', { data: this.data })
    }
  },

  ready: function () {
    this.setData({ counterNum: this.data.minNum })
  }

})