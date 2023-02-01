<template>
  <view class="content">
    <u-navbar leftIconColor="white" :autoBack="true">
    </u-navbar>
    <view class="picture1"></view>
    <view :style="'margin-top:' + (CustomBar - 20) + 'rpx'" class="padding-bottom">
      <view class="margin-lr-sm padding-tb modular">
        <view class="bgModular text-bold">优惠活动享不停</view>
        <view style="margin-top: 90rpx">
          <view v-for="item in 4">
            <view class="flex justify-between align-center margin-lr-sm margin-top-xl">
              <view class="bg-white" style="border-radius: 20rpx">
                <view class="margin" style="width: 266rpx;height: 328rpx">
                  <view class="flex justify-center">
                    <view class="bg-red" style="width: 250rpx;height: 44rpx;border-radius: 50rpx;text-align: center">东方国宾·尊致酒</view>
                  </view>
                  <view class="margin-top text-center">
                    <image src="./alcohol.png" style="width: 243rpx;height: 243rpx"></image>
                  </view>
                </view>
              </view>
              <view class="bg-white" style="border-radius: 20rpx">
                <view class="margin" style="width: 266rpx;height: 328rpx">
                  <view class="flex justify-center">
                    <view class="bg-red" style="width: 250rpx;height: 44rpx;border-radius: 50rpx;text-align: center">东方国宾·尊致酒</view>
                  </view>
                  <view class="margin-top text-center">
                    <image src="./alcohol.png" style="width: 243rpx;height: 243rpx"></image>
                  </view>
                </view>
              </view>
            </view>
            <view class="flex justify-between margin-lr-sm align-center">
              <view class="margin-top-sm boxBuy">
                <view class="flex justify-center">
                  <view class="margin-top-sm tinting" @click="goTo">立即购买</view>
                </view>
                <view>
                  <image src="./picture6.png" class="boxPicture"></image>
                </view>
              </view>
              <view class="margin-top-sm boxBuy">
                <view class="flex justify-center">
                  <view class="margin-top-sm tinting" @click="goTo">立即购买</view>
                </view>
                <view>
                  <image src="./picture6.png" class="boxPicture"></image>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import fxbBrandList from "/src/pages/brandZone/components/fxb-brand-list";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import qiunDataCharts from "/src/components/qiun-data-charts/qiun-data-charts";
export default {
  name: "hotEvents",
  components: {
    boxTitle,
    fxbBrandList,
    qiunDataCharts
  },
  data() {
    return {
    };
  },
  methods: {
    goTo(){
      uni.navigateTo({
        url:"/pages/hotActivity/hotDetails"
      })
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/.u-navbar{
  .u-navbar__content{
    background-color: rgba(255,255,255,0)!important;
  }
}
.picture1{
  background-image: url("./picture4.png");
  background-repeat: no-repeat;
  background-position: -6px 0px;
  width: 100%;
  height: 750rpx;
  background-size: 104% 100%;
}
.content{
  background: #C11F12;
  position: relative;
}
.tinting{
  width: 140rpx;
  height: 40rpx;
  background-image: linear-gradient(180deg, #FFB22D, #FF6F00);
  border-radius: 30rpx;
  color: #FBFBFB;
  border: 1px solid #FFFC39;
  text-align: center;
  line-height: 40rpx;
  position: absolute;
  right: 34rpx;
  bottom: 18rpx;
}
.modular{
  background: #E94E3C;
  border: 1px solid #FF7F70;
  border-radius: 20rpx;
  position: relative;
  margin-top: 50rpx;
}
.boxBuy{
  width: 324rpx;
  height: 180rpx;
  background-image: linear-gradient(#FD8F78,#FF3C36);
  border-radius: 20rpx;
  position: relative;
}
.boxPicture{
  width: 340rpx;
  height: 150rpx;
  position: absolute;
  left: -4rpx;
  top: -15rpx;
}
.bgModular{
  background-image: url("./picture5.png");
  text-align: center;
  line-height: 82rpx;
  color: #FBFBFB;
  font-size: 40rpx;
  width: 578rpx;
  height: 80rpx;
  background-size: 100% 125%;
  position: absolute;
  left: 70rpx;
  top: -12rpx;
}
</style>
