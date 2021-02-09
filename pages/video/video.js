// pages/video/video.js
import require from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoList:['全部','内地','港台','欧美','日本','韩国'],
    name:'全部',
    videoArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getVideoListData(this.data.name)
  },
  toSearch(){
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },
  changeName(event){
    let name = event.currentTarget.dataset.text;
    console.log(name)
    this.setData({
      name
    })
    this.getVideoListData(this.data.name)
  },
  async getVideoListData(name){
    console.log(name);
    if(!name){
      return;
    }
    let videoListData = await require('/mv/all',{area:name})
    console.log(videoListData)
    this.setData({
      videoArr:videoListData.data.slice(0,10)
    })
  },
  toMv(event){
    let id = event.currentTarget.dataset.id;
    console.log(id)
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
    this.getVideoListData(this.data.name)
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