// pages/D/D.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:'',
    indexs:0,
    indexs2:0,
    arr:['中文','Englishi'],
    arr2: ['北京', '长春', '成都', '长沙', '大连', '德阳', '福州', '广元', '贵阳', '邯郸', '哈尔滨', '合肥', '呼和浩特', '海口', '杭州', '济南', '昆明', '拉萨', '兰州', '宁波',]
  },
  setInfo(e){
    this.setData({
      info:e.currentTarget.dataset.info,
      indexs: e.currentTarget.dataset.i
    })
    var app=getApp()
    app.globalData.city=this.data.info
    console.log(app.globalData.city)
  },
  setIndex(e) {
    this.setData({
      indexs2: e.currentTarget.dataset.i
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      info:this.data.arr2[0]
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})