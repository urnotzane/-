// AUTHOR @ ZANE

Component({
  properties: {
    popMenuList: {
      type: Array,
      value: []
    },
    popMenuHeader: {
      type: Array,
      value: []
    }
  },

  data: {
    maskHidden: true,
    menuHidden: true,
  },

  methods: {

    // 显示
    _bindShowHide: function () {
      if (this.data.maskHidden) {
        this.setData({
          maskHidden: false,
          menuHidden: false
        })
      } else {
        this.setData({
          maskHidden: true
        })
        setTimeout(() => {
          this.setData({
            menuHidden: true
          })
        }, 500)
      }
    },


    _bindTo: function (e) {
      this._bindShowHide()
      this.triggerEvent("bindPopMenu", e.currentTarget.dataset.item);
    }
  },

  ready: function () {
    console.log(this.data)
  }

})