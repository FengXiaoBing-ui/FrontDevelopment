<template>
	<view class="content">
		<u-navbar :border="false" :fixed="true" title="客户详情" rightIcon="edit-pen" :rightClick="gotoedit"
			:style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }" :safeAreaInsetTop="false"
			:autoBack="true">
		</u-navbar>
		<view class="padding" :style="`margin-top:${CustomBar}px`">
			<view class="boxShadow">
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
				<view class="text-gray">录入时间：2022-01-25</view>
				<view class="grid col-3 margin-top">
					<view class="text-center">
						<view class="text-bold text-xl">2312</view>
						<view class="text-gray">本月成交量</view>
					</view>
					<view class="text-center">
						<view class="text-bold text-xl">2312</view>
						<view class="text-gray">本年成交量</view>
					</view>
					<view class="text-center">
						<view class="text-bold text-xl">2312</view>
						<view class="text-gray">历史成交量</view>
					</view>
				</view>
			</view>
			<view class="boxShadow margin-top">
				<boxTitle title="成交记录" right-text="查看全部" @change="gotoRecord"></boxTitle>
				<view v-for="item in 6" :key="item" class="flex align-center justify-between padding-tb u-border-bottom">
					<image style="width: 140rpx; height: 140rpx" :src="require('/src/static/bottle/10.jpeg')"></image>
					<view class="flex flex-direction justify-around" style="width: 480rpx; height: 140rpx">
						<view class="flex justify-between align-center">
							<view style="width: 80%;" class="text-cut">53°贵州茅台贵州茅台1935酒500ml单</view>
							<view class="text-red">已完成</view>
						</view>
						<view class="text-sm text-gray">
							<text>数量：2</text>
							<text class="margin-left">¥300.00/瓶</text>
						</view>
						<view class="flex justify-between align-center">
							<text class="text-gray">¥295.00/瓶</text>
							<text class="text-bold">¥600.00</text>
						</view>
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

			}
		},
		methods: {
			gotoedit() {

			},
			gotoRecord(){
				uni.navigateTo({
					url:"/pages/admin/customerManagement/transactionRecord"
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
