<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="补货详情" :autoBack="true">
        </u-navbar>
        <view class="padding-bottom" :style="'margin-top:'+ CustomBar + 'px;padding-bottom:120rpx'">
<!--            <view class="whiteBoxShadow">-->
<!--                <view class="flex justify-between align-center">-->
<!--                    <text class="text-gray">状态</text>-->
<!--                    <text :class="status==4?'text-green':'text-red'">{{ statusArr[status - 1] }}</text>-->
<!--                </view>-->
<!--                <template v-if="status==2">-->
<!--                    <view class="flex justify-between margin-top-sm">-->
<!--                        <text class="text-gray flex-sub">未通过原因</text>-->
<!--                        <text class="flex-treble text-right">这是未通过原因，这是未通过</text>-->
<!--                    </view>-->
<!--                    <view class="flex justify-between margin-top-sm" v-if="false">-->
<!--                        <text class="text-gray flex-sub">审核人</text>-->
<!--                        <text class="flex-treble text-right">张东</text>-->
<!--                    </view>-->
<!--                    <view class="flex justify-between margin-top-sm">-->
<!--                        <text class="text-gray flex-sub">审核时间</text>-->
<!--                        <text class="flex-treble text-right">2022-08-30 12:23:12</text>-->
<!--                    </view>-->
<!--                </template>-->
<!--            </view>-->
            <fxbStatusCard :status="statusArr[status - 1]" tips="剩余时间：12:23:12" icon="daishenhe"></fxbStatusCard>


            <view v-if="false" class="whiteBoxShadow margin-top-sm">
                <boxTitle title="签收意见"></boxTitle>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">反馈状态</text>
                    <text class="text-red">商家处理中</text>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">意见类别</text>
                    <text>商品破损</text>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">破损数量</text>
                    <text>23瓶</text>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">凭证图片</text>
                    <text>23瓶</text>
                </view>
                <view class="margin-top">
                    <text>这是输入的内容，这是输入的内容，这是输入的内容</text>
                    <view class="flex margin-top">
                        <fxbImage class="margin-right-sm" v-for="item in 5" :key="item"
                                  style="width: 110rpx;height: 110rpx"
                                  :src="`/productDetails/Slice%20${item}.png`"></fxbImage>
                    </view>
                </view>
                <button style="width: 100%;border-color: red !important;color: red !important;"
                        class="cu-btn margin-top bg-white radius u-border">补发商品
                </button>
            </view>


            <view class="whiteBoxShadow" style="transform: translateY(-20rpx)">
                <boxTitle v-if="$store.state.index.agentAndService" title="补货明细"></boxTitle>
                <view v-for="(item,index) in list" :key="index+'w'" class="u-border radius padding-sm margin-bottom-sm">
                    <view class="flex justify-between align-center">
                        <view class="text-bold flex-treble text-cut">东方国宾·尊致酒合同</view>
                        <view v-if="$store.state.index.agentAndService" class="flex-sub text-right"
                              :class="status==4?'text-green':'text-red'">{{ item.state===0?'待审核':item.state===1?'未通过':'待支付' }}
                        </view>
                    </view>
                    <view class="flex justify-between align-center text-gray margin-top-sm">
                        <view>结算方式：现结</view>
                        <view>合同编号：213234233543</view>
                    </view>
                    <view class="u-border-top margin-top"></view>
                    <view class="margin-top" v-for="item in 2" :key="item">
                        <view class="flex align-center">
                            <fxbImage class="radius" style="width: 140rpx;height: 140rpx;"
                                      src="/productDetails/Slice%201.png" mode="aspectFill"></fxbImage>
                            <view style="height: 140rpx;width: 75%"
                                  class="margin-left-sm flex flex-direction justify-around">
                                <view class="text-bold">东方国宾·尊致酒53°瓶装500ml</view>
                                <view class="text-sm text-gray flex justify-between align-center">
                                    <view>规格：500ml*6瓶/件</view>
                                    <view class="text-left" style="min-width: 220rpx">酱香型 | 53° | 瓶装</view>
                                </view>
                                <view class="text-df text-grey flex justify-between align-center">
                                    <view class="flex align-center justify-start" style="min-width: 220rpx">
                                        <text class="text-black">代理价：</text>
                                        <text class="text-red">￥265.00</text>
                                        <text>/瓶</text>
                                    </view>
                                </view>
                            </view>
                        </view>
                        <view class="flex justify-between align-center margin-top-sm">
                            <view class="flex align-center">
                                <text class="text-gray">剩余瓶数：</text>
                                <text>1200瓶</text>
                            </view>
                            <view class="flex align-center">
                                <text class="text-gray">发货数量：</text>
                                <text>2瓶</text>
                            </view>
                        </view>
                        <view class="u-border-top margin-tb"></view>
                    </view>
                    <view v-if="$store.state.index.agentAndService" class="flex justify-between margin-top-sm">
                        <button @click="" class="cu-btn line-gray radius flex-sub sm">删除</button>
                        <button @click="$refs.popup.open()" class="cu-btn line-gray radius flex-sub sm margin-lr-xl">
                            修改
                        </button>
                        <button @click="sunOrderDetails(item.state)" class="cu-btn line-gray radius flex-sub sm">查看详情</button>
                    </view>
                </view>
            </view>

            <view class="whiteBoxShadow">
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">数量合计</text>
                    <text>240瓶</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">金额合计</text>
                    <text class="text-red">￥59000.00</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">优惠金额</text>
                    <text class="text-grey">￥9000.00</text>
                </view>
                <view class="u-border-top margin-tb"></view>
                <view class="flex justify-between">
                    <text class="text-bold text-lg">应付金额</text>
                    <view class="flex flex-direction align-end">
                        <view class="text-red">￥50000.00</view>
                        <view class="text-gray text-sm">{{ $util.convertCurrency(50000) }}</view>
                    </view>
                </view>
            </view>

            <view class="whiteBoxShadow margin-top-sm" v-if="status==1||status==2||status==3">
                <boxTitle v-if="$store.state.index.agentAndService" title="订单详情"></boxTitle>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">补货单号</text>
                    <text>HJXCGD20220901001</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">提交时间</text>
                    <text>2022-08-31</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">操作人</text>
                    <text>王晓丫</text>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm" v-if="status==4">
                <boxTitle v-if="$store.state.index.agentAndService" title="申请详情"></boxTitle>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">补货单号</text>
                    <text class="text-grey">HJXCGD20220901001</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">提交时间</text>
                    <text class="text-grey">2022-08-31</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">操作人</text>
                    <text class="text-grey">王晓丫</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">审核时间</text>
                    <text class="text-grey">2022-08-31</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">支付方式</text>
                    <text class="text-grey">微信支付</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">支付时间</text>
                    <text class="text-grey">2022-08-31</text>
                </view>
            </view>

        </view>
        <view v-if="!$store.state.index.agentAndService&&status==1" class="botBtn padding-sm bg-white flex">
            <button @click="gotoFailed" class="flex-sub cu-btn bg-gray radius">驳回申请</button>
            <button @click="" class="flex-sub margin-left-sm cu-btn bg-red radius">审核通过</button>
        </view>
        <view v-if="$store.state.index.agentAndService&&(status==2||status==3)" class="botBtn padding-sm bg-white flex">
            <button v-if="status==2" @click="" class="w100 cu-btn bg-red radius">支付补货单</button>
            <view v-if="status==3" class="w100 flex justify-around align-center">
                <text class="text-sm text-gray">共1800瓶</text>
                <view>合计：
                    <text class="text-red">￥20000.00</text>
                </view>
                <button @click="gotoPay" class="cu-btn bg-red radius">去支付</button>
            </view>
        </view>
        <uni-popup ref="popup" type="center">
            <view class="w100 flex justify-center">
                <view class="w75 bg-white padding radius">
                    <view class="text-bold text-center">温馨提示</view>
                    <view class="margin-tb-xl">您有补货订单未通过审核，是否需要修改订单重新审核</view>
                    <view class="flex justify-between align-center">
                        <button class="cu-btn bg-gray radius flex-sub">修改订单</button>
                        <button class="cu-btn bg-red radius flex-sub margin-left-sm ">生成补货单</button>
                    </view>
                </view>
            </view>
        </uni-popup>
    </view>
</template>

<script>
import fxbStatusCard from "/src/components/fxb/fxb-status-card"
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import botBtn from "/src/components/fxb-bot-fixed-button/fxb-bot-fixed-button";
import fxbImage from "/src/components/fxb/fxb-image";

export default {
    name: "replenishmentDetails",
    components: {
        botBtn,
        boxTitle,
        fxbImage,
        fxbStatusCard

    },
    data() {
        return {
            popupIndex: 0,
            show: false,
            status: 1,

            statusArr: [
                "待审核",
                "未通过",
                "待支付",
                "已完成"
            ],
            list:[
                {
                    state:0,
                    title:"东方国宾·尊致酒代理合同"
                },
                {
                    state:1,
                    title:"东方国宾·尊致酒代理合同"
                },
                {
                    state:2,
                    title:"东方国宾·尊致酒代理合同"
                }
            ]
        };
    },
    onLoad(options) {
        this.status = options.status;
    },
    methods: {
        open(index) {
        },
        close() {
            this.show = false;
            // console.log('close');
        },
        showPopup(index) {
            this.show = true;
            this.popupIndex = index;
        },
        gotoFailed() {
            uni.redirectTo({
                url: "/pages/admin/contractDeliverGoods/toExamineFailed"
            });
        },
        sunOrderDetails(state) {
            uni.navigateTo({
                url: "/pages/admin/replenishment/sunOrderDetails?status=" + state
            });
        },
        gotoPay() {
            uni.navigateTo({
                url: "/pages/admin/replenishment/payLoan"
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.botBtn {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    box-shadow: 10rpx 10rpx 20rpx #a8a8a8;
}
</style>