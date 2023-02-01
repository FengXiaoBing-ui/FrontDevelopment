<template>
  <view>
    <u-navbar :autoBack="true"
              :fixed="true"
              rightText="积分规则"
              :border="false"
              :safeAreaInsetTop="false"
              :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px'}"
              title="我的积分"
              @rightClick="rightClick"></u-navbar>
    <view :style="'margin-top:'+CustomBar+'px'">
      <view></view>
      <view class="flex top justify-between  padding ">
        <view class="flex ">
          <image src="/static/integralCommutation/aoteiman.png" style="width: 60px;height: 60px"></image>
          <view class="margin-left">
            <view style="font-size: 25px;font-weight: 700;color: white">1266000</view>
            <view class="margin-top" style="font-size: 12px;color: white">您的积分已超越68%的用户</view>
          </view>
        </view>
        <view>
          <view class="flex   try">
            <view class="hp  text-white cuIcon-form margin-left-xs" style="color: white;font-size: 18px"></view>
            <view class="margin-left-xs margin-top-xs text-white" style="color: white;font-size: 16px" @click="Agent">明细</view>
          </view>
        </view>
      </view>
      <view class="classify">
        <view class="flex justify-around whiteBoxShadow margin-lr-sm margin-top-lg">
          <view style="text-align: center">
            <view>
              <image src="/static/integralCommutation/icon_4.png" style="width: 40px;height: 40px"></image>
            </view>
            <view>积分抽奖</view>
          </view>
          <view style="text-align: center">
            <view>
              <image src="/static/integralCommutation/choujiang.png" style="width: 40px;height: 40px"></image>
            </view>
            <view>积分兑换</view>
          </view>
          <view style="text-align: center">
            <view>
              <image src="/static/integralCommutation/duihuan.png" style="width: 40px;height: 40px"></image>
            </view>
            <view>积分福利</view>
          </view>
          <view style="text-align: center">
            <view>
              <image src="/static/integralCommutation/fuli.png"
                     style="width: 40px;height: 40px"></image>
            </view>
            <view>积分商场</view>
          </view>
        </view>
        <view class="whiteBoxShadow margin-lr-sm margin-top-lg">
          <view class="flex">
            <view class="xiaotubiao"></view>
            <view class="margin-left-sm"
                  style="color: black;font-weight: 700;font-size: 18px">积分领取
            </view>
          </view>
          <view v-for="(item,index) in list"
                :key="index"
                class="flex justify-between list"
                style="border-bottom: 1px #E6E6E6 solid;margin-top: 25px;align-items: center">
            <view>
              <view style="color: black;font-weight: 600">{{ item.title }}</view>
              <view class="flex margin-tb-sm">
                <view class="lg text-gray cuIcon-coin"
                      style="color: #FF6601;font-size: 18px"></view>
                <view class="margin-left-sm" style="color: #A1A1A1">{{ item.jifen }}</view>
              </view>
            </view>
            <view class="hetong">{{ item.hetong }}</view>
          </view>
        </view>
        <view class="padding bg-white margin-sm radius margin-top-sm">
          <view class="flex justify-between" style="align-items: center">
            <view class="flex">
              <view class="xiaotubiao"></view>
              <view class="margin-left-sm"
                    style="color: black;font-weight: 700;font-size: 18px">积分兑换
              </view>
            </view>
            <view class="flex align-center" style="color: #A1A1A1;">
              <view>更多兑换</view>
              <view class="lg text-gray cuIcon-right" style="font-size: 10px"></view>
            </view>
          </view>
          <view class="u-borde flex flex-wrap justify-between align-center" style="gap: 10px">
            <view v-for="(item,index) in jifen" :key="index" class="margin-tb-sm" style="width: calc(50% - 5px)">
              <view class="text-center box-shadow">
                <fxbImage width="320" height="320" src="/productDetails/Slice%201.png" mode="aspectFill"></fxbImage>
                <view class="padding-sm text-left">
                  <view class="text-bold">{{ item.title }}</view>
                  <view class="flex margin-top justify-between">
                    <view class="text-red">￥<strong style="font-size: 15px">50</strong>.00</view>
                    <view class="flex justify-between ">
                      <view class="lg text-gray cuIcon-coin"
                            style="color: #FF6601;font-size: 18px"></view>
                      <view class=" text-cut">200积分</view>
                    </view>
                  </view>
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
import fxbImage from "/src/components/fxb/fxb-image";

export default {
  components: {
    fxbImage
  },
  data() {
    return {
      list: [
        {
          title: "合同发货赚积分",
          jifen: "200积分",
          hetong: "合同发货"
        }, {
          title: "合同发货赚积分",
          jifen: "200积分",
          hetong: "合同发货"
        }, {
          title: "合同发货赚积分",
          jifen: "200积分",
          hetong: "合同发货"
        }
      ],
      jifen: [
        {
          title: "50元话费充值卡"
        },
        {
          title: "50元话费充值卡"
        },
        {
          title: "50元话费充值卡"
        },
        {
          title: "50元话费充值卡"
        }
      ]
    };
  },
  methods: {
    //跳转会员入驻协议
    Agent() {
      uni.navigateTo({
        url: "pages/admin/integralForPerson/integralInfo"
      });
    },
    rightClick() {
      uni.navigateTo({
        url: "pages/admin/integralForPerson/integralRule"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.hetong {
  width: 75px;
  height: 25px;
  background-color: darkorange;
  color: white;
  border-radius: 5px;
  text-align: center;
  line-height: 25px;
}
.hp{
  margin-top: 6px;
}
.top {
  background-image: url('http://124.220.219.72:8084/static/img/index/pic_bg.png');
  background-repeat: no-repeat;
  background-size: 750rpx 380rpx;
  height: 470rpx;
  overflow: hidden;
  width: 100%;
}
.classify{
  position: relative;
  top: -260rpx;
  height: 210rpx;
}
.try{
  width: 66px;
  height: 28px;
  background: rgba(255,255,255,0.2);
  border-radius: 20px 20px 20px 20px;
  opacity: 1;

}
.top-right {
  color: white;
  background-color: #C7C7C7;
  width: 70px;
  height: 25px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}

/deep/ .u-navbar {
  .u-navbar__content {
    background-image: url('http://124.220.219.72:8084/static/img/index/pic_bg.png');
    background-repeat: no-repeat;
    background-size: 750rpx 560rpx;
    background-position: 0 0;
    height: var(--CustomBar) !important;
    //padding-top: var(--StatusBar);
    border-bottom: 0;
    .u-navbar__content__title,
    .u-navbar__content__left,
    .u-navbar__content__right {
      margin-top: var(--StatusBar);
      color: white;
      font-size: 20px;
    }

  }
}

.box-shadow {
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
}

.xiaotubiao {
  width: 5px;
  height: 20px;
  background-color: red;
  border-radius: 5px;
}

.list:nth-last-child(1) {
  border: none !important;
}
</style>
