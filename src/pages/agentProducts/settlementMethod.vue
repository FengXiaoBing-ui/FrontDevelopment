<template>
    <view class="content">
        <u-navbar title="结算方式" @rightClick="show = true" :autoBack="true"></u-navbar>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:' + CustomBar + 'px;padding-bottom:140rpx'">
            <view class="whiteBoxShadow margin-bottom-sm">
                <boxTitle title="选择结算方式"></boxTitle>
                <paySelect :data-list="dataList2" :radio-value="dataList2[0].logRight"></paySelect>
            </view>
            <view class="whiteBoxShadow margin-bottom-sm">
                <view class="agentInfo flex align-center justify-between padding-bottom-sm" v-for="(item, index) in agentList" :key="index">
                    <text class="text-gray">{{ item.name }}</text>
                    <view class="text-cut text-right" style="width: 70%">{{ item.text }}</view>
                </view>
                <view class="u-border-top padding-top-lg flex justify-between align-center">
                    <view class="flex align-center">
						<text class="text-black">合计：</text>
						<text class="text-bold text-red margin-right">￥135000.00</text>
					</view>
                    <text class="text-gray">已优惠¥15000.00</text>
                </view>
            </view>
			
            <view v-if="false" class="whiteBoxShadow margin-bottom-sm">
                <boxTitle title="选择结算方式"></boxTitle>
                <view class="payMode">
                    <u-radio-group v-model="radioValue" placement="column">
                        <view class="flex justify-between padding-tb-sm u-border-bottom">
                            <image style="width: 50rpx; height: 50rpx" :src="bankCardImage"></image>
                            <view class="flex">
                                <text class="margin-right-lg">全额付款</text>
                                <u-radio
                                    activeColor="red"
                                    name="全额付款"
                                    :customStyle="{ marginBottom: '8px' }"
                                    @change="radioChange"
                                ></u-radio>
                            </view>
                        </view>
                        <view>
                            <view class="flex justify-between padding-tb-sm">
                                <image style="width: 50rpx; height: 50rpx" :src="bankCardImage"></image>
                                <view class="flex">
                                    <text class="margin-right-lg">分期付款</text>
                                    <u-radio
                                        activeColor="red"
                                        name="分期付款"
                                        :customStyle="{ marginBottom: '8px' }"
                                        @change="radioChange"
                                    ></u-radio>
                                </view>
                            </view>
                            <view class="byStages">
                                <view class="priceBox flex flex-wrap align-center justify-between u-border-bottom">
                                    <view
                                        class="priceSelect margin-bottom bg-gray radius padding-lr-sm padding-tb-lg"
                                        :class="stMeal === index ? 'borderRed' : ''"
                                        @click="stMeal = index"
                                        v-for="(item, index) in list"
                                        :key="index"
                                    >
                                        <view class="text-cut">{{ item.num }}</view>
                                        <view class="margin-top-sm text-gray text-cut">{{ item.price }}</view>
                                    </view>
                                </view>
                            </view>
                        </view>

                        <view class="flex justify-between padding-tb-sm">
                            <image style="width: 50rpx; height: 50rpx" :src="bankCardImage"></image>
                            <view class="flex">
                                <text class="margin-right-lg">先卖货后付款</text>
                                <u-radio
                                    activeColor="red"
                                    name="先卖货后付款"
                                    :customStyle="{ marginBottom: '8px' }"
                                    @change="radioChange"
                                ></u-radio>
                            </view>
                        </view>
                    </u-radio-group>
                </view>
            </view>
            <view class="whiteBoxShadow margin-bottom-sm">
                <boxTitle title="发货方式"></boxTitle>
                <paySelect :data-list="dataList" :radioValue="dataList[0].logRight"></paySelect>
                <view class="flex align-center justify-between">
                    <view class="flex align-center">
                        <text class="margin-right">发货件数</text>
                        <u-input type="number" border="none" placeholder="请输入您要发货的件数" />
                    </view>
                    <text>件</text>
                </view>
                <view class="bg-red light padding-sm radius margin-top-lg">
                    <view class="margin-bottom-sm">温馨提示：</view>
                    若您选择发部分货，剩余未发货将存入平台云库存，后续发货请前往云库存进行发货，谢谢
                </view>
            </view>
            <view class="whiteBoxShadow">
                <view class="flex align-center margin-bottom-sm">
                    <text style="min-width: 140rpx" class="text-gray">收货人：</text>
                    <text>张涛    18690725468</text>
                </view>
                <view class="flex">
                    <text style="min-width: 140rpx" class="text-gray">收货人：</text>
                    <text>贵州省贵阳市观山湖区金融城金融城MAX·C座21楼24号</text>
                    <text style="font-size: 38rpx" class="cuIcon-right"></text>
                </view>
            </view>
        </view>
        <view class="botBtn bg-white padding-sm">
            <button class="cu-btn bg-red lg" @click="submit">提交审核</button>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import paySelect from "/src/components/fxb-pay-select/paySelect";
export default {
    name: "settlementMethod",
    components: {
        boxTitle,
        paySelect
    },
    data() {
        return {
            dataList: [
                {
                    logo: "/payLogo/Group%2030ICON.png",
                    logoRight: "全部发货",
                },
                {
                    logo: "/payLogo/Group%2031ICON.png",
                    logoRight: "放入云库存",
                },
                {
                    logo: "/payLogo/Group%2032ICON.png",
                    logoRight: "部分发货",
                },
            ],
			dataList2: [
			    {
			        logo: "/payLogo/Group%2040ICON.png",
			        logoRight: "全额付款",
			    },
			    {
			        logo: "/payLogo/Group%2041ICON.png",
			        logoRight: "现结",
			    },
			    {
			        logo: "/payLogo/Group%2043ICON.png",
			        logoRight: "先卖货后付款",
			    },
			],
            radioValue: "全额付款",
            stMeal: 0,
            list: [
                {
                    num: "¥45000.00 x 6期",
                    price: "服务费：¥20.00/期",
                },
                {
                    num: "¥22500.00 x 12期",
                    price: "服务费：¥20.00/期",
                },
                {
                    num: "¥11250.00 x 18期",
                    price: "服务费：¥20.00/期",
                },
                {
                    num: "¥5625.00 x 24期",
                    price: "服务费：¥20.00/期",
                },
                {
                    num: "¥11250.00 x 30期",
                    price: "服务费：¥20.00/期",
                },
                {
                    num: "¥5625.00 x 36期",
                    price: "服务费：¥20.00/期",
                },
            ],
            bankCardImage: require("/src/static/yinhangka.png"),
            agentList: [
                {
                    name: "代理商品",
                    text: "贵州飞天茅台瓶装500ml ¥300.00/瓶",
                },
                {
                    name: "代理套餐",
                    text: "50件酒(500瓶)",
                },
                {
                    name: "代理总价",
                    text: "¥150000.00",
                },
                {
                    name: "优惠折扣",
                    text: "九折优惠",
                },
                {
                    name: "首次进货",
                    text: "100件酒(600瓶)",
                },
                {
                    name: "首次进货总价",
                    text: "¥466200.00",
                },
                {
                    name: "随货支持",
                    text: "20%(价值￥93240.00)",
                },
            ],
        };
    },
    methods: {
        submit() {
            // 跳往 代理合同
            // uni.navigateTo({
            //     url: "pages/agentProducts/agencyContract",
            // });
            uni.navigateTo({
                url: "pages/payResult/payResult?status=1",
            });
        },
      radioChange(e){

      }
    },
};
</script>

<style lang="scss" scoped>
.priceSelect {
    width: 48%;
    border: 1rpx rgba(0, 0, 0, 0) solid;
}
.borderRed {
    border: 1rpx red solid;
    background-color: rgb(254, 245, 243);
    view {
        color: red;
    }
}
.botBtn {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    button {
        width: 100%;
    }
}
</style>
