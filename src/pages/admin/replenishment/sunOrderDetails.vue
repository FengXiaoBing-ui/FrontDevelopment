<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="子订单详情" :autoBack="true">
        </u-navbar>
        <view class="padding-bottom" :style="'margin-top:'+ CustomBar + 'px;padding-bottom:120rpx'">
<!--            <view class="whiteBoxShadow">-->
<!--                <view class="flex justify-between align-center">-->
<!--                    <text class="text-gray">状态</text>-->
<!--                    <text class="text-red">{{ statusArr[status-1] }}</text>-->
<!--                </view>-->
<!--                <template v-if="status==2">-->
<!--                    <view class="flex justify-between margin-top-sm">-->
<!--                        <text class="text-gray flex-sub">未通过原因</text>-->
<!--                        <text class="flex-treble text-right">这是未通过原因，这是未通过</text>-->
<!--                    </view>-->
<!--                    <view class="flex justify-between margin-top-sm">-->
<!--                        <text class="text-gray flex-sub">审核人</text>-->
<!--                        <text class="flex-treble text-right">张东</text>-->
<!--                    </view>-->
<!--                    <view class="flex justify-between margin-top-sm">-->
<!--                        <text class="text-gray flex-sub">审核时间</text>-->
<!--                        <text class="flex-treble text-right">2022-08-30 12:23:12</text>-->
<!--                    </view>-->
<!--                </template>-->
<!--            </view>-->
            <fxbStatusCard :status="statusArr[status]" tips="剩余23.10.13" icon="daishenhe"></fxbStatusCard>

            <view class="whiteBoxShadow" style="transform: translateY(-20rpx)">
                <view>
                    <view class="flex justify-between align-center">
                        <view class="text-bold flex-treble text-cut">东方国宾·尊致酒合同</view>
                    </view>
                    <view class="flex justify-between align-center text-gray margin-top-sm">
                        <view>合同编号：213234233543</view>
                        <view>结算方式：现结</view>
                    </view>
                    <view class="u-border-top margin-top"></view>
                    <view class="margin-top" v-for="item in 2" :key="item">
                        <view class="flex align-center">
                            <fxbImage class="radius" style="width: 140rpx;height: 140rpx;" src="/productDetails/Slice%201.png" mode="aspectFill"></fxbImage>
                            <view style="height: 140rpx;width: 75%" class="margin-left-sm flex flex-direction justify-around">
                                <view class="text-bold">东方国宾·尊致酒53°瓶装500ml</view>
                                <view class="text-sm text-gray flex justify-between align-center">
                                    <view>规格：500ml*6瓶/件</view>
                                    <view class="text-left" style="min-width: 220rpx">酱香型 | 53° | 瓶装</view>
                                </view>
                                <view class="text-sm text-gray flex justify-between align-center">
                                    <text class="text-black">零售价：￥365.00</text>
                                    <view class="flex align-center justify-start" style="min-width: 220rpx">
                                        <text>代理价：</text>
                                        <text class="text-red">￥265.00</text>
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
                    <text>￥59000.00</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">优惠金额</text>
                    <text>-￥9000.00</text>
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

            <view class="whiteBoxShadow margin-top-sm">
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">子订单编号</text>
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

        </view>
        <view v-if="status==2" class="botBtn padding-sm bg-white flex">
            <button @click="" class="flex-sub cu-btn bg-gray radius">删除订单</button>
            <button @click="" class="flex-sub margin-left-sm cu-btn bg-red radius">修改</button>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import botBtn from '/src/components/fxb-bot-fixed-button/fxb-bot-fixed-button'
import fxbImage from "/src/components/fxb/fxb-image"
import fxbStatusCard from "/src/components/fxb/fxb-status-card"
export default {
    name: "sunOrderDetails",
    components:{
        botBtn,
        boxTitle,
        fxbImage,
        fxbStatusCard
    },
    data(){
        return{
            popupIndex:0,
            show:false,
            status: 1,
            statusArr: [
                "待审核",
                "未通过",
                "待支付",
                "已完成"
            ]
        }
    },
    onLoad(options){
        this.status = options.status;
    },
    methods:{
        open(index) {
        },
        close() {
            this.show = false
            // console.log('close');
        },
        showPopup(index){
            this.show = true;
            this.popupIndex = index;
        },
        gotoFailed(){
            uni.redirectTo({
                url:"/pages/admin/contractDeliverGoods/toExamineFailed"
            })
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