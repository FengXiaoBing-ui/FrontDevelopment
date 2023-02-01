<template>
    <view class="content">
        <u-navbar title="签约" @rightClick="show = true" :autoBack="true"></u-navbar>
        <view class="padding" :style="'margin-top:' + CustomBar + 'px'">
            <view class="boxShadow" style="height: 88vh">
                <boxTitle title="获取验证码"></boxTitle>
                <view class="margin-tb">
                    系统已向您认证的手机号
                    <text class="text-red">18695457658</text>
                    发送了一条验证码，请在3分钟内输入验证码
                </view>

                <u-code-input class="margin-top-xl flex justify-center" v-model="value" :maxlength="6"></u-code-input>
            </view>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";

export default {
    name: "sign",
    components: {
        boxTitle,
    },
    data() {
        return {
            value: "",
        };
    },
    watch: {
        value: function () {
            if (this.value.length > 5) {
                uni.redirectTo({
                    url: "pages/payResult/payResult" + "?status=签约",
                });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.boxShadow {
    padding: 30rpx 20rpx;
    background: white;
    border-radius: 10rpx;
    box-shadow: 4rpx 4rpx 16rpx #e6dee6;
}
</style>
