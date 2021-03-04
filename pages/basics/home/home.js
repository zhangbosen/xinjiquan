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
    ],
    msgs: [
      {
        id: 1,
        avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1686747870,3612891527&fm=11&gp=0.jpg',
        name: '张三',
        time: '刚刚',
        textCon: '今天心情不错',
        flag: false
      },
      {
        id: 2,
        avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1686747870,3612891527&fm=11&gp=0.jpg',
        name: '张三',
        time: '刚刚',
        textCon: '急需大车司机一名, 有意请联系 18287653456',
        pics: [
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2972603583,638540490&fm=26&gp=0.jpg'
        ],
        flag: false
      },
      {
        id: 3,
        avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2968093113,1433777138&fm=26&gp=0.jpg',
        name: '刘能',
        time: '三分钟前',
        textCon: '老老老老~四, 玉田又欺负我家刘英了',
        pics: [
          'https://pic.rmb.bdstatic.com/8bd896d48c8de43197af1dc001ab5890.jpeg',
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2972603583,638540490&fm=26&gp=0.jpg'
        ],
        flag: false
      },
      {
        id: 4, 
        avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F8562795436%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616747050&t=a25cdc2735faa616214234e7c2e04f08',
        name: '赵四',
        time: '五分钟前',
        textCon: '亲家, 去打谢广坤啊',
        pics: [
          'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/baike/pic/item/503d269759ee3d6d4fdbbe834d166d224f4ade5c.jpg',
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1557383261,2003634214&fm=26&gp=0.jpg',
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2972603583,638540490&fm=26&gp=0.jpg'
        ],
        flag: false
      },
      {
        id: 5,
        avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201407%2F26%2F20140726212013_KceWJ.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616747127&t=35975494e5c789a8255761de24f6dc02',
        name: '广坤',
        time: '一小时前',
        textCon: '刘能太tm欠了',
        pics: [
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2972603583,638540490&fm=26&gp=0.jpg',
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1557383261,2003634214&fm=26&gp=0.jpg',
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1557383261,2003634214&fm=26&gp=0.jpg',
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2972603583,638540490&fm=26&gp=0.jpg'
        ],
        flag: false
      }
    ],
  },
  methods: {
    tabSelect(e) {
      this.setData({
        TabCur: e.currentTarget.dataset.id,
        scrollLeft: (e.currentTarget.dataset.id-1)*60
      })
    },
    // 右下角按钮
    callPubFn(e) {
      let v = e.currentTarget.dataset.item;
      
      this.setData({
        msgs: this.data.msgs.map(item => {
          
          if(item.id === v.id) {
            item.flag = !item.flag;
          }else {
            item.flag = false;
          }
          return item;
        })
      }) 

    },
    // 全局滚动
    scrollFn() {
      this.setData({
        msgs: this.data.msgs.map(item => {
          item.flag = false;
          return item;
        })
      })
    }
    
  }
})