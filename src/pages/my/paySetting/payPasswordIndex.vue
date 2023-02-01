<template>
    <view>
        <u-navbar :autoBack="true" title="支付密码"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`">
            <view v-show="showLeave==1" class="flex flex-direction align-center padding-top-xl">
                <view class="text-bold margin-tb-sm">
                    设置六位数字支付密码
                </view>
                <view class="text-gray text-xs">
                    不能是连续数字
                </view>
                <view class="margin-tb-sm">
                    <u-code-input v-model="firstPassword" :dot="true"></u-code-input>
                </view>
            </view>
            <view v-show="showLeave==2" class="flex flex-direction align-center padding-top-xl">
                <view class="text-bold margin-tb-sm">
                    请再次输入，以确认密码
                </view>
                <view class="text-gray text-xs">
                    不能是连续数字
                </view>
                <view class="margin-tb-sm">
                    <u-code-input v-model="secondPasswod" :dot="true"></u-code-input>
                </view>
            </view>

<!--            <view>-->
<!--                <u-keyboard ref="uKeyboard" mode="number" :show="show"></u-keyboard>-->
<!--                <u-button @click="show = true">打开</u-button>-->
<!--            </view>-->
        </view>
    </view>
</template>

<script>
export default {
    name: "payPasswordIndex",
    watch: {
        firstPassword(newVal, old) {
            if (newVal.length == 6) {
                this.showLeave = 2;
            }
        },
        secondPasswod(newVal, old) {
            if (newVal.length == 6 && this.firstPassword == this.secondPasswod) {
                uni.showToast({
                    title: "密码设置成功",
                    error: "success"
                });
                setTimeout(() => {
                    this.firstPassword = "";
                    this.secondPasswod = "";
                    this.showLeave= 1
                }, 100);
            }
            if (newVal.length == 6 && this.firstPassword !== this.secondPasswod) {
                uni.showToast({
                    title: "两次密码不一致，请重新输入！",
                    icon: "error"
                });
                setTimeout(() => {
                    this.showLeave=1
                    this.firstPassword = "";
                    this.secondPasswod = "";
                }, 100);
            }


        }
    },
    data: function() {
        return {
            show:false,
            firstPassword: "",
            secondPasswod: "",
            showLeave: 1
        };
    }
};
</script>

<style scoped>

</style>