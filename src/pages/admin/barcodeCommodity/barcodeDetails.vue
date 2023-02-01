<template>
  <view class="content" style="padding-bottom: 100rpx">
    <view :class="isNav?'':'bg-white'" :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
          class="headerNav"></view>
    <fxbUNavbar :isNav="isNav" :transparency="transparency.toString()" @changeTab="changeTab"></fxbUNavbar>
    <view class="u-demo-block">
      <swiper indicator-dots indicator-color="rgba(207,207,207,1)" indicator-active-color="rgba(255,255,255,1)"
              style="height: 750rpx" class="swiper-box" @change="change">
        <!--                TODO:假数据-->
        <swiper-item style="height: 750rpx" v-for="(item ,index) in imgList" :key="index">
          <view class="swiper-item">
            <fxbImage v-if="item" width="750" height="750" :src="item.imgUrl"></fxbImage>
            <view v-if="index==0" @click="gotoVideo" class="videoMask">
              <u-icon class="uIcon" color="#FFFFFF" name="play-circle" size="100"></u-icon>
            </view>
          </view>
        </swiper-item>
      </swiper>
    </view>

    <view class="bg-white margin-top-sm padding-sm">
      <view class="flex justify-between align-center">
        <view class="text-lg text-bold">东方国宾·工匠酒招商项目</view>
        <view :class="status==1?'text-blue':'text-green'">{{status==1?'销售中':'已售罄'}}</view>
      </view>
      <view class="margin-top align-center flex">
        <text>交易类型：</text>
        <text class="cu-tag bg-red light">平台托管</text>
        <text class="cu-tag bg-red light margin-left">收益率:16.5%~22.5%</text>
      </view>
      <view class="margin-top">
        <view class="flex justify-between align-center">
          <view style="background-color: rgba(229,77,66,0.05);width: 332rpx" class="padding-sm">
            <view>商品总量</view>
            <view class="text-xl text-red margin-top-sm text-bold">29500瓶</view>
          </view>
          <view style="background-color: rgba(229,77,66,0.05);width: 332rpx" class="padding-sm">
            <view>预计收益</view>
            <view class="text-xl text-red margin-top-sm text-bold">¥6000000.00</view>
          </view>
        </view>
      </view>

      <view class="margin-top">
        <view class="text-lg margin-bottom-sm">当前销售</view>

        <view class="flex align-center">
          <fxbSlider :progress="progress"></fxbSlider>
        </view>

        <view class="flex justify-between align-center margin-top">
          <view class="flex align-center text-sm">
            <view class="cuIcon-goodsfavor"></view>
            <view class="margin-lr-xs">当前成交量：</view>
            <view class="text-orange">12000瓶</view>
          </view>
          <view class="flex align-center text-sm">
            <view class="cuIcon-recharge"></view>
            <view class="margin-lr-xs">当前成交额：</view>
            <view class="text-red">¥2500000.00</view>
          </view>
        </view>
      </view>
    </view>

    <view class="bg-white margin-top-sm">
      <u-tabs :list="list1"
              activeStyle="font-size:32rpx;font-weight:bold"
              inactiveStyle="font-size:30rpx" lineColor="red" lineWidth="35"></u-tabs>
    </view>

    <view class="bg-white margin-top-sm padding-lr-sm padding-tb">
      <boxTitle title="我的收益"></boxTitle>
      <view class="margin-top-sm flex justify-between align-center">
        <view class="text-lg">东方国宾·尊致酒条码合作协议</view>
        <view class="cu-btn round bg-red">合作协议</view>
      </view>
      <view class="margin-top-sm padding-lr-sm padding-tb flex align-center justify-between" style="background-color: #F7F7FB">
        <view class="text-center padding-right-sm" style="border-right: 1px solid #DFDFDF">
          <view class="margin-bottom-sm text-orange">500000</view>
          <view class="text-gray">出资金额(元)</view>
        </view>
        <view class="text-center padding-right-sm" style="border-right: 1px solid #DFDFDF">
          <view class="margin-bottom-sm text-orange">5%</view>
          <view class="text-gray">出资占比</view>
        </view>
        <view class="text-center padding-right-sm" style="border-right: 1px solid #DFDFDF">
          <view class="margin-bottom-sm text-green">5%</view>
          <view class="text-gray">收益占比</view>
        </view>
        <view class="text-center">
          <view class="margin-bottom-sm text-green">500000</view>
          <view class="text-gray">收益合计(元)</view>
        </view>
      </view>
    </view>

    <view class="bg-white margin-top-sm padding-lr-sm padding-tb">
      <boxTitle title="收益报表"></boxTitle>
      <view class="margin-top padding-lr-sm padding-tb" v-for="item in list"
            style="background-image: linear-gradient(to bottom,#FFF3E9,#FFFAFA)">
        <view class="flex justify-between align-center">
          <view class="text-xl text-bold">{{item.name}}</view>
          <view>
            <view class="cu-btn round line-red sm" @click="goto()" style="background-color: #FBFBFB">到账记录</view>
            <view class="cu-btn round bg-red sm margin-left">交易详情</view>
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
                <text class="margin-left-xs">¥500000.00</text>
              </view>
              <view class="w50">
                <text class="cuIcon-rank margin-left"></text>
                <text class="text-gray margin-left-xs">出资占比:</text>
                <text class="margin-left-xs">20%</text>
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
import fxbUNavbar from "/src/components/fxb-u-navbar/fxb-u-navbar";
import fxbImage from "/src/components/fxb/fxb-image";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbSlider from "/src/components/fxb/fxb-slider"
export default {
  name: "barcodeDetails",
  components:{
    fxbUNavbar,
    fxbImage,
    boxTitle,
    fxbSlider
  },
  data(){
    return{
      status:0,
      progress:56,
      list:[
        {
          name:'2022年12月收益'
        },
        {
          name:'2022年11月收益'
        },
        {
          name:'2022年10月收益'
        }
      ],
      list1:[
          {
            name:'我的收益'
          },
          {
            name:'商品信息'
          }
      ],
      isNav: true,
      goodsDetails: {
        goodsInfo: {}
      },
      imgList:[
        {
          imgUrl:'http://124.220.219.72:8085/img/1ec5389e521b45d89107a630a3302d51.jpg'
        },
        {
          imgUrl:'http://124.220.219.72:8085/img/305e329af08e443886115b0d1e78eb89.jpg'
        },
        {
          imgUrl:'http://124.220.219.72:8085/img/2f13afdef87c4feb91d251161bace79a.jpg'
        },
        {
          imgUrl:'http://124.220.219.72:8085/img/09edc7a9cd354ef3ad6e268c01335332.jpg'
        },
      ],
      transparency: 0.0,
      count: 0,
    }
  },
  onLoad(options) {
    this.status = options.status;
  },
  onPageScroll(e) {
    if (e.scrollTop >= 350 && e.scrollTop < (350 + this.StatusBar + this.CustomBar)) {
      this.transparency = (((e.scrollTop - 350) / 100) * 3.33).toFixed(1);
    }
    if (e.scrollTop >= (350 + this.StatusBar + this.CustomBar)) {
      this.transparency = 1.0;
    }
    if (e.scrollTop <= 350) {
      this.transparency = 0.0;
    }
    if (e.scrollTop >= 350 + this.StatusBar) {
      this.isNav = false;
    } else {
      this.isNav = true;
    }
  },
  methods:{
    filterImage(imgArr = []){
      let arr = []
      imgArr.forEach(item => {
        if (item){
          arr.push(item)
        }
      })
      console.log(arr);
      return arr
    },
    changeTab(e) {
      let fatherTop = 0;
      const query = uni.createSelectorQuery().in(this);
      query.select(".fatherBox").boundingClientRect(data => {
        fatherTop = data.top;
      }).exec();
      query.select(`#point${e}`).boundingClientRect(res => {
        console.log(res.top);
        uni.pageScrollTo({
          scrollTop: (res.top - fatherTop) + 305 - this.StatusBar,
          duration: 0
        });
      }).exec();
    },
    change(e) {
      this.count = e.current;
    },
    gotoVideo() {
      //#ifdef APP_PLUS
      uni.navigateTo({
        url: "/pages/explore/exploreIndexAppRecommend"
      });
      //#endif

      //#ifdef H5
      uni.navigateTo({
        url: "/pages/explore/exploreIndexH5"
      });
      //#endif
    },
    goto(){
      uni.navigateTo({
        url: "/pages/admin/barcodeCommodity/receiptRecord"
      });
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .u-navbar {
  .u-navbar__content {
    //background: transparent !important;
    height: var(--CustomBar) !important;
    padding-top: var(--StatusBar);

    .u-navbar__content__left,
    .u-navbar__content__right {
      margin-top: var(--StatusBar);
    }
  }
}

/deep/ .u-swiper {
  height: 750rpx !important;
  border-radius: 0 !important;

  .u-swiper__wrapper {
    height: 100% !important;

    .u-swiper__wrapper__item__wrapper__image {
      width: 750rpx;
      border-radius: 0 !important;
      height: 100% !important;
    }
  }
}

.headerNav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999999999;
  width: 750rpx;
  height: var(--StatusBar) !important;
}

/deep/ .uni-swiper-wrapper {
  position: relative;

  .uni-swiper-dot-active {
    border: 1rpx solid #F37B1D;
  }

  .videoMask {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 750rpx;
    background-color: rgba(9, 9, 9, 0.1);

    .uIcon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

}
</style>