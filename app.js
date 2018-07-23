App({
  onLaunch () {
    let that = this
    wx.getSystemInfo({
      success: function (res) {
        that.globalData.systeminfo = res
      },
    })
  },
  globalData: {
    // 是否保持常亮，离开小程序失效
    keepscreenon:false,
    systeminfo: {},
    ak: 'xZrROTLoGRSh5A7sdd0zyDVGBkwHYw8n',
  },
  setGeocoderUrl (address) {
    return `https://api.map.baidu.com/geocoder/v2/?address=${address}&output=json&ak=${this.globalData.ak}`
  },
})