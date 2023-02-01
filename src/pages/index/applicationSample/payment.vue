<template>
    <view>
        <u-navbar :autoBack="true" title="支付订单"></u-navbar>
        <view :style="`margin-top:${CustomBar +10}px`" class="margin-lr">
            <!--            <view class="whiteBoxShadow">-->
            <!--                <view class="flex align-center">-->
            <!--                    <fxbImage width="80" height="80" src="/productDetails/Slice%201.png"-->
            <!--                              mode="aspectFill"></fxbImage>-->
            <!--                    <view class="margin-left-sm">东方国宾·尊致酒53°瓶装500ml</view>-->
            <!--                </view>-->
            <!--                <view class="flex justify-between margin-top-sm">-->
            <!--                    <view class="text-gray">单价</view>-->
            <!--                    <view>￥259.00</view>-->
            <!--                </view>-->
            <!--                <view class="flex justify-between margin-top-sm">-->
            <!--                    <view class="text-gray">样品数量</view>-->
            <!--                    <view>2</view>-->
            <!--                </view>-->
            <!--                <view class="flex justify-between margin-top-sm">-->
            <!--                    <view class="text-gray">运费</view>-->
            <!--                    <view>￥0.00</view>-->
            <!--                </view>-->
            <!--                <view class="u-border-bottom margin-tb-sm"></view>-->
            <!--                <view class="flex justify-between margin-top-sm">-->
            <!--                    <view class="text-bold">合计</view>-->
            <!--                    <view class="text-red">￥518.00</view>-->
            <!--                </view>-->
            <!--            </view>-->
            <view class="whiteBoxShadow">
                <boxTitle title="金额合计"></boxTitle>
                <view class="text-red text-center padding text-bold text-lg">￥300.00</view>
            </view>
            <view class="margin-top-sm bg-white radius padding">
                <boxTitle title="选择支付方式"></boxTitle>
                <paySelect :data-list="dataList"></paySelect>
            </view>
        </view>
        <view class="botBtn foot bg-white padding-lr-sm padding-top-sm padding-bottom-xl justify-end flex align-center">
            <view class="text-gray margin-right-sm">共2件</view>
            <view class="flex margin-right-sm">合计
                <text class="text-red">￥518.00</text>
            </view>
            <view class="cu-btn  bg-red radius" @click="pay">确认支付</view>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";

import paySelect from "/src/components/fxb-pay-select/paySelect";
import convertCurrency from "/src/utils/dataFormat/convertCurrency";
import fxbImage from "/src/components/fxb/fxb-image";

export default {
    name: "payment",
    components: {
        boxTitle,
        paySelect,
        fxbImage
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
        pay() {
            uni.navigateTo({
                url: `pages/payResult/payResult?status=sampleOrderPayment`
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