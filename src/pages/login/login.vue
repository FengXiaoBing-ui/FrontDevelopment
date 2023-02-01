<template>
	<view class="content padding-xl bg-white">
		<!-- <view class="text-black text-bold text-xxl title" style="margin-top: 200rpx">欢迎登录,中意好酒选</view>
    <view class="text-gray text-df">未注册手机号验证后自动创建账号</view>
    <u-input
        class="margin-top-xl"
        placeholder="请输入手机号码"
        border="surround"
        shape="circle"
        prefixIcon="phone"
        v-model="phone"
        @change="change"
    ></u-input>
    <u-input
        class="margin-top-xl"
        placeholder="请输入验证码"
        border="surround"
        shape="circle"
        prefixIcon="lock"
        v-model="value"
        @change="change"
    >
      <template slot="suffix">
       <u-code
            id="uCode"
            ref="uCode"
            @change="codeChange"
            seconds="60"
            changeText="X秒重新获取"
        ></u-code>
        <u-button
            @tap="getCode"
            :text="tips"
            shape="circle"
            type="primary"
            size="mini"
        ></u-button>
      </template>
    </u-input>
    <view class="margin-top-xl flex align-end">
      <u-checkbox label="我已阅读" size="14"></u-checkbox>
      <text class="text-xs">中意好酒选</text>
      <text class="text-xs text-blue">《用户隐私协议》</text>
      <text class="text-xs">和</text>
      <text class="text-xs text-blue">《用户服务协议》</text>
    </view>
    <view class="flex flex-direction margin-top-xl">
      <button style="background-color: rgb(41, 116, 255);" class="cu-btn round text-white margin-tb-sm lg">登录</button>
    </view>
    <view style="margin-top: 140rpx">
      <view class="text-center padding">或通过以下方式登录</view>
      <view class="flex justify-center">
        <u-icon size="50px" name="weixin-fill"></u-icon>
        <u-icon class="margin-left-xl" size="50px" name="zhifubao"></u-icon>
      </view>
    </view> -->
		<view class="flex flex-direction align-center">
			<image class="logo" :src="logo" mode=""></image>

			<!-- <view class="phone text-xxl text-black text-bold margin-top-xl">191****1231</view>
			<view class="text-gray margin-top-sm text-sm">天翼账号提供认证服务</view> -->

			<!-- 			<view class="inputBox flex align-center">
							<image class="phoneLogo" :src="wxLogo" mode=""></image>
							<view class="border"></view>
							<input class="phoneIpnut text-gray" type="number" placeholder-class="placeholderClass" placeholder="请输入你的手机号">
						</view>
						<view class="inputBox flex align-center margin-top">
							<image class="phoneLogo" :src="wxLogo" mode=""></image>
							<view class="border"></view>
							<input class="phoneIpnut text-gray" type="number" placeholder-class="placeholderClass" placeholder="请输入验证码">
							<text style="white-space: nowrap;" class="text-blue">获取验证码</text>
						</view> -->

			<view class="flex flex-direction justify-start">
				<u-input
					class="margin-top-xl bg-gray"
					placeholder="请输入手机号码"
					border="surround"
					shape="circle"
					prefixIcon="phone"
					v-model="phone"
					@change="change"
				></u-input>
				<u-input
					class="margin-top-xl bg-gray"
					placeholder="请输入验证码"
					border="surround"
					shape="circle"
					prefixIcon="lock"
					v-model="value"
					@change="change"
				>
					<template slot="suffix">
						<u-code
							id="uCode"
							ref="uCode"
							@change="codeChange"
							seconds="60"
							changeText="X秒重新获取"
						></u-code>
						<u-button
							@tap="getCode"
							:text="tips"
							shape="circle"
							type="primary"
							size="mini"
						></u-button>
					</template>
				</u-input>
			</view>

			<button class="loginBtn cu-btn lg round text-white">短信验证登录</button>
			<view class="margin-top-xl text-lg text-black">本机号码一键登录</view>
			<view class="logoList flex align-center justify-center">
				<image :src="wxLogo" mode=""></image>
				<image :src="wxLogo" mode=""></image>
			</view>
			<view class="tick margin-top-xl flex align-start">
				<u-checkbox activeColor="green" size="12"></u-checkbox>
				<view style="transform: translateY(-4rpx);">
					<text class="text-sm">我已阅读中意好酒选</text>
					<text class="text-sm text-blue text-bold">用户服务协议</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			logo: require('/src/static/logo.png'),
			wxLogo: require('/src/static/weixin.png'),
			// 手机号
			phone: '',
			// 验证码
			tips: '',
			value: ''
		}
	},
	onLoad() {
	},
	watch: {
		value(newValue, oldValue) {
			// console.log('v-model', newValue);
		}
	},
	methods: {
		change(e) {
			console.log('change', e);
		},
		codeChange(text) {
			this.tips = text;
		},
		getCode() {
			if (this.$refs.uCode.canGetCode) {
				// 模拟向后端请求验证码
				uni.showLoading({
					title: '正在获取验证码'
				})
				setTimeout(() => {
					uni.hideLoading();
					// 这里此提示会被this.start()方法中的提示覆盖
					uni.$u.toast('验证码已发送');
					// 通知验证码组件内部开始倒计时
					this.$refs.uCode.start();
				}, 2000);
			} else {
				uni.$u.toast('倒计时结束后再发送');
			}
		},
	}
};
</script>

<style lang="scss" scoped>
/deep/ .u-checkbox__icon-wrap--square {
	border-radius: 0;
}

/deep/ .u-button--primary {
	color: #3c9cff;
	background-color: rgba(0, 0, 0, 0);
	border-color: rgba(0, 0, 0, 0);
	border-width: 0;
}

/deep/ .u-input__content__prefix-icon {
	padding: 0 6rpx 0 10rpx;
	margin-right: 40rpx;
	position: relative;

	&::after {
		content: '|';
		position: absolute;
		right: -20rpx;
		font-size: 32rpx;
		top: 0;
		color: #c6c6c6;
	}
}

.content {
	height: 100vh;

	.inputBox {
		position: relative;
		width: 100%;
		border-radius: 40rpx;
		height: 70rpx;
		border-radius: 60rpx;
		padding: 10rpx 20rpx 10rpx 30rpx;
		background-color: #eeeeee;

		.phoneIpnut {
			height: 100%;
		}

		.phoneLogo {
			width: 50rpx;
			height: 50rpx;
			margin-right: 10rpx;
		}

		.border {
			width: 4rpx;
			height: 40rpx;
			border-left: 1rpx #c6c6c6 solid;
			margin-right: 20rpx;
		}

		.placeholderClass {
			font-size: 26rpx;
		}
	}


	.title {
		letter-spacing: 5px;
	}
.logo {
	margin-top: 20%;
	width: 160rpx;
	height: 160rpx;
}

	.loginBtn {
		width: 100%;
		margin-top: 10%;
		background-color: #2587ff;
	}

	.logoList {
		width: 100%;
		position: absolute;
		bottom: 25%;

		image {
			width: 60rpx;
			height: 60rpx;
			margin: 0 60rpx;
		}
	}

	.tick {
		position: absolute;
		bottom: 10%;
	}
}
</style>
