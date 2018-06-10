var app = getApp()
Page({
  data: {
    searchPlaceHolder:"请输入您的上海公交卡号",
    searchLabel:"查询",
    balance:""
  },
  myBack: function(data){
    console.log("data= " + data);
  },
  //事件处理函数
  sptccSearch: function() {
    wx.request({
      url: 'https://www.daozhao.com/w/wxmin/tools/sptcc.html?arg1=11586532332&cb=myBack', //上海公交卡余额查询接口地址
      data: {
        "arg1":"66386386229"
      },
      method:"get",
      dataType: "jsonp",
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res)
      }
    })
  }
})