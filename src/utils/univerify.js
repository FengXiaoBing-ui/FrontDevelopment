/**
 * 一键登录,如果登录成功resolve登录成功,
 * 其他登录跳转页面返回resolve其他登录
 * 第三方登录resolve登录方式
 * @return {Promise<object>}{mode: 'weixin'}
 */
export function oauth() {
    return new Promise(async (resolve, reject) => {
        //对应三方登录下标顺序,不能随意更换
        const loginModeList = ["weixin", "qq", "sinaweibo", "zhifubao", "verificationCode", "univerify"];
        const res1 = await getProvider();
        if (!res1.provider.includes("univerify")) {
            reject("未开通一键登录权限");
            return;
        }
        // Todo 预登录移动到页面加载时
        const res2 = await preLogin();
        if (!(res2.errMsg === "preLogin:ok")) {
            reject("预登录失败");
            return;
        }
        const res3 = await showLoginPage();
        if (!(res3.errMsg === "login:ok")) {
            if (res3.code === 30002) {
                uni.navigateTo({ url: "pages/login/login" });
                resolve({ mode: loginModeList[4] });
            }
            if (res3.code === "30008") {
                resolve({ mode: loginModeList[res3.index] });
            }
            reject("其他登录");
            return;
        }
        console.log(res3);
        const res4 = await callCloudFun(res3.authResult);
        if (!(res4.code === 0)) {
            reject(res4.message);
        }
        const phoneNumber = res4.data.phoneNumber;
        resolve({ mode: loginModeList[5], phoneNumber });
        uni.closeAuthView(); //关闭授权登录界面
    }).catch((err) => {
        return err;
    });
}

/**
 * 获取服务商
 */
function getProvider() {
    return new Promise((resolve, reject) => {
        uni.getProvider({
            service: "oauth",
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

/**
 * 预登录,需开通一键登录,否则无响应
 */
function preLogin() {
    return new Promise((resolve, reject) => {
        uni.preLogin({
            provider: "univerify",
            // success: showLoginPage(resolve, reject),
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

/**
 * 调起登录SDK页面,选择登录方式
 */
function showLoginPage() {
    return new Promise((resolve, reject) => {
        uni.login({
            provider: "univerify",
            // 自定义登录框样式
            univerifyStyle,
            success(res) { // 登录成功
                resolve(res);
            },
            fail(err) {  // 一键登录失败
                reject(err);
            }
        });
    }).catch((err) => {
        return err;
    });
}

/**
 * 调起云函数获得phoneNumber
 * @param {object} authResult uni.login获取权限的数据
 */
function callCloudFun(authResult) {
    return new Promise((resolve, reject) => {
        // 调用云函数,三种获取号码的方法都要调云函数
        uniCloud.callFunction({
            name: "getPhoneNumber", // 云函数名称
            data: { //传给云函数的参数
                "access_token": authResult.access_token, // 客户端一键登录接口返回的access_token
                "openid": authResult.openid // 客户端一键登录接口返回的openid
            },
            success(res) {
                // 获取的手机号
                resolve(res.result);
            },
            fail(err) {
                reject(err);
            }
        });
    }).catch((err) => {
        return err;
    });
}

const univerifyStyle = {
    "fullScreen": true, // 是否全屏显示，默认值： false
    "backgroundColor": "#ffffff",  // 授权页面背景颜色，默认值：#ffffff
    "backgroundImage": "", // 全屏显示的背景图片，默认值："" （仅支持本地图片，只有全屏显示时支持）
    "icon": {
        "path": "static/logo.png" // 自定义显示在授权框中的logo，仅支持本地图片 默认显示App logo
    },
    "closeIcon": {
        "path": "static/xxx.png" // 自定义关闭按钮，仅支持本地图片。 HBuilderX3.3.7+版本支持
    },
    "phoneNum": {
        "color": "#202020"  // 手机号文字颜色 默认值：#202020
    },
    "slogan": {
        "color": "#BBBBBB"  //  slogan 字体颜色 默认值：#BBBBBB
    },
    "authButton": {
        "normalColor": "#3479f5", // 授权按钮正常状态背景颜色 默认值：#3479f5
        "highlightColor": "#2861c5",  // 授权按钮按下状态背景颜色 默认值：#2861c5（仅ios支持）
        "disabledColor": "#73aaf5",  // 授权按钮不可点击时背景颜色 默认值：#73aaf5（仅ios支持）
        "textColor": "#ffffff",  // 授权按钮文字颜色 默认值：#ffffff
        "title": "本机号码一键登录", // 授权按钮文案 默认值：“本机号码一键登录”
        "borderRadius": "24px"	// 授权按钮圆角 默认值："24px" （按钮高度的一半）
    },
    "otherLoginButton": {
        "visible": true, // 是否显示其他登录按钮，默认值：true
        "normalColor": "", // 其他登录按钮正常状态背景颜色 默认值：透明
        "highlightColor": "", // 其他登录按钮按下状态背景颜色 默认值：透明
        "textColor": "#656565", // 其他登录按钮文字颜色 默认值：#656565
        "title": "其他登录方式", // 其他登录方式按钮文字 默认值：“其他登录方式”
        "borderColor": "",  //边框颜色 默认值：透明（仅iOS支持）
        "borderRadius": "0px" // 其他登录按钮圆角 默认值："24px" （按钮高度的一半）
    },
    "privacyTerms": {
        "defaultCheckBoxState": true, // 条款勾选框初始状态 默认值： true
        "uncheckedImage": "", // 可选 条款勾选框未选中状态图片（仅支持本地图片 建议尺寸 24x24px）(3.2.0+ 版本支持)
        "checkedImage": "", // 可选 条款勾选框选中状态图片（仅支持本地图片 建议尺寸24x24px）(3.2.0+ 版本支持)
        "checkBoxSize": 12, // 可选 条款勾选框大小，仅android支持
        "textColor": "#BBBBBB", // 文字颜色 默认值：#BBBBBB
        "termsColor": "#5496E3", //  协议文字颜色 默认值： #5496E3
        "prefix": "我已阅读并同意", // 条款前的文案 默认值：“我已阅读并同意”
        "suffix": "并使用本机号码登录", // 条款后的文案 默认值：“并使用本机号码登录”
        "privacyItems": [  // 自定义协议条款，最大支持2个，需要同时设置url和title. 否则不生效
            {
                "url": "https://", // 点击跳转的协议详情页面
                "title": "用户服务协议" // 协议名称
            }
        ]
    },
    "buttons": {  // 自定义页面下方按钮仅全屏模式生效（3.1.14+ 版本支持）
        "iconWidth": "30px", // 图标宽度（高度等比例缩放） 默认值：45px
        "list": [
            {
                "provider": "weixin",
                "iconPath": "/static/weixin.png" // 图标路径仅支持本地图片
            },
            {
                "provider": "qq",
                "iconPath": "/static/zhifubao.png" // 图标路径仅支持本地图片
            }
        ]
    }
};

