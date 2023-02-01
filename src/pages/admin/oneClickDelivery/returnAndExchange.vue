<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="退换货" :autoBack="true">
        </u-navbar>
        <view class="padding" :style="'margin-top:'+ CustomBar + 'px'">
            <view class="whiteBoxShadow">
                <boxTitle title="选择意见类型"></boxTitle>
                <view class="flex align-center justify-between padding-tb u-border-bottom">
                    <view>换货</view>
                    <view @click="returnAndExchangeDetails('换货')">
                        <text class="text-gray margin-right-sm">请选择</text>
                        <text class="cuIcon-right" style="font-size: 38rpx;"></text>
                    </view>
                </view>
                <view class="flex align-center justify-between padding-top">
                    <view>退货</view>
                    <view @click="returnAndExchangeDetails('退货')">
                        <text class="text-gray margin-right-sm">请选择</text>
                        <text class="cuIcon-right" style="font-size: 38rpx;"></text>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>

import fxbInfoCard from "../../../components/fxb/fxb-info-card";
import boxTitle from "../../agent/components/fxb-box-title";

export default {
    //传参方法
    methods: {
        returnAndExchangeDetails(type) {
            uni.navigateTo({
                url: 'pages/admin/oneClickDelivery/returnAndExchangeDetails?type='+type
            })
        }
    },
    components: {
        boxTitle
    },
    name: "returnAndExchange"

};
</script>

<style scoped>

</style>