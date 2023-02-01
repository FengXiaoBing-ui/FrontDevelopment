<template>
<view>
  <u-navbar
      :border="false"
      :fixed="true"
      title="云库存"
      :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
      :safeAreaInsetTop="false"
      :autoBack="true"
      leftIconColor="black"
      titleStyle="color:black"
  >
  </u-navbar>
  <view :style="`margin-top:${CustomBar*2-10}rpx`" class="firstImg">
  </view>
  <view class="margin-top padding-lr">
    <view class="twoImg">
      <view class="text-lg text-center text-bold padding-bottom-sm padding-top">云库存功能简介</view>
      <view class="bg-white" style="border-radius: 20rpx 20rpx 0 0">
        <view class="flex margin-top-sm justify-between padding-lr-sm">
          <view>
            <view class="flex align-center bg-white padding-lr-xs justify-center padding-tb-sm">
              <image class="productImg margin-right margin-tb-sm"
                     src="./gallery/Icon.png"></image>
              <view class="text-bold" style="font-size: 30rpx">采购入库</view>
            </view>
            <view class="padding frame">
              <view class="text-bold padding-bottom-sm text-center text-df" style="color: #FF7F3B">提交补货计划</view>
              <view>采购员根据库存情况提交补货计划，提交后等待审核</view>
            </view>
          </view>
          <view class="margin-left-sm">
            <view class="flex align-center bg-white padding-lr-xs justify-center padding-tb-sm">
              <image class="productImg margin-right margin-tb-sm"
                     src="./gallery/Icon.png"></image>
              <text class="text-bold" style="font-size: 30rpx">库存管理</text>
            </view>
            <view class="padding frame">
              <view class="text-bold padding-bottom-sm text-center text-df" style="color: #FF7F3B">提交补货计划</view>
              <view>采购员根据库存情况提交补货计划，提交后等待审核</view>
            </view>
          </view>
        </view>

        <view class="margin-top-sm flex justify-between padding-lr-sm padding-bottom-sm">
          <view>
            <view class="flex align-center bg-white padding-lr-xs justify-center padding-tb-sm">
              <image class="productImg margin-right margin-tb-sm"
                     src="./gallery/Icon.png"></image>
              <text class="text-bold" style="font-size: 30rpx">销售出库</text>
            </view>
            <view class="padding frame">
              <view class="text-bold padding-bottom-sm text-center text-df" style="color: #FF7F3B">提交补货计划</view>
              <view>采购员根据库存情况提交补货计划，提交后等待审核</view>
            </view>
          </view>
          <view class="margin-left-sm">
            <view class="flex align-center bg-white padding-lr-xs justify-center padding-tb-sm">
              <image class="productImg margin-right margin-tb-sm"
                     src="./gallery/Icon.png"></image>
              <text class="text-bold" style="font-size: 30rpx">采购入库</text>
            </view>
            <view class="padding frame">
              <view class="text-bold padding-bottom-sm text-center text-df" style="color: #FF7F3B">提交补货计划</view>
              <view>采购员根据库存情况提交补货计划，提交后等待审核</view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="bg-white padding-bottom" style="border-radius: 0 0 20rpx 20rpx">
      <view class="beiJing3 padding-lr">
        <image :src="imgUrl1" class="beiJing3"></image>
      </view>
    </view>
  </view>
  <view class="padding-lr padding-bottom-xl" style="position: relative">
    <image :src="imgUrl2" class="beiJing4"></image>
    <view class="cu-btn round tinTing text-white text-bold text-lg" @click="toOpen">立即开通</view>
  </view>
</view>
</template>

<script>
export default {
  name: "wqy2",
  data(){
    return {
      imgUrl:require('/src/pages/admin/versionManagement/beiJing2.png'),
      imgUrl1:require('/src/pages/admin/versionManagement/gallery/userGuide.png'),
      imgUrl2:require('/src/pages/admin/versionManagement/beiJing4.png')
    }
  },
  methods:{
    toOpen(){
      uni.navigateTo({
        url:"/pages/admin/versionManagement/manageBranches"
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
  }

  .u-navbar__content__left,
  .u-navbar__content__right {
    margin-top: var(--StatusBar);
  }
}
.firstImg{
  background-image: url("cloudInventory.png");
  width: 105%;
  height: 220px;
  background-size: 115% 100%;
  position: relative;
  left: -27rpx;
}
.twoImg{
  background-image: url("beiJing.png");
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  color: #3E1B00;
}
.productImg {
  width: 40rpx;
  height: 40rpx;
}
.frame{
  background: rgba(229,77,66,0.06);
  border-radius:10rpx;
  color:#262626;
  font-size: 20rpx;
}
.beiJing2{
  width: 100%;
  height: 160px;
}
.beiJing3{
  width: 100%;
  height: 2000rpx;
}
.tinTing{
  background-image: linear-gradient(to right,#FF5246,#FF8321);
  position: absolute;
  z-index: 1;
  top: 600rpx;
  left: 208rpx;
  width: 372rpx;
  height: 76rpx;
  font-size: 36rpx;
}
.beiJing4{
  width: 100%;
  height: 710rpx;

}

</style>