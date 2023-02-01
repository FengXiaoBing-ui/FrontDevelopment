/**
 * 全局工具包
 * @author edwin <edwin_nj@163.com>
 */

export default {
    /**
     * 封装uni.setStorage
     * @param key
     * @param val
     */
    setStorage(key, val) {
        uni.setStorageSync(key, val);
    },
    getStorage(key) {
        return uni.getStorageSync(key);
    },
    // 防抖
    debounce(func, wait, immediate) {
        let timeout, args, context, timestamp, result;

        const later = function() {
            // 据上一次触发时间间隔
            const last = +new Date() - timestamp;

            // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
            if (last < wait && last > 0) {
                timeout = setTimeout(later, wait - last);
            } else {
                timeout = null;
                // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
                if (!immediate) {
                    result = func.apply(context, args);
                    if (!timeout) context = args = null;
                }
            }
        };

        return function(...args) {
            context = this;
            timestamp = +new Date();
            const callNow = immediate && !timeout;
            // 如果延时不存在，重新设定延时
            if (!timeout) timeout = setTimeout(later, wait);
            if (callNow) {
                result = func.apply(context, args);
                context = args = null;
            }

            return result;
        };
    },

    /**
     *  用于将图片转化为 base64，使用window.btoa 来转化使用
     * */
    getImgUtils: async (data) => {
        // let resultItem = await GetImgAPI(iconUrl)
        let bytesItem = new Uint8Array(data);
        let storeDataItem = "";
        let lenItem = bytesItem.byteLength;
        for (let i = 0; i < lenItem; i++) {
            storeDataItem += String.fromCharCode(bytesItem[i]);
        }
        return Promise.resolve(storeDataItem);
    },

    /**
     * 封装下载文件
     * @params:{data:ajax请求来的二进制数据，name：文件名}
     * */
    downloadFileUtils: (data, name) => {
        let content = data.data;
        let originalFileName = data.headers["content-disposition"];
//   let lastDot = originalFileName.lastIndexOf('.')
//   let fileSuffix = originalFileName.substring(lastDot) // 文件类型
        let blob = new Blob([content], { type: data.headers["content-type"] });
        let fileName = name || originalFileName.split(";")[1].split("=")[1];
        if ("download" in document.createElement("a")) { // 非IE下载
            const elink = document.createElement("a");
            elink.download = fileName;
            elink.style.display = "none";
            elink.href = URL.createObjectURL(blob);
            document.body.appendChild(elink);
            elink.click();
            URL.revokeObjectURL(elink.href);// 释放URL 对象
            document.body.removeChild(elink);
        }
    },

    /**
     * 封装XLSX下载文件
     * @params:{data:ajax请求来的二进制数据，name：文件名}
     * */
    downloadXLSXFileUtils: (data, name) => {
        let content = data.data;
        let originalFileName = data.headers["content-disposition"];
        //   let lastDot = originalFileName.lastIndexOf('.')
        //   let fileSuffix = originalFileName.substring(lastDot) // 文件类型
        let blob = new Blob([content], { type: data.headers["content-type"] });
        let fileName = name || originalFileName.split(";")[1].split("=")[1];
        if ("download" in document.createElement("a")) { // 非IE下载
            const elink = document.createElement("a");
            elink.download = fileName + ".xlsx";
            elink.style.display = "none";
            elink.href = URL.createObjectURL(blob);
            document.body.appendChild(elink);
            elink.click();
            URL.revokeObjectURL(elink.href);// 释放URL 对象
            document.body.removeChild(elink);
        }
    },

    /**
     * 封装XLSX下载文件
     * @params:{data:ajax请求来的二进制数据，name：文件名}
     * */
    DownloadXLSXBlobFileUtils(data, name) {
        let content = data.data;
        let blob = data.data;
        const URL = window.URL || window.webkitURL;
        let href = URL.createObjectURL(blob);
        let fileName = `${name}.xlsx` || content.headers["content-disposition"].split(";")[1].split("=")[1];
        let aEle = document.createElement("a");
        aEle.href = href;
        aEle.download = fileName;
        document.body.appendChild(aEle);
        aEle.click();
        URL.revokeObjectURL(href);
        document.body.removeChild(aEle);
    },

    /**
     * dom节点转字符串
     * @param {node} dom节点
     */
    NodeToString: (node) => {
        let tmpNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
        tmpNode.appendChild(node.cloneNode(true));
        let str = tmpNode.innerHTML;
        tmpNode = node = null;
        return str;
    },

    /**
     * 字符串转dom节点
     * @param {Object} arg dom字符串
     */
    ParseDom: (arg) => {
        let objE = document.createElementNS("http://www.w3.org/2000/svg", "g");
        objE.innerHTML = arg;
        return objE.childNodes;
    },

    /**
     * @description: 只能输入正数，小数点后保留一位
     * @param {number} value 输入的值
     * @return {number}
     */
    oneAfterDecimalPoint(value) {
        let str = value;
        let len1 = str.substr(0, 1);
        let len2 = str.substr(1, 1);
        // 如果第一位是0，第二位不是点，就用数字把点替换掉
        if (str.length > 1 && len1 === "0" && len2 !== ".") {
            str = str.substr(1, 1);
        }
        // 第一位不能是.
        if (len1 === ".") {
            str = "";
        }
        // 限制只能输入一个小数点
        if (str.indexOf(".") !== -1) {
            let str_ = str.substr(str.indexOf(".") + 1);
            if (str_.indexOf(".") !== -1) {
                str = str.substr(0, str.indexOf(".") + str_.indexOf(".") + 1);
            }
        }
        // 正则替换
        str = str.replace(/[^\d^\.]+/g, ""); // 保留数字和小数点
        str = str.replace(/^\D*([0-9]\d*\.?\d{0,1})?.*$/, "$1"); // 小数点后只能输一位
        return str;
    },
    /**
     * @param {Object} formData 需要进行验证的数据
     * @param {Array} arr 数组 [ { name:'验证formData里的属性名',tips:'验证失败的提示文字' } ]
     * @return: {返回最后的验证结果 true/false}
     */
    verification(formData, arr) {
        let isVerification = true; //验证是否通过，默认true，在循环里面只要有一次没通过，就是false
        for (let i = 0; i < arr.length; i++) {
            const itemType = typeof formData[arr[i].name];
            if (itemType === "string") {
                if (formData[arr[i].name] === "") {
                    uni.showToast({
                        title: arr[i].tips,
                        icon: "none"
                    });
                    isVerification = false
                    return false;
                }
            }
            if (itemType === "object") {
                if (Array.isArray(formData[arr[i].name])) {
                    //数组的判断
                    if (formData[arr[i].name].length < 1){
                        uni.showToast({
                            title: arr[i].tips,
                            icon: "none"
                        });
                        isVerification = false
                        return false;
                    }
                } else {
                    // 对象的判断
                    if (JSON.stringify(formData[arr[i].name])==='{}'){
                        uni.showToast({
                            title: arr[i].tips,
                            icon: "none"
                        });
                        isVerification = false
                        return false;
                    }else {
                        if (!nestingObj(formData[arr[i].name])){
                            uni.showToast({
                                title: arr[i].tips,
                                icon: "none"
                            });
                            return false
                        }
                    }
                }
            }
        };
        function nestingObj(obj){
            for (const itemTypeKey in obj) {
                if (typeof obj[itemTypeKey] === "object" && !Array.isArray(obj[itemTypeKey])){
                    nestingObj(obj[itemTypeKey])
                }else {
                    if (obj[itemTypeKey].length < 1){
                        isVerification = false;
                    }
                }
            }
            return isVerification
        }
        return isVerification
    },
    /**
     * @description: 只能传这四个类型 barCode:一维码,qrCode:二维码,datamatrix:Data Matrix 码,pdf417:PDF417 条码
     * @param {string} scanType 扫码类型
     */
    scanCode(scanType) {
        return new Promise((resolve, rejected) => {
            uni.scanCode({
                scanType: [scanType],
                success(res) {
                    if (res.scanType === "EAN_13") {
                        resolve(res);
                    } else {
                        uni.showToast({
                            title: "扫码失败",
                            icon: "error"
                        });
                        rejected(res);
                    }
                },
                fail(err) {
                    rejected(err);
                }
            });
        });
    },
    /**
     * 时间戳相互转换
     * @description: timestamp是时间或者时间戳，type是0的话，时间戳转换时间type是1的时候时间转换时间戳
     * @param {String} timestamp 时间
     * @param {Number} type 类型，type===0:时间转时间戳 type===1:时间戳转时间
     */
    timestampToTime(timestamp,type = 0) {
        if (type===1){
            const date = new Date(timestamp);
            const time1 = date.getTime();
            return time1
        }

        if (type===0){
            const date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
            const Y = date.getFullYear() + "-";
            const M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
            const D = date.getDate() + " ";
            // const h = date.getHours() + ":";
            // const m = date.getMinutes() + ":";
            // const s = date.getSeconds();
            return Y + M + D;
        }
    },
    /**
     * @description: 阿拉伯数字转中文大写
     * @param {Number} money 需要转换成大写的数字
     */
    convertCurrency(money) {
        //汉字的数字
        var cnNums = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖");
        //基本单位
        var cnIntRadice = new Array("", "拾", "佰", "仟");
        //对应整数部分扩展单位
        var cnIntUnits = new Array("", "万", "亿", "兆");
        //对应小数部分单位
        var cnDecUnits = new Array("角", "分", "毫", "厘");
        //整数金额时后面跟的字符
        var cnInteger = "整";
        //整型完以后的单位
        var cnIntLast = "元";
        //最大处理的数字
        var maxNum = 999999999999999.9999;
        //金额整数部分
        var integerNum;
        //金额小数部分
        var decimalNum;
        //输出的中文金额字符串
        var chineseStr = "";
        //分离金额后用的数组，预定义
        var parts;
        if (money == "") {
            return "";
        }
        money = parseFloat(money);
        if (money >= maxNum) {
            //超出最大处理数字
            return "";
        }
        if (money == 0) {
            chineseStr = cnNums[0] + cnIntLast + cnInteger;
            return chineseStr;
        }
        //转换为字符串
        money = money.toString();
        if (money.indexOf(".") == -1) {
            integerNum = money;
            decimalNum = "";
        } else {
            parts = money.split(".");
            integerNum = parts[0];
            decimalNum = parts[1].substr(0, 4);
        }
        //获取整型部分转换
        if (parseInt(integerNum, 10) > 0) {
            var zeroCount = 0;
            var IntLen = integerNum.length;
            for (var i = 0; i < IntLen; i++) {
                var n = integerNum.substr(i, 1);
                var p = IntLen - i - 1;
                var q = p / 4;
                var m = p % 4;
                if (n == "0") {
                    zeroCount++;
                } else {
                    if (zeroCount > 0) {
                        chineseStr += cnNums[0];
                    }
                    //归零
                    zeroCount = 0;
                    chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
                }
                if (m == 0 && zeroCount < 4) {
                    chineseStr += cnIntUnits[q];
                }
            }
            chineseStr += cnIntLast;
        }
        //小数部分
        if (decimalNum != "") {
            var decLen = decimalNum.length;
            for (var i = 0; i < decLen; i++) {
                var n = decimalNum.substr(i, 1);
                if (n != "0") {
                    chineseStr += cnNums[Number(n)] + cnDecUnits[i];
                }
            }
        }
        if (chineseStr == "") {
            chineseStr += cnNums[0] + cnIntLast + cnInteger;
        } else if (decimalNum == "") {
            chineseStr += cnInteger;
        }
        return chineseStr;
    }
};


