<template>
	<view class="content">
		<u-navbar :border="false" :fixed="true" title="成交统计" leftIconColor="#fff" titleStyle="color:#fff"
			:style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }" :safeAreaInsetTop="false"
			:autoBack="true">
		</u-navbar>
		<view class="statistics padding" :style="`margin-top:${CustomBar}px`">
			<view class="flex align-center justify-between text-white">
				<view class="flex align-center text-xl">
					<text>2022年9月</text>
					<text class="cuIcon-unfold"></text>
				</view>
				<view class="flex align-center text-sm">
					<view class="active">成交单数</view>
					<view class="margin-lr-sm">成交单数</view>
					<view>成交单数</view>
				</view>
			</view>
			<view class="text-white margin-tb-lg">成交单数</view>
			<text class="text-white text-xxl text-bold">2312</text>
		</view>
		<view class="boxShadow">
			<boxTitle title="成交单数"></boxTitle>
			<qiun-data-charts type="line" :opts="opts" :chartData="chartData1" />
		</view>
	</view>
</template>

<script>
	import boxTitle from "/src/pages/agent/components/fxb-box-title";
	export default {
		components:{
			boxTitle
		},
		data() {
			return {
				opts: {
					color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
						"#ea7ccc"
					],
					padding: [20, 10, 0, 0],
					legend: {},
					xAxis: {
						disableGrid: true,
					},
					yAxis: {
						gridType: "dash",
						dashLength: 2,
					},
					extra: {
						line: {
							type: "straight",
							width: 2,
						},
					},
				},
				chartData1: {},
			}
		},
		mounted() {
			this.getServerData();
		},
		methods: {
			getServerData() {
				//模拟从服务器获取数据时的延时
				setTimeout(() => {
					let res1 = {
						categories: ["5月", "6月", "7月", "8月"],
						series: [{
								name: "成交量A",
								data: [35, 8, 25, 37, 4, 20],
							},
							{
								name: "成交量C",
								data: [60, 70, 80, 70, 60, 80],
							},
						],
					};
					this.chartData1 = JSON.parse(JSON.stringify(res1));
					let res2 = {
						categories: ["5月", "6月", "7月", "8月"],
						series: [{
			  			name: "成交额",
								data: [35, 36, 31, 34],
							},
							{
			 				name: "成交量/万瓶",
								data: [18, 27, 21, 28],
							},
						],
					};
					this.chartData2 = JSON.parse(JSON.stringify(res2));
				}, 500);
			},
			open() {
				// console.log('open');
			},
			close() {
				this.show = false;
				// console.log('close');
			},
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

	.statistics {
		width: 100%;
		height: 300rpx;
		background-color: #8e8e8e;

		.active {
			border: 1rpx #fff solid;
			padding: 2rpx 16rpx;
			border-radius: 10rpx;
		}
	}

	/deep/ .u-navbar {
		.u-navbar__content {
			background-image: linear-gradient(90deg, #8e8e8e, #8e8e8e);
			height: var(--CustomBar) !important;
			padding-top: var(--StatusBar);

			.u-navbar__content__left,
			.u-navbar__content__right {
				margin-top: var(--StatusBar);
			}
		}
	}
</style>
