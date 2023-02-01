<template>
	<view class="content">
		<view class="flex align-center justify-between margin-tb">
			<fxbImage style="width: 140rpx; height: 140rpx" src="/img/index/img_23%402x.png"></fxbImage>
			<view class="flex flex-direction justify-around" style="width: 480rpx; height: 140rpx">
				<view class="flex justify-between align-center">
					<text class="text-lg text-bold">东方国宾·尊致酒</text>
					<text v-if="isDeleteIcon" class="cuIcon-delete text-gray"></text>
				</view>
				<view class="text-sm">
					商品条码：3583495834978
				</view>
				<view class="flex justify-between align-center">
					<text>¥295.00/瓶</text>
					<u-number-box v-model="value">
						<view slot="minus" class="minus">
							<u-icon name="minus" size="12"></u-icon>
						</view>
						<input class="input" slot="input" v-model="value" style="width: 50px;text-align: center;"
							type="number" />
						<view slot="plus" class="plus">
							<u-icon name="plus" color="#FFFFFF" size="12"></u-icon>
						</view>
					</u-number-box>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image"
	export default {
    components:{
        fxbImage
    },
		props:{
			isDeleteIcon:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return{
				value:1
			}
		}

	}
</script>

<style lang="scss" scoped>
		.minus {
			width: 40rpx;
			height: 40rpx;
			border-width: 1px;
			border: 4rpx #e6dee6 solid;
			border-radius: 50%;
			@include flex;
			justify-content: center;
			align-items: center;
		}
	
		.input {
			padding: 0 10rpx;
			font-size: 32rpx;
		}
	
		.plus {
			width: 40rpx;
			height: 40rpx;
			background-color: #FF0000;
			border-radius: 50%;
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			justify-content: center;
			align-items: center;
		}
</style>
