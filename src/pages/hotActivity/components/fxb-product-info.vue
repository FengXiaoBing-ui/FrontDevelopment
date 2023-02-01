<template>
    <view class="productInfo">
        <view class="retailPrice flex justify-between">
            <view>
                <text class="text-gray text-sm">建议零售价：</text>
                <text class="text-red text-bold text-lg">￥365.00</text>
            </view>
            <!-- <button class="cu-btn bg-red light sm">八折优惠活动</button> -->
        </view>
        <view class="text-bold text-lg margin-tb-sm">
            53°贵州茅台1935酒500ml单瓶装53°
        </view>
        <view class="flex justify-between">
            <view class="flex align-center text-sm" style="width:66%">
                <fxbImage style="width: 26rpx;height: 26rpx;"
                       src="/productDetails/%E6%B8%A0%E9%81%93%E5%95%86%402x.png"
                       mode=""></fxbImage>
                <text class="text-gray margin-left-xs">贵州好酒选渠道商（会员可见）</text>
            </view>
            <view class="flex align-center justify-end text-sm" style="width: 30%">
                <text class="cuIcon-location"></text>
                <text class="text-gray">贵州·贵阳</text>
            </view>
        </view>
        <view class="tag flex align-center margin-tb-sm">
            <view class="flex align-center">
                <fxbImage style="width: 18rpx;height: 27rpx;"
                       src="/img/index/%E6%A6%9C1%402x.png"
                       mode=""></fxbImage>
                <text style="color: #E54D42;" class="text-sm margin-left-xs">成交榜NO.1</text>
            </view>
            <view class="margin-lr-xs text-gray">|</view>
            <view class="bg-orange light text-sm radius" style="padding: 6rpx 10rpx">服务商首推产品</view>
            <view class="margin-lr-xs text-gray">|</view>
            <view class="bg-orange light text-sm radius" style="padding: 6rpx 10rpx">新品推荐</view>
        </view>
<!--        <view class="flex align-center justify-between">-->
<!--            <view class="flex align-center">-->
<!--                <text class="text-gray text-sm">选择地区：</text>-->
<!--                <text class="text-black">贵州省 贵阳市 观山湖区 世纪城社区</text>-->
<!--            </view>-->
<!--            <text class="cuIcon-right" style="font-size: 32rpx"></text>-->
<!--        </view>-->
<!--        <view class="flex margin-tb-sm">-->
<!--            <text class="text-bold margin-right-sm">当前该地区剩余代理名额为:</text>-->
<!--            <text class="text-red text-bold">26人</text>-->
<!--        </view>-->
        <view class="flex align-center">
            <text class="text-gray">会员代理价:</text>
            <text class="text-red text-bold">￥259.00</text>
<!--            <text class="margin-lr-xs text-red text-bold">￥-->
<!--                <button class="cu-btn bg-red sm" @click="openPopup(2)">会员可查看</button>-->
<!--            </text>-->
            <text class="text-blue margin-lr-sm" @click="openPopup(1)">会员有哪些权益？</text>
        </view>
        <u-popup :show="show" @close="close" @open="open" mode="center" :round="6">
            <view v-show="lookInfoState == 1" class="productParameter bg-white padding-tb-lg padding-lr-sm">
                <view class="flex align-center justify-between">
                    <text></text>
                    <text class="text-lg">会员有哪些权益？</text>
                    <text @click="close" class="cuIcon-close" style="font-size: 24px"></text>
                </view>
                <view class="margin-tb">
                    <text style="line-height: 50rpx">
                        1.为保护酒类销售的区域隐私，注册用户需开启会员，会员需缴纳(¥5000.00)会员费后才能查看代理政策以及代理价格。
                        2.若用户30日内未代理产品，会员费自动退回相应账户，平台根究时长收取一定的服务费，若代理成功后，会员费也会自动退回。
                        3.若用户成功代理产品后还需代理其它产品需重新缴纳会员费，并代理相应产品
                    </text>
                </view>
                <view class="flex justify-between margin-top">
                    <button style="width: 100%" class="cu-btn bg-red"
                            @click="gotoPth('/pages/memberPayment/memberAgreement')">去入驻
                    </button>
                </view>
            </view>
            <view v-show="lookInfoState == 2" class="productParameter bg-white padding-tb-lg padding-lr-sm">
                <view class="flex align-center justify-between">
                    <text></text>
                    <text class="text-lg">温馨提示</text>
                    <text @click="close" class="cuIcon-close" style="font-size: 24px"></text>
                </view>
                <view class="margin-tb">
                    <text>
                        尊敬好的好酒选用户，您好！为保证酒类市场公平行，代理政策必须是会员才可查看，您可以先入驻会员，成为会员后可代理平台产品。谢谢您的理解！
                    </text>
                </view>
                <view class="flex justify-between margin-top">
                    <button @click="close" style="width: 46%" class="cu-btn bg-gray">再考虑</button>
                    <button @click="gotoPth('/pages/memberPayment/memberAgreement')" style="width: 46%" class="cu-btn bg-red">会员入驻</button>
                </view>
            </view>
        </u-popup>
    </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image"
export default {
    name: "fxb-product-info",
    components:{
        fxbImage
    },
    data() {
        return {
            show: false,
            lookInfoState: 0
        };
    },
    methods: {
        gotoPth(path) {
            this.show = false;
            uni.navigateTo({
                url: path
            });
        },
        open() {
            // console.log('open');
        },
        close() {
            this.show = false;
            // console.log('close');
        },
        openPopup(index){
            this.show = true
            this.lookInfoState = index
        }
    }
};
</script>

<style lang="scss" scoped>
.productParameter {
    width: 600rpx;
    border-radius: 20rpx;
}
</style>