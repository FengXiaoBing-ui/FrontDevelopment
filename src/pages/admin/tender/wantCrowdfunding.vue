<template>
  <view class="content">
    <u-navbar title="我要众筹" :fixed="true" :autoBack="true"></u-navbar>

    <view class="padding-tb" :style="'margin-top:' + CustomBar + 'px;padding-bottom: 120rpx'">
      <view class="whiteBoxShadow">
        <boxTitle title="众筹信息"></boxTitle>
        <view class="flex align-center justify-between">
          <view class="text-gray">项目名称</view>
          <view class="text-black">东方国宾·尊致酒条码招商</view>
        </view>
        <view class="flex align-center justify-between margin-top-sm">
          <view class="text-gray">项目编号</view>
          <view class="text-black">2156456456415</view>
        </view>
        <view class="flex align-center justify-between margin-top-sm">
          <view class="text-gray">商品总量</view>
          <view class="text-black text-bold">21000瓶</view>
        </view>
        <view class="flex align-center justify-between margin-top-sm">
          <view class="text-gray">商品总额</view>
          <view class="text-red">¥5000000.00</view>
        </view>
      </view>
      <view class="whiteBoxShadow">
        <boxTitle title="众筹信息"></boxTitle>
        <view class="flex align-center justify-between text-red text-bold">
          <view>¥2500000.00</view>
          <view>¥5000000.00</view>
        </view>
        <view class="flex align-center justify-between margin-top-sm">
          <view>当前众筹金额</view>
          <view>目标金额</view>
        </view>
        <view class="flex align-center">
          <fxbSlider :progress="50"></fxbSlider>
        </view>
        <view class="flex justify-between align-center padding-tb margin-tb-sm" style="border-top: 1px solid #F1F1F1;border-bottom: 1px solid #F1F1F1">
          <view class="title">
            <text style="color: red">*</text>
            众筹金额
          </view>
          <input placeholder="请输入金额" name="input" />
          <view>元</view>
        </view>
        <view class="text-red">
          <view>温馨提示：</view>
          <view class="margin-top-sm" style="line-height: 48rpx">单人众筹金额不得低于1万元，可众筹金额达到后众筹完毕，并签署合作协议 </view>
        </view>
      </view>
    </view>
    <view class="fixed bg-white padding-xs w100">
      <button class="cu-btn bg-red radius w100" @click="gotoPay()">确认提交</button>
    </view>
  </view>
</template>

<script>
import fxbSlider from "/src/components/fxb/fxb-slider"
import boxTitle from "../../agent/components/fxb-box-title";
import paySelect from "../../../components/fxb-pay-select/paySelect";
import {mapMutations} from "vuex";

export default {
  name: "wantCrowdfunding",
  components: {
    boxTitle,
    paySelect,
    fxbSlider
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapMutations('index',['setPayResultType']),
    gotoPay(){
      this.setPayResultType('wantCrowdfunding');
      uni.redirectTo({
        url:"/pages/admin/adminContract/surePay"
      })
    },
    jumpAgreement() {
      uni.navigateTo({
        url: "/pages/memberPayment/memberAgreement"
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.botBtn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-shadow: 10rpx 0rpx 20rpx #dbdbdb;
}
</style>