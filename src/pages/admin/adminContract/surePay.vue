<template>
    <view class="content">
        <u-navbar title="确认支付" :fixed="true" :autoBack="true"></u-navbar>
        <view class="padding-top" :style="'margin-top:' + CustomBar + 'px;padding-bottom: 120rpx'">
            <view class="whiteBoxShadow">
                <boxTitle title="金额合计"></boxTitle>
                <view class="u-border-top margin-top"></view>
                <view class="flex flex-direction justify-center align-center padding-tb">
                    <view class="text-red text-xl">¥982600.00</view>
                    <view class="text-gray text-sm margin-top-sm" style="font-style: oblique">玖拾捌万贰仟陆佰元整</view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="选择支付方式"></boxTitle>
                <paySelect :data-list="payList"></paySelect>
            </view>
        </view>
        <view class="padding-xs bg-white botBtn flex justify-end">
            <button @click="gotoPayResult" class="cu-btn flex-sub bg-red radius">提交付款</button>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import paySelect from "/src/components/fxb-pay-select/paySelect";
export default {
    name: "surePay",
    components: {
        boxTitle,
        paySelect
    },
    data(){
        return{
            payList:[
                {
                    icon:"weixinzhifu",
                    radioName:"微信支付"
                },
                {
                    icon:"zhifubao",
                    radioName:"支付宝支付"
                },
                {
                    icon:"zhuanzhang",
                    radioName:"银行转账"
                },
                {
                    icon:"zhuanzhang",
                    radioName:"分期支付",
                    instalments:true
                }
            ]
        }
    },
    methods:{
        gotoPayResult(){
            uni.redirectTo({
                url: "/pages/payResult/payResult",
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.botBtn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    box-shadow: 10rpx 0rpx 20rpx #dbdbdb;
}
</style>