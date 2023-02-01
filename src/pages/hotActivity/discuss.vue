<template>
<view class="content">
    <u-navbar
        :border="false"
        :fixed="true"
        title="茅台1935"
        :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
        :safeAreaInsetTop="false"
        :autoBack="true"
    >
    </u-navbar>
    <view class="padding" :style="'margin-top:' + CustomBar * 2 + 'rpx;padding-bottom:100rpx'">
        <view class="flex flex-direction">
            <view class="flex margin-bottom-xl" style="max-width: 600rpx" v-for="item in 6" :key="item">
                <u-avatar text="酒" shape="square" fontSize="22"></u-avatar>
                <view class="flex flex-direction margin-left">
                    <view>王刚</view>
                    <view class="discussContent bg-white padding margin-top">
                        这款酒怎么样呢，有没有明
<!--                        这款酒怎么样呢，有没有明白的人帮忙介绍些？-->
                    </view>
                </view>
            </view>
            <view class="flex flex-direction align-end">
                <view class="flex justify-end margin-bottom-xl" style="max-width:600rpx">
                    <view class="flex flex-direction margin-right">
                        <view class="text-right">我</view>
                        <view class="discussContent padding margin-top bg-red light">
                            这款酒怎么样呢，有没有明白的人帮忙介绍些？这款酒怎么样呢，有没有明白的人帮忙介绍些？这款酒怎么样呢，有没有明白的人帮忙介绍些？这款酒怎么样呢，有没有明白的人帮忙介绍些？这款酒怎么样呢，有没有明白的人帮忙介绍些？这款酒怎么样呢，有没有明白的人帮忙介绍些？这款酒怎么样呢，有没有明白的人帮忙介绍些？
                        </view>
                    </view>
                    <u-avatar text="我" shape="square" fontSize="22"></u-avatar>
                </view>
            </view>
            <view class="flex margin-bottom-xl" style="max-width: 600rpx" v-for="item in 2" :key="item">
                <u-avatar text="酒" shape="square" fontSize="22"></u-avatar>
                <view class="flex flex-direction margin-left">
                    <view>王刚</view>
                    <view class="discussContent bg-white padding margin-top">
                        这款酒怎么样呢，有没有明
                        <!--                        这款酒怎么样呢，有没有明白的人帮忙介绍些？-->
                    </view>
                </view>
            </view>
        </view>
    </view>
    <view class="botView bg-white flex align-center justify-around">
        <u-avatar text="酒" fontSize="16" size="30"></u-avatar>
        <text class="cuIcon-add bg-gray round" style="font-size: 48rpx"></text>
        <input class="u-border-bottom" type="text" placeholder="请输入发送的内容..." placeholder-class="text-df">
        <text class="cuIcon-emoji" style="font-size: 48rpx"></text>
        <button class="cu-btn bg-red sm">发送</button>
    </view>
</view>
</template>

<script>
export default {
    name: "discuss",
    data(){
        return{
        }
    }
};
</script>

<style lang="scss" scoped>
.discussContent{
    border-radius: 20rpx;
}
.botView{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100rpx;
}
</style>
