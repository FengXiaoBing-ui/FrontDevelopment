<template>
    <view>
        <u-navbar :autoBack="true" title="物流详情"></u-navbar>
        <view :style="`margin-top:${(CustomBar +10)*2}rpx`" class="margin-lr-sm">
            <view class="radius padding bg-white flex align-center justify-around">
                <view class="flex align-center">
                    <view class="text-gray">韵达快递</view>
                    <view class="margin-left-sm">1564622456876456456</view>
                </view>
                <copyButton value="1564622456876456456"></copyButton>
            </view>
            <view class="margin-bottom margin-top-sm padding bg-white radius">
                <view class="cu-time margin-bottom margin-left">今天</view>
                <view v-for="(item,index) in expressList" :key="item.id" class="cu-timeline">
                    <view class="cu-time">{{item.date}}</view>
                    <view :class="index==0?'text-blue':''" class="cu-item">
                        <view class="cu-time ">{{item.date}}</view>
                        <view class="cu-item ">
                            <view :class="index==0?'text-black':'text-gray'" class="content  padding-sm" style="background:#F7F7F7 ;">
                                <text>{{item.time}}</text>
                                {{item.content}}
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import copyButton from "/src/components/common/copyButton";

export default {
    name: "expressDetailsIndex",
    components: {
        copyButton
    },
    computed: {
        expressList() {
            return this.expressInfo.reverse();
        }
    },
    data: function() {
        return {
            expressInfo: [
                { time: "02:26", date: "2022.08.31", content: "商品已支付，等待发货", id: "0" },
                { time: "02:26", date: "2022.08.31", content: "贵阳市金阳三部的王在意已揽件。", id: "1" },
                { time: "02:26", date: "2022.08.31", content: "快递正在运输途中，请您耐心等待。", id: "2" },
                { time: "02:26", date: "2022.08.31", content: "贵阳金阳三部的王晓刚[18565235646]正在为您派件。", id: "3" },
                {
                    time: "02:26",
                    date: "2022.08.31",
                    content:
                        "您的快递已暂存至[快宝的38栋中通快递快递超市]，地址：官府一号一组团38栋超市里面，请及时领取。如有疑问请联系：15564545865",
                    id: "4"
                },
                {
                    time: "02:26",
                    date: "2022.08.31",
                    content:
                        "您的快递已签收，签收人在[快宝的38栋中通快递快递超市]（官府一号一组团38栋超市里面）领取。如有疑问，请联系：18645856575",
                    id: "5"
                }
            ]
        };
    }
};
</script>

<style scoped></style>
