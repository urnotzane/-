// pages/example/fold-menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
        icon: 'rate',
        title: '提示',
        hidden: true,
        url: 'pop-toast',
        submenu: [
          // {
          //   icon: '',
          //   title: "个人收益",
          //   url: '跳转地址'
          // },
          // {
          //   icon: '',
          //   title: "订单明细",
          //   url: '跳转地址'
          // },
          // {
          //   icon: '',
          //   title: "运价查询",
          //   url: '跳转地址'
          // },
          // {
          //   icon: '',
          //   title: "搜索客户",
          //   url: '跳转地址'
          // },
          // {
          //   icon: '',
          //   title: "客户列表",
          //   url: '跳转地址'
          // },
          // {
          //   icon: '',
          //   title: "添加客户",
          //   url: '跳转地址'
          // }
        ]
      },
      {
        icon: 'rate',
        title: '组件',
        hidden: true,
        url: '',
        submenu: [{
            icon: '',
            title: "选中列表",
            url: 'select-list'
          },
          {
            icon: '',
            title: "倒计时",
            url: 'count-down'
          },
          {
            icon: '',
            title: "计数器",
            url: 'counter'
          },
          {
            icon: '',
            title: "步骤",
            url: 'steps'
          },
          {
            icon: '',
            title: "表格",
            url: 'table-list'
          },
          {
            icon: '',
            title: "评分",
            url: 'rate'
          },
          {
            icon: '',
            title: "滚动信息",
            url: 'scroll-panel'
          },
          {
            icon: '',
            title: "组件大团圆",
            url: 'all'
          }
        ]
      }
    ],
    height: 0,
    type: '',
    list: [{
        title: '标题',
        desc: '描述特别长描述特别长描述特别长描述特别长描述特别长描述特别长描述特别长描述特别长描述特别长描述特别长'
      },
      {
        title: '标题',
        desc: '描述'
      },
      {
        title: '标题',
        desc: '描述'
      },
      {
        title: '标题',
        desc: '描述'
      },
      {
        title: '标题',
        desc: '描述'
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  // 组件事件触发
  bindGetInfo: function(e) {
    console.log(e.detail)
    if (e.detail.height) {
      this.setData({
        height: e.detail.height
      })
    }
    if (e.detail.url) {
      this.setData({
        type: e.detail.url
      })
    }
  }


})