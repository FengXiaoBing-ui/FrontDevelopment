<template>
    <view>
        <!--顶部标题-->
        <u-navbar title="库存预警" :autoBack="true" placeholder></u-navbar>
        <view class="margin-top">
            <view v-for="(item,index) in msgList" :key="index">
                <view class="text-center margin-tb text-gray">{{ item.time }}</view>
                <view class="bg-white padding solid-bottom flex justify-between align-center">
                   <view>
                       <view class="text-bold" style="font-size: 18px">{{ item.title }}</view>
                       <view class="text-gray margin-top-xs">{{ item.content }}</view>
                   </view>
                    <view class="cuIcon-right text-gray" style="font-size: 16px"></view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "stockWarningList",
    data() {
        return {
            msgList: [
                {
                    time: "2022-08-15 15:00",
                    title: "超库存提示",
                    content: "你购买的两瓶飞天茅台发票申请中,请耐心等待"
                },
                {
                    time: "2022-08-10 09:14",
                    title: "缺货提示",
                    content: "你购买的两瓶飞天茅台发票已经开具成功了"
                },
                {
                    time: "2022-08-15 15:00",
                    title: "超发提示",
                    content: "你购买的两瓶飞天茅台发票已经撤销了"
                },
                {
                    time: "2022-08-15 15:00",
                    title: "错发提示",
                    content: "你购买的两瓶飞天茅台发票已经撤销了"
                }
            ]
        };
    }
};
</script>

<style scoped>

</style>
