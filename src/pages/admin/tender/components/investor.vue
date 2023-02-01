<template>
  <view>
    <view class="whiteBoxShadow">
      <boxTitle :title="title"></boxTitle>
      <view class="margin-top padding-lr-sm padding-tb" v-for="item in 3"
            style="background-image: linear-gradient(to bottom,#FFF3E9,#FFFAFA)">
        <view class="flex justify-between align-center">
          <view class="flex align-center">
            <u-avatar class="flex-sub" text="t"></u-avatar>
            <view class="margin-left-sm">
              <view class="text-lg text-bold margin-bottom-xs">王晓刚</view>
              <view>贵州守云间科技有限公司</view>
            </view>
          </view>
          <view>
            <view class="cu-btn round bg-red sm margin-left" @click="goTo()">详情数据</view>
          </view>
        </view>
        <view class="bg-white padding-lr-sm padding-tb margin-top">
          <view class="flex justify-between align-center">
            <view>
              <view class="bg-red text-center" style="width: 100rpx;height: 40rpx;border-radius: 10rpx 10rpx 10rpx 0">已到账</view>
            </view>
            <view>
              <text>2500000元 * 20%=</text>
              <text class="text-orange text-xl margin-left-sm">500000元</text>
            </view>
          </view>
          <view class="margin-top">
            <view class="flex align-center">
              <view class="w50">
                <text class="cuIcon-sponsor"></text>
                <text class="text-gray margin-left-xs">出资金额:</text>
                <text class="margin-left-xs text-orange">¥500000.00</text>
              </view>
              <view class="w50">
                <text class="cuIcon-rank margin-left"></text>
                <text class="text-gray margin-left-xs">出资占比:</text>
                <text class="margin-left-xs text-red">20%</text>
              </view>
            </view>
            <view class="flex align-center margin-top-sm">
              <view class="w50">
                <text class="cuIcon-moneybag"></text>
                <text class="text-gray margin-left-xs">当前成本:</text>
                <text class="text-orange margin-left-xs">¥500000.00</text>
              </view>
              <view class="w50">
                <text class="cuIcon-refund margin-left"></text>
                <text class="text-gray margin-left-xs">净利润:</text>
                <text class="text-red margin-left-xs">¥10000.00</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
  name: "investor",
  props:{
    title:{
      type:String,
      default:"投资人收益"
    }
  },
  components:{
    boxTitle
  },
  methods:{
    goTo(){
      uni.navigateTo({
        url: "pages/admin/tender/collaborator"
      });
    }
  }
}
</script>

<style scoped>

</style>