<template>
    <view class="content">
        <u-navbar title="分期支付" :fixed="true" :autoBack="true"></u-navbar>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:' + CustomBar + 'px;padding-bottom: 120rpx'">
            <view class="whiteBoxShadow">
                <boxTitle title="金额合计"></boxTitle>
                <view class="u-border-top margin-top"></view>
                <view class="flex flex-direction justify-center align-center padding-tb">
                    <view class="text-red text-xl">¥982600.00</view>
                    <view class="text-gray text-sm margin-top-sm" style="font-style: oblique">玖拾捌万贰仟陆佰元整</view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="选择银行"></boxTitle>
                <paySelect :data-list="payList"></paySelect>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="分期支付"></boxTitle>
                <view>选择分期<text class="text-red text-sm">（推荐36期手续服务费8折，立省¥12300.00）</text></view>
                <view class="flex flex-wrap justify-between w100">
                    <view @click="activeIndex = index" v-for="(item,index) in instalmentsList" :key="index" style="width: 48%;"
                          :style="activeIndex==index?'border-color:red !important;':''"
                          class="instalmentsBox margin-top-sm u-border padding-tb padding-lr-sm radius">
                        <view>{{ item.name }}</view>
                        <view class="text-xs text-gray margin-top-sm">{{ item.text }}</view>
                        <view v-if="item.discount"  class="tag bg-red text-xs padding-lr-xs">手续费8折</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="padding-xs bg-white botBtn flex justify-end">
            <button @click="gotoPayResult" class="cu-btn flex-sub bg-red radius">确认付款</button>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import paySelect from "/src/components/fxb-pay-select/paySelect";

export default {
    name: "instalments",
    components: {
        boxTitle,
        paySelect
    },
    data() {
        return {
            activeIndex: 0,
            payList: [
                {
                    icon: "minshengyinhang",
                    radioName: "民生银行"
                },
                {
                    icon: "jiaotongyinhang",
                    radioName: "交通银行"
                }
            ],
            instalmentsList: [
                {
                    name: "不分期",
                    text: "0手续费",
                },
                {
                    name: "¥26000.45 x  12期",
                    text: "含手续服务费¥300.00 x 12期",
                    discount:true
                },
                {
                    name: "¥26000.45 x  18期",
                    text: "含手续服务费¥300.00 x 12期",
                    discount:true
                },
                {
                    name: "¥26000.45 x  24期",
                    text: "含手续服务费¥300.00 x 12期",
                    discount:true
                },
                {
                    name: "¥26000.45 x  36期",
                    text: "含手续服务费¥300.00 x 12期",
                    discount:true
                },
                {
                    name: "¥26000.45 x  48期",
                    text: "含手续服务费¥300.00 x 12期",
                    discount:true
                }
            ]
        };
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
.instalmentsBox{
    position: relative;
    .tag{
        position: absolute;
        right: 0;
        top: 0;
    }
}
.botBtn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    box-shadow: 10rpx 0rpx 20rpx #dbdbdb;
}
</style>