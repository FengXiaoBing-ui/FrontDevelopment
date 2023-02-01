<template>
	<view class="padding-sm">
		<view class="flex align-end justify-between ">
			<view class="basis-xs"></view>
			<view class="">
				<image class="" src="/static/images/hotActivty.png" style="height:60rpx" mode="heightFix"></image>
			</view>
			<view class="flex align-end text-gray margin-left-sm text-xs">
				查看更多<view class="cuIcon-right"></view>
			</view>
		</view>
		<view class="" @click="">
			<image class="margin-top-sm" style="width: 100%;" src="/static/images/daili-hot.png" mode="widthFix"></image>
			<view class="flex align-center flex-wrap">
				<image class="margin-top-xs" style="width: 50%;" src="/static/images/img_132x.png" mode="widthFix">
				</image>
				<image class="margin-top-xs" style="width: 50%;" src="/static/images/img_142x.png" mode="widthFix">
				</image>
				<image class="margin-top-xs" style="width: 50%;" src="/static/images/img_162x.png" mode="widthFix">
				</image>
				<image class="margin-top-xs" style="width: 50%;" src="/static/images/img_152x.png" mode="widthFix">
				</image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "hotActivity",
		data() {
			return {
				list: [{
						name: "茅台1937特价代理茅台1937特价代理",
						text: "特价活动3折代理特价活动3折代理",
						activityImg: "https://img2.baidu.com/it/u=2406302727,86069697&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=400"
					},
					{
						name: "茅台1937特价代理",
						text: "特价活动3折代理",
						activityImg: "https://img0.baidu.com/it/u=2106392037,1749647338&fm=253&fmt=auto&app=138&f=JPEG?w=812&h=500"
					}, {
						name: "茅台1937特价代理",
						text: "特价活动3折代理",
						activityImg: "https://img1.baidu.com/it/u=2469361436,3745464307&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=400"
					}, {
						name: "茅台1937特价代理",
						text: "特价活动3折代理",
						activityImg: "https://img0.baidu.com/it/u=3986496193,3158622279&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333"
					}
				]
			};
		}
	};
</script>

<style lang="scss" scoped>
	.combo {
		display: inline-block;
		background-image: linear-gradient(90deg, orange, red);
		border-radius: 40rpx;
		font-size: 32rpx;
	}

	.alcoholList {
		width: 330rpx;
		color: black;
		background-size: 100%;
		background-position: center;

	}

	.hotActivity {
		background-image: url('https://img1.baidu.com/it/u=399935663,176957314&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=300');
		background-size: 100%;
		background-position: center;
	}

	.hotBox {
		background-image: url('/static/images/hot1.png');
		background-size: cover;
		height: 150rpx;
		width: 50%;
	}

	.beyond {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.myborder {
		border-radius: 8rpx;
		box-shadow: 8rpx 8rpx 16rpx #dadada;
	}
</style>
