<template>
    <view>
        <u-navbar :autoBack="true" title="返佣详情"></u-navbar>
        <view :style="`margin-top:${(CustomBar+10)*2}rpx`">
            <view class="whiteBoxShadow flex justify-between align-center margin-lr-sm">
                <view class="text-gray">状态</view>
                <view class="text-red">待审核</view>
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
                { label: "返佣方式", value: "返佣商品(480瓶)" },
                { label: "返佣积分", value: "7000000积分" },
                { label: "金额合计", value: "¥1223213.00" },
            ],
            info: {
                name: "东方国宾·尊致酒53°瓶装500ml",
                id: "21547789789",
                payWay: "现结",
                contentList: [
                    { lable: "合同任务", value: "1800瓶" },
                    { lable: "合同金额", value: "￥1223213.00", color: "red" },
                    { lable: "完成任务", value: "1800瓶" },
                    { lable: "完成金额", value: "¥1223213.00", color: "red" },
                    { lable: "完成进度", value: "已完成" },
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