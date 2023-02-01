<template>
	<view class="cu-list grid margin-top" :class="['col-' + gridCol,gridBorder?'':'no-border']">
		<view class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol*2">
			<view class="cu-avatar lg round margin-left" :style="`background-image:url('${item.url}')`"></view>
			<text>{{ item.name }}</text>
		</view>
	</view>
</template>

<script>
export default {
	name: "win-index-grid",
	props: {
		cuIconList: {
			type: Array,
			default: () => {
				return []
			}
		}
	},
	data() {
		return {
			gridCol:5,
			gridBorder: false,
		}
	},
	methods: {}
}
</script>

<style scoped>

</style>
