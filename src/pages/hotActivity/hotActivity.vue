<template>
    <view class="content">
        <u-navbar
            title="品鉴会"
            :autoBack="true"
        >
        </u-navbar>
        <view class="padding-lr-sm padding-tb-xs" :style="'margin-top:' + CustomBar +'px'">
          <view class="bg-white padding-lr-sm padding-tb margin-top-sm"
                v-for="item in 3"
                @click="goTo()"
                style="border: 1px solid rgba(229,77,66,0.2)">
            <view class="flex align-center">
              <fxbImage width="130" height="130" class="basis-xs radius"
                        src="/productDetails/Slice 1.png"></fxbImage>
              <view class="basis-lg margin-left-sm">
                <view class="flex align-center">
                  <view style="width: 400rpx" class="text-lg text-bold text-cut">东方国宾·尊致酒品鉴会</view>
                  <view class="text-center bg-blue" style="border-radius: 15rpx 15rpx 15rpx 0;width: 100rpx;height: 44rpx">进行中</view>
                </view>
                <view class="text-gray margin-tb-xs">开始时间：2022-09-30 15:30~19:30</view>
                <view class="flex align-center text-sm">
                  <text style="padding: 0 2px;border-color: orange !important;"
                        class="bg-orange u-border light radius margin-right-xs">贵州省贵阳市观山湖区
                  </text>
                </view>
              </view>
            </view>
            <view class="bg-gray light radius padding-sm padding-tb flex flex-wrap margin-top text-sm">
              <view class="flex align-center w50 text-gray text-cut">
                <text class="cuIcon-goods"></text>
                <text class="margin-left-xs">报名金额:</text>
                <text class="text-black text-red margin-left-xs">¥389.00</text>
              </view>
              <view class="flex align-center w50 text-gray text-cut">
                <text class="cuIcon-recharge"></text>
                <text class="margin-left-xs">优惠金额:</text>
                <text class="text-black margin-left-xs">¥50.00元</text>
              </view>
              <view class="flex align-center w50 text-gray margin-top text-cut">
                <text class="cuIcon-sponsor"></text>
                <text class="margin-left-xs">当前报名:</text>
                <text class="text-black margin-left-xs">120人</text>
              </view>
              <view class="flex align-center w50 text-gray margin-top text-cut">
                <text class="cuIcon-peoplelist"></text>
                <text class="margin-left-xs">剩余名额:</text>
                <text class="text-black margin-left-xs">100人</text>
              </view>
            </view>
          </view>
        </view>
    </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image";
import fxbDrop from "/src/components/fxb/fxb-drop-down-box"
export default {
    name: "hotActivity",
    components:{
        fxbDrop,
      fxbImage
    },
    data() {
        return {

        };
    },

    methods: {
      goTo(){
        uni.navigateTo({
          url: "pages/hotActivity/appraiseDetails"
        });
      }
    }
};
</script>

<style lang="scss" scoped>

</style>