<template>
<view>
    <view class="whiteBoxShadow">
        <boxTitle :title="title"></boxTitle>
        <view v-for="item in 3" :key="item" @click="enroll(item)" class="flex u-border-bottom padding-tb">
            <u-avatar class="flex-sub" text="t"></u-avatar>
            <view class="flex flex-treble flex-direction margin-left-sm">
                <view class="flex align-center">
                    <text class="text-lg text-bold">王晓刚</text>
                    <view class="bg-blue light margin-left-sm" style="border-radius: 10px 0 10px 0;padding: 2px 4px">贵州守云间科技有限公司</view>
                </view>
                <view class="text-gray margin-tb-xs">2022-12-23 15:26:24</view>
                <view class="flex align-center justify-between">
                    <view class="flex align-center">
                        <text class="text-black">众筹金额：</text>
                        <text class="text-red">25000元</text>
                    </view>
                    <view class="flex align-center">
                        <text class="text-black">众筹占比：</text>
                        <text class="text-orange">21.25%</text>
                    </view>
                </view>
            </view>
        </view>
    </view>
</view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
    name: "enrollInfo",
    props:{
        title:{
            type:String,
            default:""
        }
    },
    components:{
        boxTitle
    },
    methods:{
        enroll(index) {
            uni.navigateTo({
                url: "pages/admin/tender/successfulBidderDetails?state="+index
            });
        }
    }
};
</script>

<style scoped>

</style>