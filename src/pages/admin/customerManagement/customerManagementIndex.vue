<template>
	<view class="content">
		<u-navbar :border="false" :fixed="true" leftIconColor="#fff" :autoBack="true"
			:style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }" :safeAreaInsetTop="false">
			<view slot="center" class="u-nav-slot text-white text-xl">
				<view>我的客户</view>
				<view class="serch padding-lr padding-tb-sm">
					<view class="flex align-center margin-tb-sm bg-gray" style="border-radius: 4px">
						<text class="cuIcon-search text-red"
							style="font-size: 20px; padding: 4px; margin-left: 4px"></text>
						<input class="text-df" type="text" placeholder-class="text-gray" placeholder="输入客户名称、手机号进行搜索"
							confirm-type="search" />
					</view>
					<view class="flex justify-between align-center padding-sm text-df">
						<view class="flex align-center">
							<text>录入时间</text>
							<text class="cuIcon-triangledownfill"></text>
						</view>
						<view class="flex align-center">
							<text>客户类型</text>
							<text class="cuIcon-triangledownfill"></text>
						</view>
						<view class="flex align-center">
							<text>成交量</text>
							<text class="cuIcon-triangledownfill"></text>
						</view>
					</view>
				</view>
			</view>
			<view slot="right" class="u-nav-slot text-white" @click="gotoAddCustomer">新增客户</view>
		</u-navbar>
		<view class="padding" :style="`margin-top:${CustomBar + 100}px`">
			<view class="boxShadow margin-bottom" @click="customerDetails" v-for="item in 6" :key="item">
				<view class="flex align-center justify-between">
					<view class="flex align-center">
						<text class="username text-lg text-bold">王晓刚</text>
						<view class="userphone bg-gray">
							<text class="cuIcon-mobile"></text>
							<text class="text-gray">18690728686</text>
						</view>
					</view>
					<view class="rightTag bg-black text-sm">
						成交活跃
					</view>
				</view>
				<view class="flex margin-tb">
					<view style="width: 26%;" class="text-gray">收货地址：</view>
					<view style="width: 74%;">贵州省贵阳市观山湖区千灵山路德福中心A3栋6楼10号</view>
				</view>
				<view class="flex justify-between align-center">
					<view class="text-gray">录入时间：2022-01-25</view>
					<view class="text-gray">
						成交数：
						<text class="text-red text-lg"> 2536瓶 </text>
						查看
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
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
	.userphone {
		padding: 10rpx;
		border-radius: 20rpx 0 20rpx 0;
		margin-left: 12rpx;
	}

	.rightTag {
		padding: 4rpx 16rpx;
		border-radius: 20rpx 0 0 0;
		transform: translateX(20rpx);
	}

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
