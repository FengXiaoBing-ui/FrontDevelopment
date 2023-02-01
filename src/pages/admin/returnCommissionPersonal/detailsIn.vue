<template>
    <view>
        <u-navbar :autoBack="true" title="返佣详情"></u-navbar>
        <view :style="`margin-top:${(CustomBar+10)*2}rpx`">
            <view class="whiteBoxShadow  margin-lr-sm flex align-center justify-between">
                <view class="text-gray">状态</view>
                <view class="text-red">进行中</view>
            </view>
        </view>
        <view class="whiteBoxShadow margin-sm">
            <boxTitle :right-text="
            status==='0'&&orderStatus==='0'?'待备货':status==='0'&&orderStatus==='1'?'待发货':'已发货'" title="进度"></boxTitle>
            <view class="flex justify-between align-center margin-top">
                <view>
                    <view class="text-red text-bold margin-tb-sm">返佣进度</view>
                    <view class="text-gray">2022年6月21日 17:56:24</view>
                </view>
                <view class="text-bold text-red text-xl text-cut ">
                    {{ backGoods }}
                </view>
            </view>
            <view v-if="status!=='1'" class="cu-btn bg-red w100 margin-top" @click="seeProgress">查看返佣进度</view>
        </view>
        <view class="whiteBoxShadow margin-sm">
            <boxTitle right-text="查看订单记录" right-text-class="cu-btn xs" title="九月订单统计"></boxTitle>
            <view class="margin-tb">
                <goodsInfoCard agent-price="365"
                               goods-name="飞天茅台53°瓶装酱香型 500ml"
                               goods-type="酱香型"
                               goodsDegrees="49"
                               goodsVolume="500"
                               img-url="/productDetails/Slice%201.png"
                               retail-price="389"
                ></goodsInfoCard>
                <view class="padding-top u-border-top flex justify-around align-center">
                    <view class="w-third text-center">
                        <view class="text-bold text-cut">2489</view>
                        <view class="text-gray margin-top-sm">成交数量</view>
                    </view>
                    <view class="w-third text-center">
                        <view class="text-bold text-cut">154891.00</view>
                        <view class="text-gray margin-top-sm">金额总量</view>
                    </view>
                    <view class="w-third text-center">
                        <view class="text-bold text-cut">5489.00</view>
                        <view class="text-gray margin-top-sm">返佣金额</view>
                    </view>
                </view>
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
            <boxTitle title="反佣金额"></boxTitle>
            <view class="flex margin-top-sm justify-between align-center">
                <view class="text-gray">返佣方式：</view>
                <view>现金返佣(¥8490.00)</view>
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
    onLoad(obj) {
        this.status = obj.status;
    },
    computed: {
        backGoods() {
            return this.status === "0" ? "￥7000.00" : this.status === "1" ? "商品80件（480瓶）" : "70000积分";
        },
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
            orderStatus: "0",
            status: "",
            countInfo: [
                { label: "数量合计", value: "240瓶" },
                { label: "金额合计", value: "¥145550.00" },
                { label: "物流运费", value: "¥0.00" }
            ],
            statusInfo: [
                { label: "状态：", value: "未通过" },
                { label: "审核人：", value: "张三" },
                { label: "审核时间：", value: "2022-08-30 12:26:56" },
                { label: "未通过原因：", value: "这是未通过原因内容。" }
            ],
            applyInfo: [
                { label: "返佣方式", value: "返佣商品(480瓶)" },
                { label: "申请人", value: "王晓刚(王晓刚烟酒小卖部)" },
                { label: "申请时间", value: "2022-08-30 12:26:56" },
                { label: "审核人", value: "王丽" },
                { label: "审核时间", value: "2022-08-30 12:26:56" }
            ],
            info: {
                name: "东方国宾·尊致酒53°瓶装500ml",
                id: "21547789789",
                payWay: "现结",
                contentList: [
                    { lable: "合同任务", value: "300件(1800瓶)" },
                    { lable: "合同金额", value: "￥1223213.00", color: "red" },
                    { lable: "完成进度", value: "已完成" },
                    { lable: "返佣奖励", value: "商品100件(600瓶)", color: "red" }
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
.foot {
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>