<template>
  <view class="content">
    <!--顶部标题-->
    <u-navbar :border="false" :fixed="true" :autoBack="true" rightText="新增伙伴" @rightClick="rightClick"
              :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
              :safeAreaInsetTop="false">
      <view slot="left" class="u-nav-slot">
        <text style="font-size: 36rpx" class="cuIcon-back"></text>
      </view>
      <view slot="center" class="u-nav-slot">
        <view class="text-lg">我的分销伙伴</view>
        <view style="width:750rpx" class="search bg-white">
          <view class="bg-white padding-lr-sm">
            <view class="flex align-center margin-top bg-gray" style="border-radius: 4px">
              <text class="cuIcon-search text-gray "
                    style="font-size: 20px;  margin-left: 4px"></text>
              <input
                  class="text-df margin-left padding-tb"
                  type="text"
                  placeholder-class="text-gray"
                  placeholder="输入代理商名称、手机号进行搜索"
                  style="min-width: 78%;"
                  confirm-type="search"
              />
            </view>
            <view class="margin-top ">
              <boxTitle title="销售统计"></boxTitle>
              <!--                          <view style="width: 106%;right: 10px;height: 99px;background-image: url('/static/integralCommutation/hezuohuoban.png')" class="dingwei">-->
              <!--                            <view class="flex justify-between hp  ">-->
              <!--                              <view class="text-center border-right padding-right margin-top">-->
              <!--                                <view class="text-white text-lg">3200瓶</view>-->
              <!--                                <view class="text-white margin-top-sm margin-left">本月成交总量</view>-->

              <!--                              </view>-->
              <!--                              <view class="text-center   border-right padding-right margin-top">-->
              <!--                                <view class="text-white text-lg">3200瓶</view>-->
              <!--                                <view class="text-white margin-top-sm">本月成交总额</view>-->
              <!--                              </view>-->
              <!--                              <view class="text-center margin-right margin-top">-->
              <!--                                <view class="text-white text-lg">3200瓶</view>-->
              <!--                                <view class="text-white margin-top-sm">本月新增代理</view>-->
              <!--                              </view>-->
              <!--                            </view>-->

              <view class="try" >
                <view class="flex justify-between">
                  <view class="text-center margin-top   padding-lr">
                    <view class="text-white text-lg margin-top-xs">3200瓶</view>
                    <view class="margin-top-sm text-white" style="white-space: nowrap">本月成交总量</view>
                  </view>
                  <view style="width: 1rpx;height: 27px;margin-left: 10px;margin-top: 30px" class="bg-gray margin-lr-xs margin-left"></view>
                  <view class="text-center margin-top   padding-lr">
                    <view class="text-white text-lg margin-top-xs">3.8万元</view>
                    <view class="margin-top-sm text-white"  style="white-space: nowrap">本月成交总量</view>
                  </view>
                  <view style="width: 1rpx;height: 27px;margin-top: 30px" class="bg-gray margin-right "></view>
                  <view class="text-center margin-top margin-right ">
                    <view class="text-white text-lg margin-top-xs">34人</view>
                    <view class="margin-top-sm text-white"  style="white-space: nowrap">本月新增代理</view>
                  </view>
                </view>
                <view>
                </view>
              </view>
            </view>

          </view>
        </view>
      </view>

    </u-navbar>
    <!--内容-->
    <view class="wrap" style="margin-top:100px">
      <view class="padding-lr contentBox ">
        <view class="w100 flex justify-between align-start" style="transform: translateY(-49px)">
          <view class="">2022年9月<text class="cuIcon-unfold  margin-left-xs" style="font-size: 16px"></text>
          </view>
          <view>
            <text class="cuIcon-filter"></text>
            筛选 · 已选 0
          </view>
        </view>
      </view>
    </view>


    <view class="wrap" style="transform: translateY(-50px)">
      <view class="padding-lr contentBox">

        <!--商品列表-->

        <view class="product">
          <view class="whiteBoxShadow flex flex-wrap justify-between margin-bottom-sm" v-for="item in 3">
            <!--                        <view class="w100 flex justify-between align-center padding-bottom">-->
            <!--                            <view>2022年9月 <text class="cuIcon-unfold margin-left-xs"></text> </view>-->
            <!--                            <view> <text class="cuIcon-filter"></text> 筛选 · 已选 0</view>-->
            <!--                        </view>-->
            <view class="w100 dotted"  @click="orderInfo">
              <view class="flex align-center justify-between">
                <view class="flex align-center justify-between">
                  <image src="/static/integralCommutation/friend.png" style="width: 12px;height: 13px"  mode="aspectFill"></image>
                  <text class="username margin-left-xs text-lg text-bold">王晓刚</text>
                  <view class="userphone text-gray ">
                    <image src="/static/integralCommutation/mobilefill.png" style="width: 7px;height: 11.73px;margin-top:8rpx"  mode="aspectFill"></image>
                    <text class="margin-left-xs text-gray">18690728686</text>
                  </view>
                </view>
              </view>
              <view style="width: 100%;border: 1px dashed #E9E9E9" class="margin-tb-sm"></view>
              <view class="flex justify-between margin-tb-sm text-gray">
                <view>上月成交量：<text class="text-orange">2536瓶</text></view>
                <view>上月成交额：<text class="text-red">234233.00</text></view>
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
  name: "distributionPartner",
  components:{
    boxTitle
  },
  data() {
    return {
      friendList: [
        {
          name: "王晓刚",
          phone: "18242456563",
          addTime: "2022-01-25",
          lastPrice:'81578',
          lastNumber:'7448',
          rate:'3',
          backPrice:'418578'
        },
        {
          name: "王晓刚",
          phone: "18242456564",
          addTime: "2022-01-25",
          lastPrice:'85877',
          lastNumber:'7848',
          rate:'3',
          backPrice:'418578'
        },
        {
          name: "王晓刚",
          phone: "18242456514",
          addTime: "2022-01-25",
          lastPrice:'88787',
          lastNumber:'7488',
          rate:'3',
          backPrice:'418578'
        },
        {
          name: "王晓刚",
          phone: "1824245334",
          addTime: "2022-01-25",
          lastPrice:'85187',
          lastNumber:'74848',
          rate:'3',
          backPrice:'418578'
        },

      ]
    };
  },
  methods: {
    orderInfo(){
      uni.navigateTo({
        url:'pages/admin/distributionPartner/partnerDetails'
      })

    },
    rightClick(){
      uni.showToast({
        title:'功能暂未开通'
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.userphone {
  padding: 10rpx;
  border-radius: 20rpx 0 20rpx 0;
  margin-left: 16rpx;

}
.try {
  width: 715rpx;
  height: 180rpx;
  background: linear-gradient(360deg, #F37B1D 0%, #FFD581 100%);
  box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.16);
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
}

.rightTag {
  padding: 4rpx 16rpx;
  border-radius: 20rpx 0 0 0;
  transform: translateX(20rpx);
}
.contentBox {
  position: relative;
  top: calc(var(--status-bar-height) + 360rpx);
  padding-bottom: 40rpx;
}
.search {
  position: fixed;
  width: 100%;
  top: var(--CustomBar-1) !important;
  left: 0;
}
//.hp{
//  background-repeat: no-repeat;
//  background-size: 750rpx 380rpx;
//  height: 70rpx;
//  overflow: hidden;
//  width: 100%;
//}
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
</style>