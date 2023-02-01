<template>
    <view>
        <u-navbar :autoBack="true" title="返佣详情"></u-navbar>
        <view :style="`margin-top:${(CustomBar+10)*2}rpx`">
            <view class="whiteBoxShadow  margin-lr-sm ">
                <view class="flex align-center justify-between">
                    <view class="text-gray">状态</view>
                    <view class="text-red">未通过</view>
                </view>
                <view class="flex align-center margin-tb-sm justify-between">
                    <view class="text-gray">未通过原因</view>
                    <view>这是未通过原因，这是未通过</view>
                </view>
                <view class="flex align-center justify-between">
                    <view class="text-gray">审核时间</view>
                    <view>2022-08-30 12:23:12</view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-sm">
                <boxTitle title="合同任务"></boxTitle>
                <view class="margin-tb">
                    <contractCard
                        :id="info.id"
                        :contentList="info.contentList"
                        :name="info.name"
                        :pay-way="info.payWay"
                        list>
                    </contractCard>
                </view>
                <view></view>
            </view>
            <view class="margin-sm whiteBoxShadow">
                <boxTitle title="申请详情"></boxTitle>
                <view v-for="(item,index) in applyInfo" :key="index"
                      class="flex margin-tb-sm justify-between align-center">
                    <view class="text-gray">{{ item.label }}</view>
                    <view>{{ item.value }}</view>
                </view>
            </view>
            <view class="margin-sm whiteBoxShadow">
                <boxTitle title="申请信息"></boxTitle>
                <view class="flex justify-between align-center">
                    <text>申请人</text>
                    <text>王晓刚(王晓刚烟酒小卖部)</text>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text>申请时间</text>
                    <text>2022-08-31 12:56:12</text>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm grid col-2 margin-sm">
                <view class="flex align-center justify-center u-border-right">
                    <text class="cuIcon-profile text-orange margin-right-sm" style="font-size: 32rpx"></text>
                    <text>平台介入</text>
                </view>
                <view class="flex align-center justify-center">
                    <text class="cuIcon-service text-red margin-right-sm" style="font-size: 32rpx"></text>
                    <text>联系客服</text>
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

            applyInfo: [
                { label: "返佣方式", value: "现金返佣" },
                { label: "金额合计", value: "¥1223213.00" }
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