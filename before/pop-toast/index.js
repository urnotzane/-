// AUTHOR @ ZANE

Component({
  properties: {

  },

  data: {
    isShow: false,
    toastType: {
      type: String,
      value: 'list'         //promot、list、tip
    },
    toastContent: []
  },

  methods: {
    _showToast: function (type, content, duration) {
      this.setData({
        isShow: true,
        toastType: type,
        toastContent: content
      })
      if (this.data.toastType == 'tip') {
        // console.log(1)
        setTimeout(() => {
          this.setData({ isShow: false })
        }, duration = duration ? duration : 1500)
      }
      console.log(this.data.toastType)
    },
    _hideToast: function (e) {
      if (this.data.toastType == 'tip') {
        return
      }
      if (e) {
        if (e.target.id == "toast-area" && this.data.toastType != 'promot') {
          this.setData({ isShow: false })
        }
      }
    },

    _confirmCancel: function (e) {
      if (e.currentTarget.dataset.confirm == "true") {
        this.triggerEvent("confirmCancel", { confirm: true });
        this.setData({ isShow: false })
      } else {
        this.triggerEvent("confirmCancel", { confirm: false });
        this.setData({ isShow: false })
      }
    }
  },

  ready: function () {

  }

})