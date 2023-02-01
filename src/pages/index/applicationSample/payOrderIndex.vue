<!--wjx 20220830-->
<template>
    <view>
        <u-navbar :autoBack="true" title="支付订单"></u-navbar>
        <view :style="`margin-top:${(CustomBar + 10)*2}rpx`" class="margin-lr-sm">
            <view class="margin-tb" v-for="item in addressList" :key="item.id">
                <addressBox :addressInfo="item"></addressBox>
            </view>
            <view class="padding bg-white radius">
                <view class="flex  align-center bg-white margin-bottom  ">
                    <fxbImage
                        src="/productDetails/Slice%201.png"
                        alt="jiazaishibai " mode="widthFix" style="width: 100rpx;height: 100rpx"></fxbImage>
                    <view class="text-bold margin-left-sm">东方国宾·尊致酒53°瓶装500ml</view>
                </view>
                <view class="u-border-bottom margin-top bg-white">
                    <view class="flex justify-between align-center padding-top">
                        <view class="text-gray">单价</view>
                        <view>￥300.00</view>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <view class="text-gray">样品数量</view>
                        <view>2</view>
                    </view>
                    <view class="flex justify-between align-center margin-tb-sm">
                        <view class="text-gray">运费</view>
                        <view>￥0.00</view>
                    </view>
                </view>
                <view class="flex justify-between align-center margin-tb ">
                    <view class="text-bold">合计</view>
                    <view class="text-bold text-red">￥600.00</view>
                </view>
            </view>
            <view class="margin-top-sm bg-white radius padding">
                <paySelect :data-list="dataList"></paySelect>
            </view>
        </view>
        <view class="fixed bg-white padding-sm">
            <view class="flex justify-end align-center">
                <view class="text-sm text-gray flex align-center">共2件</view>
                <view class="flex align-center text-xl margin-left-xs">
                    <view class="">合计：</view>
                    <view class="text-red">￥612.00</view>
                </view>
                <view class="margin-left-sm">
                    <button class="cu-btn bg-red" @click="pay">确认支付</button>
                </view>
            </view>
        </view>
        <!--        遮罩层内容-->
        <!--        <u-overlay :show="showOverlay" @click="show = false" opacity="0.8">-->
        <!--            <view class="flex flex-direction align-center justify-center w100 h100 "   @tap.stop>-->
        <!--                <view>请输入支付密码</view>-->
        <!--                <u-code-input v-model="passWord" :dot="true" mode="line" :focus="true"></u-code-input>-->
        <!--            </view>-->
        <!--        </u-overlay>-->
    </view>
</template>
<script>
import addressBox from "./addressBox";
import paySelect from "/src/components/fxb-pay-select/paySelect";
import fxbImage from "/src/components/fxb/fxb-image";

export default {
    name: "sampleOrder",
    components: { addressBox, paySelect, fxbImage },
    data: function() {
        return {
            status: 1,
            passWord: "",
            showOverlay: false,
            addressList: [{
                id: "1",
                name: "张傲",
                phone: "18878855878",
                address: "贵州省贵阳市观山湖区金融城金融城MAX·C座21楼24号",
                def: true
            }],
            dataList: [
                {
                    icon: "weixinzhifu",
                    radioName: "微信支付"
                },
                {
                    icon: "zhifubao",
                    radioName: "支付宝支付"
                },
                {
                    icon: "zhuanzhang",
                    radioName: "银行转账"
                }
            ],
            //地址信息
            imgUrl: "",
            id: "",
            addressInfo: {
                name: "张傲",
                phone: "18878855878",
                address: "贵州省贵阳市观山湖区金融城金融城MAX·C座21楼24号"
            }
        };
    },
    methods: {

        pay() {
            this.showOverlay = true;
            uni.navigateTo({
                url: `pages/payResult/payResult?status=paySampleOrder`
            });
        }
    },
    onLoad: function(option) {
        //option为object类型，会序列化上个页面传递的参数
        this.imgUrl = option.imgUrl;
        this.id = option.id;
    }
};
</script>

<style lang="scss" scoped>
.addAddressBox {
    height: 15vh;
    width: 100%;
}

.margin-lr {
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
    width: 100vw;
}
</style>
