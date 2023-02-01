<template>
    <view>
        <!--顶部标题-->
        <u-navbar title="发票信息" :autoBack="true" placeholder></u-navbar>
        <view class="margin-top">
            <view v-for="(item,index) in msgList" :key="index">
                <view class="text-center margin-tb text-gray">{{ item.time }}</view>
                <view class="bg-white padding flex justify-between solid-bottom">
                    <view>
                        <view class="text-bold" style="font-size: 18px">{{ item.title }}</view>
                        <view class="text-gray margin-top-xs">{{ item.content }}</view>
                    </view>
                    <view :class="item.status===1?'text-green':''">{{ item.status|statusFilter }}</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "invoiceMsgList",
    data() {
        return {
            msgList: [
                {
                    time: "2022-08-15 15:00",
                    title: "飞天茅台发票",
                    content: "你购买的两瓶飞天茅台发票申请中,请耐心等待",
                    status: 1
                },
                {
                    time: "2022-08-10 09:14",
                    title: "飞天茅台发票",
                    content: "你购买的两瓶飞天茅台发票已经开具成功了",
                    status: 2
                },
                {
                    time: "2022-08-15 15:00",
                    title: "飞天茅台发票",
                    content: "你购买的两瓶飞天茅台发票已经撤销了",
                    status: 3
                }
            ]
        };
    },
    filters: {
        statusFilter(val) {
            if (val === 1) return "申请中";
            if (val === 2) return "申请成功";
            if (val === 3) return "已撤销";
        }
    }
};
</script>

<style scoped>

</style>
