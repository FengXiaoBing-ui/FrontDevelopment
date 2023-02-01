import constant from "./constant";

// APP_ID: "__UNI__4D53B7A", //测试时使用,上线删除
//     APP_VERSION: "1.0.0", //应用版本号,测试时使用,上线删除
//     WGT_VERSION: "1.0.0", //应用版本名称,测试时使用,上线删除
//     AppKey: "ChoiceGoodWine",
//     AppSecret: "8k0EbLhzAnetmZ6S",

let BASE_URL, UNI_CLOUD_FUN, OSS_URL, IMG_SERVER, UPLOAD_IMG_SERVER = "";
if (process.env.NODE_ENV === "development") {
    //开发环境下编译
    console.log("开发环境");
    BASE_URL = "http://www.haojiuxuan.ltd:3001";
    UNI_CLOUD_FUN = "https://db14b093-1455-49b1-8732-5d8267940bc8.bspapp.com/getPhoneNumber";
    OSS_URL = "https://dev-vue-1313145053.cos.ap-chongqing.myqcloud.com";
    IMG_SERVER = "http://124.220.219.72:8084/static";
    UPLOAD_IMG_SERVER = "http://124.220.219.72:8080/goods/upload/file";
}

if (process.env.NODE_ENV === "production") {
    // 生产环境下编译
    console.log("生产环境");
    BASE_URL = "http://124.220.219.72:8080";
    UNI_CLOUD_FUN = "https://db14b093-1455-49b1-8732-5d8267940bc8.bspapp.com/getPhoneNumber";
    OSS_URL = "https://dev-vue-1313145053.cos.ap-chongqing.myqcloud.com";
    IMG_SERVER = "http://124.220.219.72:8084/static";
    UPLOAD_IMG_SERVER = "http://124.220.219.72:8080/goods/upload/file";

}

if (process.env.NODE_ENV === "test") {
    // 测试环境下编译
    console.log("测试环境");
    BASE_URL = "http://124.220.219.72:8080";
    UNI_CLOUD_FUN = "https://db14b093-1455-49b1-8732-5d8267940bc8.bspapp.com/getPhoneNumber";
    OSS_URL = "https://dev-vue-1313145053.cos.ap-chongqing.myqcloud.com";
    IMG_SERVER = "http://124.220.219.72:8084/static";
    UPLOAD_IMG_SERVER = "http://124.220.219.72:8080/goods/upload/file";
}

export default {

    BASE_URL: BASE_URL,
    UNI_CLOUD_FUN: UNI_CLOUD_FUN,
    OSS_URL: OSS_URL,
    IMG_SERVER: IMG_SERVER,
    UPLOAD_IMG_SERVER: UPLOAD_IMG_SERVER,

    ...constant
};
