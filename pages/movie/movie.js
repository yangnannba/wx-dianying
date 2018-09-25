var api_url ="https://douban.uieee.com/v2/movie/top250";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"拼命加载中......",
    jiazai:false,
    start:5,
    movies:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.showToast({
      title: '加载...',
      icon: 'loading',
      duration: 10000
    })

    wx.request({
      url: api_url+'?start=0&count=10', 
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        wx.hideToast()
        that.setData({
          name: "推荐电影",
          movies: res.data .subjects       
        })
      }
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
    var that = this;
    var movies = this.data.movies;
    var mystart = this.data.start;
    this.setData({
      start: mystart+5,
      jiazai:true
    })

    if (mystart<250){


    wx.showToast({
      title: '加载...',
      icon: 'loading',
      duration: 10000
    })


    wx.request({

      url: api_url + '?start=' + this.data.start+ '&count=5',
      header: {
        "Content-Type": "json"
      },
      success: function (res) {

        wx.hideToast();
        that.setData({
          movies: movies.concat(res.data.subjects),
          jiazai: false
        })
      }
    })     
}
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
