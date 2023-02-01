<template>
    <!-- 轮播图 -->
    <view class="Swiper-mfw-index-box">
        <view class="Swiper-mfw-index Swiper-box">
            <swiper class="Swiper-mfw"
                    :circular="true"
                    :indicator-dots="false"
                    :autoplay="autoplay"
                    :interval="3000"
                    :duration="1000"
                    :current="current"
                    :disable-touch="disable_touch"
                    @change="change"
            >
                <!-- 只需要前5条数据 -->
                <swiper-item class="swiper-mfw-item"
                             v-if="index <= 4"
                             v-for="(item,index) in list"
                             :key="index"
                >
                    <!-- /*
                     1. 这里不需要用api控制暂停视频
                     2. 因为video标签上加了v-if="current==index"
                     3. 当current == index时才会创建视频组件
                     4. 否current != index则就销毁视频
                     */ -->
                    <!-- 如果有视频，则显示视频-->
                    <template v-if="item.mp4 && current==index">
                        <video class="ImageVideo"
                               :id="'ImageVideo'+index"
                               :ref="'ImageVideo'+index"
                               :src="item.mp4"
                               :loop="true"
                               :muted="false"
                               :autoplay="current==index ? true : false"
                               :controls="false"
                               :show-fullscreen-btn="false"
                               :show-play-btn="false"
                               :enable-progress-gesture="false"
                               :play-strategy="0"
                               :poster="item.Image"
                        ></video>
                    </template>
                    <!-- 否则显示图片 -->
                    <image v-else :src="item.Image" class="Image" mode="aspectFill"></image>

                </swiper-item>
            </swiper>
            <!-- 指示器 [Top] -->
            <view v-if="false" class="Swiper-indicator-box indicator-Top-box">
                <!-- Top顶部 [今日首推-盒子] -->
                <view class="Top-date-hot">
                    <!-- 左边盒子 - 日 -->
                    <view class="left-date-ri">
                        <text class="date-ri-text text app-ttf">07</text>
                    </view>
                    <!-- 中间盒子 - 年，月 -->
                    <view class="conter-date-nianyue">
                        <!-- 左边 黄色占位宽度盒子 -->
                        <view class="left-width-bgcolor"></view>
                        <!-- 右边 年月盒子 -->
                        <view class="right-date-nianyue">
                            <!-- 顶部 月份 [英文显示] -->
                            <text class="Top-yue-usa text">AUG</text>
                            <text class="Bottom-nian text">2021</text>
                        </view>
                    </view>
                    <!-- 右边盒子 - 今日首推 -->
                    <view class="right-hot-ttf">
                        <text class="text hot-text app-ttf">热门</text>
                    </view>
                </view>
            </view>
            <!-- 指示器 [Bottom] -->
            <view v-if="false" class="Swiper-indicator-box indicator-Btoom-box">
                <!-- bottom底部 [详情-盒子] -->
                <view class="Bottom-datall">
                    <!-- 指示器 [轮播信息 -> 标题,用户,头像,所在地] -->
                    <view class="Swiper-indicator-Top">
                        <view class="Top-item"
                              v-if="current==index"
                              :class="current==index ? 'current':'no' "
                              v-for="(item,index) in list"
                              :key="index"
                        >
                            <!-- 如果存在视频，则显示“视频预览”提示 -->
                            <view v-if="item.mp4" class="Top-ImageVideo">
                                <!-- icon图标 -->
                                <view class="Icons">
                                    <!-- #ifdef APP-NVUE -->
                                    <text class="nvueiconfont">&#xec30;</text>
                                    <!-- #endif -->
                                    <!-- #ifndef APP-NVUE -->
                                    <text class="app-iconfont custom-icon-play-c-copy"></text>
                                    <!-- #endif -->
                                </view>
                                <text class="text ImageVideo-text app-ttf">视频预览</text>
                            </view>
                            <!-- 标题 -->
                            <view class="Top-Title">
                                <text class="text title-text">{{ item.title }}</text>
                            </view>
                            <!-- 用户信息 -->
                            <view class="Bottom-UserInfo">
                                <!-- 头像 -->
                                <view class="UserImage-box">
                                    <image :src="item.UserImage" class="Image" mode="aspectFill"></image>
                                </view>
                                <!-- 用户名 -->
                                <view class="textbox UserName-box">
                                    <text class="text wo-text">我是</text>
                                    <text class="text UserInfo">{{ item.UserName }}</text>
                                </view>
                                <!--  左右分割，中间是[.] -->
                                <view class="jiange-box">
                                    <text class="text jiange-text">·</text>
                                </view>
                                <!-- 所在地 -->
                                <view class="textbox UserGPS-box">
                                    <text class="text wo-text">我在</text>
                                    <text class="text UserInfo">{{ item.UserGPS }}</text>
                                </view>
                            </view>
                        </view>
                    </view>
                    <!-- 指示器 [左边图片列表+右边按钮] -->
                    <view class="Swiper-indicator-Bottom">
                        <!-- 左边 -->
                        <view class="Bottom-left-Imagelist">
                            <!-- 只需要前5条数据 -->
                            <!-- 指示图(小图模式) -->
                            <view class="Bottom-item"
                                  v-if="Number(index) <= 4"
                                  :class="current==index ? 'current':'no'"
                                  v-for="(item,index) in list"
                                  :key="index"

                                  @click="SwiperIndTap(index)"
                            >
                                <image :src="item.Image" class="Image" mode="aspectFill"></image>
                            </view>
                        </view>
                        <!-- 右边 -->
                        <view class="Bottom-right-lili-btn">
                            <!-- 历历在目 -->
                            <view class="Bottom-item">
                                <text class="left text indicator-text">历历在目</text>
                                <!-- icon图标 -->
                                <view class="right Icons">
                                    <!-- #ifdef APP-NVUE -->
                                    <text class="nvueiconfont">&#xec30;</text>
                                    <!-- #endif -->
                                    <!-- #ifndef APP-NVUE -->
                                    <text class="app-iconfont custom-icon-play-c-copy"></text>
                                    <!-- #endif -->
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "FatFatMeng-Swiper-mfw",
    props: {
        // 是否自动轮播
        autoplay: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            current:0,
            list: [{
                "Image": "https://b1-q.mafengwo.net/s17/M00/78/09/CoUBXmERFxyAMagZAAd7ujMYDZU158.png",
                "mp4": "https://1251101074.vod2.myqcloud.com/40efee9dvodtransgzp1251101074/9c9de6b45285890801439533895/v.f20.mp4",
                "title": "【岛屿来信】在冰岛写了封信，寄给15岁的自己",
                "UserImage": "https://n1-q.mafengwo.net/s12/M00/D1/C3/wKgED1v3uaOADWepACAWS9q5Rhg19.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",
                "UserName": "诗的PHOTO",
                "UserGPS": "杭州"
            }, {
                "Image": "https://b1-q.mafengwo.net/s15/M00/29/CD/CoUBGWEOpSGAGvNEAAcdPGsxn34626.png",
                "mp4": "https://1251101074.vod2.myqcloud.com/40efee9dvodtransgzp1251101074/9c9de6b45285890801439533895/v.f20.mp4",
                "title": "【蜂首11周年纪念】4018天后，我们继续约定！",
                "UserImage": "https://b1-q.mafengwo.net/s10/M00/73/96/wKgBZ1kSsyKAa_91AACgQYkA64o659.png?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",
                "UserName": "游记总编辑",
                "UserGPS": "北京"
            }, {
                "Image": "https://n1-q.mafengwo.net/s16/M00/EB/2D/CoUBUmDlheiAdABtAAgo3xeAaaQ458.jpg?imageMogr2/thumbnail/!440x300r/strip/gravity/Center/crop/!440x300/quality/90",
                "mp4": "",
                "title": "一半风光一半人文，与你奔赴藏地找寻世界如初的模样",
                "UserImage": "https://p1-q.mafengwo.net/s10/M00/5C/55/wKgBZ1mRHV2APLX9AABt9unXidc25.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",
                "UserName": "郭小yan",
                "UserGPS": "广州"
            }, {
                "Image": "https://b1-q.mafengwo.net/s18/M00/21/34/CoUBYWEHpHOAU3amAAQzcB1XxYQ493.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
                "mp4": "",
                "title": "海州日记：山海辽阔浪漫 海鲜诱惑难挡，全是人间值得！",
                "UserImage": "https://b1-q.mafengwo.net/s9/M00/B3/D4/wKgBs1hgfP-Ae9emABNBFw8wn4U38.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",
                "UserName": "风之七彩",
                "UserGPS": "无锡"
            }, {
                "Image": "https://n1-q.mafengwo.net/s16/M00/40/C8/CoUBUmD1sDWAAeQFAAnK3yTNs_I942.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
                "mp4": "",
                "title": "西北大环线自驾丨初夏，一场7日逃离「地球」的旅行",
                "UserImage": "https://n1-q.mafengwo.net/s1/M00/9A/AA/wKgIC1uEE6SAF_DOAACyC15Thk811.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",
                "UserName": "帆妮儿",
                "UserGPS": "北京"
            }, {
                "Image": "https://n1-q.mafengwo.net/s16/M00/81/40/CoUBUmD5W1iAanT9ABE22ZlvQlg407.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
                "mp4": "",
                "title": "在缙云，我发现了去仙侠宇宙的传送门",
                "UserImage": "https://b1-q.mafengwo.net/s15/M00/8E/41/CoUBGV3h1xqAdMEiACG5XnWSoMA99.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",
                "UserName": "莎莎爱旅行",
                "UserGPS": "上海"
            }, {
                "Image": "https://n1-q.mafengwo.net/s16/M00/42/A2/CoUBUmDw8T6AdDCjABhWy-clT_M281.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
                "mp4": "",
                "title": "【魔都漫步】去上海，穿越时空的盛夏",
                "UserImage": "https://b1-q.mafengwo.net/s15/M00/92/A8/CoUBGWECgimABvHVAAlxqNsMSGw93.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",
                "UserName": "goericgo",
                "UserGPS": "青岛"
            }],

            // 是否禁止用户 touch 操作
            disable_touch: false//touch 用户划动引起swiper变化。
        };
    },
    watch: {},
    methods: {
        // current 改变时会触发 change 事件，event.detail = {current: current, source: source}
        change(e) {
            let index = e.detail.current;
            let event = {
                current: index
            };
            this.current = index;
            this.$emit("change", event);
        },
        // 手动点击了指示器[小图模式]
        SwiperIndTap(e) {
            let index = e;
            let event = {
                current: index
            };
            this.$emit("change", event);
        }
    },
    beforeCreate() {
        // #ifdef APP-PLUS
        const domModule = weex.requireModule("dom");
        // APP NVUE下 加载字体图标
        domModule.addRule("fontFace", {
            fontFamily: "appiconfont",
            src: "url('http://at.alicdn.com/t/font_2582495_l8bsl3n1qme.ttf')"
        });
        // 自定义字体,不是icons字体图标
        domModule.addRule("fontFace", {
            fontFamily: "appttf",
            src: "url('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-6f9528be-c345-44ba-b6fd-591d2d036aec/9768b86a-b79c-41bc-9305-c42785200f0d.ttf')"
        });
        // #endif
    }
};
</script>

<style lang="scss" scoped>
// 轮播图
.Swiper-box {
    //解决swiper轮播图圆角滑动会变成直角然后再变回圆角问题
    //圆角加在Swiper父容器上,H5和小程序可行。nvue下不行。
    /* #ifndef APP-NVUE */
    border-radius: 20rpx;
    overflow: hidden !important;
    transform: translateY(0) !important;
    transform: translateX(0) !important;
    /* #endif */
}

.Swiper-mfw-index-box {
    /* #ifndef APP-NVUE */
    display: flex;

    view {
        display: flex;
    }

    /* #endif */
    width: 750rpx;
    justify-content: center;
    align-items: center;
    background-color: #f3f6f9;
    margin-bottom: 20rpx;

    .Swiper-mfw-index {
        // 轮播图
        width: 710rpx;
        //background-color: #007AFF;
        .Swiper-mfw {
            width: 710rpx;
            //height: 235px;//测量的马蜂窝APP首页轮播的高度
            height: 494rpx;

            border-radius: 20rpx;

            .swiper-mfw-item {
                width: 710rpx;
                height: 494rpx;

                border-radius: 20rpx;

                .Image, .ImageVideo {
                    /* #ifdef APP-NVUE */
                    border-radius: 20rpx;
                    /* #endif */
                    width: 710rpx;
                    height: 494rpx;
                }
            }
        }

        // 指示器
        .Swiper-indicator-box {
            width: 710rpx;
            align-items: center;
            // Top顶部 [今日首推-盒子]
            .Top-date-hot {
                //background-color: #67C23A;
                width: 650rpx;
                padding: 20rpx 0;
                flex-direction: row;
                flex-wrap: nowrap;

                .left-date-ri {
                    height: 80rpx;
                    justify-content: center;

                    .date-ri-text {
                        color: #FFFFFF;
                        /* #ifdef APP-NVUE */
                        font-size: 54rpx;
                        /* #endif */
                        /* #ifndef APP-NVUE */
                        font-size: 56rpx;
                        /* #endif */
                        font-weight: 700;
                        //font-family: ;
                    }
                }

                .conter-date-nianyue {
                    margin: 0 14rpx;
                    height: 80rpx;
                    justify-content: center;
                    align-items: center;
                    flex-direction: row;
                    flex-wrap: nowrap;

                    .left-width-bgcolor {
                        width: 10rpx;
                        /* #ifdef APP-NVUE */
                        height: 40rpx;
                        /* #endif */

                        /* #ifndef APP-NVUE */
                        height: 50rpx;
                        /* #endif */

                        border-radius: 5rpx;
                        background-color: #ffda02;
                        //margin: 0 14rpx;
                        margin-right: 14rpx;
                    }

                    .right-date-nianyue {
                        flex-direction: column;

                        .Top-yue-usa, .Bottom-nian, .text {
                            color: #FFFFFF;
                            /* #ifndef APP-NVUE */
                            font-size: 24rpx;
                            height: 24rpx;
                            /* #endif */

                            /* #ifdef APP-NVUE */
                            font-size: 20rpx !important;
                            /* #endif */
                            font-weight: 700;
                        }

                        .Bottom-nian, .text {
                        }
                    }
                }

                .right-hot-ttf {
                    height: 80rpx;
                    justify-content: center;

                    .hot-text {
                        color: #FFFFFF;
                        /* #ifdef APP-NVUE */
                        font-size: 40rpx;
                        /* #endif */
                        /* #ifndef APP-NVUE */
                        font-size: 50rpx;
                        font-family: cursive;
                        /* #endif */
                        font-weight: 700;
                    }

                    .ttf {
                    }
                }
            }

            // 底部详情
            .Bottom-datall {
                width: 710rpx;
                align-items: center;
                //background-color: #F0AD4E;
                // 指示器 [轮播信息 -> 标题,用户,头像,所在地]
                .Swiper-indicator-Top {
                    width: 650rpx;
                    padding: 20rpx 0;
                    //background-color: #0FAEFF;
                    .current {
                    }

                    .Top-item {
                        width: 650rpx;
                        // 如果有视频，则显示“视频预览”
                        .Top-ImageVideo {
                            /* #ifdef APP-NVUE */
                            width: 130rpx;
                            padding: 4rpx 6rpx;
                            margin-bottom: 20rpx;
                            /* #endif */

                            /* #ifndef APP-NVUE */
                            width: 150rpx;
                            padding: 2rpx 6rpx;
                            margin-bottom: 10rpx;
                            /* #endif */


                            background-color: #ffda02;
                            border-radius: 20rpx;
                            flex-direction: row;
                            flex-wrap: nowrap;
                            align-items: center;

                            .Icons {
                                .nvueiconfont, .app-iconfont {
                                    color: #242629;
                                    /* #ifdef APP-NVUE */
                                    font-size: 24rpx;
                                    /* #endif */
                                    /* #ifndef APP-NVUE */
                                    font-size: 26rpx;
                                    /* #endif */
                                }
                            }

                            .ImageVideo-text {
                                color: #242629;
                                /* #ifdef APP-NVUE */
                                font-size: 20rpx;
                                /* #endif */
                                /* #ifndef APP-NVUE */
                                font-size: 24rpx;
                                /* #endif */
                            }
                        }

                        // 标题
                        .Top-Title {
                            width: 650rpx;
                            align-items: flex-start;

                            .title-text {
                                width: 650rpx;
                                color: #FFFFFF;
                                /* #ifdef APP-NVUE */
                                font-size: 32rpx;
                                /* #endif */
                                /* #ifndef APP-NVUE */
                                font-size: 28rpx;
                                /* #endif */
                                font-weight: 700;
                            }
                        }

                        // 用户信息盒子
                        .Bottom-UserInfo {
                            flex-direction: row;
                            flex-wrap: nowrap;
                            margin-top: 20rpx;
                            align-items: center;

                            .UserImage-box {
                                width: 40rpx;
                                height: 40rpx;
                                border-radius: 20rpx;
                                margin-right: 20rpx;

                                .Image {
                                    width: 40rpx;
                                    height: 40rpx;
                                    border-radius: 20rpx;
                                }
                            }

                            .textbox {
                                flex-direction: row;
                                flex-wrap: nowrap;

                                .wo-text, .UserInfo {
                                    font-size: 24rpx;
                                }

                                .wo-text {
                                    color: #f1f2f6;
                                    margin-right: 8rpx;
                                }

                                .UserInfo {
                                    color: #FFFFFF;
                                    font-weight: 700;
                                }
                            }

                            .jiange-box {
                                margin: 0 8rpx;

                                .jiange-text {
                                    color: #f1f2f6;
                                }
                            }
                        }

                    }
                }

                // 指示器 [左边图片列表+右边按钮]
                .Swiper-indicator-Bottom {
                    width: 710rpx;
                    justify-content: space-between;
                    //background-color: #1df;
                    border-radius: 20rpx;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    padding: 14rpx;
                    //background-image:linear-gradient(to bottom right,#AD18F9,#05DFC7);
                    //线性渐变
                    //background-image:linear-gradient(to bottom,#AD18F9,#05DFC7);
                    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(101, 101, 101, 0.7));
                    // 左边[图片列表]
                    .Bottom-left-Imagelist {
                        width: 530rpx;
                        //background-color: #F368E0;
                        flex-direction: row;
                        flex-wrap: nowrap;
                        justify-content: space-between;
                        // 指示图(小图模式)
                        .Bottom-item {
                            width: 98rpx;
                            height: 78rpx;
                            border-radius: 14rpx;

                            .Image {
                                width: 98rpx;
                                height: 78rpx;
                                border-radius: 14rpx;
                            }
                        }

                        .current {
                            //border: 4rpx solid #ffda02;
                            .Image {
                                /* #ifndef APP-NVUE */
                                border: 4rpx solid #ffda02;
                                /* #endif */

                                /* #ifdef APP-NVUE || MP */
                                border: 6rpx solid #ffda02;
                                /* #endif */

                            }
                        }
                    }

                    // 右边 [历历在目-按钮]
                    .Bottom-right-lili-btn {
                        width: 145rpx;
                        //background-color: #DD524D;
                        align-items: center;
                        justify-content: center;
                        border-radius: 10rpx;
                        //background-image:linear-gradient(to bottom right,#AD18F9,#05DFC7);
                        //线性渐变
                        background-image: linear-gradient(to bottom right, rgba(249, 24, 24, 0.65), rgba(220, 5, 223, 0.65));
                        //background-image:linear-gradient(to bottom,#AD18F9,#05DFC7);
                        //background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(101, 101, 101, 0.7));
                        // 历历在目
                        .Bottom-item {
                            width: 145rpx;
                            flex-direction: row;
                            flex-wrap: nowrap;
                            align-items: center;
                            justify-content: center;

                            .indicator-text {
                                color: #ffda02;
                                font-size: 24rpx;
                                font-weight: 700;
                            }

                            .Icons {
                                .nvueiconfont, .app-iconfont {
                                    color: #ffda02;
                                    font-size: 28rpx;
                                }
                            }
                        }
                    }

                }
            }
        }
    }
}

.Swiper-mfw-index {
}

.Swiper-mfw {
    position: relative;
}

.indicator-Top-box {
    position: absolute;
    // 定位到顶部
}

.indicator-Btoom-box {
    position: absolute;
    bottom: 0;
    // 定位到底部
}
</style>