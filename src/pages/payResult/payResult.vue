<template>
    <view class="content bg-white wrap">
        <u-navbar :title="payObj.navbar" :autoBack="true"> </u-navbar>
        <view :style="'margin-top:' + CustomBar + 'px'" class="flex flex-direction align-center padding-top-xl">
            <view
                class="flex justify-center align-center margin-top-xl"
                style="background: #8DC63F; width: 100px; height: 100px; border-radius: 50%"
            >
                <u-icon name="checkbox-mark" color="white" size="70"></u-icon>
            </view>
            <view class="text-xl text-bold margin-tb-lg">{{ payObj.title }}</view>
            <text v-if="payObj.text" class="text-center text-gray padding-lr-xl">{{ payObj.text }}</text>
            <!--      <view class="shop u-border radius padding margin-tb-lg flex justify-around align-center">-->
            <!--        <image style="width: 80rpx;height: 80rpx;border-radius: 50%" src="https://picsum.photos/seed/picsum/200"></image>-->
            <!--        <text>53°贵州茅台1935酒500ml单瓶装</text>-->
            <!--      </view>-->
            <view style="width: 100%" class="flex flex-direction align-center">
                <button v-if="payObj.btn1" @click="btnMethod" style="width: 80%" class="cu-btn bg-red margin-top-xl lg">{{ payObj.btn1 }}</button>
                <button v-if="payObj.btn2" @click="btnMethodTwo" style="width: 80%" class="cu-btn line-gray lg margin-top-sm">{{ payObj.btn2 }}</button>
            </view>
        </view>
    </view>
</template>

<script>
import payResultList from "./payResultList"
import { mapState } from "vuex"
export default {
    name: "payResult",
    data() {
        return {
            payResultList,
            payObj:{}
        };
    },
    computed:{
        ...mapState('index',['payResultType']),
    },
    onLoad(option) {
        let _this = this;
        if (option.status){
            this.status = option.status
            this.payResultList.forEach(item => {
                if (item.keyName===option.status){
                    _this.payObj = item
                }
            })
        }else{
            this.payResultList.forEach(item => {
                if (item.keyName===_this.payResultType){
                    _this.payObj = item
                }
            })
        }
    },
    methods: {
        btnMethod() {
            if (this.payObj.btn1Path != "") {
                uni.navigateTo({
                    url: this.payObj.btn1Path,
                });
            }
        },
        btnMethodTwo() {
            if (this.payObj.btn2Path != "") {
                if (this.payObj.reLaunch){
                    uni.reLaunch({
                        url: this.payObj.btn2Path,
                    })
                    return false;
                }
                uni.redirectTo({
                    url: this.payObj.btn2Path,
                });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.wrap {
    height: 100vh;
}
.shop {
    width: 80%;
}
</style>
