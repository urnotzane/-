// pages/example/fold-menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
        icon: 'caidan',
        tabTitle: '提示',
        url: 'pop-toast',
        submenu: []
      },
      {
        icon: 'caidan',
        tabTitle: '组件',
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
            title: "右侧弹出菜单",
            url: 'popup-menu'
          }, 
          {
            icon: '',
            title: "可拖拽悬浮按钮",
            url: 'suspend-button'
          },
          {
            icon: '',
            title: "组件大团圆",
            url: 'all'
          }
        ]
      }
    ],
    popMenuHeader: ['caidan', '菜单'],
    popMenuList: [{
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
        title: "右侧弹出菜单",
        url: 'popup-menu'
      },
      {
        icon: '',
        title: "组件大团圆",
        url: 'all'
      },
      {
        icon: '',
        title: "可拖拽悬浮按钮",
        url: 'suspend-button'
      }
    ],
    height: 0,
    type: 'all',
    toastList: [
      'promot',
      'list',
      'tip'
    ],
    tableList: [{
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
    notice: [
      '庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废具兴。',
      '乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上。属予作文以记之。',
      '予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯；朝晖夕阴，气象万千。',
      '此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？'
    ],
    selectList: [{
        title: '樱桃'
      },
      {
        title: '芒果'
      },
      {
        title: '橙子'
      },
      {
        title: '全是我的最爱'
      }
    ],
    selectList2: [{
        title: '樱桃'
      },
      {
        title: '芒果'
      },
      {
        title: '橙子'
      },
      {
        title: '全是我的最爱'
      }
    ],
    selectedColor: '#5083ee',
    stepsData: [{
        title: '第一步',
        desc: '第一步的描述第一步的描述第一步的描述第一步的描述第一步的描述'
      },
      {
        title: '第二步',
        desc: '第二步的描述第二步的描述第二步的描述第二步的描述第二步的描述'
      },
      {
        title: '第三步',
        desc: '第三步的描述'
      },
      {
        title: '第四步',
        desc: '第四步的描述'
      },
      {
        title: '第五步',
        desc: '第五步的描述'
      },
    ],
    isDone: 3,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  // 点击复制
  bindCopy: function() {
    this.popToast = this.selectComponent("#popToast");
    wx.setClipboardData({
      data: 'https://github.com/urnotzane/miniProgramComponents',
      success: res => {
        console.log('复制成功')
      }
    })
  },

  // 底部菜单
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
    if (e.detail.title) {
      wx.setNavigationBarTitle({
        title: e.detail.title,
      })
    }
    if (e.detail.submenu && e.detail.submenu.length <= 0) {
      wx.setNavigationBarTitle({
        title: e.detail.tabTitle,
      })
    }
  },

  // 右侧弹出菜单
  bindPopMenu: function(e) {
    console.log(e.detail)
    this.setData({
      type: e.detail.url
    })
    wx.setNavigationBarTitle({
      title: e.detail.title,
    })
  },

  // 倒计时
  bindCount: function(e) {
    console.log(e.detail)
  },

  // 计数器
  countControl: function(e) {
    console.log(e.detail)
  },

  // 弹窗poptoast
  bindPopWindow: function(e) {
    this.popToast = this.selectComponent("#popToast");
    const type = e.currentTarget.dataset.type
    const arr = [{
      value: '这个信息提示是一个数组！'
    }, {
      name: '标题',
      value: '内容'
    }]
    //type=list，仅调用show函数
    this.popToast._showToast(type, arr);
  },

  confirmCancel: function(e) {
    console.log(e.detail)
  },

  // 评分rate
  goodTap: function(e) {
    console.log(e.detail)
  },

  // 选中select
  bindSelect: function(e) {
    console.log(e.detail)
  },






})