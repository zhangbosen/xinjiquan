const app = getApp();
Page({
  data: {
    day_sels: [],
    tempData: [], // day_sels的copy(用来存储中间值)
   
  },
  onLoad(options) {
    this.onQuery()
  },
  // 初始化数据（在数据库中没有数据或者查询失败时执行）
  initDay() {
    var i, resArr = [], itemArr;
    for (i = 0; i < 24; i++) {
      itemArr = [];
      resArr.push(itemArr)
    }
    this.setData({
      day_sels: resArr
    })

  },
  // 查询数据库
  onQuery() {
    const db = wx.cloud.database();
    db.collection('times').get().then(res => {
      console.log("*** 查询到的数据： ", res)
      let resD = res.data.data || [];
      if(resD.length === 0) { // 数据库中没有数据时， 初始化
        this.initDay();
      }else {  // 数据库中有数据
        this.setData({
          day_sels: resD
        })
      }
      // 拷贝原始数据（用来存储中间值）
      this.data.tempData = JSON.parse(JSON.stringify(this.data.day_sels));
      
    }).catch(err => {
      console.log("*** 查询时间设置失败: ", err)
      this.initDay();
      // 拷贝原始数据（用来存储中间值）
      this.data.tempData = JSON.parse(JSON.stringify(this.data.day_sels));
    })
  
    
  
  },
  // 修改数据库
  onModify() {
    const db = wx.cloud.database();
    db.collection('times').add({
      data: {
        data: this.data.tempData
      }
    }).then(res => {
      console.log("*** 设置结果: ", res)
      wx.showToast({
        title: '设置成功',
        success() {
          setTimeout(() => {
            wx.navigateBack();
          }, 1500)
          
        }
      })
    }).catch(err => {
      console.log("*** 设置失败: ", err)
      wx.showToast({
        icon: 'none',
        title: '设置失败'
      })
    })

  },
  getChange(v) {
    let val = v.detail;
    // console.log("*** val: ", val)
    // 找到变化的数据并修改
    let tempData = this.data.tempData;
    let resData = tempData.map((item, idx) => {
      if(idx === val[0]) {
        item = val[1]
      }
      return item;
    })
    this.data.tempData = resData;
    
  },
  confirm() {
    this.onModify();
  }

});
