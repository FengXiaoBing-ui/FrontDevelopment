<template>
  <view class="content" style="padding-bottom: 100rpx">
    <view :class="isNav?'':'bg-white'" :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
          class="headerNav"></view>
    <fxbUNavbar :isTabs="false" :isNav="isNav" :transparency="transparency.toString()"></fxbUNavbar>
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
      <view class="margin-top-sm">
        <text class="margin-top-sm">当前交易</text>
        <view class="flex align-center margin-tb-xs">
          <fxbSlider :progress="33"></fxbSlider>
        </view>
        <view class="flex align-center justify-between text-sm">
          <view class="flex align-center w50 text-cut">
            <text class="cuIcon-people"></text>
            <text class="margin-left-xs">报名人数：</text>
            <text class="text-orange">12人</text>
          </view>
          <view class="flex justify-end align-center w50 text-cut">
            <text class="cuIcon-recharge"></text>
            <text class="margin-left-xs">已筹金额：</text>
            <text class="text-red">¥2500000.00</text>
          </view>
        </view>
      </view>
    </view>

    <view class="bg-white margin-top-sm">
      <u-tabs :list="list1"
              @change="changeTabs"
              activeStyle="font-size:32rpx;font-weight:bold"
              inactiveStyle="font-size:30rpx" lineColor="red" lineWidth="35"></u-tabs>
    </view>
    <view class="margin-top-sm">
      <investor v-show="activeText==='投资人收益'"></investor>
      <productInfo v-show="activeText==='商品信息'"></productInfo>
<!--            <enrollInfo :title="activeText" v-show="activeText==='报名信息'||activeText==='投标信息'"></enrollInfo>-->
<!--            <projectIntroduction :title="isCrowdFunding" v-show="activeText==='项目介绍'"></projectIntroduction>-->
<!--            <bidding v-show="activeText==='废标公告'"></bidding>-->
<!--            <winning v-show="activeText==='中标公告'"></winning>-->
    </view>

  </view>
</template>

<script>
import fxbSlider from "/src/components/fxb/fxb-slider"
import fxbUNavbar from "/src/components/fxb-u-navbar/fxb-u-navbar";
import fxbImage from "/src/components/fxb/fxb-image";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import productInfo from "/src/pages/admin/tender/components/productInfo"
import enrollInfo from "/src/pages/admin/tender/components/enrollInfo"
import projectIntroduction from "/src/pages/admin/tender/components/projectIntroduction"
import bidding from "/src/pages/admin/tender/components/bidding";
import winning from "/src/pages/admin/tender/components/winning";
import investor from "/src/pages/admin/tender/components/investor";
export default {
  name: "commodityManagement",
  components:{
    fxbUNavbar,
    fxbImage,
    boxTitle,
    fxbSlider,
    productInfo,
    enrollInfo,
    projectIntroduction,
    bidding,
    winning,
    investor
  },
  data(){
    return{
      show:false,
      activeText:"",
      activeIndex:0,
      isCrowdFunding:false,
      statusText:'',
      status:0,
      list1:[
        {
          name:'投资人收益'
        },
        {
          name:'商品信息'
        },
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
  onLoad(options) {
    this.status = options.status;
    this.statusText = options.statusText;
    this.activeText = this.list1[0].name;
  },
  methods:{
    changeTabs(e){
      this.activeIndex = e.index
      this.activeText = e.name
    },
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