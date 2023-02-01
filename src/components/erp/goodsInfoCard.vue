<template>
    <view class="bg-white margin-tb-sm">
        <view class="flex align-stretch ">
            <view v-if="imgUrl" class="">
                <fxbImage
                    :src="imgUrl"
                    style="width:120rpx;height:120rpx"></fxbImage>
            </view>
            <view class="w100 margin-left-sm flex flex-direction justify-between">
                <view class="text-bold">{{ goodsName }}</view>
                <view class="flex text-sm text-gray">
                    <view class="nowrap margin-right-sm w-third"> 香型：{{ goodsType }}</view>
                    <view class="nowrap margin-right-sm w-third">度数：{{ goodsDegrees }}</view>
                    <view class="nowrap w-third">容量：{{ goodsVolume }}</view>
                </view>
                <view class="flex w100 justify-between">
                    <view v-if="retailPrice" class="text-gray flex align-center">零售价：
                        <view class="text-red">￥{{retailPrice}}.00</view>
                    </view>
                    <view v-if="agentPrice" class="text-gray flex align-center">代理价：
                        <view class="text-red text-bold">￥{{agentPrice}}.00</view>
                    </view>
                </view>
            </view>
        </view>

        <slot name="discount"></slot>
    </view>
</template>

<script>
// https://dev-vue-1313145053.cos.ap-chongqing.myqcloud.com/front_end/static/productDetails/Slice%201.png

import fxbImage from "/src/components/fxb/fxb-image"
export default {
    name: "goodsInfoCard",
    components:{
        fxbImage
    },
    props:{
        imgUrl:String,//图片地址
        goodsName:String,//名字
        goodsType:String,//酒类型
        goodsVolume:String,//容量
        goodsDegrees:String,//度数
        retailPrice:String,//零售价
        agentPrice:String//代理价
    }
};
</script>

<style scoped>

</style>