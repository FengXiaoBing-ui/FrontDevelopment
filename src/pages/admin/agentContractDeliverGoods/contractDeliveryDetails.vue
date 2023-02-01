<template>
    <view class="content">
        <u-navbar @leftClick="leftClick" :border="false" :fixed="true" title="合同发货详情">
        </u-navbar>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:'+ CustomBar + 'px;padding-bottom:120rpx'">
            <view class="whiteBoxShadow">
                <view class="flex align-center justify-between">
                    <view class="flex align-center text-red">
                        <text class="cuIcon-time margin-right-xs" style="font-size: 42rpx;"></text>
                        <view class="text-lg">{{ fnStatusArr[fnStatus][status] }}</view>
                    </view>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="text-gray">合同发货单号</text>
                    <text>HJXCGD20220901001</text>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="text-gray">提交时间</text>
                    <text>2022-08-31 12:56:12</text>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="text-gray">操作员</text>
                    <text>王晓丫</text>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="发货明细"></boxTitle>
                <view class="u-border radius padding-sm margin-top-sm" v-for="item in 3" :key="item">
                    <view class="flex align-center justify-between">
                        <view class="flex align-center">
                            <template v-if="fnStatus==1||(fnStatus==0&&status==1)">
                                <u-checkbox activeColor="red"></u-checkbox>
                            </template>
                            <text>东方国宾·尊致酒500ml酱香型合同</text>
                        </view>
                        <text class="text-red">{{ fnStatusArr[fnStatus][status] }}</text>
                    </view>
                    <view class="flex align-center justify-between margin-tb-lg">
                        <view class="flex align-center">
                            <text class="text-gray">发货数量：</text>
                            <text>240瓶</text>
                        </view>
                        <view class="flex align-center">
                            <text class="text-gray">金额合计：</text>
                            <text>¥59000.00</text>
                        </view>
                    </view>
                    <view class="margin-top-sm grid col-3">
                        <view class="text-left">
                            <button v-if="fnStatus==0&&status==1" @click="" class="cu-btn bg-white radius u-border">
                                删除订单
                            </button>
                            <button v-if="fnStatus==1&&status==1" @click="" class="cu-btn bg-white radius u-border">
                                确认签收
                            </button>
                        </view>
                        <view class="text-center">
                            <button v-if="fnStatus==0&&status==1" @click="" class="cu-btn bg-white radius u-border">
                                修改订单
                            </button>
                        </view>
                        <view class="text-right">
                            <button @click="gotoDetails" class="cu-btn bg-white radius u-border">查看详情</button>
                        </view>
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <view class="flex justify-between align-center">
                    <text class="text-gray">数量合计</text>
                    <text>240瓶</text>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">金额合计</text>
                    <text>¥59000.00</text>
                </view>
                <view class="u-border-top margin-tb"></view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-lg text-bold">金额合计</text>
                    <text class="text-red">¥59000.00</text>
                </view>
            </view>

        </view>
        <view v-if="fnStatus==1&&status==0" class="botBtn bg-white padding-sm flex justify-between align-center">
            <view class="flex align-center">
                <text class="text-gray">共1800瓶</text>
                <text>合计：</text>
                <text class="text-red">￥500000.00</text>
            </view>
            <button class="bg-red radius cu-btn" @click="gotoPay">去支付</button>
        </view>
        <view v-if="fnStatus==0&&status==1" class="botBtn bg-white padding-sm flex justify-between align-center">
            <button @click="show = true" style="width: 100%" class="bg-red radius cu-btn">生成合同发货订单</button>
        </view>
        <u-popup :show="show" :round="10" mode="center" @close="close" @open="open">
            <view style="width: 600rpx" class="padding-lr-sm padding-tb-xl">
                <view class="text-lg text-center">温馨提示</view>
                <view class="margin-tb">您还有子订单未通过审核，是否需要修改订单重新审核</view>
                <view class="flex justify-between align-center">
                    <button @click="close" style="width: 48%" class="cu-btn bg-gray radius">修改订单</button>
                    <button @click="close" style="width: 48%" class="cu-btn bg-red radius">生成合同发货单</button>
                </view>
            </view>
        </u-popup>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";

export default {
    name: "contractDeliveryDetails",
    components: {
        boxTitle
    },
    data() {
        return {
            back: false,//由支付结果页跳转过来需要使用uni.
            status: 0,
            fnStatus: 0,
            show: false,
            fnStatusArr: [
                [
                    "待审核", "未通过"
                ],
                [
                    "待支付", "进行中", "已完成"
                ]
            ]
        };
    },
    onLoad(options) {
        if (options.back) this.back = options.back;
        this.status = options.status;
        this.fnStatus = options.fnStatus;
    },
    methods: {
        //导航栏左侧按钮事件
        leftClick() {
            if (this.back == "true") {
                uni.navigateBack({
                    delta: 2
                });
            } else {
                uni.navigateBack({
                    delta: 1
                });
            }
        },
        gotoPay() {
            uni.navigateTo({
                url: "/pages/admin/agentContractDeliverGoods/payForGoods" + `?fnStatus=${this.fnStatus}&status=${this.status}`
            });
        },
        gotoDetails() {
            uni.navigateTo({
                url: "/pages/admin/agentContractDeliverGoods/sunOrderDetails" + `?fnStatus=${this.fnStatus}&status=${this.status}`
            });
        },
        open() {
            // console.log('open');
        },
        close() {
            this.show = false;
            // console.log('close');
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
}
</style>