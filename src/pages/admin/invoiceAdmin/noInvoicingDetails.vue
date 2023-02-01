<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="发票详情" :autoBack="true"></u-navbar>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:'+CustomBar+'px'">
            <view class="whiteBoxShadow">
                <template v-if="isPin=='true'">
                    <view class="flex justify-center align-center margin-tb-lg">
                        <text class="cuIcon-time" style="font-size: 42rpx"></text>
                        <text class="text-lg margin-left-xs">未开票</text>
                    </view>
                    <button @click="gotoPath('/pages/admin/invoiceAdmin/invoicing')" class="cu-btn bg-red radius w100">去开票
                    </button>
                </template>
                <template v-if="isPin=='false'">
                    <view class="flex justify-center align-center margin-tb-xl">
                        <text class="cuIcon-time" style="font-size: 42rpx"></text>
                        <text class="text-lg margin-left-xs">开票中</text>
                    </view>
                    <view class="margin-tb flex justify-center text-center">
                        <view style="width: 80%">发票预计会在订单完成10个自然日内开具请耐心等待</view>
                    </view>
                </template>
            </view>
            <template v-if="$store.state.index.agentAndService">
                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="商品信息"></boxTitle>
                    <view class="flex align-stretch">
                        <fxbImage class="radius" mode="aspectFill" width="100" height="100" src="/productDetails/东方国宾详情图_01.png"></fxbImage>
                        <view class="flex flex-direction justify-around margin-left-sm">
                            <view>53°贵州茅台1935酒500ml单瓶装</view>
                            <view>¥300.00</view>
                        </view>
                    </view>
                    <view class="u-border-top margin-tb"></view>
                    <view class="flex justify-between align-center">
                        <text class="text-gray">商品数量：</text>
                        <text>2</text>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">商品总额：</text>
                        <text class="text-bold">¥600.00</text>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">品鉴会费用：</text>
                        <text class="text-bold">¥1500.00</text>
                    </view>

                    <view class="u-border-bottom w100 margin-top"></view>

                    <view class="flex justify-between align-center margin-top">
                        <text class="text-gray">金额合计:</text>
                        <text class="text-bold">¥1500.00</text>
                    </view>
                </view>
            </template>
            <template v-else>
                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="商品信息"></boxTitle>
                    <view class="flex justify-between align-center">
                        <view class="text-bold flex-treble text-cut">东方国宾·尊致酒53°瓶装500ml酱香型合同</view>
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
                                    <view class="flex align-center justify-start" style="min-width: 220rpx">
                                        <text>代理价：</text>
                                        <text class="text-red">￥265.00</text>
                                    </view>
                                </view>
                            </view>
                        </view>
                        <view class="flex justify-between align-center margin-top-sm">
                            <view class="flex align-center">
                                <text class="text-gray">发货数量：</text>
                                <text>720瓶</text>
                            </view>
                            <view class="flex align-center">
                                <text class="text-red">¥59000.00</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="whiteBoxShadow margin-top-sm">
                    <view class="flex justify-between align-center">
                        <view class="text-gray flex-twice">数量合计</view>
                        <view class="flex-treble text-right">240瓶</view>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <view class="text-gray flex-twice">金额合计</view>
                        <view class="flex-treble text-right">¥59000.00</view>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <view class="text-gray flex-twice">优惠折扣</view>
                        <view class="flex-treble text-right">-¥90000.00</view>
                    </view>
                    <view class="padding-top u-border-bottom"></view>
                    <view class="flex justify-between align-center margin-top">
                        <view class="text-black text-lg text-bold flex-twice">费用合计</view>
                        <view class="flex-treble text-right">
                            <view class="text-red">¥90000.00</view>
                            <view class="text-sm text-gray">{{ $util.convertCurrency(9000) }}</view>
                        </view>
                    </view>
                </view>
            </template>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="开票信息"></boxTitle>
                <view class="flex justify-between align-center">
                    <text class="text-gray">订单状态：</text>
                    <text>已完成</text>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">订单类型：</text>
                    <text>品鉴会报销</text>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <text class="text-gray">订单编号：</text>
                    <view class="flex flex-direction align-end">
                        <view>56421321323213</view>
                        <button class="cu-btn bg-white u-border radius margin-top-xs sm">订单详情</button>
                    </view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">开票公司：</text>
                    <text>贵州好伙伴烟酒商行</text>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">开票公司纳税人识别号：</text>
                    <text>237482937423SDJFH</text>
                </view>
<!--                <view class="flex justify-between align-center margin-top-sm">-->
<!--                    <text class="text-gray">开票时间：</text>-->
<!--                    <text>2022-01-25 12:23:25</text>-->
<!--                </view>-->
            </view>

            <view v-if="isPin=='false'&&$store.state.index.agentAndService" class="whiteBoxShadow margin-top-sm flex justify-around align-center">
                <view class="flex align-center">
                    <text style="font-size: 36rpx" class="margin-right-sm cuIcon-profile"></text>
                    <text>平台介入</text>
                </view>
                <view class="flex align-center">
                    <text style="font-size: 36rpx" class="margin-right-sm cuIcon-service"></text>
                    <text>联系客服</text>
                </view>
            </view>
            <view v-if="isPin=='false'&&!$store.state.index.agentAndService" class="whiteBoxShadow margin-top-sm flex justify-around align-center">
                <view class="flex align-center">
                    <text style="font-size: 36rpx" class="margin-right-sm cuIcon-service"></text>
                    <text>联系代理商</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image"
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
    name: "noInvoicingDetails",
    components:{
        boxTitle,
        fxbImage
    },
    data() {
        return {
            isPin: true,
        };
    },
    onLoad(options) {
        this.isPin = options.isPin;
    },
    methods: {
        gotoPath(path) {
            uni.navigateTo({
                url: path
            });
        }
    }
};
</script>

<style lang="scss" scoped>

</style>