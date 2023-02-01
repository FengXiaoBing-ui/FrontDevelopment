<template>
    <view>
        <u-navbar :autoBack="true" title="返佣详情"></u-navbar>
        <view :style="`margin-top:${(CustomBar+10)*2}rpx`">
            <view class="whiteBoxShadow flex justify-between align-center margin-lr-sm">
                <view class="text-gray">状态</view>
                <view class="text-red">待审核</view>
            </view>
            <view class="whiteBoxShadow margin-sm">
                <boxTitle title="九月订单统计" right-text-class="cu-btn xs" right-text="查看订单记录"></boxTitle>
                <goodsInfoCard agent-price="365"
                               goods-name="飞天茅台53°瓶装酱香型 500ml"
                               goods-type="酱香型"
                               goodsDegrees="49"
                               goodsVolume="500"
                               img-url="/productDetails/Slice%201.png"
                               retail-price="389"
                ></goodsInfoCard>
                <view class="padding-top u-border-top flex justify-around align-center">
                    <view class="w-third text-center">
                        <view class="text-bold text-cut">2489</view>
                        <view class="text-gray margin-top-sm">成交数量</view>
                    </view>
                    <view class="w-third text-center">
                        <view class="text-bold text-cut">154891.00</view>
                        <view class="text-gray margin-top-sm">金额总量</view>
                    </view>
                    <view class="w-third text-center">
                        <view class="text-bold text-cut">5489.00</view>
                        <view class="text-gray margin-top-sm">返佣金额</view>
                    </view>
                </view>
            </view>
            <view class="margin-sm whiteBoxShadow">
                <boxTitle title="返佣金额"></boxTitle>
                <view v-for="(item,index) in backInfo" :key="index"
                      class="flex margin-top-sm justify-between align-center">
                    <view class="text-gray">{{ item.label }}</view>
                    <view>{{ item.value }}</view>
                </view>
            </view>
            <view class="margin-sm whiteBoxShadow">
                <boxTitle title="申请详情"></boxTitle>
                <view v-for="(item,index) in applyInfo" :key="index"
                      class="flex margin-tb-sm justify-between align-center">
                    <view class="text-gray">{{ item.label }}</view>
                    <view>{{ item.value }}</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>

import boxTitle from "/src/pages/agent/components/fxb-box-title";
import goodsInfoCard from "/src/components/erp/goodsInfoCard";

export default {
    name: "returnAdmin",
    components: {
        boxTitle, goodsInfoCard
    },
    data() {
        return {
            backInfo: [
                { label: "返佣方式", value: "现金返佣(¥8490.00)" }],
            applyInfo: [
                { label: "合同任务", value: "现金返佣(¥200000.00)" },
                { label: "申请人", value: "王晓刚(王晓刚烟酒小卖部)" },
                { label: "申请时间", value: "2022-08-30 12:26:56" }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
</style>