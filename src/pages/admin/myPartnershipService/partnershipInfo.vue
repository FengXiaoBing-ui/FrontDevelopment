<template>
    <view>
        <u-navbar :autoBack="true" rightText="修改" title="合作伙伴详情" @rightClick="rightClick"></u-navbar>
        <view :style="`margin-top:${CustomBar + 10}px`" class="margin-lr-xs">
            <view class="whiteBoxShadow">
<!--                <view class="flex ">-->
<!--                    <view class="text-bold text-red flex align-end margin-left" style="margin-bottom: 64px">王晓刚-->
<!--                        <view class="flex align-center text-sm margin-left-sm"><view class="lg cuIcon-mobilefill text-orange"></view>1837526956</view>-->
<!--                    </view>-->
<!--                    <view class="flex text-sm   align-center" style="margin-bottom: 64px;margin-left: 165px">-->
<!--                        <view class="text-red">入驻时间：</view>-->
<!--                        <view class="text-red">2022-01-25</view>-->
<!--                    </view>-->
<!--                </view>-->
<!--                <view class="padding-bottom u-border-bottom">销售品种：5种</view>-->
              <view class="try">
                <view class="flex justify-between">
                  <view class="margin-top margin-left-sm text-white">王晓刚</view>
                  <view class="margin-top text-white" style="margin-right: 54px;font-size: 10px">入驻时间：<text class="text-white text-xs">2022-01-25</text></view>
                </view>
                <view class="cuIcon-phone text-sm margin-top-sm margin-left-sm text-white"><text class="margin-left-xs text-sm text-white">电话号码：18690728686</text></view>
                <view class="cuIcon-apps margin-top-sm margin-left-sm text-white"><text class="margin-left-xs text-sm text-white">销售品种：5种</text></view>
              </view>
                <view class="margin-top">
                    <view class="flex align-center justify-between padding-lr-xs w100">
                        <view class="flex align-end margin-left-xs">本月
                            <view class="cuIcon-triangledownfill"></view>
                        </view>
                        <view class="margin-right-sm">订货商品排行</view>
                    </view>
                    <view class="margin-top">
                        <qiun-data-charts
                            :chartData="chartData1"
                            :opts="opts2"
                            type="line" />
                    </view>
                    <view class="flex  align-center  margin-bottom-xl">
                        <view class="text-center">
                          <view class="text-bold margin-top-xs text-red">10.5万元</view>
                            <view class="text-gray text-sm margin-left-sm margin-top-xs">东方国宾·尊致酒</view>

                        </view>
                        <view style="width: 4rpx;height: 27px;margin-left: 10px" class="bg-gray margin-lr-xs margin-left"></view>
                        <view class="text-center margin-left-sm">
                          <view class="text-bold margin-top-xs text-green">3.8万元</view>
                            <view class="text-gray text-sm margin-top-xs">东方国宾·尊致酒</view>

                        </view>
                        <view style="width: 4rpx;height: 27px;margin-left: 10px" class="bg-gray margin-lr-xs "></view>
                        <view class="text-center margin-left-sm">
                          <view class="text-bold margin-top-xs text-blue">3.8万元</view>
                            <view class="text-gray text-sm margin-top-xs">东方国宾·尊致酒</view>

                        </view>
                    </view>
                </view>
            </view>
            <view v-for="item in List" :key="item.goodsID"
                  class="whiteBoxShadow  justify-around align-center margin-top " >
                <view class="flex align-center margin-top">
                    <view class="margin-left-sm">
                        <fxbImage src="/productDetails/Slice%201.png" width="140" height="140"></fxbImage>
                    </view>
                    <view class="w100 margin-left-sm">
                        <view class="text-bold">{{ item.goods }}</view>
                        <view class="flex   text-gray margin-tb-xs">
                            <view>香型:{{ item.goodsType }}</view>
                            <view class="margin-left">度数:{{ item.degrees }}</view>
                            <view class="margin-left">容量:{{ item.volume }}</view>
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

<!--                <view class="flex align-center justify-between padding-lr-xs w100">-->
<!--                    <view class="flex align-end">按月-->
<!--                        <view class="cuIcon-triangledownfill"></view>-->
<!--                    </view>-->
<!--                    <view>-->
<!--                        <view plain @click="orderInfo">查看发货记录</view>-->
<!--                    </view>-->
<!--                </view>-->
              <view class="flex justify-between ">
                <view class="flex align-end margin-left-sm">按月
                  <view class="cuIcon-triangledownfill"></view>
                </view>
                <view class="flex align-center write text-white" style="font-size: 12px;" @click="orderInfo">查看发货记录
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
                        <view class="text-red">2312</view>
                        <view class="text-gray margin-tb-sm">成交数量</view>
                    </view>
                    <view class="text-center">
                        <view class="text-red">234567.00</view>
                        <view class="text-gray margin-tb-sm">金额总计</view>
                    </view>
                    <view class="text-center">
                        <view class="text-red">8490.00</view>
                        <view class="text-gray margin-tb-sm">返佣金额</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image"
export default {
    name: "partnershipInfo",
    components:{
        fxbImage
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
.try{
  width: 110%;
  height: 98px;
  background: linear-gradient(180deg, #FF6424 0%, #FF801D 100%);
  border-radius: 4px 4px 0px 0px;
  opacity: 1;
  margin-right: 73px;
}
/deep/.whiteBoxShadow {
  padding: 0px;
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
</style>