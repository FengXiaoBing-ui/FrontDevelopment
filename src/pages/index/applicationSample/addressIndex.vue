<!--wjx 20220830-->
<template>
	<view>
		<u-navbar :autoBack="true" title="选择收货地址"></u-navbar>
		<view :style="`margin-top:${CustomBar +10}px`" class="margin-lr">
            <view class="margin-tb"  v-for="item in addressList" :key="item.id">
                <addressBox :addressInfo="item"  :select="item.def==true?'true':''"></addressBox>
            </view>
			<button class="cu-btn bg-red  w100 margin-top" @click="addAddress">新增地址</button>
		</view>
	</view>
</template>
<script>
import addressBox from "./addressBox";

export default {
	name: "sampleIndex",
	components: {addressBox},
	data: function () {
		return {
			addressList: [{
				id: '1',
				name: '张傲',
				phone: '18878855878',
				address: '贵州省贵阳市观山湖区金融城金融城MAX·C座21楼24号',
                def:true
			}, {
				id: "2",
				name: '张傲',
				phone: '18878855878',
				address: '贵州省贵阳市观山湖区金融城金融城MAX·C座21楼24号'
			}, {
				id: "3",
				name: '张傲',
				phone: '18878855878',
				address: '贵州省贵阳市观山湖区金融城金融城MAX·C座21楼24号'
			},],
		}
	},
	methods: {
		addAddress(){
			uni.navigateTo({
				url:'/pages/admin/myOrderForPersonal/addHarvestAddress'
			})
		}
	},

}
</script>

<style lang="scss" scoped>
.w100{
	width: 100%;
}
</style>
