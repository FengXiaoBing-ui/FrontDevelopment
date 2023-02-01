import config from "/src/config/index";

export default function() {
    // #ifdef APP-PLUS
    return new Promise((resolve, reject) => {
        plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
            const data = {
                action: "checkVersion",
                appid: plus.runtime.appid,
                appVersion: plus.runtime.version,
                // appid: config.APP_ID, //测试时使用,上线解开上面注释,删除本行
                // appVersion: config.APP_VERSION, //测试时使用,上线解开上面注释,删除本行
                wgtVersion: widgetInfo.version
            };
            // console.log("data: ", data);
            uniCloud.callFunction({
                name: "uni-upgrade-center",
                data,
                success: res => {
                    resolve(res);
                },
                fail: err => {
                    reject(err);
                },
            });
        });
    }).catch(err => {
        return err;
    });
    // #endif
    // #ifdef H5
    return new Promise((resolve, reject) => reject({ message: "请在App中使用" }))
    .catch(err => err);
    // #endif
}
