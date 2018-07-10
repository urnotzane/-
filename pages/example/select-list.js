// pages/example/select-list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { title: '樱桃' },
      { title: '芒果' },
      { title: '橙子' },
      { title: '全是我的最爱' }
    ],
    list2: [
      { title: '樱桃' },
      { title: '芒果' },
      { title: '橙子' },
      { title: '全是我的最爱' }
    ],
    selectedColor: '#5083ee'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //点击触发事件
  bindSelect: function (e) {
    console.log(e.detail)
  }
})