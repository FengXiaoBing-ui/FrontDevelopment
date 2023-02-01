<template>
    <view class="overhidde margin-tb-sm padding-sm ">
        <view class="flex align-end justify-between">
            <image class="" src="/static/images/pingtaituijian.png" style="height:50rpx" mode="heightFix"></image>
            <view class="flex align-center">
                <image class="margin-left-sm" v-for="item in iconList"
                       :key="item.url" :src="item.img"
                       style="width:40rpx;height: 40rpx" mode="widthFix">
                </image>
            </view>
            <view class="flex align-end text-gray margin-left-sm text-xs">
                查看更多
                <view class="cuIcon-right"></view>
            </view>
        </view>
        <view class="margin-tb-sm overhidde">
            <platformRecommend :recommendList="recommendList.slice(0,2)" :horizontal="true"></platformRecommend>
            <platformRecommend :recommendList="recommendList.slice(2,4)" :horizontal="false"></platformRecommend>
            <platformRecommend :recommendList="recommendList.slice(4,recommendList.length)"
                               :horizontal="true"></platformRecommend>
        </view>
    </view>
</template>

<script>
import platformRecommend from "./platformRecommend";

export default {
    name: "recommend",
    components: {
        platformRecommend
    },
    data() {
        return {
            iconList: [
                {
                    url: "1",
                    img: "/static/images/logo (1).png"
                },
                {
                    url: "2",
                    img: "/static/images/logo (2).png"
                },
                {
                    url: "3",
                    img: "/static/images/logo (3).png"
                },
                {
                    url: "4",
                    img: "/static/images/logo (4).png"
                }
            ],
            recommendList: []
        };
    },
    created() {
        let _this = this;
        let res = this.$http.getGoodList()
        res.then(data => {
            _this.recommendList = data.data
        })
    }
};
</script>

<style>
</style>
