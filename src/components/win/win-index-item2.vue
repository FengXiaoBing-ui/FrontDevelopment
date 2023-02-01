<template>
	<view class="flex margin-xs radius bg-white">
		<view class="flex-sub padding-xs">
			<image class="radius" :src=productInfo.productImg style="width: 200rpx;height: 200rpx;"
				   mode="widthFix"></image>
		</view>
		<view class="flex-treble padding-xs">
			<view class="text-cut text-lg text-bold margin-sm" style="width: 300px;">{{
					productInfo.productName
				}}
			</view>
			<view class="margin-sm">
				<text>{{ productInfo.type }}</text>
				<text v-if="productInfo.isLightning"
					  class="text-red padding-lr-xs margin-left radius text-center light bg-red">闪电拿
				</text>
			</view>
			<view class="flex margin-sm text-sm margin-top">
				<view v-if="productInfo.grade==1">
					<text class="lg text-yellow cuIcon-upstagefill margin-right-xs"></text>
					<text class="text-yellow">金牌渠道</text>
					<text class="margin-lr-xs">|</text>
				</view>
				<view v-else-if="productInfo.grade==2">
					<text class="lg text-grey cuIcon-upstagefill margin-right-xs"></text>
					<text class="text-grey">银牌渠道</text>
					<text class="margin-lr-xs">|</text>
				</view>
				<view v-else-if="productInfo.grade==3">
					<text class="lg text-brown cuIcon-upstagefill margin-right-xs"></text>
					<text class="text-brown">铜牌渠道</text>
					<text class="margin-lr-xs">|</text>
				</view>
				<view v-if="productInfo.isRecommend">
					<text class="lg text-blue cuIcon-vip margin-right-xs"></text>
					<text class="text-blue">信誉较高</text>
					<text class="margin-lr-xs">|</text>
				</view>
				<view>{{ productInfo.influenceRate }}%影响率</view>
				<text class="margin-lr-xs">|</text>
				<view> {{ productInfo.contractRate }}%履约率</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: "win-index-item",
	props: {
		productInfo: {
			type: Object,
			default: () => {
				return {}
			}
		}
	},
	data() {
		return {}
	},
	methods: {}
}
</script>

<style scoped>

</style>
