<template>
    <view>
        <!--顶部标题-->
      <u-navbar :border="false" :fixed="true" :autoBack="true"
                :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
                :safeAreaInsetTop="false">
        <view slot="left" class="u-nav-slot">
          <text style="font-size: 36rpx" class="cuIcon-back"></text>
        </view>
        <view slot="center" class="u-nav-slot">
          <view class="text-lg">我的销售额统计</view>
          <view style="width:750rpx" class="search bg-white">
            <view class="bg-white padding-lr-sm">
<!--              <view class="flex align-center margin-tb-sm bg-gray" style="border-radius: 4px">-->
<!--                <text class="cuIcon-search text-gray"-->
<!--                      style="font-size: 20px; padding: 4px; margin-left: 4px"></text>-->
<!--                <input-->
<!--                    class="text-df"-->
<!--                    type="text"-->
<!--                    placeholder-class="text-gray"-->
<!--                    placeholder="输入代理商名称、手机号进行搜索"-->
<!--                    style="min-width: 78%;"-->
<!--                    confirm-type="search"-->
<!--                />-->
<!--              </view>-->
              <view class="margin-top">
                <boxTitle title="销售统计"></boxTitle>
<!--                <view class="grid col-3 padding-bottom">-->
<!--                  <view class="text-center">-->
<!--                    <view>本月成交总量</view>-->
<!--                    <view class="text-red text-bold">3200瓶</view>-->
<!--                  </view>-->
<!--                  <view class="u-border-right u-border-left text-center">-->
<!--                    <view>本月成交总额</view>-->
<!--                    <view class="text-green text-bold">3.8万元</view>-->
<!--                  </view>-->
<!--                  <view class="text-center">-->
<!--                    <view>本月新增代理</view>-->
<!--                    <view class="text-blue text-bold">34人</view>-->
<!--                  </view>-->
<!--                </view>-->
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
        <view class="contentBox margin-lr-sm" style="transform: translateY(-10rpx)">
            <view v-for="item in List" :key="item.goodsID"
                  class="whiteBoxShadow  justify-around align-center margin-top " >
                <view class="flex align-center">
                    <view class="">
                        <fxbImage src="/productDetails/Slice%201.png" width="140" height="140"></fxbImage>
                    </view>
                    <view class="w100 margin-left-sm">
                        <view class="text-bold">{{ item.goods }}</view>
                        <view class="flex justify-between  text-gray margin-tb-xs">
                            <view>香型:{{ item.goodsType }}</view>
                            <view>度数:{{ item.degrees }}</view>
                            <view>容量:{{ item.volume }}</view>
                        </view>
                        <view class="text-gray flex align-center">代理价：
                            <view class="text-red">￥{{ item.price }}.00 <text class="text-gray">/瓶</text></view>
                        </view>
                    </view>
                    <!--                    <view class="flex w100 justify-between margin-top">-->
                    <!--                        <view class="text-gray flex align-center">零售价：-->
                    <!--                            <view class="text-red">￥{{ item.price }}.00</view>-->
                    <!--                        </view>-->
                    <!--                        <view class="text-gray flex align-center">代理价：-->
                    <!--                            <view class="text-red">￥{{ item.gPrice }}.00</view>-->
                    <!--                        </view>-->
                    <!--                    </view>-->
                </view>
                <view class="u-border-bottom margin-tb"></view>

                <view class="flex align-center justify-between padding-lr-xs w100">
                    <view class="flex align-end">按月
                        <view class="cuIcon-triangledownfill"></view>
                    </view>
                    <view>
<!--                        <u-button plain size="mini" text="查看订单记录" type="primary" @click="orderInfo"></u-button>-->
                      <view class="flex align-center write text-white" style="font-size: 12px;"  @click="orderInfo">查看订单记录
                      </view>
                    </view>
                </view>
                <view class="margin-top">
                    <qiun-data-charts
                        :chartData="chartData1"
                        :opts="opts"
                        type="column" />
                </view>
                <view class="flex justify-around margin-top">
                    <view class="text-center">
                        <view class="text-bold">2315</view>
                        <view class="text-gray margin-tb-sm">成交数量</view>
                    </view>
                    <view class="text-center">
                        <view class="text-bold">2315</view>
                        <view class="text-gray margin-tb-sm">金额总计</view>
                    </view>
                    <view class="text-center">
                        <view class="text-bold">2315</view>
                        <view class="text-gray margin-tb-sm">返佣金额</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbImage from "/src/components/fxb/fxb-image"
export default {
    name: "salesStatistics",
    components:{
        fxbImage,
        boxTitle
    },
    data() {
        return {
            List: [
                {
                    goodsID: "4837487",
                    goods: "飞天茅台53°瓶装酱香型 500ml",
                    goodsType: "酱香型",
                    degrees: "53°", //度数
                    volume: "500ml",//容量
                    price: "448",
                    gPrice: "365"
                },
                {
                    goodsID: "4871487",
                    goods: "飞天茅台53°瓶装酱香型 500ml",
                    goodsType: "酱香型",
                    degrees: "53°", //度数
                    volume: "500ml",//容量
                    price: "448",
                    gPrice: "365"
                },
                {
                    goodsID: "4874487",
                    goods: "飞天茅台53°瓶装酱香型 500ml",
                    goodsType: "酱香型",
                    degrees: "53°", //度数
                    volume: "500ml",//容量
                    price: "448",
                    gPrice: "365"
                }
            ],
            chartData1: {},
            opts: {
                color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
                padding: [15, 15, 0, 5],
                enableMarkLine: true,
                legend: {},
                xAxis: {
                    disableGrid: true
                },
                yAxis: {
                    data: [
                        {
                            min: 0
                        }
                    ]
                },
                extra: {
                    column: {
                        type: "group",
                        width: 30,
                        activeBgColor: "#000000",
                        activeBgOpacity: 0.08,
                        seriesGap: 5,
                        barBorderRadius: [
                            6,
                            6,
                            6,
                            6
                        ]
                    },
                    markLine: {
                        data: [
                            {
                                value: 21,
                                showLabel: true
                            }
                        ]
                    }
                }
            },
            opts2: {
                color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
                padding: [15, 0, 0, 0],
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
                        type: "curve",
                        width: 2
                    }
                }
            },
        };
    },
    onShow(){
        this.chartData1 ={
            categories: ["1月", "2月", "3月", "4月", "5月", "6月"],
            series: [
                {
                    name: "成交量",
                    data: [35, 36, 31, 33, 13, 34]
                },
                {
                    name: "成交额(万元)",
                    data: [18, 27, { "value": 21, "color": "#EE6666" }, 24, 6, 28]
                },
                {
                    name: "利润(万元)",
                    data: [18, 27, { "value": 21, "color": "#EE6666" }, 24, 6, 28]
                }
            ]
        }
    },
    methods: {
        rightClick() {
            uni.navigateTo({
                url: `pages/admin/myPartnershipService/fixInfo`
            });
        },
        orderInfo(){
            uni.navigateTo({
                url: `pages/admin/myPartnershipService/partnershipOrderInfo`
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.search {
    position: fixed;
    width: 100%;
    top: var(--CustomBar-1) !important;
    left: 0;
}
.try {
  width: 715rpx;
  height: 180rpx;
  background: linear-gradient(360deg, #F37B1D 0%, #FFD581 100%);
  box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.16);
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
}
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
  top: calc(var(--status-bar-height) + 360rpx);
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
.write{
  width: 86px;
  height: 28px;
  background: #F37B1D;
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
  text-align: center;
  padding-left: 7px;
}
.contentBox {
    position: relative;
    top: calc(var(--status-bar-height) + 360rpx);
    padding-bottom: 40rpx;

}
</style>