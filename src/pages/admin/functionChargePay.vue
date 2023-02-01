<template>
    <view class="content">
        <u-navbar
            :border="false"
            :fixed="true"
            title="服务支付"
            :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
            :safeAreaInsetTop="false"
            :autoBack="true"
        >
        </u-navbar>
        <view class="padding" :style="`margin-top:${CustomBar}px`">
            <view class="whiteBoxShadow">
                <boxTitle title="开通套餐"></boxTitle>
                <view class="text-bold text-xl">数据分析</view>
                <view class="flex align-center justify-between u-border radius padding-sm margin-top-sm">
                    <view class="flex align-center">
                        <image style="width: 100rpx;height: 100rpx;" :src="require('/src/static/01.jpg')"
                               mode="aspectFill"></image>
                        <view style="height: 100rpx;" class="margin-left-sm flex flex-direction justify-between">
                            <view class="text-bold text-lg">半年套餐</view>
                            <view>优惠后合￥28.00/月</view>
                        </view>
                    </view>
                    <view class="text-red text-bold">￥<text class="text-xxl">180.</text>00
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow invoice margin-top flex justify-between">
                <text class="text-gray">不开发票</text>
                <view @click="">
                    <text>增值税发票</text>
                    <text class="cuIcon-right margin-left"></text>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top">
                <boxTitle title="选择支付方式"></boxTitle>
                <paySelect :dataList="dataList"></paySelect>
            </view>
        </view>
        <view @click="" class="botBtn bg-white padding-sm flex align-center justify-between">
            <text class="text-red text-bold text-lg">￥180.00</text>
            <button class="cu-btn bg-red radius">确认开通</button>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import paySelect from "/src/components/fxb-pay-select/paySelect";
export default {
    name: "functionChargePay",
    components:{
        boxTitle,
        paySelect
    },
    data(){
        return{
            dataList: [
                {
                    logo: require("/src/static/weixin.png"),
                    radioName: "微信支付",
                },
                {
                    logo: require("/src/static/zhifubao.png"),
                    radioName: "支付宝支付",
                },
                {
                    logo: require("/src/static/yinhangka.png"),
                    radioName: "银行转账",
                },
            ],
        }
    }
};
</script>

<style lang="scss" scoped>
.botBtn{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>