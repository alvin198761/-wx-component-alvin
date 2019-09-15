// pages/demo/simpletabledemo/SimpleTableDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    columns: [
      {
        key: 'id',
        title: 'ID'
      },
      {
        key: 'name',
        title: 'NAME'
      },
      {
        key: 'age',
        title: 'AGE'
      }
    ],
    dataList: [
      {
        id: 1,
        name: 'alvin',
        age: 33
      },
      {
        id: 11,
        name: 'alvin11',
        age: 3311
      },
      {
        id: 12,
        name: 'alvin22',
        age: 332
      },
    ]
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