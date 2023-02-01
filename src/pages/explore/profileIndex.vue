<template>
    <view class="bg-gray">
        <u-navbar :autoBack="true" :bgColor="`rgba(255,255,255,${scrollTop})`"
                  :leftIconColor="`rgba(0,0,0,${scrollTop})`" :titleStyle="{'opacity':scrollTop}"
                  title="主页"></u-navbar>
        <template v-if="false">
            <view class="padding" style="background: #767676; color:white;" :style="`margin-top:${CustomBar}px`">
                <view class="flex padding align-center">
                    <view class="">
                        <image style="width: 120rpx;" src="/static/Icon/head.png" mode="widthFix"></image>
                    </view>
                    <view class=" margin-left">
                        <view class="text-xxl text-bold flex align-center">我是大酒蛊
                            <view style="font-size: 1rem; "
                                  class="cuIcon-write margin-lr-sm" @click="pageTo('pages/explore/editorName')">
                            </view>
                        </view>
                        <view class="margin-top-sm">代理商</view>
                    </view>
                </view>
                <view class="flex align-center">
                    <view class=" margin-left">8.2W阅读</view>
                    <view class="margin-left">6.6W点赞</view>
                    <view class="margin-left">3220分享</view>
                </view>
                <view class="flex align-center ">
                    <view class="margin-lr margin-tb-sm cuIcon-location"></view>
                    贵阳市
                </view>
            </view>
            <!-- 圈子内容 -->
            <view class="flex padding-sm margin-top">
                <view class="sub-box"></view>
                <view class="text-lg margin-left-sm text-bold">我的圈子</view>
            </view>
            <!--		<view class="padding text-xl">我的动态</view>-->
            <view class="bg-white padding margin-xs margin-bottom border-radius" v-for="item in list" :key="item.id">
                <view class="flex align-start">
                    <view class="basis-xs text-bold text-xl">{{ item.date }}</view>
                    <view class="basis-xl">
                        <view style="line-height: ;">{{ item.content }}</view>
                        <nineGridImage :list="item.imageList"></nineGridImage>
                        <view class="flex align-center bg-gray  padding-xs border-radius "
                              @click="pageTo('pages/hotActivity/activityDetails')">
                            <view class="cuIcon-goodsfill margin-right text-orange" style="font-size:50rpx;"></view>
                            商品&nbsp;&nbsp;|&nbsp;&nbsp;{{ item.goods }}
                        </view>
                        <view class="text-red margin-top flex justify-between">
                            <view class="">
                                {{ item.cheack }}
                            </view>
                            <view class="text-blue" @click="pageTo('pages/explore/editorIndex')">编辑</view>
                        </view>
                    </view>
                </view>
            </view>
        </template>
        <template>
            <fxbImage class="fxbImage" src="/img/index/pic_bg.png" width="750" height="560"></fxbImage>
            <view class="userInfo" style="padding-top: 120rpx">
                <view class="padding-lr-lg">
                    <view class="flex align-stretch margin-bottom">
                        <fxbImage class="round margin-right" width="140" height="140" src="/img/explore/user.jpg"
                                  mode="aspectFill"></fxbImage>
                        <view class="text-white flex flex-direction justify-around">
                            <view class="text-lg">我是昵称我是昵称</view>
                            <view>代理商</view>
                        </view>
                    </view>
                    <text class="city text-white">贵州贵阳</text>
                    <view class="flex align-center margin-top">
                        <view class="margin-right flex flex-direction align-center text-white">
                            <text>8.2w</text>
                            <text class="">阅读</text>
                        </view>
                        <view class="margin-right flex flex-direction align-center text-white">
                            <text>6.6w</text>
                            <text class="">点赞</text>
                        </view>
                        <view class="margin-right flex flex-direction align-center text-white">
                            <text>3220</text>
                            <text class="">分享</text>
                        </view>
                    </view>
                </view>
            </view>
            <view class="contentBox bg-gray padding-lr-sm padding-tb">
                <view class="whiteBoxShadow flex margin-top-sm" v-for="(item,index) in friendsList" :key="index+'a'">
                    <view class="text-xl text-bold basis-xs">{{ item.date }} <text v-if="item.month" class="text-df">{{ item.month }}月</text> </view>
                    <view class="basis-xl">
                        <view class="flex flex-wrap">
                            <view v-for="(child,index) in item.imgList" :key="index+'b'" class="margin-right-sm margin-bottom-sm videoPosition">
                                <fxbImage width="152" height="152" src="/img/explore/user.jpg" mode="aspectFill"></fxbImage>
                                <view v-if="item.type==='video'" class="video flex justify-center align-center">
                                    <view class="cuIcon-playfill text-white"></view>
                                </view>
                            </view>
                        </view>
                        <view v-if="item.status!==2" class="text-red">{{ item.status===0?'发布内容未通过审核':item.status===1?'发布内容审核中':'' }}</view>
                        <view v-else class="flex align-center text-gray">
                            <text>{{ item.look }}阅读</text>
                            <text class="margin-lr-sm">{{ item.support }}点赞</text>
                            <text>{{ item.share }}分享</text>
                        </view>
                    </view>
                </view>
            </view>
        </template>
    </view>
</template>

<script>
import nineGridImage from "/src/components/common/nineGridImage.vue";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbImage from "/src/components/fxb/fxb-image";

export default {
    components: {
        nineGridImage,
        boxTitle,
        fxbImage
    },
    data() {
        return {
            scrollTop: 0,
            friendsList:[
                {
                    type:"video",
                    status:0,
                    date:"今天",
                    imgList:['']
                },
                {
                    type:"image",
                    status:1,
                    date:"昨天",
                    imgList:['','','','','','','','','']
                },
                {
                    type:"image",
                    status:2,
                    look:"999",
                    support:"666",
                    share:"333",
                    date:"11",
                    month:"9",
                    imgList:['','','','','','','','','']
                },
                {
                    type:"video",
                    status:2,
                    look:"999",
                    support:"666",
                    share:"333",
                    date:"10",
                    month:"9",
                    imgList:['']
                },
            ],
            list: [
                {
                    id: "5w45",
                    date: "今天",
                    cheack: "发布内容未通过审核..",
                    imageList: [{
                        src: "/static/bottle/22.jpeg"
                    }, {
                        src: "/static/bottle/10.jpeg"
                    }, {
                        src: "/static/bottle/66.jpeg"
                    }],
                    content: "贺喜贺喜，下午在花溪区成交了一笔订单，这个代理商很给力，说我们家的这款酒真的好喝很不错。",
                    goods: "茅台1937瓶装酱香酒..."
                },
                {
                    id: "545w",
                    date: "今天",
                    cheack: "正在审核中..",
                    imageList: [{
                        src: "/static/bottle/22.jpeg"
                    }, {
                        src: "/static/bottle/10.jpeg"
                    }, {
                        src: "/static/bottle/66.jpeg"
                    }],
                    content: "贺喜贺喜，下午在花溪区成交了一笔订单，这个代理商很给力，说我们家的这款酒真的好喝很不错。",
                    goods: "茅台1937瓶装酱香酒..."
                },
                {
                    id: "545a",
                    date: "9月5日",
                    cheack: "",
                    imageList: [{
                        src: "/static/bottle/22.jpeg"
                    }, {
                        src: "/static/bottle/22.jpeg"
                    }, {
                        src: "/static/bottle/22.jpeg"
                    }, {
                        src: "/static/bottle/22.jpeg"
                    }, {
                        src: "/static/bottle/22.jpeg"
                    }, {
                        src: "/static/bottle/22.jpeg"
                    }, {
                        src: "/static/bottle/22.jpeg"
                    }, {
                        src: "/static/bottle/10.jpeg"
                    }, {
                        src: "/static/bottle/66.jpeg"
                    }],
                    content: "贺喜贺喜，下午在花溪区成交了一笔订单，这个代理商很给力，说我们家的这款酒真的好喝很不错。",
                    goods: "茅台1937瓶装酱香酒..."
                }
            ]
        };
    },
    onPageScroll(e) {
        if (e.scrollTop >= (100 + this.CustomBar) && e.scrollTop <= (160 + this.CustomBar)) {
            this.scrollTop = (((e.scrollTop - (100 + this.CustomBar)) / 100) * 3.33).toFixed(1);
        }
        if (e.scrollTop > (160 + this.CustomBar)) {
            this.scrollTop = 1.0;
        }
        if (e.scrollTop < (100 + this.CustomBar)) {
            this.scrollTop = 0.0;
        }
    },
    methods: {
        pageTo(url) {
            uni.navigateTo({
                url
            });
        },
        back() {
            uni.navigateBack({
                delta: 1
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.sub-box {
    width: 5px;
    height: 20px;
    background-color: red;
    border-radius: 5px;
}

.border-radius {
    border-radius: .3rem;
}

.userInfo {
    position: relative;
    height: 460rpx;
    z-index: 1;
}
.videoPosition{
    position: relative;
    .video{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 60rpx;
        height: 60rpx;
        background: rgba(29,29,29,0.3);
        border-radius: 50%;
        border: 4rpx solid white;
    }
}
.contentBox {
    border-radius: 20rpx 20rpx 0 0;
    position: relative;
    z-index: 2;
}

.fxbImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
}

.city {
    padding: 8rpx 18rpx;
    background: rgba(255, 255, 255, 0.31);
    border-radius: 18px 18px 18px 18px;
}
</style>
