<template>
<view class="content">
    <u-navbar title="预约取件" :autoBack="true"> </u-navbar>
    <view class="padding-lr-sm padding-tb" :style="'margin-top:' + CustomBar + 'px;'">
        <view class="whiteBoxShadow">
            <boxTitle title="预约取件"></boxTitle>
            <view class="flex justify-between">
                <view class="flex align-center">
                    <text class="text-red">*</text>
                    <text>选择快递</text>
                </view>
                <view class="flex align-center">
                    <text class="text-gray">请选择快递</text>
                    <text class="cuIcon-right margin-left-sm" style="font-size: 32rpx"></text>
                </view>
            </view>
            <view class="u-border-top margin-tb-sm"></view>
            <view class="flex">
                <u-avatar class="flex-sub" bg-color="#008DFF" font-size="14" text="寄"></u-avatar>
                <view class="margin-left-sm flex-treble">
                    <view class="flex align-center">
                        <text class="margin-right">张晓丹</text>
                        <text class="cuIcon-mobile text-orange"></text>
                        <text>18690726598</text>
                    </view>
                    <view class="text-bold text-lg flex justify-between margin-top-sm">
                        <view class="flex-treble">贵州省贵阳市观山湖区德福中心A3栋6楼10号</view>
                        <view class="flex-sub text-right">
                            <text v-if="false" class="cuIcon-right text-gray" style="font-size: 32rpx"></text>
                        </view>
                    </view>
                </view>
            </view>
            <view class="flex margin-top">
                <u-avatar class="flex-sub" bg-color="#00C800" font-size="14" text="收"></u-avatar>
                <view class="margin-left-sm flex-treble">
                    <view class="flex align-center">
                        <text class="margin-right">张晓丹</text>
                        <text class="cuIcon-mobile text-orange"></text>
                        <text>18690726598</text>
                    </view>
                    <view class="text-bold text-lg flex justify-between margin-top-sm">
                        <view class="flex-treble">贵州省贵阳市观山湖区德福中心A3栋6楼10号</view>
                        <text class="flex-sub cuIcon-right text-right text-gray" style="font-size: 32rpx"></text>
                    </view>
                </view>
            </view>
            <view class="u-border-top margin-tb-sm"></view>
            <view class="flex justify-between">
                <view class="flex align-center">
                    <text class="text-red">*</text>
                    <text>预约时间</text>
                </view>
                <view class="flex align-center">
                    <text class="text-gray">请选择时间</text>
                    <text class="cuIcon-right margin-left-sm" style="font-size: 32rpx"></text>
                </view>
            </view>
        </view>
        <view class="whiteBoxShadow margin-top-sm">
            <boxTitle title="商品信息"></boxTitle>
            <view class="flex align-center margin-top-sm">
                <fxbImage width="80" height="80" mode="" src="/productDetails/Slice%201.png"></fxbImage>
                <text class="text-bold margin-left-sm">东方国宾·尊致酒53°瓶装500ml</text>
            </view>
            <view class="flex justify-between align-center margin-top-sm">
                <text class="text-gray">单价</text>
                <text>¥259.00</text>
            </view>
            <view class="flex justify-between align-center margin-top-sm">
                <text class="text-gray">样品数量</text>
                <text>2</text>
            </view>
        </view>
    </view>
    <view class="botBtn padding-xs bg-white">
        <button @click="submit" style="width: 100%" class="cu-btn bg-red radius">提交</button>
    </view>
</view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image"
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
    name: "appointmentPickup",
    components:{
        boxTitle,
        fxbImage
    },
    data(){
        return{

        }
    },
    methods:{
        submit(){
            uni.redirectTo({
                url:"/pages/admin/orderSample/orderSampleIndex?isAfterSales=true"
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.botBtn{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>