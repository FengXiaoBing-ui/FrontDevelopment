<template>
    <view class="content">
        <u-navbar title="缴纳保证金" :fixed="true" :autoBack="true"></u-navbar>

        <view class="padding-tb" :style="'margin-top:' + CustomBar + 'px;padding-bottom: 120rpx'">
            <view class="whiteBoxShadow" style="height: 1380rpx">
                <boxTitle title="缴纳保证金"></boxTitle>
                <view class="tick flex align-start margin-top margin-left-sm">
                    <u-checkbox-group>
                        <u-checkbox activeColor="red" size="12"></u-checkbox>
                    </u-checkbox-group>
                    <view style="transform: translateY(-2px)">
                        <text class="text-sm">我已同意并阅读</text>
                        <text class="text-sm text-blue" @click="jumpAgreement">《好酒选保证金服务协议》</text>
                    </view>
                </view>
                <view class="flex justify-between align-start margin-tb margin-left-sm">
                    <text class="text-red text-bold">保证金</text>
                    <view class="flex flex-direction align-end">
                        <text class="text-red text-lg text-bold">￥50000.0</text>
                        <view style="font-style: oblique" class="text-gray text-sm">伍万元整</view>
                    </view>

                </view>
                <view class="padding-sm bg-red light radius">
                    <view class="text-bold margin-bottom">温馨提示：</view>
                    <text>保证金由酒厂渠道服务商收取，平台不收取保证金，支付保证金后，由酒厂渠道服务商向您邮寄保证金合同。</text>
                </view>
            </view>

            <!--            <view class="invoice whiteBoxShadow margin-top-sm flex justify-between">-->
            <!--                <text class="text-gray">开具发票</text>-->
            <!--                <view @click="jumpVoucher">-->
            <!--                    <text>不开发票</text>-->
            <!--                    <text class="cuIcon-right margin-left"></text>-->
            <!--                </view>-->
            <!--            </view>-->
            <!--            <view class="whiteBoxShadow margin-top-sm">-->
            <!--                <boxTitle title="结算方式"></boxTitle>-->

            <!--                <paySelect :dataList="dataList"></paySelect>-->
            <!--            </view>-->

            <!--            <view class="botPayBtn flex justify-end align-center padding-tb-sm padding-right">-->
            <!--                <text class="text-red text-bold">¥50000.00</text>-->
            <!--                <button class="margin-left cu-btn bg-red" @click="surePay">确认支付</button>-->
            <!--            </view>-->
        </view>
        <view class="padding-lr padding-tb-xs bg-white botBtn flex justify-end">
            <view class="flex flex-direction align-end">
                <text class="text-bold"> 合计：<text class="text-red">¥982600.00</text> </text>
                <view style="font-style: oblique" class="text-gray text-xs">伍万元整</view>
            </view>
            <button @click="gotoPay" class="cu-btn bg-red radius margin-left-sm">确认支付</button>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import paySelect from "/src/components/fxb-pay-select/paySelect";

export default {
    name: "pay",
    components: {
        boxTitle,
        paySelect
    },
    data() {
        return {
        };
    },
    methods: {
        gotoPay(){
            uni.redirectTo({
                url:"/pages/admin/adminContract/surePay"
            })
        },
        jumpAgreement() {
            uni.navigateTo({
                url: "/pages/memberPayment/memberAgreement"
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
