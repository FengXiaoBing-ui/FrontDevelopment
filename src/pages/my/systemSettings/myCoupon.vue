<template>
  <view class="content bg-gray">
    <!--顶部标题-->
    <u-navbar :border="false" :fixed="true" :autoBack="true"
              :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
              :safeAreaInsetTop="false">
      <view slot="left" class="u-nav-slot margin-top">
        <text style="font-size: 36rpx" class="cuIcon-back"></text>
      </view>
      <view slot="center" class="u-nav-slot margin-top">
        <view class="text-lg">我的优惠劵</view>
        <view style="width:750rpx" class="search bg-white ">
          <view class="bg-white padding-lr">
            <!--产品列表导航-->
            <u-tabs class="w100" :current="statusIndex" :scrollable="false" itemStyle="height:88rpx" activeStyle="font-size:38rpx"
                    inactiveStyle="color:gray" lineColor="red" :list="activityList"
                    @click="tabSelect"></u-tabs>
          </view>
        </view>
      </view>
    </u-navbar>
    <!--头部-->
    <view class="wrap">
      <view class="padding-lr-sm margin-top-sm contentBox" v-for="(item,index) in productList" :key="index">
        <!--商品列表-->
        <view class="flex flex-wrap justify-between">
          <view style="width: 100%" class="whiteBoxShadow ">
            <view class="m">
              <view class="flex justify-between">
                <view class="">
                  <view class="text-orange ">￥<text class="text-lg" style="font-size: 36px">{{ item.num }}</text></view>
                  <view class="margin-top-sm" style="white-space: nowrap">{{ item.money }}</view>
                </view>
                <view class="">
                  <view class="text-black">{{ item.coupon }}</view>
                  <view class="margin-top-sm text-gray">{{ item.time }}</view>
                  <view class="text-orange margin-top-sm" @click="box(x,index)">{{ item.detail }}<text class="cuIcon-unfold"></text></view>
                </view>
                <view class="">
                  <button v-if="index==0" class="cu-btn round line-red margin-left-sm margin-top  text-sm  text-center" style="width: 85%;white-space: nowrap">{{ activityList[item.status].name }}</button>
                  <view>
                    <image v-if="index==1"  src="/static/integralCommutation/yishiyong.png"  style="width: 80px;height: 60px"></image>
                    <image  v-if="index==2" src="/static/integralCommutation/yiguoqi.png" style="width: 80px;height: 60px"></image>
                  </view>
                </view>
              </view>
              <view v-if="flag==index"  class="margin-top-sm border-top  padding-tb-xs">
                <view class="text-black text-lg">使用规则:</view>
                <view class="margin-top-sm">1、本卷不得兑换现金、不找零;</view>
                <view class="margin-top-sm">2、本卷仅用于线上好酒选品鉴会活动报名使用;</view>
                <view class="margin-top-sm">3、本卷每次只可使用一张、不可叠加使用;</view>
                <view class="margin-top-sm">4、本卷使用规则最终解释权归好酒选渠道服务器所有;</view>
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
  name: "myCoupon",
  components: {
  },
  data() {
    return {
      flag:100,
     x:false,
      show:false,
      status:0,
      selectShow: false,
      statusIndex: 0,
      screenResult: "",
      activityList: [
        {
          name: "未使用"
        },
        {
          name: "已使用"
        },
        {
          name: "已过期"
        },
      ],
      productList: []
    };
  },
  onLoad(option) {
    this.status = option.status
  },
  onShow() {
    this.getProductList();
  },
  methods: {
  //   box(x){
  // this.x=!x
  //   },
    box(x,index){
      if(this.flag!==index){
        this.flag=index;
      }else {
        this.flag=-1
      }
    },

    gotoPath(path){
      uni.navigateTo({
        url:path
      })
    },
    getProductList(count = 3) {
      this.productList = [];
      for (let i = 0; i < count; i++) {
        this.productList.push({
          num: "50",
          money: "报名费50元",
          coupon: "好酒选线下品鉴会优惠劵",
          time: "2022-08.30-2022-09.15",
          detail: "展开详情",
          status: this.statusIndex
        });
      }
    },
    dateChange(d) {
      uni.showToast({
        icon: "none",
        title: d
      });
    },
    tabSelect(e) {
      this.statusIndex = e.index;
      this.getProductList(Math.ceil(Math.random() * 3));
    },
    selectClick(e) {
      console.log(e.name);
    },
  }
};
</script>

<style lang="scss" scoped>
.botBtn{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
.textBorderLeft{
  width:8rpx;
  height: 30rpx;
  background: #E54D42;
  border-radius: 8rpx;
  transform: translateX(-26rpx);
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
/deep/.uni-image{
  width: 120px;
  height: 100px;
}

.contentBox {
  position: relative;
  top: calc(var(--status-bar-height) + 180rpx);
  padding-bottom: 10rpx;
}

.header {
  position: fixed;
  left: 0;
  z-index: 1;
}

.boxShadow {
  padding: 30rpx 20rpx;
  background: white;
  border-radius: 10rpx;
  box-shadow: 4rpx 4rpx 16rpx #e6dee6;
}
</style>
