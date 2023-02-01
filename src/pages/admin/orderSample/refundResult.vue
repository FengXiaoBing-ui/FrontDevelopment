<template>
	<view class="content">
		<u-navbar :border="false" :fixed="true" title="退款详情"
			:style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }" :safeAreaInsetTop="false"
			:autoBack="true">
		</u-navbar>
		<view class="padding" :style="'margin-top:' + CustomBar + 'px'">
			<view class="boxShadow">
				<view class="flex justify-between align-center">
					<view class="flex flex-direction">
						<text class="text-red text-xl">退款成功</text>
						<text>2022年6月21日 17:56:24</text>
					</view>
					<view class="text-xl text-red text-bold">¥78.00</view>
				</view>
				<view class="bg-gray padding flex margin-top">
					<text class="text-black text-bold margin-right">已签收</text>
					<text>2022年6月21日 17:56:24</text>
				</view>
				<view class="margin-top text-gray">
					退回账号（微信账号：23927397）
				</view>
			</view>
			<button style="width: 100%;" class="cu-btn bg-red margin-top-xl lg" @click="show = true">查看钱款去向</button>
		</view>
		<u-popup :show="show" @close="close" @open="open">
			<view class="padding grid col-3">
				<view></view>
				<view class="text-center">钱款去向详情</view>
				<view @click="close" style="font-size: 38rpx;" class="cuIcon-close text-right"></view>
			</view>
			<scroll-view scroll-y>
				<view class="flex justify-between padding text-red text-bold text-xl">
					<text>退款金额</text>
					<text>¥78.00</text>
				</view>
				<view style="width: 100%;height: 700rpx;">
					<u-steps current="6" direction="column" dot class="padding-sm">
						<view v-for="item in expressList" :key="item.id">
							<u-steps-item :desc="item.date"></u-steps-item>
							<view class="bg-gray shadow-warp margin-sm padding-sm" style="width: 100%">
								{{ item.content }}
							</view>
						</view>
					</u-steps>
				</view>
			</scroll-view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		computed: {
			expressList() {
				return this.expressInfo.reverse();
			},
		},
		data() {
			return {
				show: false,
				expressInfo: [{
						time: "02:26",
						date: "2022.08.31",
						content: "商品已支付，等待发货",
						id: "0"
					},
					{
						time: "02:26",
						date: "2022.08.31",
						content: "贵阳市金阳三部的王在意已揽件。",
						id: "1"
					},
					{
						time: "02:26",
						date: "2022.08.31",
						content: "快递正在运输途中，请您耐心等待。",
						id: "2"
					},
					{
						time: "02:26",
						date: "2022.08.31",
						content: "贵阳金阳三部的王晓刚[18565235646]正在为您派件。",
						id: "3"
					},
					{
						time: "02:26",
						date: "2022.08.31",
						content: "您的快递已暂存至[快宝的38栋中通快递快递超市]，地址：官府一号一组团38栋超市里面，请及时领取。如有疑问请联系：15564545865",
						id: "4",
					},
					{
						time: "02:26",
						date: "2022.08.31",
						content: "您的快递已签收，签收人在[快宝的38栋中通快递快递超市]（官府一号一组团38栋超市里面）领取。如有疑问，请联系：18645856575",
						id: "5",
					},
				],
			}
		},
		methods: {
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
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
