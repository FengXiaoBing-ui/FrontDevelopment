<template>
    <view>
        <u-navbar :autoBack="true" title="选择商品"></u-navbar>
        <view :style="'margin-top:'+ (CustomBar*2) +'rpx;padding-bottom:20rpx'">
            <fxb-status-card :status="localStatus.status" :tips="localStatus.tips"
                             :icon="localStatus.icon"></fxb-status-card>
            <view v-if="status==2" class="whiteBoxShadow text-red" style="transform: translateY(-20rpx)">
                因个人原因导致的无法退款
            </view>
            <view v-if="status==2" class="whiteBoxShadow flex margin-bottom-lg">
                <view class="flex justify-center w50 u-border-right align-center">
                    <view class="cuIcon-profile text-orange "></view>
                    <text class="text-black margin-left-sm">平台介入</text>
                </view>
                <view class="flex justify-center w50 align-center">
                    <view class="cuIcon-service text-red"></view>
                    <text class="text-black margin-left-sm">联系客服</text>
                </view>
            </view>
            <view v-if="status==3||status==4"
                  class="whiteBoxShadow margin-bottom-sm" style="transform: translateY(-20rpx)">
                <boxTitle title="进度查询"></boxTitle>
                <u-steps v-if="status==3" :current="1" dot activeColor="#F37B1D ">
                    <u-steps-item title="商家同意"></u-steps-item>
                    <u-steps-item title="银行处理"></u-steps-item>
                    <u-steps-item title="退款成功"></u-steps-item>
                </u-steps>
                <u-steps v-if="status==4" :current="2" dot activeColor="#F37B1D ">
                    <u-steps-item title="商家同意"></u-steps-item>
                    <u-steps-item title="银行处理"></u-steps-item>
                    <u-steps-item title="退款成功"></u-steps-item>
                </u-steps>
                <view class="cu-btn bg-red w100 radius margin-top">查看钱款去向</view>
            </view>
            <view class="whiteBoxShadow" style="transform: translateY(-20rpx)">
                <boxTitle title="售后信息"></boxTitle>
                <view class="flex justify-between">
                    <view>入场状态</view>
                    <view>未入场</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view>退款原因</view>
                    <view>超时未入场</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view>退款描述</view>
                    <view>因气候原因超时未入场</view>
                </view>
                <view class="margin-top-sm flex">
                    <fxbImage width="120" height="120" src="/productDetails/Slice%201.png"
                              mode="aspectFill"></fxbImage>
                    <fxbImage class="margin-left-lg" width="120" height="120" src="/productDetails/Slice%201.png"
                              mode="aspectFill"></fxbImage>
                    <fxbImage class="margin-left-lg" width="120" height="120" src="/productDetails/Slice%201.png"
                              mode="aspectFill"></fxbImage>
                    <fxbImage class="margin-left-lg" width="120" height="120" src="/productDetails/Slice%201.png"
                              mode="aspectFill"></fxbImage>
                </view>
            </view>
            <view class="whiteBoxShadow">
                <boxTitle title="报名费用"></boxTitle>
                <view class="flex justify-between">
                    <view class="text-gray">参会费</view>
                    <view class="text-red">￥500.00</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">优惠</view>
                    <view>无</view>
                </view>
                <view class="u-border-bottom margin-tb-sm"></view>
                <view class="flex justify-between">
                    <view class="text-bold">费用合计</view>
                    <view class="text-red">￥2518.00</view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="报名信息"></boxTitle>
                <view class="flex justify-between">
                    <view class="text-gray">报名编号</view>
                    <view>12789678245721863</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">报名时间</view>
                    <view>2022-08-31 12:23</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">支付状态</view>
                    <view>已支付</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">支付金额</view>
                    <view>￥450.00</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">支付方式</view>
                    <view>微信支付</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">支付时间</view>
                    <view>2022-08-31 12:23</view>
                </view>
            </view>

        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbImage from "/src/components/fxb/fxb-image";
import fxbStatusCard from "/src/components/fxb/fxb-status-card";
import { mapState } from "vuex";

export default {
    name: "afterSalesDetails",
    components: {
        boxTitle,
        fxbImage,
        fxbStatusCard
    },
    data() {
        return {
            status: ""
        };
    },
    methods: {},
    onLoad(options) {
        this.status = options.status;
    },
    computed: {
        localStatus() {
            const tempArr = ["待审核", "未通过", "进行中", "已完成"];
            const tipsArr = ["剩余23小时58分", "已驳回您品鉴会申请", "商家已同意售后，正在处理", "您的售后处理已完成"];
            const iconArr = ["daishenhe", "weitongguo", "jinhangzhong", "a-zu699"];
            return {
                status: tempArr[this.status - 1],
                tips: tipsArr[this.status - 1],
                icon: iconArr[this.status - 1]
            };
        }
    },
};
</script>

<style scoped>
</style>