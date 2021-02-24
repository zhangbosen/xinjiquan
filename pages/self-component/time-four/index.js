Component({
  properties: {
    order: {
      type: Number,
      value: 0
    },
    split: {
      type: Number,
      value: 2
    },
    dts: {
      type: Array,
      value: []
    }
  },
  // 引用此组件时, 暴露的样式属性 (例子：  <此组件 con-sty="conSty" />  其中"conSty" 是父组件中的样式类, 用来修改 此组件中 class名为"con-sty"的元素的样式)
  externalClasses: [
    'con-sty',
    'left-sty',
    'right-sty',
    'rect-sty'
  ],
  data: {},
  observers: {
    "order"(val) {
      var str = val + '';
      str = str.length === 2 ? str : ('0' + str);
      this.setData({
        title: str + ':00-' + str + ':59'
      }) 
    },
    "dts"(val) {
      var i, activeds = [];
      for(i = 0; i < 4; i++) {
        if(val.indexOf(i) > -1) {
          activeds[i] = true
        }else {
          activeds[i] = false
        }
      }

      this.setData({
        activeds: activeds
      })

    }
  },
  methods: {
    tapFn(e) {
      var {chs, idx} = e.currentTarget.dataset;
      
      var backArr = [];
      var resArr = this.data.activeds.map((item, key) => {
        if (key == idx) {
          item = !chs
        }
        
        // 记录选中块 的序号
        if(item) {
          backArr.push(key)
        }

        return item
      });
      this.setData({
        activeds: resArr
      })

      
      // params: 0: 当前组件所在行;  1: 选中块的序号
      var params = [this.data.order, backArr];
      this.triggerEvent('change', params);
    }
  }
})
