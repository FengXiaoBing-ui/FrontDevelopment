<!--wjx 20220830-->
<template>
    <view>
        <u-navbar :autoBack="true" title="支付款项"></u-navbar>
        <view :style="`margin-top:${(CustomBar)*2}rpx`">
            <view class=" padding-top-sm">
                <view class="whiteBoxShadow">
                    <boxTitle :title="titles"></boxTitle>
                    <view class="u-border-bottom margin-top bg-white">
                        <view v-if="status==1||status==2||status==3" class="flex justify-between align-center padding-top">
                            <view class="text-gray">{{status==1?"支付项目":status==2?"商品数量":status==3?"支付项目":""}}</view>
                            <view>{{status==1?"品鉴会报名":status==2?"2瓶":status==3?"品鉴会推广":""}}</view>
                        </view>
                        <view v-if="status==3" class="flex justify-between align-center margin-top-sm">
                            <view class="text-gray">品鉴会名称</view>
                            <view>2022观山湖区白酒品鉴会</view>
                        </view>
                        <view v-if="status==3" class="flex justify-between align-center margin-top-sm">
                            <view class="text-gray">单价</view>
                            <view><text class="text-red">￥300.00</text>/天</view>
                        </view>
                        <view v-if="status==3" class="flex justify-between align-center margin-top-sm">
                            <view class="text-gray">有效时长</view>
                            <view>1周</view>
                        </view>
                        <view v-if="status==3" class="flex justify-between align-center margin-top-sm">
                            <view class="text-gray">总计</view>
                            <view>￥2100.00</view>
                        </view>
                        <view v-if="status==1||status==2" class="flex justify-between align-center margin-top-sm">
                            <view class="text-gray">{{status==1?"参会费":status==2?"商品金额":""}}</view>
                            <view>¥530.00</view>
                        </view>
                        <view v-if="status==4" class="flex justify-between align-center margin-top-sm">
                            <view class="text-gray">退款项目</view>
                            <view>品鉴会报名</view>
                        </view>
                        <view class="flex justify-between align-center margin-tb-sm">
                            <view class="text-gray">{{status==1||status==3?"优惠":status==2?"餐费金额":status==4?"报名金额":""}}</view>
                            <view>¥1500.00</view>
                        </view>
                    </view>
                    <view class="flex justify-between align-center margin-tb ">
                        <view class="text-bold">费用合计</view>
                        <view class="text-bold text-red">￥600.00</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="fixed bg-white padding-lr-sm padding-bottom-xl padding-top-sm">
            <view class="flex justify-between align-center">
                <view class="flex align-center margin-left-xs">
                    <view>合计：</view>
                    <view class="text-red">￥612.00</view>
                </view>
                <button class="cu-btn bg-red" @click="pay">确认支付</button>
            </view>
        </view>

    </view>
</template>
<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import paySelect from "/src/components/fxb-pay-select/paySelect";

export default {
    name: "payment",
    components: { paySelect, boxTitle },
    data: function() {
        return {
            status:1,
        };
    },
    methods: {

        pay() {
            this.showOverlay = true;
            uni.navigateTo({
                url: `/pages/admin/myOrderForPersonal/paymentMethod`
            });
        }
    },
    onLoad(option) {
        this.status = option.status;
    },
    computed:{
    titles(){
        const titles=["报名费用", "报销费用", "支付费用","退款"]
        return titles[this.status-1]
    }
    }
};
</script>

<style lang="scss" scoped>
.margin-lr {
    margin: 0 20rpx;
}

.redBlock {
    width: 0.2rem;
    height: 15px;
    background: red;
    margin-right: 0.2rem;
}

.fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
}
</style>
