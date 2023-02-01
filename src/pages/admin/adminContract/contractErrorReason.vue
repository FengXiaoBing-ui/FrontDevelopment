<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="合同异常原因" :autoBack="true" :rightText="$store.state.index.agentAndService?'处理进度':''" @rightClick="rightClick">
        </u-navbar>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:'+ CustomBar + 'px;padding-bottom:100rpx'">
            <template v-if="!$store.state.index.agentAndService">
                <view class="whiteBoxShadow">
                    <boxTitle title="异常处罚"></boxTitle>
                    <view class="flex justify-between align-stretch">
                        <view class="text-gray flex-sub">异常原因</view>
                        <view class="flex-treble">在合同履行过程中发现串货现象，依据合同规定，扣除保证金</view>
                    </view>
                    <view class="flex justify-between align-stretch margin-top-sm">
                        <view class="text-gray flex-sub">图片凭证</view>
                        <view class="flex-treble flex flex-wrap justify-end">
                            <fxbImage class="margin-left-xs margin-top-xs" width="155" height="155" v-for="(item,index) in imgList" :key="index" :src="item"></fxbImage>
                        </view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">异常处理</view>
                        <view class="text-red">暂停合同</view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">操作时间</view>
                        <view>2022-02-26 12:23:56</view>
                    </view>
                </view>
                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="申述记录"></boxTitle>
                    <view class="flex justify-between align-stretch">
                        <view class="text-gray">申诉原因</view>
                        <view class="">合同异常</view>
                    </view>
                    <view class="flex justify-between align-stretch margin-top-sm">
                        <view class="text-gray flex-sub">申述描述</view>
                        <view class="flex-treble text-right">这是代理商提交的申述描述</view>
                    </view>
                    <view class="flex justify-between align-stretch margin-top-sm">
                        <view class="text-gray flex-sub">申述图片</view>
                        <view class="flex-treble flex flex-wrap justify-end">
                            <fxbImage class="margin-left-xs margin-top-xs" width="155" height="155" v-for="(item,index) in imgList" :key="index" :src="item"></fxbImage>
                        </view>
                    </view>
                    <view class="flex justify-between align-stretch">
                        <view class="text-gray">申述人</view>
                        <view>王刚</view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">申述时间</view>
                        <view>2022-02-26 12:23:56</view>
                    </view>
                </view>
            </template>
            <template v-else>
                <view class="whiteBoxShadow">
                    <boxTitle title="异常处理"></boxTitle>
                    <view class="flex justify-between align-stretch">
                        <view class="text-gray flex-sub">异常原因</view>
                        <view class="flex-treble">在合同履行过程中发现串货现象，依据合同规定，扣除保证金</view>
                    </view>
                    <view class="flex justify-between align-stretch margin-top-sm">
                        <view class="text-gray flex-sub">异常材料</view>
                        <view class="flex-treble flex flex-wrap justify-end">
                            <fxbImage class="margin-left-xs margin-top-xs" width="155" height="155" v-for="(item,index) in imgList" :key="index" :src="item"></fxbImage>
                        </view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">异常处理</view>
                        <view class="text-red">暂停合同</view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">操作时间</view>
                        <view>2022-02-26 12:23:56</view>
                    </view>
                </view>
                <view class="whiteBoxShadow margin-top-sm flex">
                    <view @click="customerService" class="flex justify-center align-center flex-sub">
                        <text style="font-size: 36rpx" class="cuIcon-profile text-orange"></text>
                        <text class="margin-left-sm">平台介入</text>
                    </view>
                    <view @click="appeal" class="flex justify-center align-center flex-sub">
                        <text style="font-size: 36rpx" class="cuIcon-service text-red"></text>
                        <text class="margin-left-sm">提出申诉</text>
                    </view>
                </view>
            </template>

        </view>
        <view v-if="!$store.state.index.agentAndService" class="botBtn bg-white padding-xs flex">
            <button @click="gotoReview" class="cu-btn bg-red radius flex-sub">复审</button>
        </view>
    </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image";
import boxTitle from "/src/pages/agent/components/fxb-box-title";

export default {
    name: "contractErrorReason",
    components: {
        boxTitle,
        fxbImage
    },
    data() {
        return {
            imgList: [
                "/productDetails/Slice%201.png",
                "/productDetails/Slice%202.png",
                "/productDetails/Slice%203.png",
                "/productDetails/Slice%204.png",
                "/productDetails/Slice%205.png"
            ]
        };
    },
    methods:{
        customerService(){
          uni.navigateTo({
              url:"/pages/messageCenter/discussionGroup"
          })
        },
        gotoReview(){
            uni.navigateTo({
                url:"/pages/admin/adminContract/appealReview"
            })
        },
        rightClick(){
            uni.navigateTo({
                url:"/pages/admin/adminContract/handleProgress"
            })
        },
        appeal(){
            uni.navigateTo({
                url:"/pages/admin/adminContract/appeal"
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.botBtn{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>