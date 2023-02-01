<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="支付货款" :autoBack="true">
        </u-navbar>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:'+ CustomBar + 'px;padding-bottom:120rpx'">
            <view class="whiteBoxShadow">
                <boxTitle title="收货地址"></boxTitle>
                <view class="flex align-center justify-between padding-bottom">
                    <view class="flex align-center">
                        <view>收货方式</view>
                        <text class="text-red">*</text>
                    </view>
                    <u-radio-group class="flex justify-end" v-model="radioValue">
                        <view class="flex text-gray margin-right">
                            <text class="margin-right-sm">云库存</text>
                            <u-radio activeColor="red" name="云库存" @change="radioChange"></u-radio>
                        </view>
                        <view class="flex text-gray">
                            <text class="margin-right-sm">我的门店(仓库)</text>
                            <u-radio activeColor="red" name="我的门店(仓库)" @change="radioChange"></u-radio>
                        </view>
                    </u-radio-group>
                </view>
                <view class="flex justify-between padding-bottom" v-show="radioValue=='云库存'">
                    <view class="flex align-center">
                        <view>选择门店(仓库)</view>
                        <text class="text-red">*</text>
                    </view>
                    <view class="flex align-center">
                        <view class="text-gray">凯辉超市一号店</view>
                        <text style="font-size: 38rpx;" class="cuIcon-right margin-left-sm"></text>
                    </view>
                </view>
                <view class="u-border-top"></view>
                <view class="padding-top">
                    <view class="flex align-center">
                        <view style="min-width: 140rpx;">收货人：</view>
                        <view>张涛  18690725468</view>
                    </view>
                    <view class="flex align-center">
                        <view style="min-width: 140rpx;">收货人：</view>
                        <view>贵州省贵阳市观山湖区金融城金融城MAX·C座21楼24号</view>
                        <view style="font-size: 38rpx;" class="cuIcon-right"></view>
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="发货明细"></boxTitle>
                <view class="u-border radius padding-sm margin-top-sm" v-for="item in 3" :key="item"  >
                    <view class="flex align-center justify-between">
                        <view class="flex align-center">
<!--                            <u-checkbox activeColor="red"></u-checkbox>-->
                            <text>东方国宾·尊致酒500ml酱香型合同</text>
                        </view>
                        <text class="text-red">待支付</text>
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
                    <view class="text-right margin-top-sm">
                        <button @click="gotoDetails" class="cu-btn bg-white radius u-border">查看详情</button>
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
            <view class="whiteBoxShadow margin-top-sm">
                <view class="flex align-center justify-between">
                    <view class="text-gray">开具发票</view>
                    <view class="flex align-center">
                        <view>增值税发票</view>
                        <text class="cuIcon-right margin-left" style="font-size: 38rpx;"></text>
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="选择支付方式"></boxTitle>
                <paySelect :data-list="payList" radio-value="微信支付"></paySelect>
            </view>
        </view>
        <view class="botBtn bg-white padding-sm flex justify-between align-center">
            <view class="flex align-center">
                <text class="text-gray">共1800瓶</text>
                <text>合计：</text>
                <text class="text-red">￥500000.00</text>
            </view>
            <button class="bg-red radius cu-btn" @click="gotoPay">去支付</button>
        </view>
    </view>

</template>

<script>
import paySelect from "/src/components/fxb-pay-select/paySelect";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
    name: "payForGoods",
    components:{
        boxTitle,
        paySelect
    },
    data(){
        return{
            radioValue: "云库存",
            radioValue1: "全额付款",
            payList:[
                {
                    logo: '/payLogo/Group%2044%E6%94%AF%E4%BB%98%E6%96%B9%E5%BC%8F.png',
                    logoRight:"微信支付"
                },
                {
                    logo:'/payLogo/Group%2045%E6%94%AF%E4%BB%98%E6%96%B9%E5%BC%8F.png',
                    logoRight:"支付宝支付"
                },
                {
                    logo:'/payLogo/Group%2043%E6%94%AF%E4%BB%98%E6%96%B9%E5%BC%8F.png',
                    logoRight:"银行转账"
                }
            ],
            fnStatus:0,
            status:0
        }
    },
    onLoad(options) {
        this.fnStatus = options.fnStatus;
        this.status = options.status;
    },
    methods:{
        radioChange(e){

        },
        gotoPay(){
            uni.redirectTo({
                url:"/pages/payResult/payResult?status=7"
            })
        },
        gotoDetails(){
            uni.navigateTo({
                url:"/pages/admin/agentContractDeliverGoods/sunOrderDetails"+`?fnStatus=${this.fnStatus}&status=${this.status}`
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.botBtn{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}
</style>