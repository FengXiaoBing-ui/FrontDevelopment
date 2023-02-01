<template>
	<view class="content">
		<u-navbar :border="false" :fixed="true" leftIconColor="#fff" :autoBack="true"
			:style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }" :safeAreaInsetTop="false">
			<view slot="center" class="u-nav-slot text-white text-xl">
				<view>订单统计</view>
				<view class="serch padding-lr padding-tb-sm">
					<view class="flex align-center margin-tb-sm bg-gray" style="border-radius: 4px">
						<text class="cuIcon-search text-red"
							style="font-size: 20px; padding: 4px; margin-left: 4px"></text>
						<input class="text-df" type="text" placeholder-class="text-gray" placeholder="输入客户名称、手机号进行搜索"
							confirm-type="search" />
					</view>
					<view style="width: 100%;" class="flex justify-between align-center text-df">
						<u-tabs activeStyle="font-size:32rpx" inactiveStyle="color:white" lineColor="white" :list="list1" @click="click"></u-tabs>
					</view>
				</view>

			</view>
		</u-navbar>
		<view class="padding" :style="`margin-top:${CustomBar + 240}rpx`">
			<view class="boxShadow">
				<view class="flex justify-between align-center padding-bottom">
					<text>换货单号：156468545222</text>
					<text class="text-red">未审核</text>
				</view>
				<view class="flex justify-between align-center padding-top u-border-top">
					<view><text class="text-gray">换货数量：</text>20件（120瓶）</view>
					<view><text class="text-gray">操作员：</text>王刚</view>
				</view>
				<view class="flex justify-between align-center margin-tb-sm">
					<view><text class="text-gray">换货仓库：</text>凯辉便利店1号店</view>
					<view><text class="text-gray">服务商：</text>好酒选服务商</view>
				</view>
				<view class="flex justify-between align-center">
					<view><text class="text-gray">提交时间：</text>2022-08-31 12:12:56</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list1: [{
					name: '全部订单',
				}, {
					name: '发货订单',
				}, {
					name: '收银订单'
				}]
			}
		},
		methods: {
			click(item) {
				// console.log('item', item);
			},
			customerDetails() {
				uni.navigateTo({
					url: "/pages/admin/customerManagement/customerDetails"
				})
			},
			gotoAddCustomer() {
				uni.navigateTo({
					url: "/pages/admin/customerManagement/addCustomer"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.searchBox {
		position: relative;
	}

	.serch {
		position: fixed;
		width: 100%;
		top: var(--CustomBar-1) !important;
		left: 0;
		background-image: linear-gradient(90deg, #ff9700, #ed1c24);

		input {
			width: 100%;
		}
	}

	.infoBox {
		position: absolute;
		bottom: -3rem;
		border-radius: 0.3rem;
		width: 90%;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
		margin-left: 5%;
	}

	.mt {
		margin-top: 2rem;
	}

	.addView {
		position: relative;
	}

	.addInfo {
		position: absolute;
		width: 25vw;
		right: 0;
		/*border-radius: 0.3rem;*/
		overflow: hidden;
	}

	.triangle::before {
		position: absolute;
		right: 0.3rem;
		top: -0.4rem;
		content: "";
		height: 0;
		width: 0;
		border: 0.5rem solid white;
		border-top: 0.5rem solid transparent;
		border-left: 0.5rem solid transparent;
		border-right: 0.5rem solid transparent;
	}

	.boxShadow {
		padding: 30rpx 20rpx;
		background: white;
		border-radius: 10rpx;
		box-shadow: 4rpx 4rpx 16rpx #e6dee6;
	}
	/deep/ .u-tabs{
		width: 100%;
		.u-tabs__wrapper__nav__item{
			width: 33% !important;
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
