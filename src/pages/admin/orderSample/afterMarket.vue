<template>
	<view class="content">

		<u-navbar
		    :border="false"
		    :fixed="true"
		    title="选择售后类型"
		    :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
		    :safeAreaInsetTop="false"
		    :autoBack="true"
		>
		</u-navbar>
		<view class="padding-lr-sm padding-tb" :style="'margin-top:' + CustomBar + 'px'">
            <view v-if="status==1" class="whiteBoxShadow">
                <productBox
                    :imgSize="120"
                    img-url="/productDetails/Slice%203.png"
                    name="东方国宾·尊致酒53°瓶装500ml"
                    num="数量：2"
                    unitPrice="代理价：¥259.00"
                    totalPrice="¥600.00"
                ></productBox>
            </view>
			<view class="whiteBoxShadow margin-top-sm">
				<boxTitle title="选择售后"></boxTitle>
				<view class="flex align-center justify-between padding-bottom u-border-bottom">
                    <view>退款{{status==1?"（没收到货）":""}}</view>
					<view @click="gotoRefund('退款')" class="cuIcon-right" style="font-size: 38rpx;"></view>
				</view>
				<view class="flex align-center justify-between padding-tb u-border-bottom">
					<view>换货</view>
					<view @click="gotoRefund('换货')">
						<text class="text-gray margin-right-sm">请选择</text>
						<text class="cuIcon-right" style="font-size: 38rpx;"></text>
					</view>
				</view>
				<view class="flex align-center justify-between padding-top">
					<view>退货退款</view>
					<view @click="gotoRefund('退货退款')">
						<text class="text-gray margin-right-sm">请选择</text>
						<text class="cuIcon-right" style="font-size: 38rpx;"></text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import productBox from '/src/pages/admin/components/productBox.vue'
	import boxTitle from "/src/pages/agent/components/fxb-box-title";
	export default{
		components: {
		    boxTitle,
			productBox
		},
		data(){
			return{
				status:0
			}
		},
		methods:{
			gotoRefund(title){
				uni.navigateTo({
					url:"/pages/admin/orderSample/refundDetails?title="+title
				})
			},
            onLoad(options) {
                this.status = options.statusList;
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
		        height: var(--CustomBar) !important;
		        padding-top: var(--StatusBar);
		
		        .u-navbar__content__left,
		        .u-navbar__content__right {
		            margin-top: var(--StatusBar);
		        }
		    }
		}
</style>