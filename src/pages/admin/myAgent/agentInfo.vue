<template>
    <view class="content bg-gray">
        <!--顶部标题-->
        <u-navbar :autoBack="true" :border="false" :fixed="true" :safeAreaInsetTop="false"
                  :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
                  rightText="修改"
                  @rightClick="fixed"
                  title="代理商详情">
            <view slot="left" class="u-nav-slot">
                <text class="cuIcon-back" style="font-size: 36rpx"></text>
            </view>
        </u-navbar>
        <view :style="`margin-top:${CustomBar+10}px`" class="margin-lr">
            <view class="whiteBoxShadow margin-bottom try" @click="">
                <view class="flex align-center  justify-between">
                    <view class="flex align-center">
                        <text class="username text-lg text-white">王晓刚</text>
<!--                        <view class="userphone bg-gray">-->
<!--                            <text class="cuIcon-mobile"></text>-->
<!--                            <text class="text-gray">18690728686</text>-->
<!--                        </view>-->
                    </view>
                    <text class=" text-white">入驻时间：2022-01-25</text>
                </view>
              <view class="flex margin-tb">
                <view class="cuIcon-home text-lg text-white " style="font-size: 18px"></view>
                <view class="text-white margin-left-xs" style="width: 23%;">电话号码：</view>
                <view style="width: 74%;" class="text-white">18690728686</view>
              </view>
<!--              <view class="cuIcon-phone text-sm margin-top-sm margin-left-sm text-white"><text class="margin-left-xs text-sm text-white">电话号码：18690728686</text></view>-->

              <view class="flex margin-tb">
                <view class="cuIcon-phone text-lg text-white " style="font-size: 18px"></view>
                    <view class="text-white margin-left-xs" style="width: 23%;">公司名称：</view>
                    <view style="width: 74%;" class="text-white">贵州好酒选电子商务有限公司</view>
                </view>
                <view class="flex justify-between align-center">
                  <view class="cuIcon-form text-lg text-white " style="font-size: 18px"></view>
                    <view class="text-white" style="margin-right:100px;white-space: nowrap">已签合同：
                        <text class="text-white">3份 </text>
                    </view>
                    <view class="text-white" style="white-space: nowrap">业务经理：
                        <text class="text-white">
                            张晓丹
                        </text>
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top" v-for="(site,index) in contractList" :key="index">
                <view class="flex justify-between align-center">
                    <view class="overhidde w75 text-bold">
                        {{site.name }}
                    </view>
                    <view>
                        <u-tag plain size="mini" text="合同详情"></u-tag>
                    </view>
                </view>
                <view class="flex margin-top text-gray text-xs justify-between">
                    <view>合同编号：{{ site.id }}</view>
                    <view class="">结算方式：{{ site.payWay }}</view>
                </view>
                <view class="flex justify-around margin-top">
                    <view class="text-center">
                        <view class="text-bold">{{ site.num }}</view>
                        <view class="text-gray margin-tb-sm">{{ site.shu }}</view>
                    </view>
                    <view class="text-center">
                        <view class="text-bold">{{ site.num }}</view>
                        <view class="text-gray margin-tb-sm">{{ site.jin }}</view>
                    </view>
                    <view class="text-center">
                        <view class="text-bold">{{ site.num }}</view>
                        <view class="text-gray margin-tb-sm">{{ site.shen }}</view>
                    </view>
                </view>
                <view class="flex align-center justify-between padding-lr-xs w100">
                    <view>按月<text  class="lg text-black  cuIcon-triangledownfill"style="font-size: 24px"></text></view>
                    <view>
<!--                        <u-button @click="orderInfo" plain size="mini" text="查看销售订单" type="primary">-->

<!--                        </u-button>-->
                      <view class="flex align-center write text-white" style="font-size: 12px;" @click="orderInfo">查看销售订单
                      </view>
                    </view>
                </view>
                <view class="margin-top">
                    <qiun-data-charts
                        :chartData="chartData1"
                        :opts="opts"
                        type="column" />
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import qiunDataCharts from "/src/components/qiun-data-charts/qiun-data-charts";

export default {
    name: "myAgent-index",
    components: {
        qiunDataCharts
    },
    data() {
        return {
            contractList: [
                {
                    name: "东方国宾·尊致酒500ml酱香型合同", id: "2135848975447", payWay: "现结",
                    num:"2312", shu:"成交数量",jin:"金额总计",shen:"剩余任务"
                },
                {
                    name: "东方国宾·尊致酒500ml酱香型合同", id: "2135848975447", payWay: "现结",
                num:"23456.00", shu:"成交数量",jin:"金额总计",shen:"剩余任务"
                },
                {
                    name: "东方国宾·尊致酒500ml酱香型合同", id: "2135848975447", payWay: "现结",
                    num:"3215", shu:"成交数量",jin:"金额总计",shen:"剩余任务"
                }
            ],
            chartData1:{},
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
            }
        };
    },
    onShow() {
        this.chartData1= {
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
        fixed(id){
            uni.navigateTo({
                url:`pages/admin/myAgent/settingInfo?id${id}`
            })
        },
        orderInfo(id){
            uni.navigateTo({
                url:`pages/admin/myAgent/orderInfo?id${id}`
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.userphone {
    padding: 10rpx;
    border-radius: 20rpx 0 20rpx 0;
    margin-left: 12rpx;
}
.try {
  width: 710rpx;
  height: 302rpx;
  background: linear-gradient(180deg, #FF6424 0%, #FF801D 100%);
  border-radius: 4px 4px 0px 0px;
  opacity: 1;
}
.rightTag {
    padding: 4rpx 16rpx;
    border-radius: 20rpx 0 0 0;
    transform: translateX(20rpx);
}

.contentBox {
    position: relative;
    top: calc(var(--status-bar-height) + 260rpx);
    padding-bottom: 40rpx;
}
.write{
  width: 86px;
  height: 28px;
  background: #F37B1D;
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
  text-align: center;
  padding-left: 7px;
  margin-right: 10px;
}
.boxShadow {
    padding: 30rpx 20rpx;
    background: white;
    border-radius: 10rpx;
    box-shadow: 4rpx 4rpx 16rpx #e6dee6;
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
