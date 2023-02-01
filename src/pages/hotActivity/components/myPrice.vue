<template>
	<view class="productInfoBox">
		<view class="price">
			<text class="retailPrice">建议零售价：</text>
			<text class="priceCount">￥ 6666.00 </text>
		</view>

		<text class="goodstName margin-tb">东方国宾1937酱香型53°/500ML单瓶装</text>

		<view class="flex justify-between">
			<view class="flex justify-center align-center">
				<u-icon name="account-fill" color="#F37B1D" size="20"></u-icon>
				<text class="font-gray">贵州好酒选渠道商</text>
			</view>
			<view class="flex justify-center align-center">
				<u-icon name="map" color="#909090" size="15"></u-icon>
				<text class="font-gray">贵州 贵阳</text>
			</view>
		</view>

		<view class="flex align-center flex-wrap margin-tb">
			<view class="flex align-center">
				<u-icon name="level" color="#F37B1D" size="20"></u-icon>
				<text class="font-red">成交榜NO.1</text>
			</view>
			<view class="border margin-lr"></view>
			<text class="tagBox font-orange">服务商首推产品</text>
			<view class="border margin-lr"></view>
			<text class="tagBox font-orange">新品推荐</text>
		</view>

		<view class="flex align-center">
			<text class="font-gray">会员代理价：</text>
			<text class="font-red font-bold">￥996.00</text>
			<!-- <text class="button-red">会员可查看</text> -->
			<text @click="openPopup(1)" class="font-blue margin-lr">会员有哪些权益？</text>
		</view>
		<u-popup :round="6" :show="show" mode="center" @close="close" @open="open">
			<view v-if="lookInfoState === 1" class="productParameter">
				<view class="flex justify-between align-center">
					<view></view>
					<text style="font-size:36rpx">会员有哪些权益？</text>
					<u-icon name="close" size="20" @click="close"></u-icon>
				</view>
				<view class="margin-tb">
					<text class="font-gray" style="line-height: 40rpx">
						1.为保护酒类销售的区域隐私，注册用户需开启会员，会员需缴纳(¥5000.00)会员费后才能查看代理政策以及代理价格。
						2.若用户30日内未代理产品，会员费自动退回相应账户，平台根究时长收取一定的服务费，若代理成功后，会员费也会自动退回。
						3.若用户成功代理产品后还需代理其它产品需重新缴纳会员费，并代理相应产品
					</text>
				</view>
				<view class="button-red flex justify-center align-center" @click="gotoPth('/pages/memberPayment/memberAgreement')">
					<text class="font-white">去入驻</text>
				</view>
			</view>
			<view v-if="lookInfoState === 2" class="productParameter bg-white padding-tb-lg padding-lr-sm">
				<view class="flex justify-between align-center">
					<text></text>
					<text style="font-size:36rpx">温馨提示</text>
					<u-icon name="close" size="20" @click="close"></u-icon>
				</view>
				<view class="margin-tb">
					<text class="font-gray">
						尊敬好的好酒选用户，您好！为保证酒类市场公平行，代理政策必须是会员才可查看，您可以先入驻会员，成为会员后可代理平台产品。谢谢您的理解！
					</text>
				</view>
				<view class="flex justify-between margin-tb">
					<button class="cu-btn bg-gray" style="width: 46%" @click="close">再考虑</button>
					<button class="cu-btn bg-red" style="width: 46%"
						@click="gotoPth('/pages/memberPayment/memberAgreement')">会员入驻
					</button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
export default {
	name: "myPrice",
	data() {
		return {
			show: false,
			lookInfoState: 0,
		}
	},
	methods: {
		open() {
			// console.log('open');
			this.show = true;
		},
		close() {
			this.show = false;
			// console.log('close');
		},
		openPopup(index) {
			this.show = true;
			this.lookInfoState = index
		}
	}
}
</script>

<style lang="scss" scoped>
.productInfoBox {
	width: 720rpx;
	background-color: white;
	border-radius: 8rpx;
	padding: 32rpx 24rpx;
	box-sizing: border-box;
	box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
	font-size: 32rpx;
}

.price {
	display: flex;
	flex-direction: row;
	align-items: center;
}

.retailPrice {
	font-size: 26rpx;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: #646464;
}

.priceCount {
	font-size: 28rpx;
	font-family: Microsoft YaHei;
	font-weight: bold;
	color: #E54D42;
}

.goodstName {
	font-size: 30rpx;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: #333333;
}

.tagBox {
	padding: 6rpx 9rpx;
	background: rgba(243, 123, 29, 0.2);
	border-radius: 4px;
}
.productParameter{
	width: 600rpx;
	padding: 16rpx 12rpx;
}

.button-red {
	padding: 11rpx 21rpx;
	background-color: #E54D42;
	border-radius: 4px;
	font-size: 26rpx;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: #FFFFFF;
}

.margin-tb {
	margin: 10rpx 0;
}

.margin-lr {
	margin: 0 10rpx;
}

.margin {
	margin: 10rpx;
}

.padding-tb {
	padding: 10rpx 0;
}

.padding-lr {
	padding: 0 10rpx;
}

.padding {
	padding: 10rpx;
}

.border {
	width: 2rpx;
	height: 22rpx;
	background: #DEDEDE;
}

.flex {
	display: flex;
	flex-direction: row;
}

.flex-wrap {
	flex-wrap: wrap;
}

.flex-nowrap {
	flex-wrap: nowrap;
}

.justify-center {
	justify-content: center;
}

.justify-between {
	justify-content: space-between;
}

.align-center {
	align-items: center;
}

.font-bold {
	font-weight: bold;
}

.font-gray {
	font-size: 26rpx;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: #909090;
}

.font-red {
	font-size: 26rpx;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: #E54D42;
}

.font-orange {
	font-size: 26rpx;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: #F37B1D;
}

.font-blue {
	font-size: 26rpx;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: #0081FF;
}
.font-white {
	font-size: 26rpx;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: #FFFFFF;
}
</style>
