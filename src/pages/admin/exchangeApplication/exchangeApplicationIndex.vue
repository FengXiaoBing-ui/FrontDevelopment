<template>
	<view class="content">
		<u-navbar
		    :border="false"
		    :fixed="true"
		    title="申请换货"
			rightText="换货记录"
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
				<view class="flex align-center justify-between text-gray padding-tb">
					<view>合同结算方式</view>
					<view class="flex align-center">
						<text>现结</text>
					</view>
				</view>
				<view class="flex align-center justify-between padding-top u-border-top">
					<view>选择换货仓库*</view>
					<view class="flex align-center">
						<text>凯辉便利店一号店</text>
						<text class="cuIcon-right margin-left-sm"></text>
					</view>
				</view>
			</view>
			<view class="boxShadow margin-top">
				<boxTitle title="换货商品"></boxTitle>
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
			</view>
			<view class="boxShadow margin-top">
				<view class="padding-bottom u-border-bottom">
					<boxTitle title="换货原因"></boxTitle>
					<view class="margin-tb">
						<text class="text-red">*</text>
						<text>添加图片</text>
					</view>
					<u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple
						:maxCount="10"></u-upload>
				</view>
				<textarea style="width: 100%;height: 200rpx;" class="padding-top" name="" placeholder-class="text-gray text-df" placeholder="请添写换货原因"></textarea>
			</view>
			<button style="width: 100%;" class="cu-btn bg-red margin-top lg">提交</button>
		</view>
	</view>
</template>

<script>
	import product from "/src//pages/admin/components/product.vue"
	import boxTitle from "/src/pages/agent/components/fxb-box-title";
	export default {
	    components: {
	        boxTitle,
			product
	    },
		data(){
			return{
				value: 1,
				fileList1:[]
			}
		},
		methods:{
			valChange(){
				
			},
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						}
					});
				})
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