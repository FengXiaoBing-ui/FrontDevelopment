import { post } from "./uniRequest";

/**
 *  uniapp多端登录
 * @param {object} instance 应用实例,在页面中传入this
 * @param {string} mode 登录模式,支持weixin,qq,sinaweibo
 */
export async function appLogin(instance, mode) {
    const res = await getServices(instance);
    console.log(res);
    // 查找实例中是否开通对应的服务
    instance.authService = res.find(service => service.id === mode);
    if (mode === "weixin") {
        console.log(mode);
        // 仅微信需要请求授权认证
        instance.authService.authorize(wxLogin(mode), errorCallback, { scope: "snsapi_userinfo" });
        return;
        // wxLogin, errorCallback, { scope: "snsapi_userinfo" }
    } else if (mode === "qq") {
        qqLogin();
    } else if (mode === "sinaweibo") {
        // weiboLogin()
    }
}

/**
 * 获取服务商
 * @param instance app实例,在页面中传入this
 * @return {Promise<unknown>}
 */
function getServices(instance) {
    return new Promise((resolve, reject) => {
        plus.oauth.getServices(
            (services) => {
                resolve(services);
            },
            (err) => {
                reject(err);
            }
        );
    }).catch(() => {
        return err;
    });
}

function qqLogin() {
    uni.login({
        provider: "qq",
        success: res => {
            console.log(res);
            const access_token = res.authResult.access_token;
            uni.getUserInfo({
                provider: "qq",
                success: function(infoRes) {
                    console.log(infoRes);
                    const formdata = {
                        nickName: infoRes.userInfo.nickname,
                        gender: infoRes.userInfo.gender == "男" ? 1 : 2,
                        headImgUrl: infoRes.userInfo.figureurl_qq_2,
                        openId: infoRes.userInfo.openId,
                        access_token: access_token
                    };
                    uni.request({
                        url: "xxx",
                        method: "POST",
                        data: formdata,
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: res => {
                            if (res.data.code != 200) {
                                uni.showToast({
                                    title: res.data.err,
                                    duration: 3000,
                                    icon: "none"
                                });
                                return false;
                            } else {
                                //登录成功处理
                                uni.showToast({
                                    title: res.data.message,
                                    duration: 3000,
                                    icon: "none"
                                });
                                let ticket = res.data.ticket;
                                uni.setStorageSync("ticket", ticket);
                                uni.reLaunch({
                                    url: "../my/my"
                                });
                                return true;
                            }
                        }
                    });
                }
            });
        },
        fail: err => {
            uni.showToast({
                title: "请求出错啦！",
                icon: "none",
                duration: 3000
            });
        }
    });
}

function errorCallback(err) {
    console.log(err);
    let msg = "";
    if (err.code === -8) msg = "请先安装微信应用";
    if (err.code === -100) msg = "取消登录";
    uni.showToast({ title: msg || "微信登录授权失败", icon: "none" });
}

async function wxLogin(mode) {
    //支持微信、qq和微博等
    const res = await uniLogin(mode);
    console.log(res);
    if (res.authResult) {
        const access_token = res.authResult.access_token;
        const openid = res.authResult.openid;
        const res1 = post("loginUrl", { openid });
        console.log(res1);
        //获取到openid存入本地缓存
        uni.setStorageSync("openid_key", res1.data.openid);
        if (res1.statusCode == 200 && res1.data && res1.data.username) {
            //todo 业务逻辑
        } else {
            //首次登录，跳转到一个绑定账号的页面
            uni.navigateTo({ url: "wxlogin" });
        }
    }
}

function uniLogin(mode) {
    return new Promise((resolve, reject) => {
        uni.login({
            provider: mode,
            success(res) {
                resolve(res);
            },
            fail(err) {
                reject(err);
            }
        });
    }).catch((err) => {
        return err;
    });
}

//相关示例代码：（该代码会打开支付宝授权，授权之后会在支付宝中打开你所设置的【回调地址】网页）

//***********************
//***url授权地址由后端拼接也可以前端写死***
//***以下是一个拼接示例，仅需修改app_id的值和redirect_uri的值***
//***app_id是商户的APPID，redirect_uri是页面跳回地址（授权成功之后会在支付宝中打开这个地址）***
//***********************
// let urls='https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2021001183611007&scope=auth_userinfo&redirect_uri=https://shandianlaoshi.com/api/user/zfb_url';
// urls=encodeURIComponent(urls);//将地址编码成浏览器访问的格式
// // 判断平台
// if (plus.os.name == 'Android') {
// 		plus.runtime.openURL(
// 				'alipays://platformapi/startapp?appId=20000067&url=' + urls,
// 				res => {
// 						//这里写打开URL地址失败后的处理
// 						console.log(res);
// 						uni.showModal({
// 								content: '本机未检测到对应客户端，是否打开浏览器访问页面？',
// 								success: function (res) {
// 										if (res.confirm) {
// 												//plus.runtime.openURL();
// 										}
// 								}
// 						});
// 				},
// 				'com.eg.android.AlipayGphone'
// 		);
// } else if (plus.os.name == 'iOS') {
// 		plus.runtime.openURL(
// 				'alipay://platformapi/startapp?appId=20000067&url=' + urls, //20000067是固定值,无需更改
// 				res => {
// 						console.log(res);
// 						uni.showModal({
// 								content: '本机未检测到对应客户端，是否打开浏览器访问页面？',
// 								success: function (res) {
// 										if (res.confirm) {
// 												//plus.runtime.openURL(url);
// 										}
// 								}
// 						});
// 				},
// 				'com.eg.android.AlipayGphone'
// 		);
// }
