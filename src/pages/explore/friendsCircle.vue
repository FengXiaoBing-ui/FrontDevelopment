<template>
    <view class="">
        <exploreTopNav></exploreTopNav>
        <u-transition :show="showType === 'quanzi'" mode="slide-left" :style="`margin-top:${CustomBar}px`">
            <view class="transition">
                <view class="quanziBox" @touchstart="viewTouchStart" @touchend="viewTouchEnd">
                    <view class=" bg-white margin-xs padding" v-for="item in quanziList" :key="item.id">
                        <view class="flex align-center padding-xs">
                            <image style="width: 100rpx;" mode="widthFix" src="/static/Icon/head.png"></image>
                            <view
                                class=""
                                style="width:70% ;font-size: 40rpx;margin-left:20rpx;font-weight:600;"
                                @click="pageTo('pages/explore/profileIndex')"
                            >
                                {{ item.userName }}
                            </view>
                            <view class="flex align-center">
                                <view class="cuIcon-location"></view>
                                {{ item.location }}km
                            </view>
                        </view>
                        <view class="margin-left padding-tb-xs quanziInfo"> {{ item.content }}</view>
                        <view
                            class="flex align-center margin-left bg-gray padding-xs "
                            @click="pageTo('pages/hotActivity/activityDetails')"
                        >
                            <view class="cuIcon-goodsfill text-orange" style="font-size: 50srpx;"></view>
                            <view class="margin-lr-sm"> 商品&nbsp;&nbsp;|&nbsp;&nbsp;{{ item.goods }}</view>
                        </view>
                        <view>
                            <nineGridImage :list="item.imagesList"></nineGridImage>
                            <view class="flex align-end justify-between">
                                <view class="text-gray">23分钟前</view>
                                <view class="flex">
                                    <view class="flex align-end">
                                        <view class="cuIcon-appreciate margin-lr-sm"></view>
                                        122
                                    </view>
                                    <view class="flex align-end">
                                        <view class="cuIcon-share margin-lr-sm"></view>
                                        261
                                    </view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </u-transition>
    </view>
</template>

<script>
import nineGridImage from "/src/components/common/nineGridImage.vue";
import exploreTopNav from "./components/exploreTopNav";
import { mapMutations, mapState } from "vuex";

export default {
    components: {
        exploreTopNav,
        nineGridImage
    },
    onShow() {
        this.changeSelectType(1);
    },
    onHide() {

    },
    data() {
        return {
            showSearch: false,
            bgcolor: "#fff",
            showType: "quanzi",
            quanziList: [
                {
                    id: "qdwq5d45ad5a",
                    userName: "我是大酒蛊",
                    location: "2.6",
                    content: "贺喜贺喜，下午在花溪区成交了一笔订单，这个代理商很给力，说我们家的这款酒真的好喝很不错。",
                    goods: "茅台1937瓶装酱香酒...",
                    imagesList: [
                        {
                            src: "/static/bottle/33.jpeg"
                        }
                    ]
                },
                {
                    id: "qdwq52sd5a",
                    userName: "我是大酒蛊",
                    location: "2.6",
                    content: "贺喜贺喜，下午在花溪区成交了一笔订单，这个代理商很给力，说我们家的这款酒真的好喝很不错。",
                    goods: "茅台1937瓶装酱香酒...",
                    imagesList: [
                        {
                            src: "/static/bottle/10.jpeg"
                        },
                        {
                            src: "/static/bottle/11.jpeg"
                        },
                        {
                            src: "/static/bottle/11.jpeg"
                        },
                        {
                            src: "/static/bottle/33.jpeg"
                        },
                        {
                            src: "/static/bottle/55.jpeg"
                        },
                        {
                            src: "/static/bottle/66.jpeg"
                        }
                    ]
                },
                {
                    id: "qdw1ad5a",
                    userName: "我是大酒蛊",
                    location: "2.6",
                    content: "贺喜贺喜，下午在花溪区成交了一笔订单，这个代理商很给力，说我们家的这款酒真的好喝很不错。",
                    goods: "茅台1937瓶装酱香酒...",
                    imagesList: [
                        {
                            src: "/static/bottle/10.jpeg"
                        },
                        {
                            src: "/static/bottle/33.jpeg"
                        },
                        {
                            src: "/static/bottle/55.jpeg"
                        },
                        {
                            src: "/static/bottle/66.jpeg"
                        }
                    ]
                }
            ],
            startX: 0,
            startY: 0,
        };
    },
    computed: {
        ...mapState("explore", ["selectType"])
    },
    methods: {
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
            if (this.startX<(e.changedTouches[0].clientX-70)){
                if (this.startY>e.changedTouches[0].clientY&&this.startY - e.changedTouches[0].clientY<30){
                    this.changeSelectType({val:'0',jump:true});
                }
                if (this.startY<e.changedTouches[0].clientY&&e.changedTouches[0].clientY-this.startY<30){
                    this.changeSelectType({val:'0',jump:true});
                }
                return
            }
        },
        pageTo(url) {
            uni.navigateTo({
                url
            });
        },
        changeType(val) {
            if (val == "quanzi") {
                this.bgcolor = "white";
            } else {
                this.bgcolor = "transparent";
            }
            this.showType = val;
        }
    }
};
</script>

<style>
</style>
