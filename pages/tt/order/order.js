const app = getApp();
Page({
  data: {
    list: [],
    colors: ['red', 'orange', 'yellow', 'olive', 'green','cyan', 'blue', 'purple', 'mauve', 'pink']
  },
  onLoad(options) {
    this.onQuery();
  },
  // 查询数据库
  onQuery() {
    const db = wx.cloud.database();
    let flag = app.globalData.isAdmin; // 是否是管理员(刘涛)
  
    if(flag) { // 如果是管理员(刘涛), 则查询所有记录
      db.collection('orders').get().then(res => {
        this.fixData(res);
      })
    }else { // 如果不是管理员， 则查询自己的
      db.collection('orders').where({
        _openid: app.globalData.openid,
      }).get().then(res => {
        this.fixData(res)
      })
    }
  
  },
  // 处理收到后的数据库数据
  fixData(res) {
    let resD = (res.data).map(item => {
      item.addr = item.region.join('');
      item.color = this.data.colors[this.random(0, 9)]
      return item;
    });
    this.setData({
      list: resD
    })

  },
  // 产生一个min到max的随机整数
  random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

});
