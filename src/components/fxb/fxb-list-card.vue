<template>
    <view @click="cardClick" class="whiteBoxShadow w100 margin-bottom-sm">
        <view class="flex justify-between">
            <view class="text-bold flex align-center">
                <view class="textBorderLeft"></view>
                <view style="transform: translateX(-10rpx)">{{ title }}</view>
            </view>
            <button class="cu-btn round sm" :class="statusColor">{{ status }}</button>
        </view>
        <view class="u-border-bottom margin-tb"></view>
        <view class="flex align-center justify-between margin-bottom-xs">
            <view class="flex align-center">
                <view class="text-gray">{{ infoOne.name }}</view>
                <view :class="'text-'+infoOne.color">{{ infoOne.text }}</view>
            </view>
            <view v-if="infoTwo" class="flex align-center">
                <view class="text-gray">{{ infoTwo.name }}</view>
                <view :class="'text-'+infoTwo.color">{{ infoTwo.text }}</view>
            </view>
        </view>
        <view class="flex align-center justify-between margin-bottom-xs">
            <view class="flex align-center">
                <view class="text-gray">{{ infoThree.name }}</view>
                <view :class="'text-'+infoThree.color">{{ infoThree.text }}</view>
            </view>
            <view v-if="infoFour" class="flex align-center">
                <view class="text-gray">{{ infoFour.name }}</view>
                <view :class="'text-'+infoFour.color">{{ infoFour.text }}</view>
            </view>
        </view>
        <view class="flex align-center justify-between margin-bottom-xs">
            <view class="flex align-center">
                <view class="text-gray">{{ infoFive.name }}</view>
                <view :class="'text-'+infoFive.color">{{ infoFive.text }}</view>
            </view>
            <view v-if="infoSix" class="flex align-center">
                <view class="text-gray">{{ infoSix.name }}</view>
                <view :class="'text-'+infoSix.color">{{ infoSix.text }}</view>
            </view>
        </view>
        <slot name="bot"></slot>
    </view>
</template>

<script>
export default {
    name: "fxb-list-card",
    props:{
        title:{
            type:String,
            default:''
        },
        status:{
            type:String,
            default:''
        },
        statusColor:{
            type:String | Object,
            defaults: 'line-orange'
        },
        infoOne:{
            type:Object,
            default: function () {
                return {};
            },
        },
        infoTwo:{
            type:Object,
            default: function () {
                return {};
            },
        },
        infoThree:{
            type:Object,
            default: function () {
                return {};
            },
        },
        infoFour:{
            type:Object,
            default: function () {
                return {};
            },
        },
        infoFive:{
            type:Object,
            default: function () {
                return {};
            },
        },
        infoSix:{
            type:Object,
            default: function () {
                return {};
            },
        },
    },
    data(){
        return{

        }
    },
    methods:{
        cardClick(e){
            this.$emit('cardClick',e)
        }
    }
};
</script>

<style lang="scss" scoped>
.textBorderLeft{
    width:8rpx;
    height: 30rpx;
    background: #E54D42;
    border-radius: 8rpx;
    transform: translateX(-26rpx);
}
</style>