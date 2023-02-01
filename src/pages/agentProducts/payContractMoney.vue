<template>
    <view class="content" style="padding-bottom: 20%">
        <u-navbar title="支付合同款" @rightClick="show = true" :autoBack="true"></u-navbar>
        <view class="padding" :style="'margin-top:' + CustomBar + 'px'">
            <view class="boxShadow">
                <boxTitle title="发货方式"></boxTitle>
                <paySelect :dataList="deliverGoods"></paySelect>
                <view class="flex justify-between align-center padding-tb">
                    <text>发货件数</text>
                    <input type="number" placeholder="请输入您要发货的件数" />
                    <text class="margin-right-sm">件</text>
                </view>
                <view class="bg-red light padding-sm radius">
                    <text>温馨提示： <br />若您选择发部分货，剩余未发货将存入平台云库存，后续发货请前往云库存进行发货，谢谢</text>
                </view>
            </view>
            <view class="boxShadow margin-top">
                <view class="agentInfo flex align-center justify-between padding-bottom-xl">
                    <text class="text-gray">收货人：</text>
                    <view class="text-cut text-left" style="width: 64%">张涛 123456789</view>
                    <view></view>
                </view>
                <view class="agentInfo flex align-start justify-between">
                    <text class="text-gray">收货地址：</text>
                    <view class="text-left" style="width: 64%">贵州省贵阳市观山湖区金融城金融城MAX·C座21楼24号</view>
                    <text class="cuIcon-right" style="font-size: 32rpx"></text>
                </view>
            </view>
            <view class="boxShadow margin-top">
                <boxTitle title="合同金额"></boxTitle>
                <view class="u-border-top"></view>
                <view class="flex align-center justify-between margin-tb">
                    <image style="width: 160rpx; height: 160rpx" :src="productImg"></image>
                    <view class="flex flex-direction justify-around" style="width: 72%; height: 160rpx">
                        <view class="text-lg text-bold">53°贵州茅台1935酒500ml单瓶装</view>
                        <view>
                            <text>代理价：</text>
                            <text class="text-red">¥ 300.00/瓶</text>
                        </view>
                    </view>
                </view>
                <view class="agentInfo flex align-center justify-between padding-bottom-xl" v-for="(item, index) in agentList" :key="index">
                    <text class="text-gray">{{ item.name }}</text>
                    <view class="text-cut text-right" style="width: 70%">{{ item.text }}</view>
                </view>
                <view class="u-border-top"></view>
                <view class="flex justify-between margin-top">
                    <text>合计 当前第1期（1/12）</text>
                    <text class="text-red text-bold">￥11250.00</text>
                </view>
            </view>
            <view class="boxShadow invoice margin-top flex justify-between">
                <text class="text-gray">开具发票</text>
                <view @click="jumpVoucher">
                    <text>增值税发票</text>
                    <text class="cuIcon-right margin-left"></text>
                </view>
            </view>
            <view class="boxShadow margin-top">
                <boxTitle title="选择支付方式"></boxTitle>
                <paySelect :dataList="dataList"></paySelect>
            </view>
        </view>
        <view class="botPayBtn flex justify-end align-center padding-tb-sm padding-right">
            <view>
                <view>
                    <text class="">合计：</text>
                    <text class="text-red text-bold">￥11250.00</text>
                </view>
                <view class="text-gray text-right">当前第1期</view>
            </view>
            <button class="margin-left cu-btn bg-red" @click="surePay">确认支付</button>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import paySelect from "/src/components/fxb-pay-select/paySelect";
export default {
    name: "payContractMoney",
    components: {
        boxTitle,
        paySelect,
    },
    data() {
        return {
            productImg: require("/src/static/bottle/10.jpeg"),
            agentList: [
                {
                    name: "代理套餐",
                    text: "20件酒（200瓶)",
                },
                {
                    name: "代理价格",
                    text: "¥150000.00",
                },
                {
                    name: "活动优惠",
                    text: "九折优惠",
                },
                {
                    name: "优惠金额",
                    text: "¥135000.00",
                },
                {
                    name: "结算方式",
                    text: "分12期付款",
                },
            ],
            deliverGoods: [
                {
                    logo: require("/src/static/fahuo.png"),
                    radioName: "",
                    logRight: "发货方式",
                },
                {
                    logo: require("/src/static/shop_fill.png"),
                    radioName: "放入云库存",
                },
                {
                    logo: require("/src/static/yinhangka.png"),
                    radioName: "发部分货",
                },
            ],
            dataList: [
                {
                    logo: require("/src/static/weixin.png"),
                    radioName: "微信支付",
                    logRight: "发货方式",
                },
                {
                    logo: require("/src/static/zhifubao.png"),
                    radioName: "支付宝支付",
                },
                {
                    logo: require("/src/static/yinhangka.png"),
                    radioName: "银行转账",
                },
            ],
        };
    },
    methods: {
        surePay() {
            uni.navigateTo({
                url: "pages/payResult/payResult" + "?status=合同",
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.boxShadow {
    padding: 30rpx 20rpx;
    background: white;
    border-radius: 10rpx;
    box-shadow: 4rpx 4rpx 16rpx #e6dee6;
}
.botPayBtn {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: white;
    z-index: 1;
    box-shadow: 4px 4px 14px #cccccc;
}
</style>
