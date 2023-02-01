<template>
    <view class="content">
        <u-navbar bgColor="#C11F12" leftIconColor="white" :autoBack="true">
        </u-navbar>
        <view :style="'margin-top:' + (CustomBar - 20) + 'rpx'" class="padding-bottom">
            <view>
                <image src="./picture.png" class="picture"></image>
            </view>
            <view class="margin-lr-sm padding-tb modular" v-for="item in list">
                <view class="bg-white margin-lr-sm margin-bottom" style="border-radius: 20rpx">
                    <view class="margin-lr">
                        <view class="flex justify-center padding-tb">
                            <view class="bg-red"
                                  style="width: 260rpx;height: 44rpx;border-radius: 50rpx;text-align: center">
                                {{ item.name }}
                            </view>
                        </view>
                        <view>
                            <qiun-data-charts
                                v-if="showType=='1'"
                                type="line"
                                :opts="opts"
                                :chartData="chartData1"
                            />
                        </view>
                        <view class="flex justify-between align-center padding-tb margin-top"
                              style="border-top: 1px solid #EDEDED">
                            <view style="width: 33.3%;border-right: 1px solid #EDEDED" class="text-center">
                                <view>成交额(万元)</view>
                                <view class="margin-top-sm text-red text-lg text-bold">8000万元</view>
                            </view>
                            <view style="width: 33.3%;border-right: 1px solid #EDEDED" class="text-center">
                                <view>成交量</view>
                                <view class="margin-top-sm text-blue text-lg text-bold">100万瓶</view>
                            </view>
                            <view style="width: 33.3%" class="text-center">
                                <view>利润(万元)</view>
                                <view class="flex justify-center">
                                    <view class="margin-top-sm tinting text-red">会员可查看</view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="flex justify-between align-center margin-lr-sm ">
                    <view class="bg-white" style=";border-radius: 20rpx">
                        <view class="margin" style="width: 266rpx;height: 328rpx">
                            <view class="flex justify-center">
                                <view class="bg-red"
                                      style="width: 250rpx;height: 44rpx;border-radius: 50rpx;text-align: center">
                                    东方国宾·尊致酒
                                </view>
                            </view>
                            <view class="margin-top text-center">
                                <image src="./alcohol.png" style="width: 243rpx;height: 243rpx"></image>
                            </view>
                        </view>
                    </view>
                    <view class="bg-white" style=";border-radius: 20rpx">
                        <view class="margin" style="width: 266rpx;height: 328rpx">
                            <view class="flex justify-center">
                                <view class="bg-red"
                                      style="width: 250rpx;height: 44rpx;border-radius: 50rpx;text-align: center">
                                    东方国宾·尊致酒
                                </view>
                            </view>
                            <view class="margin-top text-center">
                                <image src="./alcohol.png" style="width: 243rpx;height: 243rpx"></image>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="bgList" @click="goTo()">
                    <image :src="item.url" style="width: 672rpx;height: 104rpx"></image>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import fxbBrandList from "/src/pages/brandZone/components/fxb-brand-list";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import qiunDataCharts from "/src/components/qiun-data-charts/qiun-data-charts";

export default {
    name: "brandZone",
    components: {
        boxTitle,
        fxbBrandList,
        qiunDataCharts
    },
    data() {
        return {
            list: [
                {
                    name: "东方国宾成交数据",
                    url: require("./picture1.png")
                },
                {
                    name: "茅台成交数据",
                    url: require("./picture2.png")
                },
                {
                    name: "泸州老窖成交数据",
                    url: require("./picture3.png")
                }
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
            showType: "1",
            chartData1: {}
        };
    },
    mounted() {
        this.getServerData();
        this.getDataList();
    },
    methods: {
        async getDataList() {
            let res = await this.$http.getRecommendBrandZone()
            console.log(11,res);
        },
        goTo() {
            uni.navigateTo({
                url: "/pages/brandZone/brandDetails"
            });
        },
        changeType(val) {
            this.showType = val;
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
            }, 500);
        }
    }
};
</script>

<style lang="scss" scoped>
.picture {
    background-repeat: no-repeat;
    width: 100%;
    height: 1000rpx;
    background-size: 100% 100%;
}

.content {
    background: #C11F12;
}

.tinting {
    width: 170rpx;
    height: 42rpx;
    background: #FEF2F0;
    border: 1px solid #EE4E35;
    border-radius: 10rpx;
}

.modular {
    background: #E94E3C;
    border: 1px solid #FF7F70;
    border-radius: 20rpx;
    position: relative;
    margin-top: 145rpx;
}

.bgList {
    position: absolute;
    top: -100rpx;
    left: 20rpx;
}
</style>
