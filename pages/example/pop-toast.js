// pages/example/pop-toast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      'promot',
      'list',
      'tip'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //弹窗
  bindPopWindow: function (e) {
    this.popToast = this.selectComponent("#popToast");
    const type = e.currentTarget.dataset.type
    const arr = [{ value: '你是谁爱人如果人抢人头at 人让她热？' }, { name: '我的老家', value: '就住在这个屯儿' }]
    //type=list，仅调用show函数
    this.popToast._showToast(type, arr);
  },

  confirmCancel: function (e) {
    console.log(e.detail)
  }

})