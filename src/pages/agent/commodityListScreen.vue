<template>
	<view class="content bg-white wrap">
		<u-navbar
			title="更多筛选"
			leftIcon="close"
			@rightClick="backPages"
			:autoBack="true"
		>
		</u-navbar>

		<view :style="'margin-top:'+CustomBar+'px'">
			<view class="flex align-center justify-between padding">
				<text>已选（1）</text>
				<view class="flex align-center">
					<text style="padding: 10rpx 40rpx" class="text-black">清空</text>
					<text style="padding: 10rpx 40rpx" class="bg-red radius">确定</text>
				</view>
			</view>
			<ScreenAlcohol title="品牌" @getInfo="getInfo" text="不限" :disabled="true"></ScreenAlcohol>
			<ScreenAlcohol title="价格" @getInfo="getInfo" :alcoholList="pricelList"></ScreenAlcohol>
			<ScreenAlcohol title="香型" @getInfo="getInfo" :alcoholList="fragranceList"></ScreenAlcohol>
			<ScreenAlcohol title="产地" @getInfo="getInfo" :alcoholList="placeList"></ScreenAlcohol>
			<ScreenAlcohol title="度数" @getInfo="getInfo" :alcoholList="degreesList"></ScreenAlcohol>
		</view>

	</view>
</template>

<script>
import ScreenAlcohol from './components/fxb-screen-alcohol'

export default {
	name: "commodityList_Screen",
	components: {
		ScreenAlcohol
	},
	data() {
		return {
			pricelList: [
				'不限', '0~99元', '100~299元', '300~599元', '600~999元', '1000~1999元', '2000元以上'
			],
			fragranceList: [
				'不限', '酱香型', '浓香型', '清香型', '馥郁香型', '兼香型', '凤香型', '老白干香型'
			],
			placeList: [
				'不限', '四川省', '陕西省', '云南省', '山东省', '北京市'
			],
			degreesList: [
				'不限', '35°以下', '35°~39°', '40°~49°', '50°以上'
			],
			msg: ''
		}
	},
	methods: {
		getInfo(e) {
			this.msg = e
		},
		backPages() {
			let pages = getCurrentPages(); //获取所有页面栈实例列表
			let nowPage = pages[pages.length - 1]; //当前页页面实例
			let prevPage = pages[pages.length - 2]; //上一页页面实例
			prevPage.$vm.screenResult = this.msg
			uni.navigateBack({
				delta: 1
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.wrap{
	min-height: 100vh;
}
.more {
	border-bottom: 1px #eee solid;
}
</style>

