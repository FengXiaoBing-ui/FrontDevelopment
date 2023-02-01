<template>
    <view class="content">
        <u-navbar title="缴纳会员费" :autoBack="true"> </u-navbar>

        <view class="padding-lg" :style="'margin-top:' + CustomBar + 'px;padding-bottom: 100px'">
            <view class="boxShadow">
                <boxTitle title="缴纳会员费"></boxTitle>

                <view class="tick flex align-start">
                    <u-checkbox activeColor="green" size="12"></u-checkbox>
                    <view style="transform: translateY(-2px)">
                        <text class="text-sm">我已同意并阅读</text>
                        <text class="text-sm text-blue" @click="jumpAgreement">《好酒选会员入驻服务协议》</text>
                    </view>
                </view>
                <view class="flex justify-between align-center padding-tb">
                    <text>会员费</text>
                    <text class="text-red text-lg text-bold">￥ 5000.0</text>
                </view>
                <view class="tips padding-sm">
                    <view>
                        <view class="text-black text-bold margin-bottom">温馨提示：</view>
                        <text class="text-gray text-df">
                            1、会员费缴纳后，若30个自然日内未产生任何交易，平台自动退还您的会员费，需收取部分服务费
                            2、会员费缴纳后，若30个自然日后为产生任何交易，平台将主动退还您的会员费
                        </text>
                    </view>
                </view>
            </view>

            <view class="invoice boxShadow margin-top flex justify-between">
                <text class="text-gray">开具发票</text>
                <view @click="jumpVoucher">
                    <text>不开发票</text>
                    <text class="cuIcon-right margin-left"></text>
                </view>
            </view>
            <view class="boxShadow margin-top">
                <boxTitle title="缴纳会员费"></boxTitle>

                <paySelect :dataList="dataList"></paySelect>
            </view>

            <view class="botPayBtn flex justify-end align-center padding-tb-sm padding-right">
                <text class="text-red text-bold">￥5000.00</text>
                <button class="margin-left cu-btn bg-red" @click="surePay">确认支付</button>
            </view>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import paySelect from "/src/components/fxb-pay-select/paySelect";

export default {
    name: "memberPay",
    components: {
        boxTitle,
        paySelect,
    },
    data() {
        return {
            dataList: [
                {
                    icon: 'weixinzhifu',
                    radioName: "微信支付",
                },
                {
                    icon: 'zhifubao',
                    radioName: "支付宝支付",
                },
                {
                    icon: 'zhuanzhang',
                    radioName: "银行转账",
                },
            ],
        };
    },
    methods: {
        jumpAgreement(){
            uni.navigateTo({
                url:"/pages/memberPayment/memberAgreement"
            })
        },
        jumpVoucher() {
            uni.navigateTo({
                url: "pages/memberPayment/payVoucher",
            });
        },
        radioChange(n) {
            console.log("radioChange", n);
        },
        surePay() {
            uni.navigateTo({
                url: "pages/payResult/payResult" + "?status=4",
            });
        },
        cancelPay() {
            uni.navigateBack({
                delta: 1,
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.cu-btn {
    padding: 0 60rpx;
}
.tips {
    background: rgb(254, 242, 240);
}
.boxShadow {
    padding: 30rpx 20rpx;
    background: white;
    border-radius: 10rpx;
    box-shadow: 4rpx 4rpx 16rpx #e6dee6;
}
.botPayBtn {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: white;
    z-index: 1;
    box-shadow: 4px 4px 14px #cccccc;
}
</style>
