<template>
    <view>
        <boxTitle border-color="#1CBBB4" right-class="bg-gray padding-xs radius" right-icon="right" right-text="查看全部"
                  right-text-class="" title="测评"></boxTitle>
        <view v-for="(item,index) in evaluationList" :key="index" class="evaluation margin-top">
            <view class="">{{ item.title }}</view>
            <view class="flex align-center justify-between margin-top-sm">
                <fxbImage v-for="(child,indexes) in item.children" v-if="item.children!==null" :key="indexes"
                       :src="child" class="evaluationImg radius" mode="aspectFill"></fxbImage>
            </view>
        </view>

        <swiper :autoplay="true" :circular="true" :indicator-dots="true"
                class="card-swiper" duration="500" indicator-active-color="#0081ff" indicator-color="#8799a3"
                interval="5000"
        >
            <swiper-item v-for="(item,index) in videoUrlList" :key="index" @click=" seeViode(item.url)">
                <view class="swiper-item videoImage">
                    <fxbImage :src="item.videoImg" class="" style="width: 100%;height: 373rpx"></fxbImage>
                    <view class="cuIcon-playfill playIcon" style="font-size: 50px"></view>
                </view>
            </swiper-item>
        </swiper>
    </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image"
import boxTitle from "/src/pages/agent/components/fxb-box-title";

export default {
    name: "fxb-evaluation",
    components: {
        boxTitle,
        fxbImage
    },
    data() {
        return {
            videoUrlList: [
                {
                    title: "53°飞天茅台，大师教你看看什么才是真正的好酒？",
                    videoImg: "http://124.220.219.72:8084/static/img/goodsInfo/2022-10-21_122813.png",
                    url: "http://124.220.219.72:8084/static/video/0ccb73cee3931753d52157ed5190ae5a.mp4"
                },
                {
                    title: "53°飞天茅台，大师教你看看什么才是真正的好酒？",
                    videoImg: "http://124.220.219.72:8084/static/img/goodsInfo/2022-10-21_122909.png",
                    url: "http://124.220.219.72:8084/static/video/17003396a830aab8272c8cfc525598ff.mp4"
                },
                {
                    title: "53°飞天茅台，大师教你看看什么才是真正的好酒？",
                    videoImg: "http://124.220.219.72:8084/static/img/goodsInfo/2022-10-21_122947.png",
                    url: "http://124.220.219.72:8084/static/video/2d046c81c094422a6df133a0e5e8de43.mp4"
                }, {
                    title: "53°飞天茅台，大师教你看看什么才是真正的好酒？",
                    videoImg: "http://124.220.219.72:8084/static/img/goodsInfo/2022-10-21_123017.png",
                    url: "http://124.220.219.72:8084/static/video/58c4411de3e4d172894c383c84d42823.mp4"
                }, {
                    title: "53°飞天茅台，大师教你看看什么才是真正的好酒？",
                    videoImg: "http://124.220.219.72:8084/static/img/goodsInfo/2022-10-21_123046.png",
                    url: "http://124.220.219.72:8084/static/video/6385eb736308f873ccd3d1a08248e96b.mp4"
                }, {
                    title: "53°飞天茅台，大师教你看看什么才是真正的好酒？",
                    videoImg: "http://124.220.219.72:8084/static/img/goodsInfo/2022-10-21_123114.png",
                    url: "http://124.220.219.72:8084/static/video/share_42dd8368ad41f4742764c0b7aa10c52b.mp4"
                }

            ],
            evaluationList: [
                {
                    title: "供不应求的53°飞天茅台，真的有那么好喝吗",
                    children: [
                        "/productDetails/ddd.png",
                        "/productDetails/bbb.png",
                        "/productDetails/ccc.png"
                    ]
                },
                {
                    title: "供不应求的53°飞天茅台，真的有那么好喝吗",
                    children: [
                        "/productDetails/ddd.png",
                        "/productDetails/bbb.png",
                        "/productDetails/ccc.png"
                    ]
                },
                {
                    title: "53°飞天茅台，大师教你看看什么才是真正的好酒？",
                    children: null,
                    videoImg: "/productDetails/%E8%A7%86%E9%A2%91%402x.png"
                }
            ]
        };
    },
    methods: {
        seeViode(url) {
            uni.navigateTo({
                url: `pages/index/videoPages/goodsVideo?video=${url}`
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.evaluationImg {
    width: 30%;
    height: 160rpx;
}

.videoImage {
    width: 100%;
    height: 373rpx;
    position: relative;

    .playIcon {
        position: absolute;
        left: 50%;
        top: 50%;
        color: white;
        transform: translate(-50%, -50%);
        opacity: 0.6;
    }

}
</style>