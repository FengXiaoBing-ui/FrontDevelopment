<template>
    <view class="w100 bg-white boxWrap">
        <view class="flex justify-between align-center contentTop">
            <view class="redBlock"></view>
            <view class="flex-sub title">{{ title }}</view>
            <view :class="rightStatus==='2'?'status_success':rightStatus==='1'?'status_danger':'status_warning'"
                  class="right text-main margin-right-sm status">{{
                    rightStatus === "2" ? "未通过" :rightStatus=== "1" ? "待审核" : "已发布"
                }}
            </view>
        </view>
        <view class="border-bottom margin-lr margin-bottom "></view>
        <view class="padding-lr-sm">
            <slot class="" name="content"></slot>
        </view>
    </view>
</template>

<script>
export default {
    name: "redIconCard",
    props: ["title", "rightStatus"]
};
</script>
+
<style lang="scss" scoped>
.boxWrap {
    border-radius: 2px;
    padding-top: 32rpx;
    padding-bottom: 32rpx;
    font-size: 16px;
    .contentTop {
        padding-bottom: 32rpx;
        .redBlock {
            height: 32rpx;
            width: 8rpx;
            margin-right: 10rpx;
            background: $main-color-red;
            border-radius: 0px 2px 2px 0px;
        }
        .margin-bottom {
            margin-bottom: 32rpx;
        }

        .title {
            color: #000000;
            font-size: 32rpx;
            font-weight: bold;
        }

        .status {
            font-weight: bold;
            font-size: 28rpx;
        }

        .status_success {
            color: #8DC63F;
            padding: 8rpx 22rpx;
            border-radius: 28rpx;
        }

        .status_warning {
            color: #F37B1D;
            padding: 8rpx 22rpx;
            border-radius: 28rpx;
        }

        .status_danger {
            color: #E54D42;
            padding: 8rpx 22rpx;
            border-radius: 28rpx;
        }
    }

}

</style>