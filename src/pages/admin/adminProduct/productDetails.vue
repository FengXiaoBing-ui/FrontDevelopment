<template>
  <view class="content" style="padding-bottom: 100rpx">
    <u-navbar
        :border="false"
        :fixed="true"
        title="商品详情"
        rightText="编辑"
        :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
        :safeAreaInsetTop="false"
        :autoBack="true"
    >
    </u-navbar>
    <view class=" " :style="'margin-top:' + CustomBar+ 'px'">
      <view class="flex  ">
<!--        <view class="bgPicture">-->
<!--          <view class="margin-top flex margin-left">-->
<!--            &lt;!&ndash;                    <view class="text-lg" style="color: snow">待审核</view>&ndash;&gt;-->
<!--            <view class="">-->
<!--              <view-->
<!--                  :class="`${status == 0 ?'text-white' : status == 1 ? 'text-white' :status==2? 'text-white':status==3?'text-white':status==4?'text-white':''}`">-->
<!--                {{ status == 0 ? "已上架" : status == 1 ? "待上架" : status == 2 ? "待启用" : status == 3 ? "待审核" : status == 4 ? "未通过" : ""-->
<!--                }}-->
<!--              </view>-->
<!--              <view class="flex margin-top text-white">-->
<!--                {{ status == 0 ? "您的商品已上架" : status == 1 ? "您的商品已添加代理政策，请上架" : status == 2 ? "您的商品已通过审核" : status == 3 ? "剩余23小时58分" : status == 4 ? "您已驳回售后申请" : ""-->
<!--                }}-->
<!--              </view>-->
<!--            </view>-->
<!--            <view v-if="status==2" class="t-icon margin-right-lg position    t-icon-jinhangzhong"-->
<!--                  style="width: 75px;height: 75px"></view>-->
<!--            <view v-if="status==4" class="t-icon margin-right-lg position1    t-icon-weitongguo"-->
<!--                  style="width: 75px;height: 75px"></view>-->
<!--            <view v-if="status==3" class="t-icon margin-right-lg position2    t-icon-daishenhe"-->
<!--                  style="width: 75px;height: 75px"></view>-->
<!--            <view v-if="status==1" class="t-icon margin-right-lg position3    t-icon-a-zu699"-->
<!--                  style="width: 75px;height: 75px"></view>-->
<!--            <view v-if="status==0" class="t-icon    position4  t-icon-a-lujing286"-->
<!--                  style="width: 82px;height: 82px"></view>-->
<!--          </view>-->
<!--          </view>-->
        <fxb-status-card :status="localStatus.status" :tips="localStatus.tips" :icon="localStatus.icon"></fxb-status-card>
<!--        <fxbStatusCard v-if="status==3" status="待审核" tips="剩余23小时58分" icon="daishenhe"></fxbStatusCard>-->
<!--        <fxbStatusCard v-if="status==0" status="已上架" tips="你的商品已上架" icon="a-lujing286"></fxbStatusCard>-->
<!--        <fxbStatusCard v-if="status==2" status="待启用" tips="您的商品已通过审核" icon="jinhangzhong"></fxbStatusCard>-->
<!--        <fxbStatusCard v-if="status==1" status="待上架" tips="您的商品已添加代理政策" icon="a-zu699"></fxbStatusCard>-->
<!--        <fxbStatusCard v-if="status==4" status="未通过" tips="您已驳回售后申请" icon="weitongguo"></fxbStatusCard>-->
        </view>
      </view>
      <view class="whiteBoxShadow margin-bottom" style="transform: translateY(-8px)" v-if="status==4" >
        <view class="text-red" style="font-size: 14px">您的商品经查看暂无质量问题，因此驳回您的售后申请</view>
      </view>
      <view class="whiteBoxShadow hp" style="transform: translateY(-8px)">
        <view class="flex justify-between padding-tb-xs">
          <view class="text-gray">商品分类</view>
          <view>白酒</view>
        </view>
        <view class="flex justify-between padding-tb-xs">
          <view class="text-gray">商品品牌</view>
          <view>东方国宾</view>
        </view>
        <view class="flex justify-between ">
          <!--                    <view class="text-gray">未通过原因</view>-->
          <!--                    <view>这是未通过原因</view>-->
        </view>
        <view v-if="status==0||status==1||status==2||status==4" class="flex margin-top-xs justify-between ">
          <view class="text-gray">审核时间</view>
          <view>2022-02-23 12:23:32</view>
        </view>
      </view>

      <u-swiper :list="list" @change="e => current = e.current" :autoplay="false">
        <view
            slot="indicator"
            class="indicator"
        >
          <view
              class="indicator__dot"
              v-for="(item, index) in list"
              :key="index"
              :class="[index === current && 'indicator__dot--active']"
          >
          </view>
        </view>
      </u-swiper>
      <view class="whiteBoxShadow margin-bottom">
        <!--                <view class="flex">-->
        <!--                    <view>建议零售价：</view>-->
        <!--                    <view class="text-red">￥365.00</view>-->
        <!--                </view>-->
        <view class="text-bold text-lg">53°贵州茅台1935酒500ml单瓶装</view>
        <view class="flex justify-between margin-top-sm">
          <view class="w50 margin-right-sm">
            <view class="bg-red light padding-sm radius">
              <view class="text-black">代理价</view>
              <view class="text-red margin-top-sm">￥236.00</view>
            </view>
            <view class="bg-red light margin-top-sm  padding-sm radius">
              <view class="text-black">商超指导价</view>
              <view class="text-red margin-top-sm">￥263.00~254.00</view>
            </view>
          </view>
          <view class="w50">
            <view class="bg-red light  padding-sm radius">
              <view class="text-black">建议零售价</view>
              <view class="text-red margin-top-sm">￥236.00</view>
            </view>
            <view class="bg-red light margin-top-sm  padding-sm radius">
              <view class="text-black">企业团购价</view>
              <view class="text-red margin-top-sm">￥263.00</view>
            </view>
          </view>
        </view>
      </view>

      <view class="whiteBoxShadow margin-bottom">
        <view class="flex justify-between">
          <view>商品条码</view>
          <view>6879878979883</view>
        </view>
        <view class="flex justify-center align-center margin-top">
          <fxbImage style="width: 100%;" mode="widthFix" src="/admin/tiaoma.jpg"></fxbImage>
        </view>
      </view>

      <!--商品详情-->
      <fxbProductDetail :product="false" class="boxShadow margin-top"></fxbProductDetail>

    </view>
</template>

<script>
import fxbStatusCard from "/src/components/fxb/fxb-status-card"
import fxbImage from "/src/components/fxb/fxb-image";
import qiunDataCharts from "/src/components/qiun-data-charts/qiun-data-charts";
import fxbProductInfo from "/src/pages/hotActivity/components/fxb-product-info";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbProductDetail from "/src/pages/hotActivity/components/fxb-product-detail";
import fxbUserEvaluate from "/src/pages/hotActivity/components/fxb-user-evaluate";
import fxbEvaluation from "/src/pages/hotActivity/components/fxb-evaluation";
import fxbAgentPolicy from "/src/pages/hotActivity/components/fxb-agent-policy";

export default {
  computed: {
    localStatus() {
      const tempArr = ["已上架", "待上架", "待启用", "待审核","未通过"];
      const tipsArr = ["您的商品已上架","您的商品已添加代理政策，请上架","您的商品已通过审核","剩余23小时58分","您已驳回售后申请"]
      const iconArr = ["a-lujing286","a-zu699","jinhangzhong","daishenhe","weitongguo"]
      return {
        status:tempArr[this.status],
        tips:tipsArr[this.status],
        icon:iconArr[this.status]
      }
    },
  },
  name: "productDetails",
  components: {
    fxbImage,
    boxTitle,
    fxbProductInfo,
    fxbProductDetail,
    fxbUserEvaluate,
    fxbEvaluation,
    fxbAgentPolicy,
    qiunDataCharts,
    fxbStatusCard
  },
  data() {
    return {
      current: 0,
      show: false,
      status: 0,
      count: 0,

      list: [
        this.$config.IMG_SERVER + "/productDetails/Slice%201.png",
        this.$config.IMG_SERVER + "/productDetails/Slice%202.png",
        this.$config.IMG_SERVER + "/productDetails/Slice%203.png",
        this.$config.IMG_SERVER + "/productDetails/Slice%204.png",
        this.$config.IMG_SERVER + "/productDetails/Slice%205.png"
      ],
      opts: {
        color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
        padding: [20, 10, 0, 0],
        legend: {},
        xAxis: {
          disableGrid: true
        },
        yAxis: {
          gridType: "dash",
          dashLength: 2
        },
        extra: {
          line: {
            type: "straight",
            width: 2
          }
        }
      },
      chartData1: {}
    };
  },
  onLoad(options) {
    this.status = options.status;
  },
  mounted() {
    this.getServerData();
  },
  methods: {
    change(e) {
      this.count = e.current;
    },
    jumpMember() {
      this.show = false;
      uni.navigateTo({
        url: "/pages/memberPayment/memberPay"
      });
    },
    gotoPth(path, id, img) {
      uni.navigateTo({
        url: path + `?id=${id}&url=` + require("/src/static/bottle/22.jpeg")
      });
    },
    getServerData() {
      //模拟从服务器获取数据时的延时
      setTimeout(() => {
        let res1 = {
          categories: ["5月", "6月", "7月", "8月"],
          series: [
            {
              name: "成交量A",
              data: [35, 8, 25, 37, 4, 20]
            },
            {
              name: "成交量C",
              data: [60, 70, 80, 70, 60, 80]
            }
          ]
        };
        this.chartData1 = JSON.parse(JSON.stringify(res1));
        let res2 = {
          categories: ["5月", "6月", "7月", "8月"],
          series: [
            {
              name: "成交额",
              data: [35, 36, 31, 34]
            },
            {
              name: "成交量/万瓶",
              data: [18, 27, 21, 28]
            }
          ]
        };
        this.chartData2 = JSON.parse(JSON.stringify(res2));
      }, 500);
    },
    open() {
      // console.log('open');
    },
    close() {
      this.show = false;
      // console.log('close');
    }
  }
};
</script>

<style lang="scss" scoped>
.boxShadow {
  padding: 30 rpx 20 rpx;
  background: white;
  border-radius: 10 rpx;
  box-shadow: 4 rpx 4 rpx 16 rpx #e6dee6;
}
.icon{
  position: relative;
  left: 270px;
  bottom: 0;
}
.bgPicture {
  background-image: url("/static/integralCommutation/oriange.png");
  width: 395px;
  height: 91px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.productParameter {
  width: 600 rpx;
  border-radius: 20 rpx;
}

.position {
  position: relative;
  left: 130px;
  bottom: 1px;
  align-items: start;
}
.position4{
  position: relative;
  left: 160px;
  bottom: 1px;
}
.position1{
  position: relative;
  left: 150px;
  bottom: 1px;
}
.position2{
  position: relative;
  left: 150px;
  bottom: 1px;
}
.position3{
  position: relative;
  left: 50px;
  bottom: 1px;
}
.share {
  width: 40rpx;
  height: 40rpx;
}

.botBtn {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  width: 100%;
}

.evaluateTag {
  padding: 6 rpx;
  min-width: 150 rpx;
  margin: 12 rpx 10 rpx 12 rpx 0;
}

.border {
  width: 100%;
  height: 2 rpx;
}

//.hp {
//  border-radius: 2px 2px 2px 2px;
//}

.indicator {
  @include flex(row);
  justify-content: center;

  &__dot {
    height: 18 rpx;
    width: 18 rpx;
    border-radius: 100px;
    background-color: rgba(200, 200, 200, 0.35);
    margin: 0 5px;
    transition: background-color 0.3s;

    &--active {
      background-color: #ffffff;
      border: 1 rpx solid #F37B1D;
    }
  }
}

.indicator-num {
  padding: 2px 0;
  background-color: rgba(0, 0, 0, 0.35);
  border-radius: 100px;
  width: 35px;
  @include flex;
  justify-content: center;

  &__text {
    color: #FFFFFF;
    font-size: 12px;
  }
}

/deep/ .u-swiper {
  height: 750 rpx !important;
  border-radius: 0 !important;

  .u-swiper__wrapper {
    height: 100% !important;

    .u-swiper__wrapper__item__wrapper__image {
      height: 100% !important;
      border-radius: 0 !important;
    }
  }
}

/deep/ .u-navbar {
  .u-navbar__content {
    height: var(--CustomBar) !important;
    padding-top: var(--StatusBar);

    .u-navbar__content__left,
    .u-navbar__content__right {
      margin-top: var(--StatusBar);
    }
  }
}
</style>
