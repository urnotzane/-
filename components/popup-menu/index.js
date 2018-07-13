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
    // 菜单隐藏
    _bindHide: function() {
      this.setData({
        maskHidden: true
      })
      setTimeout(() => {
        this.setData({
          menuHidden: true
        })
      }, 300)
    },

    // 显示
    _bindShow: function() {
      this.setData({
        maskHidden: false,
        menuHidden: false
      })
    },


    _bindTo: function(e) {
      this._bindHide()
      this.triggerEvent("bindPopMenu", e.currentTarget.dataset.item);
    }
  },

  ready: function() {
    console.log(this.data)
  }

})