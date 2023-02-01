<template>
    <view>
        <!--顶部标题-->
        <u-navbar :title="state==0?'平台消息':'合同消息'" :autoBack="true" placeholder></u-navbar>
        <view class="margin-top padding-lr-sm radius">
            <view v-for="(item,index) in msgList" :key="index">
                <view class="text-center margin-tb text-gray">{{ item.time }}</view>
                <view class="bg-white padding">
                    <view class="flex justify-between ">
                        <view class="text-bold" style="font-size: 16px">{{ item.title }}</view>
                        <view v-if="state==0" :class="item.status===1?'text-green':item.status===3?'text-red':''">
                            {{item.status|statusFilter }}
                        </view>
                        <view v-if="state==1"  :class="item.status===1?'text-yellow':'text-green'">
                            {{item.status|stateFilter }}
                        </view>
                    </view>
                    <view class="text-gray margin-top-sm">{{ item.content }}</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "contractMsgList",
    data() {
        return {
            state: 0,
            msgList: [
                {
                    time: "2022-08-15 15:00",
                    title: "飞天茅台代理合同",
                    content: "你签属的飞天茅台代理即将到期了,赶快去续约吧",
                    status: 1
                },
                {
                    time: "2022-08-10 09:14",
                    title: "泸州老窖代理合同",
                    content: "恭喜你!你的泸州老窖代理合同签属成功了",
                    status: 2
                },
                {
                    time: "2022-08-10 09:14",
                    title: "泸州老窖代理合同",
                    content: "恭喜你!你的泸州老窖代理合同签属成功了",
                    status: 3
                },
                {
                    time: "2022-08-10 09:14",
                    title: "泸州老窖代理合同",
                    content: "恭喜你!你的泸州老窖代理合同签属成功了"
                },
                {
                    time: "2022-08-10 09:14",
                    title: "泸州老窖代理合同",
                    content: "恭喜你!你的泸州老窖代理合同签属成功了"
                }
            ]
        };
    },

    filters: {
        statusFilter(val) {
            if (val === 1) return "审核中";
            if (val === 2) return "审核完成";
            if (val === 3) return "审核失败";
        },
        stateFilter(val) {
            if (val === 1) return "即将到期";
            if (val === 2) return "签约成功";
        }
    },
    onLoad(option) {
        this.state = option.state;
    }
};
</script>

<style scoped>

</style>
