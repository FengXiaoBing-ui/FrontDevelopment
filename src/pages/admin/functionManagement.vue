<template>
	<view class="content bg-white">
		<u-navbar :border="false" :fixed="true" title="功能管理" :autoBack="true"
			:style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }" :safeAreaInsetTop="false">
			<view slot="right" class="u-nav-slot text-white">
				<button class="cu-btn bg-red light">完成</button>
			</view>
		</u-navbar>
		<view class="padding" :style="`margin-top:${CustomBar+10}px`">
			<view class="flex align-center u-border-bottom padding-bottom-xl">
				<iconBox title="消息提示"></iconBox>
				<view style="width: 60%;" class="margin-left text-gray text-df">
					底部状态栏第一栏默认为消息提醒您可以拖动常用功能放在这里
				</view>
			</view>
			<view class="padding-tb">
				<view style="width: 60%;margin: 0 auto;" class="text-center text-gray">
					您可以将常用的服务添加到首页拖动可以调整应用程序的顺序
				</view>
			</view>
			<view class="listBox flex flex-wrap">
				<iconBox title="消息提示"></iconBox>
				<iconBox title="消息提示"></iconBox>
				<iconBox title="消息提示"></iconBox>
				<iconBox title="消息提示"></iconBox>
				<iconBox title="消息提示"></iconBox>
				<iconBox title="消息提示"></iconBox>
			</view>
			<view class="">
				<u-tabs :list="list1" @click="click"></u-tabs>
			</view>
			<view class="margin-top">
				<boxTitle title="销售管理"></boxTitle>
				<view class="listBox flex flex-wrap">
					<iconBox iconClass="cuIcon-add" title="消息提示"></iconBox>
					<iconBox iconClass="cuIcon-add" title="消息提示"></iconBox>
					<iconBox iconClass="cuIcon-add" title="消息提示"></iconBox>
					<iconBox iconClass="cuIcon-add" title="消息提示"></iconBox>
					<iconBox iconClass="cuIcon-add" title="消息提示"></iconBox>
					<iconBox iconClass="cuIcon-add" title="消息提示"></iconBox>
				</view>
			</view>
			<view class="margin-top">
				<boxTitle title="库存管理"></boxTitle>
				<view class="listBox flex flex-wrap">
					<iconBox iconClass="cuIcon-add" title="消息提示"></iconBox>
					<iconBox iconClass="cuIcon-add" title="消息提示"></iconBox>
					<iconBox iconClass="cuIcon-add" title="消息提示"></iconBox>
					<iconBox iconClass="cuIcon-add" title="消息提示"></iconBox>
					<iconBox iconClass="cuIcon-add" title="消息提示"></iconBox>
					<iconBox iconClass="cuIcon-add" title="消息提示"></iconBox>
				</view>
			</view>
			<view class="margin-top">
				<boxTitle title="财务管理"></boxTitle>
				<view class="listBox flex flex-wrap">
					<iconBox iconClass="cuIcon-add" title="消息提示"></iconBox>
					<iconBox iconClass="cuIcon-add" title="消息提示"></iconBox>
					<iconBox iconClass="cuIcon-add" title="消息提示"></iconBox>
					<iconBox iconClass="cuIcon-add" title="消息提示"></iconBox>
					<iconBox iconClass="cuIcon-add" title="消息提示"></iconBox>
					<iconBox iconClass="cuIcon-add" title="消息提示"></iconBox>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import boxTitle from "/src/pages/agent/components/fxb-box-title";
	import iconBox from '/src/pages/admin/components/iconBox.vue'
	export default {
		components: {
			iconBox,
			boxTitle
		},
		data() {
			return {
				list1: [{
					name: '采购管理',
				}, {
					name: '订单管理',
				}, {
					name: '库存管理'
				}, {
					name: '财务管理'
				}, {
					name: '团队管理'
				}, {
					name: '美食'
				}, {
					name: '文化'
				}, {
					name: '财经'
				}, {
					name: '手工'
				}]
			}
		},
		methods: {
			click(item) {
				console.log('item', item);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.iconBox {
		width: 160rpx;
		position: relative;

		.r-t-icon {
			position: absolute;
			right: 0;
			top: 0;
		}
	}

	.iconImg {
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
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
