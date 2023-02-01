<template>
  <view class="content" style="padding-bottom: 100rpx">
    <u-navbar title="支付款项" :fixed="true" :autoBack="true"></u-navbar>
    <view class="padding-top" :style="'margin-top:' + CustomBar + 'px'">
      <view class="boxShadow">
        <boxTitle title="支付费用"></boxTitle>
        <view class="justify-between flex align-center padding-bottom">
          <view class="text-gray" >支付项目</view>
          <view class="text-black" >轮播图活动</view>
        </view>
        <view class="justify-between flex align-start padding-bottom">
          <view class="text-gray">单价</view>
          <view class="text-red">￥300.00/天</view>
        </view>
        <view class="justify-between flex align-start padding-bottom">
          <view class="text-gray">轮播时长</view>
          <view class="text-black">1周</view>
        </view>
        <view class="justify-between flex align-start padding-bottom">
          <view class="text-gray">总计</view>
          <view class="text-black">￥2100.00</view>
        </view>
        <view class="justify-between border-bottom flex align-start padding-bottom">
          <view class="text-gray">优惠</view>
          <view class="text-black">￥50.00</view>
        </view>
        <view class="justify-between flex align-start padding-bottom margin-top">
          <view class="text-black">费用总计</view>
          <view class="text-red">￥2050.00</view>
        </view>
      </view>
    </view>
<!--    <view class="whiteBoxShadow">-->
<!--      <view class="justify-between flex">-->
<!--        <view></view>-->
<!--      </view>-->
<!--    </view>-->
    <view class="">
      <view class="flex justify-between padding-tb botPayBtn ">
      <view class="text-lg">合计：<text class="text-red">￥450.00</text></view>
      <button @click="gotoPayment" class="cu-btn bg-red margin-right try">确认支付</button>
      </view>
    </view>
  </view>
</template>

<script>
import productBox from '/src/pages/admin/components/productBox.vue'
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import paySelect from "/src/components/fxb-pay-select/paySelect";
export default {
  name: "payment",
  components: {
    boxTitle,
    paySelect,
    productBox
  },
  data() {
    return {


    };
  },
  methods: {
    gotoPayment() {
      uni.navigateTo({
        url: "/pages/admin/adminContract/surePay"
      });
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
.botPayBtn {
  width: 100%;
  height: 69px;
  position: fixed;
  bottom: 0;
  left: 0;
  background: white;
  z-index: 1;
  box-shadow: 4px 4px 14px #cccccc;
}
.try{
  width: 100px;
  height: 36px;
  background: #E54D42;
  border-radius: 2px 2px 2px 2px;
  opacity: 1;

}
</style>