<template>
  <view>
    <u-navbar title="到账记录" :fixed="true" :autoBack="true"></u-navbar>
    <view class="padding-top-sm" :style="'margin-top:' + CustomBar + 'px'">
      <view class="bg-white padding-lr-sm padding-tb">
        <boxTitle title="到账记录"></boxTitle>
        <view>
          <view class="flex justify-between align-center margin-bottom-sm">
            <view>补货交易编号</view>
            <view>16546512</view>
          </view>
          <view class="flex justify-between align-center margin-bottom-sm">
            <view>交易金额</view>
            <view class="text-red">¥500000.00</view>
          </view>
          <view class="flex justify-between align-center margin-bottom-sm">
            <view>我的占比</view>
            <view>20%</view>
          </view>
          <view class="flex justify-between align-center margin-bottom-sm">
            <view>我的收益</view>
            <view class="text-red">¥100000.00</view>
          </view>
          <view class="flex justify-between align-center margin-bottom-sm">
            <view>到账方式</view>
            <view>微信</view>
          </view>
          <view class="flex justify-between align-center">
            <view>到账时间</view>
            <view>2022-12-23 12:26:54</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
  name: "receiptRecord",
  components:{
    boxTitle
  }
}
</script>

<style lang="scss" scoped>

</style>