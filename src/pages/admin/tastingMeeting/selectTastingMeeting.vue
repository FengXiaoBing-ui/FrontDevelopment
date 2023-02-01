<template>
    <view>
        <u-navbar :border="false" :fixed="true" title="选择品鉴会" :autoBack="true"></u-navbar>
        <view :style="'margin-top:'+ CustomBar + 'px; padding-bottom:100rpx'">
            <view class="bg-white padding-sm" >
                <view class="flex align-center bg-gray" style="border-radius: 4px">
                    <text class="cuIcon-search text-red"
                          style="font-size: 20px; padding: 4px; margin-left: 4px"></text>
                    <input
                        class="text-df w75"
                        type="text"
                        placeholder-class="text-gray"
                        placeholder="请输入商品编号、品鉴会名称进行搜索"
                        confirm-type="search"
                    />
                </view>
            </view>
            <view class="padding-lr-sm">
                <view v-for="item in 3" :key="item" class="whiteBoxShadow
                padding-lr-sm flex justify-between align-center margin-top-sm">
                    <view>
                        <view class="flex">
                            <view>品鉴会编号：</view>
                            <view>2154725262245182</view>
                        </view>
                        <view class="flex margin-top-sm">
                            <view>品鉴会名称：</view>
                            <view>2022观山湖区白酒品鉴会</view>
                        </view>
                        <view class="flex margin-top-sm">
                            <view>申请商品：</view>
                            <view>东方国宾白酒500ml</view>
                        </view>
                        <view class="flex margin-top-sm">
                            <view>申请费用：</view>
                            <view class="text-red">￥2350.00</view>
                        </view>
                    </view>
                    <view class="cuIcon-right text-gray" style="font-size: 16px"></view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "selectTastingMeeting",
    components: {},
    data() {
        return {};
    }
};
</script>

<style scoped>

</style>