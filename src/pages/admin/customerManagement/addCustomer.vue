<template>
	<view class="content">
		<u-navbar :border="false" :fixed="true" title="新增客户"
			:style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }" :safeAreaInsetTop="false"
			:autoBack="true">
		</u-navbar>
		<view class="padding" :style="`margin-top:${CustomBar}px`">
			<view class="boxShadow">
				<boxTitle title="客户信息"></boxTitle>
				<view class="cu-form-group">
				  <view class="title">
				    <text style="color: red">*</text>
				    姓名
				  </view>
				  <input placeholder="请输入客户姓名" name="input" />
				</view>
				<view class="cu-form-group">
				  <view class="title">
				    <text style="color: red">*</text>
				    联系电话
				  </view>
				  <input placeholder="请输入联系电话" name="input" />
				</view>
				<view class="cu-form-group">
				  <view class="title">
				    <text style="color: red">*</text>
				    发货地址
				  </view>
				  <view class="flex align-center">
					  <text class="text-gray">请选择经营地点</text>
					  <text style="font-size: 38rpx;" class="cuIcon-right"></text>
				  </view>
				</view>
				<view class="cu-form-group">
				  <view class="title">
				    <text style="color: red">*</text>
				    详细地址
				  </view>
				</view>
				<view class="cu-form-group">
				  <view class="title">
				    <text style="color: red">*</text>
				    客户分类
				  </view>
				  <view class="flex align-center">
					  <text>新增客户</text>
					  <text style="font-size: 38rpx;" class="cuIcon-right"></text>
				  </view>
				</view>
			</view>
			<button class="cu-btn bg-red margin-top-xl lg" style="width: 100%;">确定</button>
		</view>
	</view>
</template>

<script>
	import boxTitle from "/src/pages/agent/components/fxb-box-title";
	export default{
		components:{
			boxTitle
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.boxShadow {
	    padding: 30rpx 20rpx;
	    background: white;
	    border-radius: 10rpx;
	    box-shadow: 4rpx 4rpx 16rpx #e6dee6;
	}
		/deep/ .u-navbar {
		    .u-navbar__content {
		        background-image: linear-gradient(90deg, #ff9700, #ed1c24);
		        height: var(--CustomBar) !important;
		        padding-top: var(--StatusBar);
		
		        .u-navbar__content__left,
		        .u-navbar__content__right {
		            margin-top: var(--StatusBar);
		        }
		    }
		}
</style>