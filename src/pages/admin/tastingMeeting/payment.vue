<!--wjx 20220830-->
<template>
    <view>
        <u-navbar :autoBack="true" title="支付费用"></u-navbar>
        <view :style="`margin-top:${(CustomBar)*2}rpx`">
            <view class="padding-lr-sm padding-tb">
                <view class="whiteBoxShadow">
                    <boxTitle title="支付明细"></boxTitle>
                    <view class="u-border-bottom margin-top bg-white">
                        <view class="flex justify-between align-center padding-top">
                            <view class="text-gray">商品数量</view>
                            <view>2瓶</view>
                        </view>
                        <view class="flex justify-between align-center margin-top-sm">
                            <view class="text-gray">商品金额</view>
                            <view>¥530.00</view>
                        </view>
                        <view class="flex justify-between align-center margin-tb-sm">
                            <view class="text-gray">餐费金额</view>
                            <view>¥1500.00</view>
                        </view>
                    </view>
                    <view class="flex justify-between align-center margin-tb ">
                        <view class="text-bold">报销合计</view>
                        <view class="text-bold text-red">￥600.00</view>
                    </view>
                </view>
                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="选择支付方式"></boxTitle>
                    <paySelect :data-list="dataList"></paySelect>
                </view>
            </view>
        </view>
        <view class="fixed bg-white padding-xs">
            <view class="flex justify-between align-center">
                <view class="flex align-center margin-left-xs">
                    <view>合计：</view>
                    <view class="text-red">￥612.00</view>
                </view>
                <view class="margin-left-sm">
                    <button class="cu-btn bg-gray margin-right-sm" @click="cancelPay">取消支付</button>
                    <button class="cu-btn bg-red" @click="pay">确认支付</button>
                </view>
            </view>
        </view>

    </view>
</template>
<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import paySelect from "/src/components/fxb-pay-select/paySelect";
export default {
    name: "payment",
    components: { paySelect,boxTitle },
    data: function () {
        return {
            status:1,
            passWord:'',
            showOverlay:false,
            dataList:[
                {
                    icon:"weixinzhifu",
                    radioName:"微信支付"
                },
                {
                    icon:"zhifubao",
                    radioName:"支付宝支付"
                },
                {
                    icon:"zhuanzhang",
                    radioName:"银行转账"
                }],
            //地址信息
            imgUrl: "",
            id: "",
            addressInfo: {
                name: "张傲",
                phone: "18878855878",
                address: "贵州省贵阳市观山湖区金融城金融城MAX·C座21楼24号",
            },
        };
    },
    methods: {

        pay() {
            this.showOverlay= true
            uni.navigateTo({
                url: `pages/payResult/payResult?status=reimbursement`,
            });
        },
        cancelPay(){
            uni.navigateBack({
                delta:1
            })
        }
    },
    onLoad: function (option) {
        //option为object类型，会序列化上个页面传递的参数
        this.imgUrl = option.imgUrl;
        this.id = option.id;
    },
};
</script>

<style lang="scss" scoped>
.margin-lr{
    margin: 0 20rpx;
}
.redBlock {
    width: 0.2rem;
    height: 15px;
    background: red;
    margin-right: 0.2rem;
}
.fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
}
</style>
