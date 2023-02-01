<template>
<view class="content">
    <exploreTopNav></exploreTopNav>
    <u-transition :show="true" mode="slide-left" :style="`margin-top:${CustomBar}px`">
        <view class="contentBox bg-white padding-lr padding-tb-lg" @touchstart="viewTouchStart" @touchend="viewTouchEnd">
            <view class="flex margin-top-sm u-border-bottom padding-bottom-sm" v-for="(item,index) in friendsList" :key="index+'a'">
                <view class="basis-xs">
                    <u-avatar text="F" shape="square"></u-avatar>
                </view>
                <view class="basis-xl">
                    <view class="userName">我是昵称</view>
                    <view class="margin-tb-sm">贺喜贺喜，下午在花溪区成交了一笔订单，这个代理商很给力，说我们家的这款酒真的好喝很不错。</view>
                    <view class="grid" :class="item.imgList.length==1?'':'col-3'">
                        <view v-for="(child,index) in item.imgList" :key="index+'b'" style="max-width: 540rpx" class="margin-bottom-sm videoPosition">
                            <fxbImage :width="item.imgList.length==1?'':'158'" :height="item.imgList.length==1?'':'158'" src="/img/explore/user.jpg" mode="heightFix"></fxbImage>
                            <view v-if="item.type==='video'" class="video flex justify-center align-center">
                                <view style="font-size: 60rpx" class="cuIcon-playfill text-white"></view>
                            </view>
                        </view>
                    </view>
                    <view @click="details" class="padding-xs margin-right-xs bg-gray light text-cut flex align-center radius">
                        <fxbImage class="margin-right-xs" width="38" height="38" src="/img/explore/newIcon7.png"></fxbImage>
                        茅台1937瓶装酱香酒
                    </view>
                    <view style="color: #4E688D" class="margin-tb-xs">贵阳市·金融城MAX·C座</view>
                    <view class="flex justify-between align-center text-gray">
                        <view class="flex align-center">
                            <text>23分钟前</text>
                            <text style="color: #4E688D" class="margin-left-xs">删除</text>
                        </view>
                        <view class="flex align-center">
                            <view> <text class="cuIcon-like margin-right-xs"></text> 赞</view>
                            <view @click="share" class="margin-left-sm"> <text class="cuIcon-share margin-right-xs"></text> 分享</view>
                        </view>
                        <!--                        <text>{{ item.look }}阅读</text>-->
                        <!--                        <text class="margin-lr-sm">{{ item.support }}点赞</text>-->
                        <!--                        <text>{{ item.share }}分享</text>-->
                    </view>
                </view>
            </view>
        </view>
    </u-transition>
</view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbImage from "/src/components/fxb/fxb-image";
import exploreTopNav from "./components/exploreTopNav";
import { mapMutations } from "vuex";
export default {
    name: "business",
    components:{
        exploreTopNav,
        boxTitle,
        fxbImage
    },
    data(){
        return{
            startX: 0,
            startY: 0,
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
        }
    },
    onShow(){
      this.changeSelectType('2')
    },
    methods:{
        ...mapMutations("explore", ["changeSelectType"]),
        //屏幕左右滑动
        /**
         * 触摸开始
         * @param {Object} e
         */
        viewTouchStart: function(e) {
            if (e.touches.length == 1) {
                //设置触摸起始点水平方向位置
                this.startX = e.changedTouches[0].clientX;
                this.startY = e.changedTouches[0].clientY;
            }

        },
        /**
         * 触摸结束
         * @param {Object} e
         */
        viewTouchEnd: function(e) {
            if (this.startX>(e.changedTouches[0].pageX+70)){
                if (this.startY>e.changedTouches[0].clientY&&this.startY - e.changedTouches[0].clientY<30){
                    this.changeSelectType({val:'0',jump:true});
                }
                if (this.startY<e.changedTouches[0].clientY&&e.changedTouches[0].clientY-this.startY<30){
                    this.changeSelectType({val:'0',jump:true});
                }
                return
            }
        },
        share(){
            plus.share.sendWithSystem({
                type:'text',content:'分享内容',href:'http://www.dcloud.io/',
                pictures:['http://124.220.219.72:8084/static/img/explore/user.jpg']
            })
        },
        details(){
            uni.navigateTo({
                url:"/pages/explore/productDetail"
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.userName{
    font-size: 32rpx;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #4E688D;
    line-height: 38rpx;
}
.videoPosition{
    position: relative;
    .video{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 100rpx;
        height: 100rpx;
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
</style>