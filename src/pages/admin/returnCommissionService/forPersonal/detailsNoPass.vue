<template>
    <view>
        <u-navbar :autoBack="true" title="返佣详情"></u-navbar>
        <view :style="`margin-top:${(CustomBar+10)*2}rpx`">
            <view class="whiteBoxShadow  margin-lr-sm">
                <view v-for="(item,index) in statusInfo" :key="index"
                      class="flex margin-bottom-sm justify-between align-top">
                    <view class="text-gray" style="min-width: 25%">{{ item.label }}</view>
                    <view :class="index==0?'text-red':''" class="text-right">{{ item.value }}</view>
                </view>
            </view>

            <view class="margin-xs whiteBoxShadow margin-lr-sm">
                <boxTitle right-text="查看订单记录" right-text-class="cu-btn sm bg-white u-border radius" title="九月订单统计"></boxTitle>
                <goodsInfoCard agent-price="365"
                               goods-name="飞天茅台53°瓶装酱香型 500ml"
                               goods-type="酱香型"
                               goodsDegrees="49"
                               goodsVolume="500"
                               img-url="/productDetails/Slice%201.png"
                ></goodsInfoCard>
                <view class="padding-top-sm flex justify-between align-center">
                    <view class="flex-twice text-center">
                        <view class="text-bold text-lg text-cut">2489</view>
                        <view class="text-gray margin-top-sm">成交数量</view>
                    </view>
                    <view class="flex-treble text-center">
                        <view class="text-bold text-lg text-cut">154891.00</view>
                        <view class="text-gray margin-top-sm">金额总量</view>
                    </view>
                    <view class="flex-twice text-center">
                        <view class="text-bold text-lg text-cut">5489.00</view>
                        <view class="text-gray margin-top-sm">返佣金额</view>
                    </view>
                </view>
            </view>

            <view class="margin-sm whiteBoxShadow" >
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
            <view class="padding"></view>
        </view>
    </view>
</template>

<script>
import contractCard from "/src/pages/admin/components/contractCard";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import copyButton from "/src/components/common/copyButton";
import goodsInfoCard from "/src/components/erp/goodsInfoCard";

export default {
    name: "returnAdmin",
    components: {
        contractCard, boxTitle, copyButton, goodsInfoCard
    },
    data() {
        return {
            status:"",
            backInfo: [
                { label: "返佣金额", value: "现金返佣(¥8490.00)" }],
            statusInfo: [
                { label: "状态：", value: "未通过" },
                { label: "审核人：", value: "张三" },
                { label: "审核时间：", value: "2022-08-30 12:26:56" },
                { label: "未通过原因：", value: "这是未通过原因内容。" }
            ],
            applyInfo: [
                { label: "返佣方式", value: "返佣商品(480瓶)" },
                { label: "申请人", value: "王晓刚(王晓刚烟酒小卖部)" },
                { label: "申请时间", value: "2022-08-30 12:26:56" },
                { label: "审核人", value: "王丽" },
                { label: "审核时间", value: "2022-08-30 12:26:56" }
            ],
            info: {
                name: "东方国宾·尊致酒53°瓶装500ml",
                id: "21547789789",
                payWay: "现结",
                contentList: [
                    { lable: "合同任务", value: "300件(1800瓶)" },
                    { lable: "合同金额", value: "￥1223213.00", color: "red" },
                    { lable: "完成进度", value: "已完成" },
                    { lable: "返佣奖励", value: "商品100件(600瓶)", color: "red" }
                ],
                signingTime: "2022-08-30 12:23:23",
                status: "0"//
            }
        };
    }
};
</script>

<style lang="scss" scoped>
</style>