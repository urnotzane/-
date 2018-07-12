// pages/example/fold-menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
        icon: 'rate',
        title: '业务端',
        hidden: true,
        url: '业务端跳转地址',
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
        title: '拖车端',
        hidden: true,
        url: '',
        submenu: [{
            icon: '',
            title: "对账单",
            url: '跳转地址'
          },
          {
            icon: '',
            title: "申请借款",
            url: '跳转地址'
          },
          {
            icon: '',
            title: "历史运单",
            url: '跳转地址'
          },
          {
            icon: '',
            title: "已接运单",
            url: '跳转地址'
          },
          {
            icon: '',
            title: "待接运单",
            url: '跳转地址'
          }
        ]
      },
      {
        icon: '',
        title: '平台端',
        hidden: true,
        url: '',
        submenu: [{
            icon: '',
            title: "个人收益",
            url: '跳转地址'
          },
          {
            icon: '',
            title: "订单明细",
            url: '跳转地址'
          },
          {
            icon: '',
            title: "运价查询",
            url: '跳转地址'
          },
          {
            icon: '',
            title: "搜索客户",
            url: '跳转地址'
          },
          {
            icon: '',
            title: "客户列表",
            url: '跳转地址'
          },
          {
            icon: '',
            title: "添加客户",
            url: '跳转地址'
          }
        ]
      },
      {
        icon: '',
        title: '我的',
        hidden: true,
        url: '',
        submenu: [{
            icon: '',
            title: "用户协议",
            url: '跳转地址'
          },
          {
            icon: '',
            title: "推荐给朋友",
            url: '跳转地址'
          },
          {
            icon: '',
            title: "密码修改",
            url: '跳转地址'
          },
          {
            icon: '',
            title: "我的车辆",
            url: '跳转地址'
          },
          {
            icon: '',
            title: "个人信息",
            url: '跳转地址'
          }
        ]
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },


})