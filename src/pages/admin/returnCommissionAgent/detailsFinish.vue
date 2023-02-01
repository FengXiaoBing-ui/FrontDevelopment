<template>
    <view>
        <u-navbar :autoBack="true" title="返佣详情"></u-navbar>
        <view :style="`margin-top:${(CustomBar+10)*2}rpx`">
            <view class="whiteBoxShadow flex justify-between align-center margin-lr-sm">
                <view class="text-gray">状态</view>
                <view class="text-red">已完成</view>
            </view>
            <view class="whiteBoxShadow margin-sm">
                <boxTitle title="进度查询"></boxTitle>
                <view class="flex justify-between align-center ">
                    <view>
                        <view class="text-red text-bold margin-tb-sm">返佣进度</view>
                        <view class="text-gray">2022年6月21日 17:56:24</view>
                    </view>
                    <view class="text-bold text-red text-xl text-cut ">
                        {{ backGoods }}
                    </view>
                </view>
                <view class="cu-btn bg-red w100 margin-top" @click="seeProgress">查看返佣进度</view>
            </view>
            <view class="whiteBoxShadow margin-sm">
                <boxTitle title="合同任务"></boxTitle>
                <view class="margin-tb">
                    <contractCard
                        :id="info.id"
                        :contentList="info.contentList"
                        :name="info.name"
                        :pay-way="info.payWay"
                        list>
                    </contractCard>
                </view>
            </view>
            <view class="margin-sm whiteBoxShadow">
                <boxTitle title="申请详情"></boxTitle>
                <view v-for="(item,index) in applyInfo" :key="index"
                      class="flex margin-tb-sm justify-between align-center">
                    <view class="text-gray">{{ item.label }}</view>
                    <view>{{ item.value }}</view>
                </view>
            </view>
            <view class="margin-sm whiteBoxShadow">
                <boxTitle title="申请信息"></boxTitle>
                <view class="flex justify-between align-center">
                    <text>申请人</text>
                    <text>王晓刚(王晓刚烟酒小卖部)</text>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text>申请时间</text>
                    <text>2022-08-31 12:56:12</text>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text>审核状态</text>
                    <text>已通过</text>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text>审核时间</text>
                    <text>2022-08-31 12:56:12</text>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text>完成时间</text>
                    <text>2022-08-31 12:56:12</text>
                </view>
            </view>
        </view>
        <u-popup :closeable="true" :round="10" :show="showPop" mode="bottom" @close="close">
            <view class="text-center w100 padding">进度详情</view>
            <view class="text-red text-bold flex justify-between align-center margin-lr">
                <view>返佣金额</view>
                <view>￥7488.00</view>
            </view>
            <view class="padding-lr margin-top bg-white radius" style="height: 80vh;overflow: scroll">
                <view class="cu-time margin-bottom margin-left">今天</view>
                <view v-for="(item,index) in expressList" :key="item.id" class="cu-timeline">
                    <view class="cu-time">{{ item.date }}</view>
                    <view :class="index==0?'text-blue':''" class="cu-item">
                        <view class="cu-time ">{{ item.date }}</view>
                        <view class="cu-item ">
                            <view :class="index==0?'text-black':'text-gray'" class="content  padding-sm"
                                  style="background:#F7F7F7 ;">
                                <text>{{ item.time }}</text>
                                {{ item.content }}
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </u-popup>
    </view>
</template>

<script>
import contractCard from "/src/pages/admin/components/contractCard";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import copyButton from "/src/components/common/copyButton";
import goodsInfoCard from "/src/components/erp/goodsInfoCard";

export default {
    name: "returnAdmin",
    components: {
        contractCard, boxTitle, copyButton, goodsInfoCard
    },
    computed: {
        expressList() {
            return this.expressInfo.reverse();
        }
    },
    data() {
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
            ],
            showPop: false,
            backGoods: "￥185174.00",
            status: "0",
            applyInfo: [
                { label: "返佣方式", value: "积分返佣" },
                { label: "返佣积分", value: "7000000分" },
                { label: "金额合计", value: "¥1223213.00" }
            ],
            info: {
                name: "东方国宾·尊致酒53°瓶装500ml",
                id: "21547789789",
                payWay: "现结",
                contentList: [
                    { lable: "目前完成", value: "￥1223213.00", color: "red" },
                    { lable: "超标任务", value: "年销售额壹佰万元整(￥1000000.00)" },
                    { lable: "任务奖励", value: "100件(价值¥200000.00)", color: "red" }
                ],
                signingTime: "2022-08-30 12:23:23",
                status: "0"//
            }
        };
    },
    methods: {
        close() {
            this.showPop = false;
        },
        seeProgress() {
            this.showPop = true;
        }
    }
};
</script>

<style lang="scss" scoped>
</style>