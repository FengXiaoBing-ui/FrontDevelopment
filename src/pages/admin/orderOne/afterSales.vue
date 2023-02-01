<template>
  <view>
    <u-navbar title="申请售后" :autoBack="true"></u-navbar>
    <view :style="'margin-top:' + CustomBar + 'px;'">
      <view class="padding-top-sm">
        <view class="bg-white padding-tb">
          <view class="flex align-center margin-bottom-sm" style="padding-bottom: 15rpx">
            <view class="cuIcon-titles text-red" style="font-size: 40rpx"></view>
            <view class="text-bold text-lg">售后类型</view>
          </view>
          <view class="padding-lr-sm">
            <view class="flex justify-between align-center padding-bottom" style="border-bottom: 1px solid #F1F1F1">
              <view>退款（未收货)</view>
              <view class="cuIcon-right text-gray" style="font-size: 30rpx" @click="go()"></view>
            </view>
            <view class="flex justify-between align-center margin-top">
              <view>退款退货(已收货）</view>
              <view class="flex align-center">
                <view class="text-gray margin-right">请选择</view>
                <view class="cuIcon-right text-gray" style="font-size: 30rpx"></view>
              </view>
            </view>
          </view>

        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "afterSales",
  methods:{
    go(){
      uni.navigateTo({
        url: "pages/admin/orderOne/refund"
      });
    }
  }
}
</script>

<style scoped>

</style>