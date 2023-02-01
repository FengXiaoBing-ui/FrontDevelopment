<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="支付贷款" :autoBack="true">
        </u-navbar>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:'+ CustomBar + 'px;padding-bottom:120rpx'">
            <view class="whiteBoxShadow">
                <text class="text-red">温馨提示：支付完成后请前往云库存发货</text>
            </view>

            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="补货明细"></boxTitle>
                <view class="u-border radius padding-sm">
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
                <view class="u-border radius padding-sm margin-top">
                    <view class="flex justify-between align-center">
                        <view class="text-bold flex-treble text-cut">东方国宾·尊致酒合同</view>
                    </view>
                    <view class="flex justify-between align-center text-gray margin-top-sm">
                        <view>合同编号：213234233543</view>
                        <view>结算方式：现结</view>
                    </view>
                    <view class="u-border-top margin-top"></view>
                    <view class="margin-top" v-for="item in 1" :key="item">
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
                                <text class="text-gray">补货数量：</text>
                                <text>720瓶</text>
                            </view>
                            <view class="flex align-center">
                                <text class="text-red">￥59000.00</text>
                            </view>
                        </view>
                    </view>
                </view>
            </view>

            <view class="whiteBoxShadow margin-top-sm">
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

            <view class="whiteBoxShadow margin-top-sm">
                <input type="text" placeholder="可输入备注信息">
            </view>

        </view>
        <view class="botBtn padding-sm bg-white flex">
            <view class="w100 flex justify-around align-center">
                <view>合计：<text class="text-red">￥20000.00</text></view>
                <view class="flex align-center">
                    <button @click="cancelOrder" class="cu-btn margin-right-sm bg-gray radius">取消订单</button>
                    <button @click="surePay" class="cu-btn bg-red radius">确认支付</button>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import botBtn from '/src/components/fxb-bot-fixed-button/fxb-bot-fixed-button'
import fxbImage from "/src/components/fxb/fxb-image"
import {mapMutations} from "vuex"
export default {
    name: "payLoan",
    components:{
        botBtn,
        boxTitle,
        fxbImage
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
      ...mapMutations('index',['setPayResultType']),
        surePay(){
        this.setPayResultType('hetong')
            uni.redirectTo({
                url:"/pages/admin/adminContract/surePay"
            })
        },
        cancelOrder(){
            uni.navigateBack({
                delta:1
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
    box-shadow: 10rpx 10rpx 20rpx #a8a8a8;
}
</style>