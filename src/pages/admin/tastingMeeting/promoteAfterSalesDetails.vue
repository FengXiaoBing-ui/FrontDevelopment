<template>
    <view>
        <u-navbar title="售后详情" :autoBack="true"></u-navbar>
        <view :style="'margin-top:' + (CustomBar)*2 +'rpx;'+(status==1||status==2?'padding-bottom:70px':'padding-bottom:10px')">
            <fxbStatusCard :status="localStatus.status" :tips="localStatus.tips"
                           :icon="localStatus.icon"></fxbStatusCard>
            <view v-if="status==3||status==4" class="whiteBoxShadow margin-bottom-sm"
                  style="transform: translateY(-20rpx)">
                <boxTitle title="处理进度"></boxTitle>
                <u-steps :current="status-2" dot activeColor="#F37B1D ">
                    <u-steps-item title="商家同意"></u-steps-item>
                    <u-steps-item title="银行处理"></u-steps-item>
                    <u-steps-item title="退款成功"></u-steps-item>
                </u-steps>
                <button @click="showMoney = true"
                        style="width: 100%"
                        class="bg-red radius cu-btn margin-top">
                    查看钱款去向
                </button>
            </view>
            <view v-if="status==2" class="whiteBoxShadow margin-bottom-sm"  style="transform: translateY(-20rpx)">
                <text class="text-red">因个人原因导致的无法退款</text>
            </view>
            <view class="whiteBoxShadow" style="transform: translateY(-20rpx)">
                <boxTitle title="售后信息"></boxTitle>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="text-gray">入场状态</text>
                    <text>未入场</text>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="text-gray">退款原因</text>
                    <text>超时未入场</text>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="text-gray">退款描述</text>
                    <text>因气候原因超时未入场</text>
                </view>
                <view class="flex margin-top-sm">
                    <fxbImage width="154" height="154" v-for="(item,index) in imgList" :key="index"
                              :src="item.url"></fxbImage>
                </view>
            </view>
            <view class="whiteBoxShadow">
                <boxTitle title="报名费用"></boxTitle>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="text-gray">参会费</text>
                    <text class="text-red">￥500.00</text>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="text-gray">优惠</text>
                    <text>无</text>
                </view>
                <view class="u-border-bottom margin-tb"></view>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="text-lg">费用合计</text>
                    <text class="text-red text-lg">￥500.00</text>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="报名信息"></boxTitle>
                <view class="flex align-center justify-between margin-top-sm">
                    <view class="text-gray">报名编号</view>
                    <view>12584545245</view>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <view class="text-gray">报名时间</view>
                    <view>2022-08-30 12:30</view>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <view class="text-gray">支付状态</view>
                    <view>已支付</view>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <view class="text-gray">支付金额</view>
                    <view>￥250.00</view>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <view class="text-gray">支付方式</view>
                    <view>微信支付</view>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <view class="text-gray">支付时间</view>
                    <view>2022-08-03 12:30</view>
                </view>
            </view>
        </view>
        <u-popup :show="showMoney" @close="close" @open="open">
            <view class="padding grid col-3">
                <view></view>
                <view class="text-center text-lg">钱款去向详情</view>
                <view @click="close" style="font-size: 38rpx;" class="cuIcon-close text-right"></view>
            </view>
            <scroll-view scroll-y style="width: 100%;height: 700rpx">
                <view class="flex justify-between padding-sm text-red text-bold text-xl">
                    <text>退款金额</text>
                    <text>¥78.00</text>
                </view>
                <view class="flex justify-between padding-sm">
                    <text class="text-gray">退款金额</text>
                    <text>(微信账号：5426)</text>
                </view>
                <view v-for="(item,index) in expressInfo" :key="item.id" class="cu-timeline">
                    <view class="cu-time">{{ item.date }}</view>
                    <view :class="index==0?'text-blue':''" class="cu-item">
                        <view class="cu-item ">
                            <view :class="index==0?'text-black':'text-gray'" class="content  padding-sm"
                                  style="background:#F7F7F7 ;">
                                <text>{{ item.time }}</text>
                                {{ item.content }}
                            </view>
                        </view>
                    </view>
                </view>
                <!--            <view style="width: 100%;height: 700rpx;">-->
                <!--                <u-steps current="6" direction="column" dot class="padding-sm">-->
                <!--                    <view v-for="item in expressList" :key="item.id">-->
                <!--                        <u-steps-item :desc="item.date"></u-steps-item>-->
                <!--                        <view class="bg-gray shadow-warp margin-sm padding-sm" style="width: 100%">-->
                <!--                            {{ item.content }}-->
                <!--                        </view>-->
                <!--                    </view>-->
                <!--                </u-steps>-->
                <!--            </view>-->

            </scroll-view>
        </u-popup>
        <view v-if="status==1||status==2" class="foot padding flex justify-around bg-white">
            <view v-if="status==1" @click="gotoPath('/pages/admin/contractDeliverGoods/toExamineFailed')"
                  class="w50 margin-right-sm cu-btn bg-gray radius">驳回申请
            </view>
            <view v-if="status==1"
                  @click="gotoPath('/pages/admin/tastingMeeting/participatingTastingMeeting/payment?status=4')"
                  class="w50 cu-btn bg-red radius">审核通过
            </view>
            <view v-if="status==2" class="w100 cu-btn bg-red radius">通过审核</view>
        </view>
    </view>
</template>

<script>
import fxbStatusCard from "/src/components/fxb/fxb-status-card";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbImage from "/src/components/fxb/fxb-image";

export default {
    name: "promoteAfterSalesDetails",
    data() {
        return {
            showMoney:false,
            status: 0,
            imgList: [
                {
                    url: "/productDetails/Slice%204.png"
                },
                {
                    url: "/productDetails/Slice%203.png"
                },
                {
                    url: "/productDetails/Slice%205.png"
                },
                {
                    url: "/productDetails/Slice%204.png"
                },
                {
                    url: "/productDetails/Slice%203.png"
                }
            ],
            expressInfo: [
                { time: "02:26", date: "今天", content: "【退款成功】已退款成功", id: "0" },
                { time: "02:26", date: "08.31", content: "【银行受理】银行已受理,钱款已成功退回到您的付款账户。\n", id: "1" },
                { time: "02:26", date: "08.31", content: "快递正在运输途中，请您耐心等待。", id: "2" },
                { time: "02:26", date: "08.31", content: "贵阳金阳三部的王晓刚[18565235646]正在为您派件。", id: "3" },
                {
                    time: "02:26",
                    date: "08.31",
                    content:
                        "您的快递已暂存至[快宝的38栋中通快递快递超市]，地址：官府一号一组团38栋超市里面，请及时领取。如有疑问请联系：15564545865",
                    id: "4"
                },
                {
                    time: "02:26",
                    date: "08.31",
                    content:
                        "您的快递已签收，签收人在[快宝的38栋中通快递快递超市]（官府一号一组团38栋超市里面）领取。如有疑问，请联系：18645856575",
                    id: "5"
                }
            ]
        };
    },
    onLoad(options) {
        this.status = options.status;
    },
    components: {
        fxbStatusCard, boxTitle, fxbImage
    },
    computed: {
        localStatus() {
            const tempArr = ["待审核", "未通过", "进行中", "已完成"];
            const tipsArr = ["剩余23小时58分", "您已驳回售后申请", "您已同意退款申请，正在处理", "您的报销申请处理已完成"];
            const iconArr = ["daishenhe", "weitongguo", "jinhangzhong", "a-zu699"];
            console.log(this.status);
            return {
                status: tempArr[this.status - 1],
                tips: tipsArr[this.status - 1],
                icon: iconArr[this.status - 1]
            };
        }
    },
    methods: {
        gotoPath(path) {
            uni.navigateTo({
                url: path
            });

        },
    open() {
        // console.log('open');
    },
    close() {
        this.showMoney = false;
        // console.log('close');
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