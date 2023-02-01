<template>
	<view class="content">
		<u-navbar :border="false" :fixed="true" title="提交订单"
			:style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }" :safeAreaInsetTop="false"
			:autoBack="true">
		</u-navbar>
		<view class="padding" :style="`margin-top:${CustomBar}px`">
			<view class="boxShadow">
				<boxTitle title="选择收货方式"></boxTitle>
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
				<view class="flex justify-between padding-bottom">
					<view class="flex align-center">
						<view>选择门店(仓库)</view>
						<text class="text-red">*</text>
					</view>
					<view class="flex align-center">
						<view class="text-gray">凯辉超市一号店</view>
						<text style="font-size: 38rpx;" class="cuIcon-right margin-left-sm"></text>
					</view>
				</view>
				<view class="border"></view>
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

			<view class="boxShadow margin-top">
				<boxTitle title="选择结算方式"></boxTitle>
				<view class="payMode">
					<u-radio-group v-model="radioValue1" placement="column">
						<view class="flex justify-between padding-tb-sm u-border-bottom">
							<image style="width: 50rpx; height: 50rpx" :src="bankCardImage"></image>
							<view class="flex">
								<text class="margin-right-lg">全额付款</text>
								<u-radio activeColor="red" name="全额付款" :customStyle="{ marginBottom: '8px' }"
									@change="radioChange"></u-radio>
							</view>
						</view>
						<view>
							<view class="flex justify-between padding-tb-sm">
								<image style="width: 50rpx; height: 50rpx" :src="bankCardImage"></image>
								<view class="flex">
									<text class="margin-right-lg">分期付款</text>
									<u-radio activeColor="red" name="分期付款" :customStyle="{ marginBottom: '8px' }"
										@change="radioChange"></u-radio>
								</view>
							</view>
							<view class="byStages">
								<view class="priceBox flex flex-wrap align-center justify-between u-border-bottom">
									<view class="priceSelect margin-bottom bg-gray radius padding-lr-sm padding-tb-lg"
									:class="site===index?'borderRed':''"  @click="site=index"
										v-for="(item, index) in list" :key="index">
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
								<u-radio activeColor="red" name="先卖货后付款" :customStyle="{ marginBottom: '8px' }"
									@change="radioChange"></u-radio>
							</view>
						</view>
					</u-radio-group>
				</view>
			</view>
		
			<view class="boxShadow margin-top">
				<view class="flex align-center justify-between">
					<view class="text-gray">开具发票</view>
					<view class="flex align-center">
						<view>增值税发票</view>
						<text class="cuIcon-right margin-left" style="font-size: 38rpx;"></text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import boxTitle from "/src/pages/agent/components/fxb-box-title";
	export default {
		components: {
			boxTitle
		},
		data() {
			return {
				radioValue: "云库存",
				radioValue1: "全额付款",
        site:0,
				list: [{
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
			}
		},
		methods:{
			radioChange(e){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.boxShadow {
		padding: 30rpx 20rpx;
		background: white;
		border-radius: 10rpx;
		box-shadow: 4rpx 4rpx 16rpx #e6dee6;
	}

	.border {
		width: 100%;
		height: 4rpx;
		background-color: #e6dee6;
	}

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
