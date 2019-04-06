// AUTHOR @ ZANE

Component({
  properties: {
    days: String,
    hours: String,
    minutes: String,
    seconds: String
  },

  data: {
    timer: null,
    counting: false,
    controlType: '',
    msec: 0,
    againData: {}
  },

  methods: {
    // 开始计时、暂停计时、结束计时
    _conterControl: function (e) {
      this.setData({ controlType: e.currentTarget.dataset.type })
      const _data = this.data
      if (_data.controlType == 'stop') {
        clearInterval(this.data.timer)
        this.setData({
          counting: false,
          days: _data.againData.days,
          hours: _data.againData.hours,
          minutes: _data.againData.minutes,
          seconds: _data.againData.seconds,
          msec: _data.againData.days * 24 * 60 * 60 * 1000 + _data.againData.hours * 60 * 60 * 1000 + _data.againData.minutes * 60 * 1000 + _data.againData.seconds * 1000
        })
        this.triggerEvent('bindCount', { data: this.data })
        return
      } else if (_data.controlType == 'start') {
        this.setData({
          counting: true,
          msec: _data.days * 24 * 60 * 60 * 1000 + _data.hours * 60 * 60 * 1000 + _data.minutes * 60 * 1000 + _data.seconds * 1000,
        })
        this.triggerEvent('bindCount', { data: this.data })
      } else if (_data.controlType == 'pause') {
        clearInterval(this.data.timer)
        this.setData({ counting: false })
        this.triggerEvent('bindCount', { data: this.data })
        return
      }
      this.setData({
        timer: setInterval(() => {
          if (this.data.msec <= 0) {
            clearInterval(this.data.timer)
            this.setData({ counting: false })
            this.triggerEvent('bindCount', { data: this.data })
            return
          }
          let days = (this.data.msec - 100) / 1000 / 60 / 60 / 24
          let hours = Math.abs((parseInt(days) - days)) * 24
          let minutes = Math.abs((parseInt(hours) - hours)) * 60
          let seconds = Math.abs((parseInt(minutes) - minutes)) * 60
          this.setData({
            days: parseInt(days) > 9 ? parseInt(days) : '0' + parseInt(days),
            hours: parseInt(hours) > 9 ? parseInt(hours) : '0' + parseInt(hours),
            minutes: parseInt(minutes) > 9 ? parseInt(minutes) : '0' + parseInt(minutes),
            seconds: parseInt(seconds) > 9 ? parseInt(seconds) : '0' + parseInt(seconds),
            msec: this.data.msec - 100
          })
        }, 100)
      })
    }
  },

  ready: function () {
    this.setData({
      againData: {
        days: this.data.days > 9 ? this.data.days : '0' + this.data.days,
        hours: this.data.hours > 9 ? this.data.hours : '0' + this.data.hours,
        minutes: this.data.minutes > 9 ? this.data.minutes : '0' + this.data.minutes,
        seconds: this.data.seconds > 9 ? this.data.seconds : '0' + this.data.seconds
      },
      days: this.data.days > 9 ? this.data.days : '0' + this.data.days,
      hours: this.data.hours > 9 ? this.data.hours : '0' + this.data.hours,
      minutes: this.data.minutes > 9 ? this.data.minutes : '0' + this.data.minutes,
      seconds: this.data.seconds > 9 ? this.data.seconds : '0' + this.data.seconds,
    })
  }

})