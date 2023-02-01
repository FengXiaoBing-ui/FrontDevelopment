<template>
	<view class="content">
		<u-navbar
		    :border="false"
		    :fixed="true"
		    title="我要提货"
			rightText="记录查询"
		    :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
		    :safeAreaInsetTop="false"
		    :autoBack="true"
		>
		</u-navbar>
		<view class="padding" :style="'margin-top:' + CustomBar + 'px'">
			<view class="boxShadow">
				<view class="flex align-center justify-between padding-bottom u-border-bottom">
					<view>提货单号*</view>
					<view>HJXCGD20220901001</view>
				</view>
				<view class="flex align-center justify-between padding-top">
					<view>选择合同*</view>
					<view class="flex align-center">
						<text class="text-bold">东方国宾·尊致酒代理合同</text>
						<text class="cuIcon-right margin-left-sm"></text>
					</view>
				</view>
				<view class="flex align-center justify-between text-gray padding-top">
					<view>合同结算方式</view>
					<view class="flex align-center">
						<text>现结</text>
					</view>
				</view>
			</view>
			<view class="boxShadow margin-top">
				<boxTitle title="提货商品"></boxTitle>
				<product></product>
				<product></product>
			</view>
			<view class="boxShadow margin-top">
				<view class="flex justify-between align-center padding-bottom u-border-bottom">
					<view class="text-gray">数量合计</view>
					<view>240瓶</view>
				</view>
				<view class="flex justify-between align-center padding-tb u-border-bottom">
					<view class="text-gray">金额合计</view>
					<view>¥59000.00</view>
				</view>
				<view class="flex justify-between align-center padding-tb u-border-bottom">
					<view class="text-gray">优惠折扣</view>
					<view>-¥9000.00</view>
				</view>
				<view class="flex justify-between align-center padding-top">
					<view class="text-bold text-lg">应付金额</view>
					<view>¥50000.00</view>
				</view>
			</view>
			<view class="boxShadow margin-top">
				<textarea style="width: 100%;height: 200rpx;" class="padding-sm" name="" placeholder-class="text-gray text-df" placeholder="请输入备注信息"></textarea>
			</view>
			<button style="width: 100%;" class="cu-btn bg-red margin-top lg">提交</button>
		</view>
	</view>
</template>

<script>
	import product from "/src//pages/admin/components/product.vue"
	import boxTitle from "/src/pages/agent/components/fxb-box-title";
	export default {
	    name: "payContractMoney",
	    components: {
	        boxTitle,
			product
	    },
		data(){
			return{
				value: 1,
			}
		},
		methods:{
			valChange(){
				
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