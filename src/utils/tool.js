// import Vue from 'vue'

import util from "./util";

export default {
    getCurrentPagePath() {
        const pagesList = getCurrentPages();
        const currentPagePath = pagesList[pagesList.length - 1].route;
        return currentPagePath;
    },
    getUrlParams() {
        const pagesList = getCurrentPages();
        const optionsObj = pagesList[pagesList.length - 1].options;
        let urlParams = "";
        const optionsList = Object.getOwnPropertyNames(optionsObj);
        const length = Object.getOwnPropertyNames(optionsObj).length;
        optionsList.forEach((item, index) => {
            urlParams = urlParams ? urlParams : "?";
            if (index === length - 1) {
                urlParams = urlParams + `${item}=${optionsObj[item]}`;
                return;
            }
            urlParams = urlParams + `${item}=${optionsObj[item]}&`;
        });
        return urlParams;
    },
    setPastPath() {
        const path = this.getCurrentPagePath();
        const params = this.getUrlParams();
        util.setStorage("memory", path + params);
    },
    backToThePast() {
        let memory = util.getStorage("memory");
        const excludeList = ["", "pages/index/layout"];
        if (excludeList.includes(memory)) memory = "/pages/index/index";
        //todo 需处理回到首页功能
        setTimeout(() => {
            uni.reLaunch({ url: "/pages/index/index" });
        }, 2000);
    },

    /**
     * 获取客户端机型CustomBar高度,并保存在prototype中
     * @param {Object} instance Vue实例
     */
    setCustomBar(instance) {
        uni.getSystemInfo({
            success: e => {
                instance.prototype.StatusBar = e.statusBarHeight;
                instance.prototype.ScreenHeight = e.screenHeight;
                if (e.platform == "android") {
                    instance.prototype.CustomBar = e.statusBarHeight + 40;
                } else {
                    instance.prototype.CustomBar = e.statusBarHeight + 45;
                }
            },
            fail: function(err) {
                console.log(err);
            }
        });
    }
};
