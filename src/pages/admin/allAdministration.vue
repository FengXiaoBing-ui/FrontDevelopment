<template>
	<view class="content">
		<u-navbar
		    :border="false"
		    :fixed="true"
		    title="全部"
		    :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
		    :safeAreaInsetTop="false"
		    :autoBack="true"
		>
		</u-navbar>
		<view class="flex" :style="`margin-top:${CustomBar}px`">
			<view class="leftBox">
				<view class="text-red padding bg-white">快捷入口</view>
				<view class="text-red padding">采购管理</view>
				<view class="text-red padding">订单管理</view>
				<view class="text-red padding">库存管理</view>
				<view class="text-red padding">财务管理</view>
			</view>
			<view class="rightBox bg-white ">
				<view class="setting text-center margin-tb text-xl" @click="gotoPath('/pages/admin/functionManagement')">点击设置 <text class="cuIcon-edit text-red"></text>
				</view>
				<view class="list grid col-3">
					<view v-for="(item,index) in list" :key="index" class="flex flex-direction align-center justify-center margin-bottom-sm">
						<image class="iconImg" :src="item.imgUrl" mode="aspectFill"></image>
						<text>{{ item.text }}</text>
					</view>
				</view>
				<view name="listBox">
					<view class="title padding-lr-sm margin-bottom flex align-center justify-center grid col-3">
						<view class="border"></view>
						<view class="text-center">采购管理</view>
						<view class="border"></view>
					</view>
					<view class="list grid col-3">
						<view v-for="(item,index) in list" :key="index" @click="gotoPath(item.path)" class="flex flex-direction align-center justify-center margin-bottom-sm">
							<image class="iconImg" :src="item.imgUrl" mode="aspectFill"></image>
							<text>{{ item.text }}</text>
						</view>
					</view>
				</view>
				<view name="listBox">
					<view class="title padding-lr-sm margin-bottom flex align-center justify-center grid col-3">
						<view class="border"></view>
						<view class="text-center">订单管理</view>
						<view class="border"></view>
					</view>
					<view class="list grid col-3">
						<view v-for="(item,index) in list" :key="index" class="flex flex-direction align-center justify-center margin-bottom-sm">
							<image class="iconImg" :src="item.imgUrl" mode="aspectFill"></image>
							<text>{{ item.text }}</text>
						</view>
					</view>
				</view>
				<view name="listBox">
					<view class="title padding-lr-sm margin-bottom flex align-center justify-center grid col-3">
						<view class="border"></view>
						<view class="text-center">库存管理</view>
						<view class="border"></view>
					</view>
					<view class="list grid col-3">
						<view v-for="(item,index) in list" :key="index" class="flex flex-direction align-center justify-center margin-bottom-sm">
							<image class="iconImg" :src="item.imgUrl" mode="aspectFill"></image>
							<text>{{ item.text }}</text>
						</view>
					</view>
				</view>
				<view name="listBox">
					<view class="title padding-lr-sm margin-bottom flex align-center justify-center grid col-3">
						<view class="border"></view>
						<view class="text-center">财务管理</view>
						<view class="border"></view>
					</view>
					<view class="list grid col-3">
						<view v-for="(item,index) in list" :key="index" class="flex flex-direction align-center justify-center margin-bottom-sm">
							<image class="iconImg" :src="item.imgUrl" mode="aspectFill"></image>
							<text>{{ item.text }}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{
						text:"采购进货",
						imgUrl:require('/src/static/bottle/22.jpeg'),
						path:"/pages/admin/purchasingManagement/Purchase"
					},
					{
						text:"申请换货",
						imgUrl:require('/src/static/bottle/22.jpeg'),
						path:"/pages/admin/purchasingManagement/Purchase"
					},
					{
						text:"供应商管理",
						imgUrl:require('/src/static/bottle/22.jpeg'),
						path:"/pages/admin/purchasingManagement/Purchase"
					},
					{
						text:"采购记录",
						imgUrl:require('/src/static/bottle/22.jpeg'),
						path:"/pages/admin/purchasingManagement/Purchase"
					},
					{
						text:"换货记录",
						imgUrl:require('/src/static/bottle/22.jpeg'),
						path:"/pages/admin/purchasingManagement/Purchase"
					}
				]
			}
		},
		methods:{
			gotoPath(path){
				uni.navigateTo({
					url:path
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.leftBox{
		width: 30%;
		box-shadow: 10rpx 0rpx 16rpx #c7c7c7;
	}
	.rightBox{
		width: 70%;
		.iconImg{
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
		}
		.title{
			.border{
				height: 4rpx;
				background-color: #cacaca;
			}
		}
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