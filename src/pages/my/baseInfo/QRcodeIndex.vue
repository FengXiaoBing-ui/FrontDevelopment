<template>
    <view :style="`background-image:url(${backImage[current]});background-size:102% 102%;background-position: center;`">
        <u-navbar leftIconColor="white" :safeAreaInsetTop="false" :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px'}" titleStyle="color:white" :autoBack="true" title="名片"></u-navbar>
        <view :style="`margin-top:${CustomBar}px;height:calc(100vh - ${CustomBar}px);padding: 24rpx 0;`">
            <view class="text-white flex flex-direction align-center">
                <text class="text-xl">在线签约 一件发货</text>
                <text class="margin-top-sm margin-bottom-xl">B2B供销管理系统</text>
            </view>
            <swiper indicator-dots indicator-color="rgba(207,207,207,1)" indicator-active-color="rgba(255,255,255,1)"
                    style="height: 1060rpx" class="swiper-box" @change="change">
                <!--                TODO:假数据-->
                <swiper-item style="height: 1060rpx" v-for="(item ,index) in list" :key="index">
                    <view v-show="index===0" class="swiper-item">
                        <u-loading-icon style="position: absolute;left: 50%;top:50%;transform: translate(-50%,-50%)"
                                        v-if="isLoading" text="绘制名片中..."></u-loading-icon>
                        <l-painter v-if="index===0 || isLoadMore" @done="done" @progress="progress"
                                   ref="painter">
                            <l-painter-view
                                :css="'backgroundImage: url('+card5+'); width: 100%; height: 866rpx;position: relative;'"
                            >
                                <l-painter-image
                                    :src="user"
                                    css="width: 170rpx; height: 170rpx;position: absolute;top:0rpx;left:293rpx;border:4rpx solid #fff;border-radius:50%"
                                />
                                <l-painter-text
                                    text="这是昵称"
                                    css="position: absolute;top:180rpx;left:320rpx;"
                                />
                                <l-painter-view
                                    css="width:466rpx;border-top:1px dashed rgba(243, 123, 29, 0.6);position: absolute;top:250rpx;left:150rpx;"
                                ></l-painter-view>
                                <l-painter-text
                                    text="好酒选ERP管理平台"
                                    css="position: absolute;top:320rpx;left:210rpx;font-size:40rpx;font-weight:500;color:#F37B1D"
                                />
                                <l-painter-text
                                    text="专业的酒类行业B2B供销管理系统"
                                    css="position: absolute;top:380rpx;left:180rpx;"
                                />
                                <l-painter-qrcode
                                    text="http://124.220.219.72:8083?testId=9527"
                                    css="width: 250rpx; height: 250rpx;position: absolute;top:460rpx;left:260rpx;"
                                />
                                <l-painter-image
                                    :src="logo"
                                    css="width: 152rpx; height: 46rpx;position: absolute;top:740rpx;left:300rpx;"
                                />
                            </l-painter-view>
                        </l-painter>
                    </view>
                    <view v-show="index===1" class="swiper-item padding-lr">
                        <u-loading-icon style="position: absolute;left: 50%;top:50%;transform: translate(-50%,-50%)"
                                        v-if="isLoading" text="绘制名片中..."></u-loading-icon>
                        <l-painter v-if="index===1 || isLoadMore" @done="done" @progress="progress"
                                   ref="painter">
                            <l-painter-view
                                :css="'backgroundImage: url('+card6+'); width: 100%; height: 872rpx;position: relative;'"
                            >
                                <l-painter-image
                                    :src="card7"
                                    css="width: 100%; height: 318rpx;position: absolute;top:0;left:0;"
                                />
                                <l-painter-image
                                    :src="user"
                                    css="width: 136rpx; height: 136rpx;position: absolute;top:230rpx;left:280rpx;border:5rpx solid #ffffff;border-radius:50%"
                                />
                                <l-painter-text
                                    text="这是昵称"
                                    css="position: absolute;top:380rpx;left:300rpx;"
                                />
                                <l-painter-view css="width:90%;height:2rpx;background:#e0e0e0;position: absolute;top:490rpx;left:5%;"></l-painter-view>
                                <l-painter-text
                                    text="好酒选ERP管理平台"
                                    css="position: absolute;top:520rpx;left:50rpx;"
                                />
                                <l-painter-text
                                    text="最专业的酒类行业B2B供销管理系统"
                                    css="position: absolute;top:570rpx;left:50rpx;color:gray;font-size:24rpx"
                                />
                                <l-painter-text
                                    text="·  在线签约     ·  资金保障     ·  区域保护     ·  一件发货"
                                    css="position: absolute;top:620rpx;left:50rpx;font-size:24rpx"
                                />
                                <l-painter-qrcode
                                    text="http://124.220.219.72:8083?testId=9527"
                                    css="position: absolute;top:700rpx;left:50rpx;width: 150rpx; height: 150rpx"
                                />
                                <l-painter-view css="width:400rpx;height:2rpx;background:#e0e0e0;position: absolute;top:700rpx;left:220rpx;"></l-painter-view>
                                <l-painter-text
                                    text="扫描二维码，下载好酒选"
                                    css="position: absolute;top:760rpx;left:220rpx;color:gray;font-size:24rpx"
                                />
                            </l-painter-view>
                        </l-painter>
                    </view>
                    <view v-show="index===2" class="swiper-item padding-lr">
                        <u-loading-icon style="position: absolute;left: 50%;top:50%;transform: translate(-50%,-50%)"
                                        v-if="isLoading" text="绘制名片中..."></u-loading-icon>
                        <l-painter v-if="index===2 || isLoadMore" @done="done" @progress="progress"
                                   ref="painter" class="bg-white" style="border-radius: 20rpx">
                            <l-painter-view
                                :css="'backgroundImage: url('+card8+'); width: 100%; height: 590rpx;position: relative;margin-bottom:282rpx'"
                            >
                                <l-painter-view
                                    css="background: #5C5C5C; width: 206rpx; height: 64rpx; display: inline-block;border-radius:32rpx;display:flex;align-items:center;position: absolute;top:402rpx;left:40rpx"
                                >
                                    <l-painter-image
                                        :src="user"
                                        css="width: 60rpx; height: 60rpx;border-radius:50%"
                                    />
                                    <l-painter-text
                                        text="你的昵称"
                                        css="color:rgba(255,255,255,0.8);margin-left:10rpx"
                                    />
                                </l-painter-view>
                                <l-painter-view
                                    css="position: absolute;top:502rpx;left:40rpx"
                                >
                                    <l-painter-text
                                        :text="item.title"
                                        css="display:block;font-size:34rpx;font-weight:bold"
                                    />
                                    <l-painter-text
                                        :text="item.text"
                                        css="display:block;margin-top:16rpx;font-size:24rpx"
                                    />
                                    <l-painter-text
                                        :text="item.textTwo"
                                        css="display:block;margin-top:8rpx;font-size:24rpx"
                                    />
                                </l-painter-view>
                                <l-painter-view
                                    css="position: absolute;top:634rpx;right:40rpx;text-align:right"
                                >
                                    <l-painter-qrcode
                                        text="http://124.220.219.72:8083?testId=9527"
                                        css="width: 150rpx; height: 150rpx"
                                    />
                                    <l-painter-text
                                        text="扫码下载好酒选"
                                        css="display:block;font-size:24rpx;color:rgba(29,29,29,0.4);margin-top:12rpx"
                                    />
                                </l-painter-view>
                                <l-painter-image
                                    :src="logo"
                                    css="width: 152rpx; height: 46rpx;position: absolute;top:780rpx;left:40rpx;"
                                />
                            </l-painter-view>
                        </l-painter>
                    </view>
                </swiper-item>
            </swiper>
            <view class="shareBox flex justify-around margin-top-sm text-center">
                <view :style="current===0?'background-color:#E54D42':current===1?'background-color:#6E88B9':'background-color: #724B2A'" class="w50 margin-lr flex round flex-direction align-center" @click="sendToWechat">
<!--                    <image style="width: 60rpx" mode="widthFix" src="/static/weixin.png"></image>-->
                    <view class="margin-tb-sm text-white">发送到微信</view>
                </view>
                <view style="background-color: rgba(232, 232, 232, 0.6)" class="w50 margin-lr flex round flex-direction align-center" @click="saveImageToPhotosAlbum">
<!--                    <fxbImage width="60" mode="widthFix" src="/qrCode/downloadImage.png"></fxbImage>-->
                    <view class="margin-tb-sm text-white">保存到相册</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image";
import config from "/src/config/index";
import winQrcode from "/src/components/win-qrcode/win-qrcode";
import rCanvas from "/src/components/r-canvas/r-canvas.vue";

export default {
    name: "QRcodeIndex",
    components: {
        fxbImage,
        winQrcode,
        rCanvas
    },
    data() {
        return {
            isLoadMore: false,
            isLoading: true,
            backgroundImage: config.IMG_SERVER + "/shareCard/card3.png",
            logo: config.IMG_SERVER + "/qrCode/logo.png",
            user: config.IMG_SERVER + "/user/userImg.png",
            current: 0,
            card5: config.IMG_SERVER + "/shareCard/card5.png",
            card6: config.IMG_SERVER + "/shareCard/card6.png",
            card7: config.IMG_SERVER + "/shareCard/card7.png",
            card8: config.IMG_SERVER + "/shareCard/card8.png",
            backImage: [
                config.IMG_SERVER + "/shareCard/card3.png",
                config.IMG_SERVER + "/shareCard/card4.png",
                config.IMG_SERVER + "/shareCard/card2.png"
            ],
            list: [
                {
                    title: "好酒选ERP管理平台",
                    text: "最专业的酒类行业B2B供销管理系统",
                    textTwo: "在线签约/资金保障/一件发货/区域保护"
                },
                {
                    title: "好酒选",
                    text: "最专业",
                    textTwo: "在线签约"
                },
                {
                    title: "管理平台",
                    text: "管理系统",
                    textTwo: "区域保护"
                }
            ]
        };
    },
    onShow() {
        setTimeout(() => {
            this.isLoadMore = true;
        }, 1000);
    },

    methods: {
        change(e) {
            this.current = e.detail.current;
        },
        //绘制海报进度
        progress(e) {

        },
        //绘制完成
        done(e) {
            this.isLoading = false;
        },
        sendToWechat() {
            this.$refs.painter[this.current].canvasToTempFilePathSync({
                fileType: "jpg",
                // 如果返回的是base64是无法使用 saveImageToPhotosAlbum，需要设置 pathType为url
                pathType: "url",
                quality: 1,
                success: (res) => {
                    console.log(res.tempFilePath);
                    plus.share.sendWithSystem({
                        pictures: [res.tempFilePath]
                    });
                }
            });
        },
        saveImageToPhotosAlbum() {
            this.$refs.painter[this.current].canvasToTempFilePathSync({
                fileType: "jpg",
                // 如果返回的是base64是无法使用 saveImageToPhotosAlbum，需要设置 pathType为url
                pathType: "url",
                quality: 1,
                success: (res) => {
                    console.log(res.tempFilePath);
                    // 非H5 保存到相册
                    uni.saveImageToPhotosAlbum({
                        filePath: res.tempFilePath,
                        success: function() {
                            uni.showToast({
                                title: "已保存到相册",
                                icon: "none"
                            });
                            console.log("save success");
                        }
                    });
                }
            });
        }
    }

};
</script>

<style scoped lang="scss">
/deep/ .uni-swiper-wrapper {
    position: relative;
    .swiper-item {
        position: relative;
        border-radius: 30rpx;
        box-sizing:border-box;
    }
}

/deep/ .u-navbar {
    background-color: transparent !important;
    .u-navbar__content {
        background-color: transparent !important;
        background-repeat: no-repeat;
        border-bottom: 0;
        margin-top: var(--StatusBar) !important;
    }
}
.shareBox{
    position: absolute;
    width: 100%;
    bottom: 100rpx;
    left: 50%;
    transform: translateX(-50%);
}
</style>
