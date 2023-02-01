<template>
    <view>
        <u-navbar :autoBack="true" title="系统设置"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`">
           <view class="padding-xs">
               <view class="padding-sm">
                   <view class="margin-bottom-sm" >系统通知消息</view>
                   <view class="padding-sm bg-white">
                       <view class="text-bold">新消息系统通知</view>
                       <view class="flex justify-between margin-tb-sm">
                           <view class="text-gray text-xs">开启后，可有收到活动，账户信息变动等消息通知</view>
                           <view>
                               <u-switch v-model="systemMessage" activeColor="#4CD964" @change="change" size="16"></u-switch>
                           </view>
                       </view>
                   </view>
               </view>
               <view class="padding-sm">
                   <view  class="margin-bottom-sm">APP打开时横幅通知</view>
                   <view class="padding-sm bg-white">
                       <view class="text-bold">活动通知</view>
                       <view class="flex justify-between margin-tb-sm">
                           <view class="text-gray text-xs">开启后，可有收到活动，账户信息变动等消息通知</view>
                           <view>
                               <u-switch v-model="activityMessage" activeColor="#4CD964" @change="change" size="16"></u-switch>
                           </view>
                       </view>
                   </view>
                   <view class="padding-sm bg-white">
                       <view class="text-bold">服务通知</view>
                       <view class="flex justify-between margin-tb-sm">
                           <view class="text-gray text-xs">开启后，可有收到活动，账户信息变动等消息通知</view>
                           <view>
                               <u-switch v-model="serviceMessage" activeColor="#4CD964" @change="change" size="16"></u-switch>
                           </view>
                       </view>
                   </view>
               </view>
           </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "messageSettingsIndex",
    data() {
        return {
            systemMessage: false,
            activityMessage:false,
            serviceMessage:false,
        };
    },
    methods: {
        change() {
        }
    }
};
</script>

<style scoped>

</style>