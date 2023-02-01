<template>
    <view class="flex align-stretch w100">
        <view class="flex-sub">
            <fxbImage width="150" height="150" class="radius" src="/productDetails/Slice%201.png"></fxbImage>
        </view>
        <view class="flex flex-direction justify-around flex-treble">
            <view class="text-lg text-bold text-cut">东方国宾·尊致酒53°瓶装500ml</view>
            <view class="flex align-center justify-between text-gray">
                <view>香型:酱香型</view>
                <view>度数:53°</view>
                <view>容量:500ml</view>
            </view>
            <view class="flex align-center justify-between">
                <view>零售价: <text class="text-red">¥365.00</text> </view>
                <view>代理价: <text class="text-red">¥365.00</text> </view>
            </view>
        </view>
    </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image";
export default {
    name: "fxb-product-card",
    components:{
        fxbImage
    }
};
</script>

<style scoped>

</style>