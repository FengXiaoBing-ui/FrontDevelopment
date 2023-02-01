<template>
    <view class="bg-white">
        <view class="flex align-center w100 justify-between">
            <view class="text-cut text-bold  text-lg">{{ name }}</view>
        </view>
        <view class="flex align-center justify-between margin-tb-sm">
            <view class="text-gray">合同编号：{{ id }}</view>
            <button class="cu-btn bg-white radius u-border sm">合同详情</button>
<!--            <view class="text-gray">结算方式：{{ payWay }}</view>-->
        </view>
        <view class="u-border-bottom margin-tb"></view>
        <view class="flex margin-tb-sm align-center justify-between" v-for="(item,index) in contentList" :key="index">
            <view class="text-gray">{{ item.lable}}</view>
            <view :style="item.color?`color:${item.color}`:``">{{ item.value}}</view>
        </view>
<!--        <view class="u-border-bottom margin-tb"></view>-->
        <slot name="footer"></slot>
    </view>
</template>

<script>
export default {
    name: "contractCard",
    props: {
        id: {
            default: "",
            type: String
        },
        payWay: {
            default: "",
            type: String
        },
        name: {
            default: "",
            type: String
        },
        contentList:{
            default:()=>{
                return []
            },
            type:Array
        }
    },
};
</script>

<style scoped>

</style>