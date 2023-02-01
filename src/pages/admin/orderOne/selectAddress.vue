<template>
  <view>
    <u-navbar title="选择收货地址" :autoBack="true"></u-navbar>
    <view :style="'margin-top:' + CustomBar + 'px;'">
      <view class="padding-top-sm">
        <view class="bg-white padding-tb">
          <view class="padding-lr-sm margin-top-sm">
            <view class="flex align-center">
              <view class="w25 text-gray">收货人：</view>
              <view>
                <text>张晓丹</text>
                <text class="cuIcon-mobile text-yellow padding-left"></text>
                <text>18690726598</text>
              </view>
            </view>
            <view class="flex align-start margin-tb-sm">
              <view class="w25 text-gray">收货地址：</view>
              <view class="w75 flex align-start">
                <view>贵州省贵阳市关山湖区德福中心A3栋6楼10-13号</view>
                <view class="margin-left-sm cuIcon-check text-red " style="font-size: 40rpx"></view>
              </view>
            </view>
          </view>
        </view>
        <view class="bg-white padding-tb margin-top-sm">
          <view class="padding-lr-sm margin-top-sm">
            <view class="flex align-center">
              <view class="w25 text-gray">收货人：</view>
              <view>
                <text>张晓丹</text>
                <text class="cuIcon-mobile text-yellow padding-left"></text>
                <text>18690726598</text>
              </view>
            </view>
            <view class="flex align-start margin-tb-sm">
              <view class="w25 text-gray">收货地址：</view>
              <view class="w75 flex align-start">
                <view>贵州省贵阳市关山湖区德福中心A3栋6楼10-13号</view>
                <view class="margin-left-sm cuIcon-check text-red " style="font-size: 40rpx"></view>
              </view>
            </view>
          </view>
        </view>
        <view class="bg-white padding-tb margin-top-sm">
          <view class="padding-lr-sm margin-top-sm">
            <view class="flex align-center">
              <view class="w25 text-gray">收货人：</view>
              <view>
                <text>张晓丹</text>
                <text class="cuIcon-mobile text-yellow padding-left"></text>
                <text>18690726598</text>
              </view>
            </view>
            <view class="flex align-start margin-tb-sm">
              <view class="w25 text-gray">收货地址：</view>
              <view class="w75 flex align-start">
                <view>贵州省贵阳市关山湖区德福中心A3栋6楼10-13号</view>
                <view class="margin-left-sm cuIcon-check text-red " style="font-size: 40rpx"></view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="fixed btn padding-sm bg-white">
      <button class="text-white bg-red" @click="goToItem(item)">新增收货地址</button>
    </view>
  </view>
</template>

<script>
export default {
  name: "selectAddress",
  data(){
    return{
      item:1
    }
  },
  methods:{
    goToItem(item){
      uni.navigateTo({
        url: "pages/admin/orderOne/fillOrder?item=" + item
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.btn{
  width: 100%;
}
</style>