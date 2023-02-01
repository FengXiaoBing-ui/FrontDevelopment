<template>
    <view>
        <u-navbar :autoBack="true" title="确认支付"></u-navbar>
        <view :style="`margin-top:${CustomBar +10}px`" >
            <view class="whiteBoxShadow">
                <view class="text-bold flex align-center">
                    <view class="margin-right-sm redBlock"></view>
                    金额合计
                </view>
                <view class="w100 text-center margin-top-sm">
                    <text class="text-red text-xxl text-bold">￥4500.00</text>
                    <view class="text-sm text-gray">{{ convertCurrency(4500) }}</view>
                </view>
            </view>
            <view class="margin-top-sm bg-white radius padding">
                <view class="text-bold flex align-center">
                    <view class="margin-right-sm redBlock"></view>
                    选择支付方式
                </view>
                <paySelect :data-list="dataList"></paySelect>
            </view>
        </view>
        <view class="botBtn foot bg-white padding-sm">
            <view class="cu-btn w100 bg-red radius" @click="pay">提交付款</view>
        </view>
    </view>
</template>

<script>
import paySelect from "/src/components/fxb-pay-select/paySelect";
import convertCurrency from "/src/utils/dataFormat/convertCurrency";

export default {
    name: "paymentMethod",
    components: {
        paySelect
    },
    data() {
        return {
            dataList: [
                {
                    icon: "weixinzhifu",
                    radioName: "微信支付"
                },
                {
                    icon: "zhifubao",
                    radioName: "支付宝支付"
                },
                {
                    icon: "zhuanzhang",
                    radioName: "银行转账"
                }
            ]
        };
    },
    methods: {
        convertCurrency,
        pay(){
            uni.navigateTo({
                url: `pages/payResult/payResult?status=registrationFee`
            });
        }

    }
};
</script>

<style scoped>
.redBlock {
    width: 0.25rem;
    height: 20px;
    background: red;
    border-radius: 0.2rem;
}
.botBtn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>