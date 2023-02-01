<template>
    <view class="rankBox margin-tb-sm padding-bottom">
        <view class="padding" style="padding-top: 240rpx">
            <!--                <view class="list flex justify-between text-gray">-->
            <!--                    <view>排名</view>-->
            <!--                    <view>商品名称</view>-->
            <!--                    <view>成交量</view>-->
            <!--                    <view>同比上期</view>-->
            <!--                    <view>操作</view>-->
            <!--                </view>-->
            <view class="list text-black flex-wrap padding-lr"
                  v-for="(item, index) in list" :key="index"
                  @click="showIndexChart(index)">
                <view class="flex justify-between padding-sm align-center">
                    <view class="t-icon flex align-center justify-center" style="width: 27px;height: 30px"
                          :class="{'t-icon-a-Group290':index=='0','t-icon-a-Group-1':index=='1','t-icon-a-Group-2':index=='2'}">
                        <text class="text-orange" v-if="index > 2">{{ index + 1 }}</text>
                    </view>
                    <view>{{ item.name }}</view>
                    <view class="text-red flex flex-direction justify-center align-center text-sm">
                        <text>{{ item.proportion }}</text>
                        <text class="text-gray">成交量</text>
                    </view>
                    <view class="text-red flex flex-direction justify-center align-center text-sm">
<!--                        <text>{{ item.PreviousPeriod }}</text>-->
<!--                        <text style="position: relative;top: -2px">-->
<!--                            {{ item.upDown ? "↑" : "↓" }}-->
<!--                        </text>-->
                        <text>{{ item.PreviousPeriod }}</text>
                        <text class="text-gray">占比</text>
                    </view>
                    <view class="text-orange flex flex-direction justify-center align-center text-sm">
                        <text class="cuIcon-newshot" style="font-size: 18px"></text>
                        <text>查看详情</text>
                    </view>
                </view>
                <u-transition :show="index===showChartIndex" duration="1000">
                    <view v-if="index===showChartIndex"
                          class="transition chart align-start"
                          style="width: 100%;">
                        <view class="flex justify-around margin-tb-sm"
                              style="width: 100%">
                            <text :class="showType=='1'?'text-bold text-red':''"
                                  @click.stop="changeType('1')">零售价走势图
                            </text>
                            <text class="margin-left"
                                  :class="showType=='2'?'text-bold text-red':''"
                                  @click.stop="changeType('2')">成交量统计图
                            </text>
                        </view>
                        <view style="width:100%;">
                            <qiun-data-charts v-if="showType == '1'"
                                              type="line" :opts="opts"
                                              :chartData="chartData1" />
                            <qiun-data-charts v-if="showType == '2'"
                                              type="column" :opts="opts"
                                              :chartData="chartData2" />
                        </view>
                    </view>
                </u-transition>

            </view>
        </view>
        <view @click="goMore" class="moreBtn text-sm text-white flex align-center justify-center">更多</view>
    </view>
</template>

<script>
import qiunDataCharts from "/src/components/qiun-data-charts/qiun-data-charts";

export default {
    name: "rankingList",
    components: {
        qiunDataCharts
    },
    data() {
        return {
            showType: "1",
            showChartIndex: 0,
            chartImage: require("/src/static/chart.jpg"),
            list: [
                {
                name: "东方国宾·尊致",
                proportion: "2.43%",
                PreviousPeriod: "10%",
                upDown: true,
                show: true
            },
                {
                    name: "东方国宾·尊致",
                    proportion: "2.43%",
                    PreviousPeriod: "10%",
                    upDown: false
                },
                {
                    name: "东方国宾·尊致",
                    proportion: "2.43%",
                    PreviousPeriod: "10%",
                    upDown: true
                },
                {
                    name: "东方国宾·尊致",
                    proportion: "2.43%",
                    PreviousPeriod: "10%",
                    upDown: false
                },
                {
                    name: "东方国宾·尊致",
                    proportion: "2.43%",
                    PreviousPeriod: "10%",
                    upDown: true
                }
            ],
            chartData1: {},
            chartData2: {},
            opts: {
                color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
                    "#ea7ccc"
                ],
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
            }
        };
    },
    mounted() {
        this.getServerData();
    },
    methods: {
        goMore(){
            uni.navigateTo({
                url:"/pages/turnoverRanking/turnoverRanking"
            })
        },
        showIndexChart(index) {
            this.showChartIndex = index;
            console.log(this.showChartIndex);
        },
        changeType(val) {
            this.showType = val;
        },
        getServerData() {
            //模拟从服务器获取数据时的延时
            setTimeout(() => {
                let res1 = {
                    categories: ["5月", "6月", "7月", "8月"],
                    series: [{
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
                    series: [{
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
        }
    }
};
</script>

<style lang="scss" scoped>
.rankBox {
    width: 100%;
    background-image: url('/static/images/paihangbang.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    .moreBtn{
        position: absolute;
        right: 40rpx;
        top: 70rpx;
        width: 70rpx;
        height: 36rpx;
        background: linear-gradient(180deg, #FEDE61 0%, #FAB21A 100%);
        border-radius: 12px 12px 12px 12px;
    }

    .infoBox {
        .list {
            view {
                margin: 8rpx 0;
                font-size: 24rpx;
                display: flex;
                align-content: center;
                justify-content: center;

                &:nth-child(1) {
                    width: 10%;
                }

                &:nth-child(2) {
                    width: 30%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                &:nth-child(3) {
                    width: 20%;
                }

                &:nth-child(4) {
                    width: 20%;
                }

                &:nth-child(5) {
                    width: 20%;
                }
            }

            .chart {
                width: 100%;
                display: flex;
                flex-direction: column;
            }
        }

        .tag {
            white-space: nowrap;
            border: solid 1px #E54D42;
            color: #E54D42;
            border-radius: 0.2rem;
        }
    }

}

.chartImage {
    width: 100%;
    height: 400rpx;
}
</style>
