// pages/home/home.js

//可以获取全局的app对象
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'微信',
    name:'tina',
    list:[],
    students:[
      {name: 'Lily',age:13,sex:0,love:'eat'},
      {name: 'John', age: 19, sex: 1, love: 'sleep'},
      {name: 'Fox', age: 34, sex: 1, love: 'walk'},
      {name: 'Max', age: 54, sex: 0, love: 'smile'}
    ],
    counter:0
  },
  onLoad(){
    //发送请求获取数据
    const _this=this;
    wx.request({
      url: 'http://123.207.32.32:8000/api/wh/recommend',
      success:function(res){
        const data = res.data.data.list
		    _this.setData({
          list: data
        })
      }
    })
  },

  onClick(){
    this.setData({
      message: app.globalData.message,
      name: app.globalData.name
    })
  },
  increment(){
    this.setData({
      counter:++this.data.counter
    })
  },
  decrement(){
    this.setData({
      counter: this.data.counter < 1 ? 0 : --this.data.counter
    })
  },
  //获取用户权限
  handleGetUserInfo(event){
    // console.log(event.detail.rawData)
    console.log(JSON.parse(event.detail.rawData))
  }
})