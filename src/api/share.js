// 引入微信
var wx = require('weixin-js-sdk')

import axios from 'axios'

// 分享
function share(shareData) {
    wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
        // wx.updateAppMessageShareData(shareData)
        // if(wx.onMenuShareTimeline){ //微信文档中提到这两个接口即将弃用，故判断
        //     wx.onMenuShareAppMessage(shareData)
        //     wx.onMenuShareTimeline(shareData)//1.0分享到朋友圈
        // }else{
        //     wx.updateTimelineShareData(shareData)//1.4分享到朋友圈
        // }
        if(wx.updateAppMessageShareData) {
            wx.updateAppMessageShareData(shareData)
        }else{
            wx.onMenuShareAppMessage(shareData)
        }
        //分享给朋友圈
        if (wx.updateTimelineShareData) {
            wx.updateTimelineShareData(shareData)
        } else {
            wx.onMenuShareTimeline(shareData)
        }
    })
}
export default function WX_SHARE(to){
    // 默认标题
    let defaultTitle = '丹阳智慧统战'

    // 默认描述
    let defaultDesc = '欢迎进入丹阳智慧统战'

    // 默认图片
    let shareDefaultSrc = 'https://yxhz.cst-info.cn/themes/simplebootx/Public/weixin/dtshare.png'

    // 当前完整路径
    let currentWholePath = window.location.href

    // 线上图片拼接路径
    let IMG_PATH = process.env.VUE_APP_IMG_PATH
    
    // 注入jspconfig接口的路径
    let jspConfigPath = window.location.origin + window.location.search

    // 要分享的数据
    let shareData = {
        title: defaultTitle,
        desc: defaultDesc,//这里请特别注意是要去除html
        link: currentWholePath,
        imgUrl: shareDefaultSrc
    }
    axios({
        url: "api/v2/commons/postShare",
        method: "get",
        params:{
            url:jspConfigPath
        }
    }).then(function (response) {
        wx.config(
            JSON.parse(response.data.data)
        )
    })
    // axios.post(process.env.VUE_APP_GETJSAPICOF,{url:jspConfigPath})
    // .then(function (response) {
    //     wx.config(
    //         JSON.parse(response.data.data)
    //     )
    // })
    .then(function () {
        if(to.name == 'volunteerDetails222' || to.name == 'orderSheetDetails222' ){
                var param = {}
                param.access_token = window.localStorage.getItem("token")
                param.id = to.query.id
                param.device = 'wx'
                param.share = 1
                axios.post(get_activity,param)
                .then(function (response){
                    shareData = {
                        title: response.data.data.title,
                        desc: response.data.data.brief,//这里请特别注意是要去除html
                        link: currentWholePath,
                        imgUrl: IMG_PATH+response.data.data.images
                    }
                    share(shareData)
                })
        }else if(to.name == 'articledetails22222' || to.name == 'videodetails22222'){
                var param = {};
                param.id = to.query.id;
                param.device = 'wx';
                param.share = 1;
                axios.post(get_article,param)
                .then(function (response) {
                    shareData = {
                        title: response.data.data.title,
                        desc: response.data.data.brief,//这里请特别注意是要去除html
                        link: currentWholePath,
                        imgUrl: IMG_PATH+response.data.data.img
                    }
                    share(shareData)
                })
        }else {
            share(shareData)
        }
    })
    .catch(function(err){
        console.error(err)
    })
}