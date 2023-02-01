<template>
<view>
  <u-navbar
      :border="false"
      :fixed="true"
      title="选择套餐"
      :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
      :safeAreaInsetTop="true"
      :autoBack="true"
      leftIconColor="black"
      titleStyle="color:black"
  >
  </u-navbar>
  <view :style="'margin-top:' + CustomBar  + 'px;'" class="padding-lr">
      <view class="padding-top">
        <view class="firstImg">
          <view class="flex align-end padding-left-sm padding-top">
            <view class="cuIcon-titles text-white" style="font-size: 40rpx"></view>
            <view class="text-xl text-white">开通功能</view>
          </view>
          <view class="padding-left-sm" style="margin-top: 25rpx">
            <view class="flex basic-xs">
              <view class="bg-white flex justify-center align-center" style="width: 142rpx;height: 142rpx;border-radius: 50%;margin-left: 10rpx">
                <image :src="imgUrl" style="width: 47px;height: 44px;"></image>
              </view>
              <view class="text-white margin-left">
                <view class="text-xl margin-top-xs">云库存</view>
                <view class="margin-top">
                  <text class="text-price" style="font-size: 45rpx"></text>
                  <text class="text-xl">36.00</text>
                  <text style="font-size: 40rpx">/</text>
                  <text class="text-xl">月</text>
                </view>
              </view>
            </view>
          </view>
          <view class="padding-left margin-top-sm" style="padding-right: 115rpx">
            <text style="color: #FFF0D5;font-size: 26rpx">这是云库存功能1的介绍说明，这是云库存功能1的介绍说明</text>
          </view>
        </view>
      </view>
  </view>
  <view class="margin-top margin-lr padding" style="background-color: #FF8321">
    <view class="flex align-end">
      <view class="cuIcon-titles text-white" style="font-size: 40rpx"></view>
      <view class="text-xl text-white">选择套餐</view>
    </view>
    <view class="bg-white fillet margin-top" style="position: relative">
      <view class="circle" style="left: -22rpx;top: 176rpx"></view>
      <view class="circle" style="right: -22rpx;top: 176rpx"></view>
      <view class="circle" style="left: -22rpx;bottom: 160rpx"></view>
      <view class="circle" style="right: -22rpx;bottom: 160rpx"></view>
      <view class="bg-white fillet">
        <view class="padding-tb-sm">
          <view class="margin-lr flex" @touchstart="buy(num)" :class="num == true?'afterClicking':'beforeClicking'" style="position: relative">
            <view class="flex align-center" style="position: relative">
              <view class="fillet basic-xs padding-sm" style="background-image: linear-gradient(to bottom,#FFE5C5,#FFA51A);">
                <image :src="imgUrl1" style="width: 86rpx;height: 86rpx;"></image>
              </view>
              <view class="padding-left">
                <view class="text-bold text-lg">免费试用</view>
                <view class="margin-top-sm text-gray">前期免费试用三个月</view>
              </view>
            </view>
            <view class="userPreferences padding-lr-xs">
              <text class="text-white text-xs">新用户特惠</text>
            </view>
          </view>
        </view>
      </view>
      <view class="padding-lr">
        <image src="./dottedLine.png" style="width: 100%;height: 5rpx;"></image>
      </view>
      <view class="bg-white fillet">
        <view class="padding-tb-sm" style="position: relative">
          <view class="margin-lr flex" @touchstart="buys(nums)" :class="nums == true?'afterClicking':'beforeClicking'">
            <view class="flex align-center">
              <view class="fillet basic-xs padding-sm" style="background-image: linear-gradient(to bottom,#FC5058,#FDB68C);">
                <image :src="imgUrl1" style="width: 86rpx;height: 86rpx;"></image>
              </view>
              <view class="padding-left">
                <view class="text-bold text-lg">半年套餐</view>
                <view class="margin-top-sm text-gray">优惠后台¥28.00/月</view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="padding-lr">
        <image src="./dottedLine.png" style="width: 100%;height: 5rpx;"></image>
      </view>
      <view class="bg-white fillet">
        <view class="padding-tb-sm">
          <view class="margin-lr flex" @touchstart="buyx(numx)" :class="numx == true?'afterClicking':'beforeClicking'">
            <view class="flex align-center" style="position: relative">
              <view class="fillet basic-xs padding-sm" style="background-image: linear-gradient(to bottom,#FF610B,#FDCB84);">
                <image :src="imgUrl1" style="width: 86rpx;height: 86rpx;"></image>
              </view>
              <view class="padding-left">
                <view class="text-bold text-lg">年套餐</view>
                <view class="margin-top-sm text-gray">优惠后台¥28.00/月</view>
              </view>
            </view>
          </view>
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
    <view class="margin-right" @click="toOpen">
      <button class="cu-btn bg-red radius lg" style="width: 192rpx;height: 72rpx">确认</button>
    </view>
  </view>
</view>
</template>
<!--#FFB880-->
<script>
export default {
  name: "wqy3",
  data(){
    return {
      num:false,
      numx:false,
      nums:false,
      imgUrl:require('/src/pages/admin/versionManagement/x1.png'),
      imgUrl1:require('/src/pages/admin/versionManagement/mian.png'),
    }
  },
  methods:{
    buy(num){
      this.num = !num;
      this.numx = false;
      this.nums = false;
      // console.log('num');
    },
    buys(nums){
      this.nums = !nums;
      this.numx = false;
      this.num = false;
      // console.log('num');
    },
    buyx(numx){
      this.numx = !numx;
      this.num = false;
      this.nums = false;
      // console.log('num');
    },
    edition() {
      // console.log(e);
      // return;
      // '/pages/admin/afterSales/afterSalesDetails?status=1?&listStatus=1')"
      uni.navigateTo({
        url: "pages/admin/orderAdmin/afterSales"
      });
    },
    toOpen(){
      uni.navigateTo({
        url:"/pages/admin/versionManagement/paymentService"
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.firstImg{
  background: url("x.png");
  width: 100%;
  height: 190px;
  background-size: 100% 100%;
}
.fillet{
  border-radius:18rpx;
  position: relative;
}
.userPreferences{
  background-color: #E54D42;
  position: absolute;
  right: 0;
  top: 0;
  border-radius:0 18rpx 0 20rpx;
}
.circle{
  width: 40rpx;
  height: 40rpx;
  border-radius:50rpx;
  background-color: #FF8321;
  position: absolute;
  z-index: 1;
}
.botBtn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
.beforeClicking{
  border: 1rpx solid #E9E9E9;
  border-radius:20rpx;
}
.afterClicking{
  border: 1rpx solid #E54D42;
  border-radius:20rpx;
}
</style>