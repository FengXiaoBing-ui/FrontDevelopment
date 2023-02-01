<template>
<view>
    <view class="whiteBoxShadow">
        <boxTitle title="中标公告"></boxTitle>
        <text>
            项目名称：东方国宾·尊致条码招标中标公告，2011
            年8月30日全国中小河流治理织金县底那河治理工程
            在贵州省水利水电建设工程交易中心进行开标、评标
            活动，经依法组建的评标委员会按招标文件的评标标
            准和方法，对各投标人的投标文件进行评审，并依法
            推荐了以下中标候选人进行公示。
        </text>
    </view>
    <view class="whiteBoxShadow margin-top-sm">
        <boxTitle title="中标人名单"></boxTitle>
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
    name: "winning",
    components:{
        boxTitle
    },
    methods:{
        enroll(index) {
            uni.navigateTo({
                url: "pages/admin/tender/selectEnroll"
            });
        }
    }
};
</script>

<style scoped>

</style>