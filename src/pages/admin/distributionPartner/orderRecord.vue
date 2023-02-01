<template>
  <view>
    <u-navbar :border="false" :fixed="true" :autoBack="true"
              :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
              :safeAreaInsetTop="false">
      <view slot="left" class="u-nav-slot">
        <text style="font-size: 36rpx" class="cuIcon-back"></text>
      </view>
      <view slot="center" class="u-nav-slot">
        <view class="text-lg">订单记录</view>
        <view style="width:750rpx" class="search bg-white">
          <view class="bg-white padding-lr">
            <view class="flex align-center margin-tb-sm bg-gray" style="border-radius: 4px">
              <text class="cuIcon-search text-gray"
                    style="font-size: 20px; padding: 4px; margin-left: 4px"></text>
              <input
                  class="text-df"
                  type="text"
                  placeholder-class="text-gray"
                  placeholder="输入代理商名称、手机号进行搜索"
                  style="min-width: 78%;"
                  confirm-type="search"
              />
            </view>
          </view>
        </view>
      </view>
    </u-navbar>
    <view :style="`margin-top:${(CustomBar)+50}px`" class="margin">
      <view class=" flex align-center text-bold  text-lg">2022年9月 <view class="cuIcon-unfold margin-left-xs" style="font-size: 23px"></view></view>
      <view class="product margin-top-sm">
        <view class="flex flex-wrap justify-between">
          <view @click="jumpDetails(item.status)" v-for="(item,index) in orderList" :key="index" class="whiteBoxShadow w100 margin-bottom-sm">
            <view class="flex justify-between">
              <view class=" flex align-center">
                <view class="textBorderLeft"></view>
                <view style="transform: translateX(-10rpx)">补货订单：213234233543<text class="cuIcon-copy margin-left-xs"></text></view>
              </view>
              <!--                            <button class="cu-btn round line-green sm">已完成</button>-->
              <view class="text-green">已完成</view>
            </view>
            <view class="u-border-bottom margin-tb"></view>
            <view class="flex align-center">
              <fxbImg class="flex-sub" src="/productDetails/Slice%204.png" width="140" height="140"></fxbImg>
              <view class="flex-treble">
                <view class="flex justify-between align-center">
                  <view class="text-gray">东方国宾53°瓶装500ml</view>
                  <view>￥300.00</view>
                </view>
                <view class="flex justify-between margin-top-sm align-center">
                  <view class="text-gray">数量：20</view>
                  <view class="text-red">￥6000.00</view>
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
import fxbImg from "/src/components/fxb/fxb-image"
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
  name: "orderRecord",
  components:{
    fxbImg,
    boxTitle
  },
  data() {
    return {
      orderList: [
        {
          orderId: "156468545222",
          sendNumber: 2,
          surplusNumber: 2000,//剩余
          price:275.00,//合计金额
          operator: "张东",//操作人
          consignee:'王刚    18690536868',//收货人
          consigneePhone:'贵州省贵阳市观山湖长岭南路区德福中心A3栋6楼10号',
          time: "2022-08-31 12:12:56"
        },
        {
          orderId: "156468545222",
          sendNumber: 2,
          surplusNumber: 2000,//剩余
          price: 275.00,//合计金额
          operator: "张东",//操作人
          consignee:'王刚    18690536868',//收货人
          consigneePhone:'贵州省贵阳市观山湖长岭南路区德福中心A3栋6楼10号',
          time: "2022-08-31 12:12:56"
        },
        {
          orderId: "156468545222",
          sendNumber: 2,
          surplusNumber: 2000,//剩余
          price: 275.00,//合计金额
          operator: "张东",//操作人
          consignee:'王刚    18690536868',//收货人
          consigneePhone:'贵州省贵阳市观山湖长岭南路区德福中心A3栋6楼10号',
          time: "2022-08-31 12:12:56"
        },
        {
          orderId: "156468545222",
          sendNumber: 2,
          surplusNumber: 2000,//剩余
          price: 275.00,//合计金额
          operator: "张东",//操作人
          consignee:'王刚    18690536868',//收货人
          consigneePhone:'贵州省贵阳市观山湖长岭南路区德福中心A3栋6楼10号',
          time: "2022-08-31 12:12:56"
        },
      ]
    };
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
//.textBorderLeft{
//    width:8rpx;
//    height: 30rpx;
//    background: #E54D42;
//    border-radius: 8rpx;
//    transform: translateX(-26rpx);
//}
.userphone {
  padding: 10rpx;
  border-radius: 20rpx 0 20rpx 0;
  margin-left: 12rpx;
}

.rightTag {
  padding: 4rpx 16rpx;
  border-radius: 20rpx 0 0 0;
  transform: translateX(20rpx);
}
.contentBox {
  position: relative;
  top: calc(var(--status-bar-height) + 320rpx);
  padding-bottom: 40rpx;
}
.search {
  position: fixed;
  width: 100%;
  top: var(--CustomBar-1) !important;
  left: 0;
}
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