<template>
        <movable-view direction="all">
            <view @click="change" class="iconTextBox flex flex-direction align-center padding-lr-sm padding-bottom-sm">
                <fxbImage class="iconImg margin-bottom-sm" :src="imgUrl" mode=""></fxbImage>
                <view class="text-cut">{{ title }}</view>
                <view class="r-t-icon">
                    <u-icon :name="icon"></u-icon>
                </view>
            </view>
        </movable-view>
</template>

<script>
import fxbImage from "../../../components/fxb/fxb-image";
	export default{
	    components:{
            fxbImage
        },
		props:{
			imgUrl:{
				type:String,
				default:'/admin/index/%E4%B8%AA%E4%BA%BA%E4%B8%AD%E5%BF%83.png'
			},
            icon:{
				type:String,
				default:''
			},
			title:{
				type:String,
				default:''
			}
		},
		methods:{
			change(){
				this.$emit('change')
			}
		}
	}
</script>

<style lang="scss" scoped>
movable-view{
    width: 160rpx;
    height: 100rpx;
}
	.iconTextBox {
		position: relative;
		.r-t-icon {
			position: absolute;
			right: 40rpx;
			top: 0;
		}

		.iconImg {
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
		}
	}
</style>
