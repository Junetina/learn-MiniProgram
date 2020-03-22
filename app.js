App({
  // 在小程序初始化完成时
  onLaunch: function () {
    // console.log('小程序初始化成功，onLaunch')
    //方法一：使用wx.getUserInfo()api 获取用户的信息
    // wx.getUserInfo({
    //   success(res){
    //     console.log(res.userInfo.nickName)
    //   }
    // })


  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // console.log('小程序显示成功，onShow')
    console.log(options.scene)//1001
    
  },
  // 小程序隐藏或者关闭时出现
  onHide: function(){

  },
  //小程序抛出错误时出现
  onError: function(){

  },
  globalData:{
    title:"全局的tilte",
    name:"June",
    age:18,
    height:170,
    message:"hello"
  }
})
