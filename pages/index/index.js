var api_url = "https://douban.uieee.com/v2/movie/search";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [] ,
    movies1: [],
    movies2: [],
    movies3: [],   
    keyshow:true,
    imgUrls: [
      '/images/banner_1.jpg',
      '/images/banner_2.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    key:[
      "宫崎骏",
      "票房大卖",
      "喜剧"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;



      wx.showToast({
        title: '加载...',
        icon: 'loading',
        duration: 10000
      })

    wx.request({
      url: api_url + '?q=吕克·贝松&count=6',
      header: {
        "Content-Type": "json"
      },
      success: function (res) {

        that.setData({
          movies1: res.data.subjects
        })

      }
    })   

      wx.request({
        url: api_url + '?q=李小龙&count=6',
        header: {
          "Content-Type": "json"
        },
        success: function (res) {

          that.setData({
            movies2: res.data.subjects
          })

        }
      })

    wx.request({
      url: api_url + '?q=周星驰&count=6',
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        wx.hideToast()
        that.setData({
          movies3: res.data.subjects
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
    
  },
  search:function(e){

    var that=this;
    var data = e.detail.value;
    if (data){

      wx.showToast({
        title: '加载...',
        icon: 'loading',
        duration: 10000
      })

      wx.request({
        url: api_url + '?q=' + data,
        header: {
          "Content-Type": "json"
        },
        success: function (res) {
          wx.hideToast()
          that.setData({
            movies: res.data.subjects,
            keyshow: false
          })

        }
      })

    }

  }, 
  bindfocus:function(){
     this.setData({
       keyshow: true
     })
  },
  searchkey:function(e){
    var namevalue=e.target.dataset.name;
    var that = this;
    wx.showToast({
      title: '加载...',
      icon: 'loading',
      duration: 10000
    })

    wx.request({
      url: api_url + '?q=' + namevalue,
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        wx.hideToast()
        that.setData({
          movies: res.data.subjects,
          keyshow: false
        })
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})