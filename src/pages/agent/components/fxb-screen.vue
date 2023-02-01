<template>
	<view class="content">
		<view class="flex justify-between margin-top padding-bottom">
			<view @click="recommend" class="text-bold">智能排序
				<text class="cuIcon-triangledownfill"></text>
			</view>
			<view class="gray">品牌
				<text class="cuIcon-triangledownfill"></text>
			</view>
			<view class="gray">价格
				<text class="cuIcon-triangledownfill"></text>
			</view>

			<view class="gray flex align-center" @click="commodityScreen">
				<view class="gray">香型
					<text class="cuIcon-triangledownfill"></text>
				</view>
				<view class="margin-lr-sm" style="width: 1px;height: 16px;background: #c8c8c8"></view>
				<text class="cuIcon-filter" style="margin-right: 6px"></text>
				筛选
			</view>
		</view>
		<u-picker :show="show" @confirm="confirm" @cancel="cancel" :columns="columns"></u-picker>
	</view>
</template>

<script>
export default {
	name: "fxb-Screen",
	data(){
		return{
			show:false,
			columns: [
				['中国', '美国', '日本']
			],
		}
	},
	methods:{
		recommend(){
			this.show = true
		},
		//跳转筛选
		commodityScreen() {
			uni.navigateTo({
				url: "pages/agent/commodityList_Screen"
			})
		},
		confirm(){
			this.show = false
		},
		cancel(){
			this.show = false
		}
	}
}
</script>

<style scoped>

</style>
