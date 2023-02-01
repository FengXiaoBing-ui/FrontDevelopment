<template>
	<view class="margin-xs radius  bg-white padding-bottom-xs">
		<view class="image">
			<image class="radius" :src=productInfo.productImg mode="widthFix"></image>
		</view>
		<view class="text-cut text-bold margin-left-xs" style="width: 160px;">{{ productInfo.productName }}</view>
		<view class="margin-tb-xs text-grey margin-left-xs"
			  style="font-size: 12px">
			<text>零售价:</text>
			<text class="text-price text-red">{{ productInfo.productSalePrice }}</text>
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
