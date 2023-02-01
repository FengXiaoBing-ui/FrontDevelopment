<template>
    <view>
        <view class="whiteBoxShadow margin-top-sm">
            <boxTitle title="商品信息"></boxTitle>
            <view class="flex align-center justify-between">
                <view class="text-gray">商品名称</view>
                <view class="text-black">东方国宾·尊致酒</view>
            </view>
            <view class="flex align-center justify-between margin-top-sm">
                <view class="text-gray">商品条码</view>
                <view class="text-black">1234654564</view>
            </view>
            <view class="flex align-center justify-between margin-top-sm">
                <view class="text-gray">商品品牌</view>
                <view class="text-black">东方国宾</view>
            </view>
            <view class="flex align-center justify-between margin-top-sm">
                <view class="text-gray">建议零售价</view>
                <view class="text-red">¥499.00</view>
            </view>
            <view class="flex align-center justify-between margin-top-sm">
                <view class="text-gray">代理价</view>
                <view class="text-red">¥299.00</view>
            </view>
            <view class="flex align-center justify-between margin-top-sm">
                <view class="text-gray">团购价</view>
                <view class="text-red">¥399.00</view>
            </view>
            <view class="flex align-center justify-between margin-top-sm">
                <view class="text-gray">商超指导价</view>
                <view class="text-red">¥399.00~¥499.00</view>
            </view>
            <fxbImage class="margin-tb" width="750" height="750" src="http://124.220.219.72:8085/img/1ec5389e521b45d89107a630a3302d51.jpg"></fxbImage>
            <fxbTable :data-obj="data"></fxbTable>
        </view>
    </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image";
import fxbTable from "/src/components/fxb/fxb-table-tr-td"
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
    name: "productInfo",
    components:{
        boxTitle,
        fxbTable,
        fxbImage
    },
    data(){
        return{
            data:{
                goodsInfo:{}
            }
        }
    }
};
</script>

<style lang="scss" scoped>

</style>