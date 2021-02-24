Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    TabCur: 0,
    scrollLeft: 0,
    tags: [
      {
        id: 0,
        name: '全部'
      },
      {
        id: 1,
        name: '招聘'
      },
      {
        id: 2,
        name: '租房'
      },
      {
        id: 3,
        name: '二手'
      },
      {
        id: 4,
        name: '服务'
      },
      {
        id: 5,
        name: '休闲'
      },
      {
        id: 6,
        name: '热点'
      },
    ]
  },
  methods: {
    tabSelect(e) {
      this.setData({
        TabCur: e.currentTarget.dataset.id,
        scrollLeft: (e.currentTarget.dataset.id-1)*60
      })
    }
    
  }
})