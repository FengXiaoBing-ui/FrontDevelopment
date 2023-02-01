<template>
	<view class="content" style="padding-bottom: 100rpx">
		<u-navbar
		    :border="false"
		    :fixed="true"
		    title="支付订单"
		    :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
		    :safeAreaInsetTop="false"
		    :autoBack="true"
		>
		</u-navbar>
		<view class="padding" :style="'margin-top:' + CustomBar + 'px'">
		        <view class="boxShadow">
		            <view class="agentInfo flex align-center padding-bottom-xl">
		                <view class="text-gray" style="width: 30%;">收货人：</view>
		                <view class="text-cut text-left" style="width: 64%">张涛 123456789</view>
		            </view>
		            <view class="agentInfo flex align-start">
		                <view class="text-gray" style="width: 30%;">收货地址：</view>
		                <view class="text-left" style="width: 64%">贵州省贵阳市观山湖区金融城金融城MAX·C座21楼24号</view>
		            </view>
		        </view>
		        <view class="boxShadow margin-top">
		            <productBox 
					:imgSize="140" 
					class="margin-tb-sm" 
					name="53°贵州茅台1935酒500ml单瓶装" 
					nameClass="text-bold"
					 >
		            </productBox>
		            <view class="agentInfo flex align-center justify-between padding-bottom-xl" v-for="(item, index) in agentList" :key="index">
		                <text class="text-gray">{{ item.name }}</text>
		                <view class="text-cut text-right" style="width: 70%">{{ item.text }}</view>
		            </view>
		            <view class="u-border-top"></view>
		            <view class="flex justify-between margin-top">
		                <text>合计</text>
		                <text class="text-red text-bold">￥11250.00</text>
		            </view>
		        </view>
		        <view class="boxShadow invoice margin-top flex justify-between">
		            <text class="text-gray">开具发票</text>
		            <view @click="jumpVoucher">
		                <text>普通发票</text>
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
	import productBox from '/src/pages/admin/components/productBox.vue'
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import paySelect from "/src/components/fxb-pay-select/paySelect";
export default {
    name: "payContractMoney",
    components: {
        boxTitle,
        paySelect,
		productBox
    },
    data() {
        return {
            productImg: require("/src/static/bottle/10.jpeg"),
            agentList: [
                {
                    name: "单价",
                    text: "¥1500",
                },
                {
                    name: "样品数量",
                    text: "12",
                },
                {
                    name: "运费",
                    text: "¥150",
                }
            ],
            dataList: [
                {
                    logo: require("/src/static/weixin.png"),
                    radioName: "微信支付",
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
		/deep/ .u-navbar {
		    .u-navbar__content {
		        background-image: linear-gradient(90deg, #ff9700, #ed1c24);
		        height: var(--CustomBar) !important;
		        padding-top: var(--StatusBar);
		
		        .u-navbar__content__left,
		        .u-navbar__content__right {
		            margin-top: var(--StatusBar);
		        }
		    }
		}
</style>