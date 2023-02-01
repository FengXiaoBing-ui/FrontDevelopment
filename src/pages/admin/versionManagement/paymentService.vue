<template>
  <view>
    <u-navbar
        :border="false"
        :fixed="true"
        title="支付服务款"
        :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
        :safeAreaInsetTop="false"
        :autoBack="true"
        leftIconColor="black"
        titleStyle="color:black"
    >
    </u-navbar>

    <view :style="`margin-top:${CustomBar*2+12}rpx`">
      <view class="bg-white margin-lr-sm padding-sm">
        <view class="flex align-center padding-tb">
          <view class="cuIcon-titles text-red" style="font-size: 40rpx"></view>
          <view class="text-lg text-bold">开通套餐</view>
        </view>
        <view class="text-df padding-left-sm text-bold">好酒选SaaS管理私有版</view>
        <view class="flex justify-between align-center padding">
          <view class="flex align-center">
            <view style="background-color: #E9E9E9;width: 134rpx;height: 134rpx"></view>
            <view class="padding-left-sm">
              <view class="text-df text-bold">半年套餐</view>
              <view class="text-sm text-gray padding-tb-xs">优惠后台¥28.00/月</view>
              <view class="text-xs text-gray">生效时间:2022.11.24-2023.05.24</view>
            </view>
          </view>
          <view class="text-red">
            <text class="text-price"></text>
            <text class="text-xl text-bold">180.00</text>
          </view>
        </view>
      </view>
    </view>

    <view class="flex justify-between align-center padding-sm bg-white botBtn">
      <view>
        <view>
          <view class="text-lg">
            <text>合计:</text>
            <text class="text-price margin-left-sm text-red"></text>
            <text class="text-red">180.00</text>
          </view>
        </view>
        <view class="text-df margin-top-xs text-gray">
          <text>生效日期:</text>
          <text>2022-08-09至2023-08-09</text>
        </view>
      </view>
      <view class="margin-right" @click="goPay">
        <button class="cu-btn bg-red radius lg" style="width: 192rpx;height: 72rpx">确认</button>
      </view>
    </view>
  </view>
</template>

<script>
import { mapMutations } from "vuex"
export default {
  name: "paymentService",
  methods:{
    ...mapMutations('index',['setPayResultType']),
    goPay(){
      this.setPayResultType('privateVersion');
      uni.navigateTo({
        url:"/pages/admin/adminContract/surePay"
      })
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .u-navbar {
  .u-navbar__content {
    height: var(--CustomBar) !important;
    padding-top: var(--StatusBar);
    border-bottom: 0;

    .u-navbar__content__left,
    .u-navbar__content__right {
      margin-top: var(--StatusBar);
    }
  }
}
.botBtn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>