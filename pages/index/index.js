// pages/index/index.js
import request from "../../utils/request";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList:[],
    songs:[],
    topList1:[],
    topList2:[],
    topList3:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let result = await request('/banner')
   // console.log(result)
    this.setData({
      bannerList: result.banners
    })
    let songs = await request('/personalized',{limit:10});
   // console.log(songs)
    this.setData({
      songs:songs.result
    })
    let topList2 = await request('/top/list',{id:19723756})
    let topList3 = await request('/top/list',{id:3779629})
    let topList4 = await request('/top/list',{id:2884035})
    let hots = topList2.playlist.tracks.slice(0,3)
    this.setData({
      topList1:hots,
    })
    let news = topList3.playlist.tracks.slice(0,3)
    this.setData({
      topList2:news
    })
    let oris = topList4.playlist.tracks.slice(0,3)
    this.setData({
      topList3:oris
    })
   // console.log(hots,news,oris)
  },
  toRecommendSong(){
    wx.navigateTo({
      url: '/pages/recommendSong/recommendSong'
    })
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
