// ajax请求函数封装
import config from "./config";
export default (url,data={type:2},method='GET')=>{
    return new Promise((resolve,reject)=>{
        wx.request({
            url:config.mobileHost + url,
            data,
            method,
            header:{
                cookie:wx.getStorageSync('cookies')?wx.getStorageSync('cookies').find(item => item.indexOf('MUSIC_U') !==-1):''
            },
            success:(res)=>{
                if(data.isLogin){
                    wx.setStorage({
                      data: res.cookies,
                      key: 'cookies'
                    })
                }
                resolve(res.data);
            },
            fail:(err)=>{
                reject(err);
            }
        })
    })
}
