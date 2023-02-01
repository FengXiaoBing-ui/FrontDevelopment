<template>
	<view>
		<view class="flex align-center" @click="change">
			<fxbImage :style="'width: '+imgSize+'rpx;height: '+imgSize+'rpx;'" :src="imgUrl"
				mode="aspectFill">
			</fxbImage>
			<view :style="'width: '+(750-imgSize-124)+'rpx;min-height:'+imgSize+'rpx;'"
				class="flex flex-direction justify-around margin-left-sm">
				<view v-if="name!=''" class="text-cut fjc">
					<view :class="nameClass">{{ name }}</view>
					<view></view>
				</view>
				<view v-if="num!=''" class="text-gray fjc">
					<view>{{ num }}</view>
					<view></view>
				</view>
				<view v-if="unitPrice!=''" class="fjc">
					<view class="text-gray">{{ unitPrice }}</view>
					<view v-if="totalPrice!=''" class="text-red">{{ totalPrice }}</view>
<!-- 					<u-number-box v-if="numberBox" v-model="value">
						<view slot="minus" class="minus">
							<u-icon name="minus" size="12"></u-icon>
						</view>
						<input class="input" slot="input" v-model="value" style="width: 50px;text-align: center;"
							type="number" />
						<view slot="plus" class="plus">
							<u-icon name="plus" color="#FFFFFF" size="12"></u-icon>
						</view>
					</u-number-box> -->
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
		props: {
			imgUrl:{
				type:String,
				default:'/img/index/img_22%402x.png'
			},
			imgSize: {
				type: Number,
				default: 100
			},
			name:{
				type:String,
				default:''
			},
			num:{
				type:String,
				default:''
			},
			unitPrice:{
				type:String,
				default:''
			},
			totalPrice:{
				type:String,
				default:''
			},
			nameClass:{
				type:String,
				default:''
			},
			numberBox:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return{
				value:1
			}
		},
		methods: {
			change(e) {
				this.$emit('change', e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.fjc{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
