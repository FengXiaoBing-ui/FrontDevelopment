<template>
    <view class=" bg-white radius" @click="goto">
        <view class="padding">
            <view class=" flex align-center">
                <view v-if="def" class="cu-tag line-red  radius sm ">默认</view>
                <view v-else class="text-gray text-nowarp">收货人：</view>
                <view :class="def?'margin-left':''">{{ addressInfo.name }}</view>
                <view class="flex align-center margin-left">
                    <view class="cuIcon-mobile" style="color: #FFAA00;font-size: 1rem"></view>
                    {{ addressInfo.phone }}
                </view>
            </view>
            <view class="flex align-top justify-between margin-tb">
                <view v-if="icon"  class="text-yellow cuIcon-locationfill margin-right" style="color: #FFAA00;font-size: 1rem"></view>
                <view v-else class="text-gray text-nowarp">收货人：</view>
                <view class="w100 text-bold ">{{ addressInfo.address }}</view>
                <view v-if="icon" class="cuIcon-right margin-left"  style="font-size: 1.2rem"></view>
                <view v-if="select==='true'" style="font-size: 1.2rem" class="cuIcon-check text-bold text-red margin-left"></view>
            </view>
        </view>
        <view v-if="border" class="imgBottom"></view>
    </view>
</template>

<script>
export default {
    name: "addressBox",
    props: ["addressInfo", "select", "border", "def", "icon",'select'],
    data: function() {
        return {};
    },
    methods: {
        goto() {
            if (this.select === true) {
                uni.navigateTo({
                    url: "/pages/index/applicationSample/addressIndex"
                });
            } else {
                uni.navigateBack({
                    delta: 1
                });
            }

        }
    }
};
</script>

<style lang="scss" scoped>
.imgBottom {
    height: 4px;
    width: 100%;
    overflow: hidden;
    background-image: url("/static/img/index/samp_order_line.png");
    background-repeat: no-repeat;
    background-size: cover;
}
.text-nowarp{
    white-space: nowrap;
}
</style>
