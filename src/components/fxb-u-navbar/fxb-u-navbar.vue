<template>
    <u-navbar :autoBack="true" :bgColor="'rgba(255,255,255,'+ transparency +')'"
              :border="false"
              :fixed="true"
              :safeAreaInsetTop="false"
              :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
              :titleStyle="'color:rgba(0,0,0,'+transparency+')'">
        <view slot="left" class="u-nav-slot flex align-center">
            <view class="leftNavIcon flex align-center justify-center">
                <text class="cuIcon-back" style="font-size: 48rpx"></text>
            </view>
        </view>
        <view slot="center" :style="'opacity:'+transparency+';'" class="u-nav-slot">
            <view class="text-center">商品详情</view>
            <view :style="'background-color:rgba(255,255,255,'+transparency+');'" class="search" style="width:750rpx">
                <view v-if="isTabs">
                    <u-tabs :current="current" :list="activityList" :scrollable="false"
                            activeStyle="font-size:32rpx" inactiveStyle="color:gray" itemStyle="height:88rpx;white-space:nowrap;" lineColor="red"
                            @click="tabSelect"></u-tabs>
                </view>
            </view>
        </view>
        <view slot="right" class="u-nav-slot flex align-center">
            <view class="rightNavIcon flex align-center justify-center">
                <view class="flex align-center justify-center margin-right-xs">
                    <text class="cuIcon-favor" style="font-size: 48rpx"></text>
                </view>
                <view class="flex align-center justify-center">
                    <image :src="require('/src/static/share2.png')" class="share"
                           style="width: 48rpx;height: 48rpx"></image>
                </view>
            </view>
        </view>
    </u-navbar>
</template>

<script>
export default {
    name: "fxb-u-navbar",
    props: {
        isNav: {
            type: Boolean,
            default: true
        },
        transparency: {
            type: String,
            default: "0.0"
        },
        isTabs:{
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            activityList: [
                {
                    name: "代理政策"
                },
                {
                    name: "商品详情"
                },
                {
                    name: "平台大数据"
                },
                {
                    name: "测评"
                }
            ],
            current: 0
        };
    },
    methods: {
        tabSelect(e) {
            this.$emit("changeTab", e.index);
        }
    }
};
</script>

<style lang="scss" scoped>
.search {
    position: fixed;
    width: 100%;
    left: 0;
}

.leftNavIcon {
    width: 60rpx;
    height: 60rpx;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
}

.rightNavIcon {
    width: 140rpx;
    height: 60rpx;
    border-radius: 60rpx;
    background-color: rgba(255, 255, 255, 0.7);
}

.share {
    width: 48rpx;
    height: 48rpx;
}

/deep/ .u-tabs__wrapper__nav {
    padding: 0 20rpx;
}

/deep/ .u-navbar {
    .u-navbar__content {
        //background: transparent !important;
        height: var(--CustomBar) !important;
        padding-top: var(--StatusBar);

        .u-navbar__content__left,
        .u-navbar__content__right {
            margin-top: var(--StatusBar);
        }
    }
}
</style>