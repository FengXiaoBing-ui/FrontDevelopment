<template>
    <view>
        <!--顶部标题-->
        <u-navbar title="调拨消息" :autoBack="true" placeholder></u-navbar>
        <view class="margin-top">
            <view v-for="(item,index) in msgList" :key="index">
                <view class="text-center margin-tb text-gray">{{ item.time }}</view>
                <view class="bg-white padding flex justify-between solid-bottom">
                    <view style="width: 550rpx">
                        <view class="text-bold" style="font-size: 18px">{{ item.title }}</view>
                        <view class="text-gray margin-top-xs">{{ item.content }}</view>
                    </view>
                    <view :class="item.status===1?'text-red':''">{{ item.status|statusFilter }}</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            msgList: [
                {
                    time: "2022-08-15 15:00",
                    title: "调拨提醒",
                    content: "金阳永辉超市申请调拨一件飞天茅台酒酱香型53°",
                    status: 1
                },
                {
                    time: "2022-08-15 15:00",
                    title: "调拨提醒",
                    content: "金阳永辉超市申请调拨一件飞天茅台酒酱香型53°",
                    status: 2
                }
            ]
        };
    },
    filters: {
        statusFilter(val) {
            if (val === 1) return "查看详情";
            if (val === 2) return "已完成";
        }
    }
};
</script>

<style scoped>

</style>
