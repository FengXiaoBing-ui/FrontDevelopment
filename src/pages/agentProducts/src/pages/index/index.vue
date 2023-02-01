<template>
	<view class="">
		<view class="padding-bottom-xl">
			<!-- 轮播图 -->
			<view>
				<u-swiper :list="imglist5" @change="e => current = e.current">
					<view slot="indicator" class="indicator">
						<view class="indicator__dot" v-for="(item, index) in imglist5" :key="index"
							:class="[index === current && 'indicator__dot--active']">
						</view>
					</view>
				</u-swiper>
				<u-gap bgColor="transparent" height="15"></u-gap>
			</view>
			<!-- 搜索 -->
			<view class="flex align-center  bg-white" style="border-radius: 4px">
				<text class="cuIcon-search text-red" style="font-size: 20px; padding: 4px; margin-left: 4px"></text>
				<input class="text-df" type="text" placeholder-class="text-gray" placeholder="请输入商品名称进行搜索"
					confirm-type="search" style="width: 400rpx" />
			</view>
			<!-- 推荐商品 -->
			<view class="padding-lr-sm margin-top-sm flex " style="width: 100%;flex-wrap:wrap">
				<view v-for="(item,index) in productList" :key="index" class="flex align-center margin-top-sm " style="width: 50%"
					@click="getTabBar('/')">
					<view class="">
						<image :src="item.img" mode="aspectFill" style="width: 300rpx;height: 300rpx;"></image>
						<view class="margin-left-sm">
							<view class="text-gray">品牌名称:
								<text class="text-black">{{ item.name }}</text>
							</view>
							<view>价格：
								<text class="text-red">￥9.9</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 底部导航栏 -->
			<view></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '遥看瀑布挂前川',
				title: 'Hello',
				imglist5: [
					'https://img2.baidu.com/it/u=471620330,3155897425&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500',
					'https://img1.baidu.com/it/u=3371454242,3707891229&fm=253&fmt=auto&app=138&f=PNG?w=884&h=500',
					'https://img0.baidu.com/it/u=1493830450,533641357&fm=253&fmt=auto&app=138&f=JPG?w=500&h=281',
				],
				productList: [{
						name: "完美日记",
						price: "9.9",
						img: 'https://img2.baidu.com/it/u=471620330,3155897425&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500'
					},
					{
						name: "花西子",
						price: "9.9",
						img: 'https://img1.baidu.com/it/u=3371454242,3707891229&fm=253&fmt=auto&app=138&f=PNG?w=884&h=500'
					},
					{
						name: "intoyou",
						price: "9.9",
						img: 'https://img1.baidu.com/it/u=3371454242,3707891229&fm=253&fmt=auto&app=138&f=PNG?w=884&h=500'
					},
					{
						name: "colorkey",
						price: "9.9",
						img: 'https://img1.baidu.com/it/u=3371454242,3707891229&fm=253&fmt=auto&app=138&f=PNG?w=884&h=500'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			getTabBar(path) {
				uni.redirectTo({
					url: path
				})
			},
			add() {
				console.log('韦丽丹')
			}
		}
	}
</script>

<style lang="scss">
	

	.indicator {
		@include flex(row);
		justify-content: center;

		&__dot {
			height: 6px;
			width: 6px;
			border-radius: 100px;
			background-color: rgba(255, 255, 255, 0.35);
			margin: 0 5px;
			transition: background-color 0.3s;

			&--active {
				background-color: #ffffff;
			}
		}
	}
</style>
