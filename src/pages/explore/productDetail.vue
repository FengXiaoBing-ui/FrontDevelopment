<template>
<view>
    <u-navbar :border="false" :fixed="true" title="商品详情" :autoBack="true"></u-navbar>
    <view class="padding-lr-sm padding-tb" :style="'margin-top:'+CustomBar+'px'">
        <view class="whiteBoxShadow">
            <view class="flex align-center justify-between padding-tb-sm u-border-bottom">
                <view class="flex-twice">商品名称</view>
                <view class="flex-treble text-right">东方国宾·工匠酒53度500ml</view>
            </view>
            <view class="flex align-center justify-between padding-tb-sm u-border-bottom">
                <view class="flex-twice">商品条码</view>
                <view class="flex-treble text-right">1564654654612</view>
            </view>
            <view class="flex align-center justify-between padding-tb-sm u-border-bottom">
                <view class="flex-twice">生产厂家</view>
                <view class="flex-treble text-right">东方国宾酒业有限公司</view>
            </view>
            <view class="flex align-center justify-between padding-tb-sm u-border-bottom">
                <view class="flex-twice">执行标准</view>
                <view class="flex-treble text-right">58696545</view>
            </view>
            <view class="flex align-center justify-between padding-tb-sm u-border-bottom">
                <view class="flex-twice">生产许可证编号</view>
                <view class="flex-treble text-right">1654654654</view>
            </view>
            <view class="flex align-center justify-between padding-tb-sm u-border-bottom">
                <view class="flex-twice">价格</view>
                <view class="flex-treble text-right">¥1200.00/瓶</view>
            </view>
            <view class="flex align-center justify-between padding-tb-sm u-border-bottom">
                <view class="flex-twice">数量</view>
                <view class="flex-treble text-right">72瓶</view>
            </view>
            <view class="flex align-center justify-between padding-tb-sm">
                <view class="flex-twice">合计金额</view>
                <view class="flex-treble text-right text-red">¥12000.00</view>
            </view>
        </view>
        <button class="bg-red radius w100 lg margin-top">联系卖家</button>
    </view>
</view>
</template>

<script>
export default {
    name: "productDetail"
};
</script>

<style scoped>

</style>