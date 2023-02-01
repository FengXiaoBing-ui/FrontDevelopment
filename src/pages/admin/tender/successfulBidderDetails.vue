<template>
    <view>
        <u-navbar :border="false" :fixed="true" title="报名人详情" :autoBack="true"></u-navbar>
        <view :style="'margin-top:'+ CustomBar + 'px'" class="padding-tb-sm">
            <view class="whiteBoxShadow ">
                <boxTitle title="报名人详情"></boxTitle>
                <view class="flex align-center">
                    <view style="width: 60px;height: 60px;border-radius: 30px" class="bg-gray padding-sm">
                        <fxbImage width="100" height="80" src="/productDetails/Slice%201.png"
                                  mode="aspectFill"></fxbImage>
                    </view>
                    <view class="margin-left-sm">
                        <view class="flex align-center">
                            <view class="text-bold">王小刚</view>
                            <view class="margin-left-sm text-sm">贵州好酒选科技有限公司</view>
                        </view>
                        <view class="flex margin-top-sm text-gray text-sm align-center">报名时间：
                            <text>2022-08-30</text>
                        </view>
                    </view>
                </view>
            </view>
            <view v-if="state==1" class="whiteBoxShadow margin-top-sm">
                <view class="flex justify-between align-center">
                    <view class="text-gray text-sm">查看招商合同</view>
                    <view class="cuIcon-right" style="font-size: 16px"></view>
                </view>
            </view>
            <view v-if="state==0" class="whiteBoxShadow margin-top-sm">
                <boxTitle title="中标状态"></boxTitle>
                <view class="flex justify-between margin-top-sm">
                    <view>中标状态</view>
                    <view>已中标</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view>合同金额</view>
                    <view>￥20000.00</view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="保证金"></boxTitle>
                <view class="flex justify-between">
                    <view>保证金</view>
                    <view>5000.00</view>
                </view>
                <view v-if="state==1">
                    <view class="flex justify-between margin-top-sm">
                        <view>保证金缴纳</view>
                        <view>已缴纳</view>
                    </view>
                    <view class="flex justify-between margin-top-sm align-center">
                        <view>缴纳方法</view>
                        <view class="flex align-center">
                            <view>转账</view>
                            <view class="cuIcon-right margin-left-sm"></view>
                        </view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view>缴纳时间</view>
                        <view>2022-08-30 12:30</view>
                    </view>
                </view>
                <view v-if="state==0">
                    <view class="flex justify-between margin-top-sm">
                        <view>保证金缴纳方式</view>
                        <view>平台</view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view>保证金缴纳时间</view>
                        <view>2022-08-30 12:30</view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view>缴纳退回</view>
                        <view class="flex align-center" @click="showMoney=true">
                            <view>已退回</view>
                            <view class="cuIcon-right margin-left-sm" style="font-size: 16px"></view>
                        </view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view>退回时间</view>
                        <view>2022-08-30 12:30</view>
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="投标文件"></boxTitle>
                <view class="flex justify-between margin-top-sm">
                    <view>投标文件上传</view>
                    <view>已上传</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view>上传时间</view>
                    <view>2022-08-30 12:30</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view>查看投标文件</view>
                    <view class="flex align-center">
                        <view>查看</view>
                        <view class="cuIcon-right margin-left-sm" style="font-size: 16px"></view>
                    </view>
                </view>
            </view>
            <view v-if="state==1" class="whiteBoxShadow margin-top-sm">
                <boxTitle title="合同金额"></boxTitle>
                <view class="flex justify-between margin-top-sm">
                    <view>商品总量</view>
                    <view>8吨</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view>商品单价</view>
                    <view>￥10000.00/吨</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view>商品总额</view>
                    <view>￥500000.00</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view>包装费用</view>
                    <view>￥5000.00</view>
                </view>
                <view class="u-border-bottom margin-tb"></view>
                <view class="flex justify-between margin-top-sm">
                    <view>金额合计</view>
                    <view>￥5000000.00</view>
                </view>
            </view>
            <view v-if="state==1" class="whiteBoxShadow margin-top-sm">
                <boxTitle title="支付状态"></boxTitle>
                <view class="flex justify-between margin-top-sm">
                    <view>支付状态</view>
                    <view>已支付</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view>支付金额</view>
                    <view>￥10000.00</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view>支付方式</view>
                    <view class="flex align-center">
                        <view>银行转账</view>
                        <view class="cuIcon-right margin-left-sm"></view>
                    </view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view>支付时间</view>
                    <view>2022-08-30 12:30</view>
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
                        <text>退保证金</text>
                        <text>¥78000.00</text>
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
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbImage from "/src/components/fxb/fxb-image";

export default {
    name: "successfulBidderDetails",
    data() {
        return {
            showMoney: false,
            state:0,//state:0、招标列表-待支付-报名详情，1、招标列表-已完成-报名详情
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
    components: {
        boxTitle,
        fxbImage
    },
    onLoad(option){
        this.state=option.state
    },
    methods:{
        close(){
            this.showMoney=!this.showMoney
        },
        open(){

        }
    }
};
</script>

<style scoped>

</style>