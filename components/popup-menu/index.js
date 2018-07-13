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
    menuHidden: false
  },

  methods: {
    // 菜单隐藏
    _bindHide: function() {
      this.setData({
        menuHidden: true
      })
    }
  },

  ready: function() {
    console.log(this.data)
  }

})