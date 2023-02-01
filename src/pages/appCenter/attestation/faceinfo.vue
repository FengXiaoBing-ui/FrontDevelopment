<template>
	<view>
		<u-navbar
			title="人脸识别"
			:autoBack="true"
		></u-navbar>
		<view  :style="`margin-top:${CustomBar + 10}px`">
			<attestationProgress :progress='3'></attestationProgress>
		</view>
        <u-button @click="checkIsSupportSoterAuthentication">点击开始人脸识别</u-button>
	</view>
</template>
<script>
import attestationProgress from './attestationProgress.vue'

export default {
	name: "basicInfo",
	components: {
		attestationProgress,
	},
	data: function () {
		return {
			form: [
				{title: '姓名', type: '', placeholder: '请输入姓名', value: ''},
				{title: '身份证', type: '', placeholder: '请输入18位身份证号', value: ''},
			],
			imgList: [],
			imgGH: '',
			imgRX: ''
		}
	},
    onShow(){
	  // setTimeout(() => {
	  //     uni.navigateTo({
      //         url:"/pages/memberPayment/memberPay"
      //     })
      // },2000)
    },
	methods: {
        checkIsSupportSoterAuthentication() {
            uni.checkIsSupportSoterAuthentication({
                success(res) {
                    console.log(res);
                },
                fail(err) {
                    console.log(err);
                },
                complete(res) {
                    console.log(res);
                }
            })
        },
		clickNext() {
			uni.navigateTo({
				url: '/pages/appCenter/attestation/licenseInfo'
			})
		},
		back() {
			uni.navigateBack({
				delta: 1
			});
		},
		ChooseImage(val) {
			uni.chooseImage({
				count: 4, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: (res) => {
					if (val == 'imgGH') {
						this.imgGH = res.tempFilePaths[0]
					}
					if (val == 'imgRX') {
						this.imgRX = res.tempFilePaths[0]
					}
				}
			});
		},
		ViewImage(e) {
			uni.previewImage({
				urls: this.imgList,
				current: e.currentTarget.dataset.url
			});
		},
		DelImg(e) {
			uni.showModal({
				title: '召唤师',
				content: '确定要删除这张图片吗？',
				cancelText: '取消',
				confirmText: '确认',
				success: res => {
					if (res.confirm) {
						this[e] = ''
					}
				}
			})
		},
	}
}
</script>

<style scoped>


.cu-form-group .title {
	min-width: calc(4em + 15px);
}</style>
