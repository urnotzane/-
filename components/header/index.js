
Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true,
  },

  properties: {
    title: {
      type: String,
      value: 'ZANE组件库'
    },
    
    url: {
      type: String,
      value: ''
    },

    className: {
      type: String,
      value: ''
    },

    type: {
      type: String,
      value: 'page',
    },

    border: {
      type: Number,
      value: 1,
    }
  },

  data: {
    
  },

  methods: {

  },

})
