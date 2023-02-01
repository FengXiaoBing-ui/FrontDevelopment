<template>
	<view class="content" style="padding-bottom: 100rpx">
		<u-navbar
		    :border="false"
		    :fixed="true"
		    title="采购进货"
			rightText="草稿箱"
		    :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
		    :safeAreaInsetTop="false"
		    :autoBack="true"
		>
		</u-navbar>
		<view class="padding" :style="`margin-top:${CustomBar+10}px`">
			<view class="boxShadow">
				<view class="flex justify-between align-center padding-tb">
					<view class="flex align-center">采购单号 <text class="text-red">*</text></view>
					<view class="flex align-center">HJXCGD20220901001</view>
				</view>
				<view class="border"></view>
				<view class="flex justify-between align-center padding-tb">
					<view class="flex align-center">选择服务商 <text class="text-red">*</text></view>
					<view class="flex align-center">
						<view class="flex flex-direction align-end">
							<view class="text-gray">好酒选服务商</view>
							<view class="text-red">应付欠款：¥230000.00</view>
						</view>
						<text class="cuIcon-right"></text>
					</view>
				</view>
			</view>
			<view class="boxShadow margin-top grid col-2">
				<view style="border-right: 2rpx #373737 solid;" class="flex align-center justify-center">
					<text class="cuIcon-roundaddfill margin-right text-red"></text>
					<view class="text-red">选择商品</view>
				</view>
				<view class="flex align-center justify-center">
					<text class="cuIcon-scan margin-right"></text>
					<view>扫码添加</view>
				</view>
			</view>
			
			<view class="boxShadow margin-top">
				<boxTitle title="进货商品"></boxTitle>
				<view>
					<view class="margin-tb">
						<view class="text-cut">东方国宾·尊致酒（456412213213）</view>
						<view class="grid col-3 text-gray margin-top">
							<view>¥295.00/瓶</view>
							<view class="text-center">20件（120瓶）</view>
							<view class="text-right">¥29500.00</view>
						</view>
					</view>
					<view class="border"></view>
					<view class="margin-tb">
						<view class="text-cut">东方国宾·尊致酒（456412213213）</view>
						<view class="grid col-3 text-gray margin-top">
							<view>¥295.00/瓶</view>
							<view class="text-center">20件（120瓶）</view>
							<view class="text-right">¥29500.00</view>
						</view>
					</view>
				</view>
			</view>
			<view class="boxShadow margin-top">
				<view class="flex justify-between align-center padding-bottom">
					<view class="text-gray">数量合计</view>
					<view>40件(240瓶)</view>
				</view>
				<view class="border"></view>
				<view class="flex justify-between align-center padding-tb">
					<view class="text-gray">金额合计</view>
					<view>¥50000.00</view>
				</view>
				<view class="border"></view>
				<view class="flex justify-between align-center padding-tb">
					<view class="text-gray">优惠折扣</view>
					<view>¥50000.00</view>
				</view>
				<view class="border"></view>
				<view class="flex justify-between align-center padding-top">
					<view class="text-black text-bold text-lg">应付金额</view>
					<view>¥50000.00)</view>
				</view>
			</view>
			<view class="boxShadow margin-top">
				<u--textarea class="text-sm" v-model="value" placeholder="请输入备注信息" ></u--textarea>
			</view>
		</view>
		<view class="botBtn bg-white flex justify-between align-center padding-lr padding-tb-sm">
		    <view class="flex align-center text-sm">
		        <text class="">合计：</text>
		        <view class="text-red">¥50000.00</view>
		    </view>
		    <view>
		        <button class="cu-btn bg-black" @click="gotoPth('/pages/index/applicationSample/sampleOrder')">存为草稿</button>
		        <button class="cu-btn bg-red margin-left-sm" @click="gotoPth('/pages/admin/purchasingManagement/orderOne')">提交</button>
		    </view>
		
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
				value:""
			}
		},
		methods:{
			gotoPth(path){
				uni.navigateTo({
					url:path
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.border{
		width: 100%;
		height: 4rpx;
		background-color: #e6dee6;
	}
	.verticalBorder{
		width: 2rpx;
		height: 32rpx;
		background-color: #222122;
	}
	.botBtn {
	    position: fixed;
	    bottom: 0;
	    left: 0;
	    z-index: 99;
	    width: 100%;
	}
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