import pcas from './pcas.js';

const fiels = ['province', 'city', 'area', 'street']

Component({
  properties: {
    province: String,  // 省
    city: String,      // 市
    area: String,      // 区
    street: String     // 街道
  },

  data: {
    types: ['省', '市', '区', '街道'],
    list: Object.keys(pcas),
    key: 0,
    contentKey: 0,
    province: '广东省',
    city: '深圳市',
    area: '南山区',
    street: '桃园街道'
  },

  methods: {
    onType: function (e) {
      const index = e.currentTarget.dataset.index
      let list = this.data.list
      switch (index) {
        case 0:
          list = Object.keys(pcas)
          break;
        case 1:
          list = Object.keys(pcas[this.data.province])
          break;
        case 2:
          list = Object.keys(pcas[this.data.province][this.data.city])
          break;
      }

      this.setData({
        key: index,
        list
      })
    },
    onSelect: function (e) {
      let key = this.data.key

      const name = e.currentTarget.dataset.item

      const field = fiels[key]

      // 如果key < types.length - 1
      if (key < this.data.types.length - 1) {
        let list = this.data.list
        switch (key) {
          case 0:
            list = Object.keys(pcas[name])
            break;
          case 1:
            list = Object.keys(pcas[this.data.province][name])
            break;
          case 2:
            list = pcas[this.data.province][this.data.city][name]
            break;
        }
        ++key;
        this.resetData(key)
        this.setData({
          [field]: name,
          key,
          list
        })
      } else {
        this.setData({
          street: name
        })
        let address = this.data.province + "" + this.data.city + "" + this.data.area + "" + this.data.street
        wx.showToast({
          icon: 'none',
          title: address
        })
      }
    },

    resetData: function (key) {
      let leaveArr = fiels.slice(key)
      leaveArr.forEach(item => {
        this.data[item] = ""
      })

      this.setData({
        contentKey: key
      })
    }
  },

  ready: function () {
    console.log(pcas)
  }


})
