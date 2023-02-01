<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" :autoBack="true" @rightClick="clickDate"
                  :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
                  :safeAreaInsetTop="false">
            <view slot="left" class="u-nav-slot">
                <text style="font-size: 36rpx" class="cuIcon-back"></text>
            </view>
            <view slot="center" class="u-nav-slot">
                <view class="text-lg">酒数据云</view>
            </view>
            <view slot="right" class="u-nav-slot">
                2022年
            </view>
        </u-navbar>
        <view :style="'position:fixed;z-index:9;top:'+((CustomBar*2)-5)+'rpx'"
              class="w100 bg-white padding-tb-sm padding-lr-sm flex flex-direction align-center">
            <fxbDrop @cityOnChange="cityOnChange" @change="fxbDropChange" :top="CustomBar" :filterData="filterData"></fxbDrop>
        </view>
        <view :style="'margin-top:'+(CustomBar+50)+'px'">
            <view class="flex align-center">
                <view class="flex-sub padding-sm bg-white radius margin-lr-xs">
                    <view class="text-bold">销售额(元)</view>
                    <view class="text-bold text-xxl text-red">{{ dataAlcohol.sale.count }}.00万</view>
                    <view class="flex align-center justify-between text-xs margin-top-xs">
                        <text class="text-gray">上年同期成交</text>
                        <text>{{ dataAlcohol.sale.lastYearCount }}.00万</text>
                    </view>
                    <view class="flex align-center justify-between text-xs margin-top-xs">
                        <text class="text-gray">同比增长</text>
                        <text class="text-green">↑ 10%</text>
                    </view>
                    <view class="w100 margin-tb-sm" style="border: 1rpx dashed #bdbdbd"></view>
                    <view class="flex align-center justify-between text-xs">
                        <text class="text-gray">新客成交额</text>
                        <text>{{ dataAlcohol.sale.newPeopleDeal }}.00万</text>
                    </view>
                    <view class="flex align-center justify-between text-xs margin-top-xs">
                        <text class="text-gray">人均成交额</text>
                        <text>{{ dataAlcohol.sale.averageDeal }}.00万</text>
                    </view>
                </view>
                <view class="flex-sub padding-sm bg-white radius margin-lr-xs">
                    <text class="text-bold">成交量(瓶)</text>
                    <view class="text-bold text-xxl text-orange">{{ dataAlcohol.deal.count }}.00万</view>
                    <view class="flex align-center justify-between text-xs margin-top-xs">
                        <text class="text-gray">上年同期成交</text>
                        <text>{{ dataAlcohol.deal.lastYearCount }}.00万</text>
                    </view>
                    <view class="flex align-center justify-between text-xs margin-top-xs">
                        <text class="text-gray">同比增长</text>
                        <text class="text-red">↓ -10%</text>
                    </view>
                    <view class="w100 margin-tb-sm" style="border: 1rpx dashed #bdbdbd"></view>
                    <view class="flex align-center justify-between text-xs">
                        <text class="text-gray">新客成交额</text>
                        <text>{{ dataAlcohol.deal.newPeopleDeal }}.00万</text>
                    </view>
                    <view class="flex align-center justify-between text-xs margin-top-xs">
                        <text class="text-gray">人均成交额</text>
                        <text>{{ dataAlcohol.deal.averageDeal }}.00万</text>
                    </view>
                </view>
            </view>
            <view class="flex align-center margin-tb">
                <view @click="switchChart(index)" :class="optionsIndex===index?'text-white bg-red':'bg-gray text-black'"
                      class="margin-lr-xs padding-lr-sm padding-tb-xs round" v-for="(item,index) in options"
                      :key="index">
                    {{ item }}
                </view>
            </view>

            <view class="whiteBoxShadow margin-lr-xs">
                <view class="flex align-center justify-between">
                    <view class="text-red">成交总额：{{ dataAlcohol.deal.count }}.00万元</view>
                    <view class="text-green">成交总量：{{ dataAlcohol.sale.count }}.00万瓶</view>
                </view>
                <qiun-data-charts :key="optionsIndex" :type="chartType" :opts="opts" :chartData="chartData1" />
            </view>
            <view class="whiteBoxShadow margin-lr-xs margin-top">
                <view class="text-red">品牌成交占比</view>
                <qiun-data-charts type="ring" :opts="opts" :chartData="chartData" />
            </view>
        </view>
    </view>
</template>

<script>
import fxbDrop from "/src/components/fxb/fxb-drop-down-box";
import chartDataJson from "/src/utils/chartData.json";

export default {
    name: "wineDataCloud",
    components: {
        fxbDrop
    },
    data() {
        return {
            chartDataJson,
            chartType: "column",
            filterData: [],
            options: [
                "全年成交统计",
                "成交走势图",
                "同期对比图"
            ],
            optionsIndex: 0,
            chartData1: {},
            chartData: {},
            opts: {
                color: ["#FAC858", "#EE6666", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
                padding: [15, 15, 0, 5],
                enableScroll: false,
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
                        width: 10,
                        activeBgColor: "#000000",
                        activeBgOpacity: 0.08,
                        linearType: "custom",
                        seriesGap: 5,
                        linearOpacity: 0.5,
                        barBorderCircle: true,
                        customColor: [
                            "#FA7D8D",
                            "#EB88E2"
                        ]
                    }
                }
            },
            dataAlcohol: {}
        };
    },
    created() {
        this.getData({});
        this.getFilterData();
        this.getServerData();
    },
    methods: {
        getData(params = {}) {
            let res = this.filterGetData(params,this.chartDataJson.data.result);
            let obj = {
                totalMonthly:{
                    averageTotal:0,
                },
                totalAveragePeopleMonthly:{
                    averageTotal:0
                },
                brandTurnover:{
                    totalCount:0,
                    brandTurnover:0
                },
                sale:{
                    count:0,
                    lastYearCount:0,
                    newPeopleDeal:0,
                    averageDeal:0,
                },
                deal:{
                    count:0,
                    lastYearCount:0,
                    newPeopleDeal:0,
                    averageDeal:0,
                }
            }
            res.forEach(item => {
                obj.lastYearCount += Number(item.lastYearCount)
                obj.totalMonthly.averageTotal += Number(item.totalMonthly.averageTotal)
                obj.totalAveragePeopleMonthly.averageTotal += Number(item.totalAveragePeopleMonthly.averageTotal)
                obj.brandTurnover.totalCount += Number(item.brandTurnover.totalCount)
                obj.brandTurnover.brandTurnover += Number(item.brandTurnover.brandTurnover)
                obj.sale.count += Number(item.sale.count)
                obj.sale.lastYearCount += Number(item.sale.lastYearCount)
                obj.sale.newPeopleDeal += Number(item.sale.newPeopleDeal)
                obj.sale.averageDeal += Number(item.sale.averageDeal)
                obj.deal.count += Number(item.deal.count)
                obj.deal.lastYearCount += Number(item.deal.lastYearCount)
                obj.deal.newPeopleDeal += Number(item.deal.newPeopleDeal)
                obj.deal.averageDeal += Number(item.deal.averageDeal)
            })
            this.dataAlcohol = obj
        },
        filterGetData(condition = {classificationAlcohol:null,region:null,brand:null,typeAromatic:null,time:null}, data) {
            console.log(condition);
            return data.filter(item => {
                return Object.keys(condition).every(key => {
                    return String(item[key]).toLowerCase().includes(
                        String(condition[key]).trim().toLowerCase());
                });
            });
        },
        getFilterData() {
            this.filterData = [
                {
                    "name": "分类",
                    "id":"101",
                    "type": "hierarchy-column",
                    "submenu": [
                        {
                            "name":"全部",
                            "value":"全部"
                        }
                    ]
                },
                {
                    "name": "地区",
                    "type": "china",
                    "id":"102",
                },
                {
                    "name": "品牌",
                    "type": "hierarchy-column",
                    "id":"103",
                    "submenu": [
                        {
                            "name":"全部",
                            "value":"全部"
                        },
                        {
                            "name": "茅台",
                            "value": "茅台"
                        },
                        {
                            "name": "东方国宾",
                            "value": "东方国宾"
                        },
                        {
                            "name": "五粮液",
                            "value": "五粮液"
                        },
                        {
                            "name": "泸州老窖",
                            "value": "泸州老窖"
                        },
                        {
                            "name": "剑南春",
                            "value": "剑南春"
                        },
                        {
                            "name": "国窖",
                            "value": "国窖"
                        }
                    ]
                },
                {
                    "name": "香型",
                    "type": "hierarchy-column",
                    "id":"104",
                    "submenu": []
                }
            ];
            for (let i = 0; i < this.$config.COMMODITY_CATEGORY[0].length; i++) {
                let obj = {
                    "name": this.$config.COMMODITY_CATEGORY[0][i].label,
                    "value": this.$config.COMMODITY_CATEGORY[0][i].label
                };
                this.filterData[0].submenu.push(obj);
            }
            for (let i = 0; i < this.$config.FRAGRANT_TYPE[0].length; i++) {
                let obj = {
                    "name": this.$config.FRAGRANT_TYPE[0][i].label,
                    "value": this.$config.FRAGRANT_TYPE[0][i].label
                };
                this.filterData[3].submenu.push(obj);
            }
        },
        getServerData() {
            //模拟从服务器获取数据时的延时
            setTimeout(() => {
                let res = {
                    series: [
                        {
                            data: [{ "name": "一班", "value": 50 }, { "name": "二班", "value": 30 }, {
                                "name": "三班",
                                "value": 20
                            }, { "name": "四班", "value": 18 }, { "name": "五班", "value": 8 }]
                        }
                    ]
                };
                this.chartData = JSON.parse(JSON.stringify(res));
                let res1 = {
                    categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
                    series: [
                        {
                            name: "目标值",
                            data: [35, 36, 31, 33, 13, 34]
                        },
                        {
                            name: "完成量",
                            data: [18, 27, 21, 24, 6, 28]
                        }
                    ]
                };
                this.chartData1 = JSON.parse(JSON.stringify(res1));
            }, 500);
        },
        switchChart(index) {
            this.optionsIndex = index;
            if (index === 0) {
                this.chartType = "column";
            }
            if (index === 1) {
                this.chartType = "line";
            }
            if (index === 2) {
                this.chartType = "area";
            }
        },
        fxbDropChange(e) {
            let screenObj = {}
            for (let i = 0; i < e.length; i++){
                if (e[0].value!=='分类'&&e[0].value!=='全部'&&e[0].value!==undefined){
                    screenObj.classificationAlcohol = e[0].value
                }
                if (e[1].value!=='地区'&&e[1].value!==undefined){
                    screenObj.region = e[1].value
                }
                if (e[2].value!=='品牌'&&e[2].value!=='全部'&&e[2].value!==undefined){
                    screenObj.brand = e[2].value
                }
                if (e[3].value!=='香型'&&e[3].value!=='不限'&&e[3].value!==undefined){
                    screenObj.typeAromatic = e[3].value
                }
            }
            this.getData(screenObj);
        },
        clickDate(){

        }
    }
};
</script>

<style lang="scss" scoped>
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