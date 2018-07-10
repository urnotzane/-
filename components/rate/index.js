// AUTHOR @ ZANE

Component({
  properties: {
    rate: Array,
    starNum: {
      type: Number,
      value: 5
    },
    goodNum: Number,
    readOnly: String
  },

  data: {
    rate: [],
    starNum: 5,                 //星星个数
    goodNum: 0,                 //好评个数
    readOnly: '',          //只读
  },

  methods: {
    _goodTap: function (e) {
      if (this.data.readOnly == 'false') {
        this.data.goodNum = e.currentTarget.dataset.index + 1
        this.setLight()
      }
      this.triggerEvent("goodTap", { data: this.data });
    },

    setLight: function () {
      this.setData({ rate: [] })
      for (let i = 0; i < this.data.starNum; i++) {
        if (i < this.data.goodNum) {
          this.data.rate.push(true)
        } else {
          this.data.rate.push(false)
        }
      }
      this.setData({ rate: this.data.rate })
    }

  },

  ready: function () {
    this.setLight()
  }

})