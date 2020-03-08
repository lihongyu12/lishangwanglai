// pages/A/A.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:'',
    iconSize: [20, 30, 40, 50, 60, 25],
    iconColor: [
      '#000'
    ],
    iconType: [
      'search'
    ],
    arr:'',
    indexs:0,
    arr2: ['CoCo的青稞', 'CoCo的青稞', 'CoCo的青稞', 'CoCo的青稞', 'CoCo的青稞', 'CoCo的青稞', 'CoCo的青稞'],
    colors: ['#97715e', '#2d2926', '#004072','#ff4236'],
    imgs: ['../../img/images/waste/resave.png', '../../img/images/waste/hai.png', '../../img/images/waste/index.png','../../img/images/waste/other.png']
  },
  setIndex(i) {
    this.setData({
      indexs: i.currentTarget.dataset.id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: 'https://www.lajiflw.cn/rubbish/category',
      success: (a) => {
        for (var i = 0; i < a.data.data.length; i++) {
          a.data.data[i].common = a.data.data[i].common.split("、")
        }
        this.setData({
          arr : a.data.data
        })
        console.log(this.data.arr)
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.setNavigationBarTitle({
      title: '垃圾分类指南'
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var app = getApp()
    this.setData({
      city: app.globalData.city
    })
    console.log(app)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})