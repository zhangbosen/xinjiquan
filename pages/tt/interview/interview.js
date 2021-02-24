const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    name: '',
    index: null,
    picker: ['男', '女'],
    region: ['浙江省', '宁波市', '宁海县'],
    time: '13:00',
    date: '2020-10-15',
    comment: ''
  },
  nameInput(e) {
    this.setData({
      name: e.detail.value
    })
  },
  PickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  RegionChange: function(e) {
    this.setData({
      region: e.detail.value
    })
  },
  TimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  commentInput(e) {
    this.setData({
      comment: e.detail.value
    })
  },
  submit() {
    // 0. 校验
    let {name, index, region, date, time, comment} = this.data;
    let msg = null;
    if(!time) {
      msg = '请选择预约时间';
    }
    if(!date) {
      msg = '请选择预约日期';
    }
    if(!region[2]) {
      msg = '请告知我们您来自哪里!';
    }
    if(!index) {
      msg = '请选择您的性别!';
    }
    if(!name.trim()) {
      msg = '请输入您的名字!';
    }
    if(msg) {
      wx.showToast({
        title: msg,
        icon: 'none',
        mask: true
      })
      return;
    }

    // 1. 校验通过
    this.onAdd()


  },
  onAdd() {
    let {name, index, region, date, time, comment, picker} = this.data;
    const db = wx.cloud.database();
    db.collection('orders').add({
      data: {
        name,
        sex: picker[index],
        region,
        date,
        time,
        comment
      }
    }).then(res => {
      wx.showToast({
        title: '预约成功',
        success() {
          setTimeout(() => {
            wx.navigateBack();
          }, 1500)
          
        }
      })
    }).catch(err => {
      wx.showToast({
        icon: 'none',
        title: '预约失败'
      })
    })

  }
  
})