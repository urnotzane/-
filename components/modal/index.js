
Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true,
  },

  properties: {
    type: {
      type: String,
      value: 'base',
    },

    title: {
      type: String,
      value: ''
    },

    text: {
      type: String,
      value: ''
    },

    footer: {
      type: Boolean,
      value: true,
    },

    cancel: {
      type: Boolean,
      value: true,
    },

    show: {
      type: Boolean,
      value: false
    },
  },

  data: {

  },

  methods: {

  },

  ready() {
    console.log(this.properties)
  }
})
