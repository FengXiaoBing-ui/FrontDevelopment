<template>
    <view class="whiteBoxShadow">
        <slot name="topContent"></slot>

        <view class="flex justify-between" :class="index==0?'':'margin-top-sm'" v-for="(item,index) in infoArr" :key="index">
            <view class="text-gray flex-sub">{{ item.name }}</view>
            <view class="flex-treble text-right" :class="item.colorRed?'text-red':''">{{ item.info }} <text v-if="item.copy" class="radius margin-left-sm bg-gray">复制</text> </view>
        </view>
        <slot name="botContent"></slot>
    </view>
</template>

<script>
export default {
    name: "fxb-info-card",
    props:{
        infoArr:{
            type:Array,
            default:() => []
        }
    }
};
</script>

<style scoped>

</style>