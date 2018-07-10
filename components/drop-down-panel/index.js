// AUTHOR @ ZANE

Component({
  properties: {
    list: {
      type: Array,
      value: [
        {
          OrderNo: 'D201805-0162',
          OrderDate: '2018-05-04',
          CustomerName: '华得顺',
          Profit: 2594,
          hidden: false,
          icon: 'down',
          OrderCost: [
            {
              CostitemName: '报关费',
              Amount: 200,
              CostType: 1,
            }, {
              CostitemName: '港建费',
              Amount: 74,
              CostType: 1,
            }
          ]
        },
        {
          OrderNo: 'D201805-0162',
          OrderDate: '2018-05-04',
          CustomerName: '华得顺',
          Profit: 2594,
          hidden: false,
          icon: 'down',
          OrderCost: [
            {
              CostitemName: '报关费',
              Amount: 200,
              CostType: 1,
            }, {
              CostitemName: '港建费',
              Amount: 74,
              CostType: 1,
            }
          ]
        }
      ]
    }
  },

  data: {

  },

  methods: {


  },

  ready: function () {

  }

})