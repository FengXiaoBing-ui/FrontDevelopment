<template>
    <view class="content">
        <u-navbar title="代理政策" :autoBack="true"></u-navbar>
        <view class="padding" :style="'margin-top:' + CustomBar + 'px'">
            <view class="whiteBoxShadow">
                <boxTitle title="代理政策" right-text="下载文件" right-class="bg-gray radius" right-icon="down"></boxTitle>
                <view class="text-bold">代理费</view>
                <view class="flex justify-between align-center margin-top"
                      v-for="(item,index) in  policy.policyPrice"
                      :key="index">
                    <view class="text-grey">{{ item.name }}</view>
                    <view :class="item.textRed?'text-red':''">{{ item.value }}</view>
                </view>
                <view class="text-bold margin-top">特约代理商</view>
                <view class="flex justify-between align-center margin-top"
                      v-for="(item,index) in policy.specialAgent"
                      :key="index">
                    <view class="text-grey">{{ item.name }}</view>
                    <view :class="item.textRed?'text-red':''">{{ item.value }}</view>
                </view>
                <view class="margin-top flex align-center">
                    <view class="text-bold">品鉴会</view>
                    <view class="text-blue margin-left">什么是品鉴会?</view>
                </view>
                <view class="flex justify-between align-center margin-top"
                      v-for="(item, index) in  policy.appraisal"
                      :key="index">
                    <view class="text-grey">{{ item.name }}</view>
                    <view :class="item.textRed?'text-red':''">{{ item.value }}</view>
                </view>
                <view class="text-bold margin-top">任务奖励</view>
                <view class="flex justify-between align-center margin-top"
                      v-for="(item, index) in  policy.taskReward"
                      :key="index">
                    <view class="text-grey" :class="item.textMin?'text-xs':''">{{ item.name }}</view>
                    <view :class="item.textRed?'text-red':''">{{ item.value }}</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";

export default {
    name: "policyAgency",
    components: {
        boxTitle
    },
    data() {
        return {
            policy: {
                policyPrice: [{
                    name: "合同总量",
                    value: "300件(1800瓶)"
                },
                    {
                        name: "合同总额",
                        value: "壹佰万元整(￥1000000.00)",
                        textRed: true
                    },
                    {
                        name: "首单进货",
                        value: "300箱(1800瓶)"
                    },
                    {
                        name: "首单总额",
                        value: "￥466000.00",
                        textRed: true
                    },
                    {
                        name: "单价",
                        value: "259元/瓶"
                    },
                    {
                        name: "随货支持",
                        value: "20%(价值93240元)",
                        textRed: true
                    }
                ],
                specialAgent: [
                    {
                        name: "首单进价",
                        value: "￥500000.00",
                        textRed: true
                    },
                    {
                        name: "首单进货",
                        value: "100件(600瓶)"
                    },
                    {
                        name: "首单总额",
                        value: "￥4660000.00",
                        textRed: true
                    }
                ],

                appraisal: [ // 品鉴会
                    {
                        name: "支持场数",
                        value: "50场"
                    },
                    {
                        name: "总价值",
                        value: "100900元",
                        textRed: true
                    },
                    {
                        name: "品签酒",
                        value: "2瓶/场"
                    },
                    {
                        name: "餐费报销",
                        value: "1500/场"
                    }
                ],
                taskGoal: "年任务量需达60万(￥600000.00)，未达标者取消代理资格", //任务达标
                taskReward: [{
                    name: "年任务量达",
                    value: "一百万元(￥1000000.00)",
                    textRed: true
                },
                    {
                        name: "随货奖励",
                        value: "100件(价值155400元)"
                    },
                    {
                        name: "返佣奖励可选择等值的积分或商品",
                        textMin: true
                    },
                    {
                        name: "奖励商品",
                        value: "一百万元(￥1000000.00)",
                        textRed: true
                    },
                    {
                        name: "奖励积分",
                        value: "100件(价值155400元)"
                    }
                ]
            }
        };
    }
};
</script>

<style scoped>

</style>
