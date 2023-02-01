<template>
    <view>
        <u-navbar :autoBack="true" title="数据统计"></u-navbar>
        <view :style="`margin-top:${CustomBar }px`"
              class="flex margin-top-lg justify-between text-bold">
            <view class="bg-white padding-lr header">
                <!--产品列表导航-->
                <u-tabs :scrollable="false" activeStyle="font-size:16px"
                        inactiveStyle="font-size:14px"
                        lineColor="red" :list="activityList"></u-tabs>
            </view>
        </view>
        <view :style="`margin-top:${CustomBar + 10}px`">
            <view class="padding-lr margin-tb-lg">
                <view class="whiteBoxShadow margin-top-lg">
                    <view class="flex justify-between">
                        <boxTitle class="text-xl" title="商品"></boxTitle>
                        <view class="flex h100  align-center "
                              @click="select('pages/admin/dataForService/selectGoods')">
                            <view class="margin-right-sm text-gray">
                                选择商品查询
                            </view>
                            <view class="cuIcon-right"></view>
                        </view>
                    </view>
                    <goodsInfoCard
                        v-if="goodsID"
                        goods-name="飞天茅台53°瓶装酱香型 500ml"
                        goods-type="酱香型"
                        goodsVolume="500"
                        goodsDegrees="49"
                        img-url="/productDetails/Slice%201.png"
                        agent-price="365"
                        retail-price="389"
                    ></goodsInfoCard>
                    <view class="flex justify-between margin-tb">
                        <view class="text-bold">合同发货统计</view>
                        <view class="flex align-center text-orange">
                            近30日数据/
                            <text class="text-gray">
                                30日环比
                            </text>
                            <view class="cuIcon-unfold text-gray"></view>
                        </view>
                    </view>
                    <view style="background-color:  #FFFCF9" class="padding-sm radius">
                        <view class="flex justify-between  align-center">
                            <view class="text-bold">近30日合同发货统计</view>
                            <view  @click="dispatchEvent('pages/admin/dataForService/replenishmentRecord')" class="cu-btn text-sm radius text-white" style="height: 24px;background-color:rgba(243, 123, 29, 0.9)">
                                查看补货记录
                            </view>
                            <!--                        <view class="flex align-center text-gray">-->
                            <!--                            查看进货记录-->
                            <!--                            <view class="cuIcon-right"></view>-->
                            <!--                        </view>-->
                        </view>
                        <view class="margin-tb box padding-sm">
                            <qiun-data-charts
                                :chartData="chartData"
                                :opts="opts"
                                type="line" />
                        </view>
                        <view class="flex justify-between align-center">
                            <view class="padding box">
                                <view class="text-gray text-sm">近30日</view>
                                <view class="margin-tb">300/瓶</view>
                                <view class="text-gray text-sm">进货总额：<text class="text-red">¥79200.00</text></view>
                            </view>
                            <view class="padding box">
                                <view class="flex align-center justify-between">
                                    <view class="text-gray text-sm">近30日</view>
                                    <view class="text-red">2%⬆</view>
                                </view>
                                <view class="margin-tb">300/瓶</view>
                                <view class="text-gray text-sm">进货总额：<text class="text-red">¥79200.00</text></view>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="whiteBoxShadow margin-tb">
                    <view class="flex justify-between">
                        <boxTitle title="代理"></boxTitle>
                        <view class="flex h100  align-center"
                              @click="select('pages/admin/dataForService/selectPolicy')">
                            <view class="margin-right-sm text-gray">
                                选择代理政策查询
                            </view>
                            <view class="cuIcon-right"></view>
                        </view>
                    </view>
                    <goodsInfoCard
                        v-if="goodsID"
                        goods-name="飞天茅台53°瓶装酱香型 500ml"
                        goods-type="酱香型"
                        goodsVolume="500"
                        goodsDegrees="49"
                        img-url="/productDetails/Slice%201.png"
                        agent-price="365"
                        retail-price="389"
                    ></goodsInfoCard>
                    <view v-if="goodsID" class="flex justify-between margin-tb">
                        <view class="">发布代理：46人</view>
                        <view class="flex align-center">已代理：22</view>
                        <view>剩余代理：22</view>
                    </view>

                    <u-checkbox-group
                        v-model="radioValue"
                        placement="column"
                        v-if="goodsID"
                    >
                        <view v-for="(item,index) in positionArr" :key="index"
                              :class="index>=positionArr.length-1?'':'u-border-bottom'"
                              class="margin-bottom flex justify-between align-start">

                            <view class="flex-sub u-border-bottom">
                                <view class="flex justify-between">
                                    <view>代理政策{{ index + 1 }}({{ item.title }})</view>
                                    <view @click="pageTo('pages/admin/policyAgency/policyDetails','id=123')"class="text-orange">
                                        <text class="cuIcon-attention margin-right-sm"></text>
                                        <text>政策详情</text>
                                    </view>
                                </view>
                                <view class="margin-tb">
                                    <text v-for="cityList in item.city" :key="cityList" class="margin-right-xs">
                                        {{ cityList
                                        }}
                                    </text>
                                    <text v-if="item.city" class="cuIcon-triangledownfill"></text>
                                </view>
                                <view v-for="(child,id) in item.cityAgent" :key="id" class="margin-tb">
                                    <view class="grid col-4 margin-tb-sm">
                                        <view v-for="(cityAgentChild,cityAgentChildID) in child" :key="cityAgentChildID"
                                              class="text-center">
                                            <view>{{ cityAgentChild }}</view>
                                        </view>
                                    </view>
                                    <view class="grid col-4 margin-tb-sm text-gray">
                                        <view class="text-center">代理区域</view>
                                        <view class="text-center">发布代理</view>
                                        <view class="text-center">已代理</view>
                                        <view class="text-center">剩余代理</view>
                                    </view>
                                </view>
                            </view>
                        </view>
                    </u-checkbox-group>
                    <view style="background-color:  #FFFCF9" class="padding-sm radius">
                        <view class="flex justify-between">
                            <view class="text-bold">代理人数统计</view>
                            <view class="flex align-center text-orange">近30日数据/
                                <text class="text-gray">30日环比</text>
                                <view class="cuIcon-unfold text-gray"></view>
                            </view>
                        </view>
                        <view class="flex justify-between margin-top-xl">
                            <view class="text-bold">
                                近30日代理人数统计
                            </view>
                            <view class="cu-btn text-sm radius text-white"  @click="dataDetali('pages/admin/dataForService/proxyList',)" style="height: 24px;background-color:rgba(243, 123, 29, 0.9)">查看代理记录
                            </view>
                        </view>
                        <view class="margin-tb">
                            <qiun-data-charts
                                :chartData="chartData"
                                :opts="opts"
                                type="line"
                                class="box"
                            />
                        </view>
                        <view class="flex justify-between align-center">
                            <view class="padding box">
                                <view class="text-gray text-sm">近30日</view>
                                <view class="margin-tb">代理人数：10人</view>
                                <view class="text-gray text-sm">进货总额：<text class="text-red">¥79200.00</text></view>
                            </view>
                            <view class="padding box">
                                <view class="flex align-center justify-between">
                                    <view class="text-gray text-sm">近30日</view>
                                    <view class="text-red">2%⬆</view>
                                </view>
                                <view class="margin-tb">代理人数：8人</view>
                                <view class="text-gray text-sm">进货总额：<text class="text-red">¥79200.00</text></view>
                            </view>
                        </view>
                    </view>
                </view>

                <view class="whiteBoxShadow">
                    <view class="flex justify-between">
                        <boxTitle title="活动"></boxTitle>
                        <view class="flex h100  align-center"
                              @click="select('pages/admin/dataForService/selectActivity')">
                            <view class="margin-right-sm">
                                选择活动查询

                            </view>
                            <view class="cuIcon-right"></view>
                        </view>
                    </view>
                    <view v-if="goodsID">
                        <view class="flex align-center margin-bottom-sm">
                            <view class="text-gray w25 ">活动名称：</view>
                            <view>飞天茅台53°+茅台王子酒八折优惠</view>
                        </view>
                        <view class="flex align-center margin-bottom-sm">
                            <view class="text-gray w25 ">有效期限：</view>
                            <view>2022-08-30 至 2022-09-30</view>
                        </view>
                        <view class="flex align-center margin-bottom-sm">
                            <view class="flex">
                                <view class="text-gray ">推广费用：</view>
                                <view>￥3000.00</view>
                            </view>
                            <view class="flex margin-left-xl">
                                <view class="text-gray">操作人：</view>
                                <view>张东</view>
                            </view>
                        </view>
                        <view class="flex align-center margin-bottom-sm">
                            <view class="text-gray w25 ">申请时间：</view>
                            <view>2022-08-31 12:12:56</view>
                        </view>
                    </view>
                    <view style="background-color:  #FFFCF9" class="padding-sm radius">
                        <view class="flex justify-between margin-tb">
                            <view class="text-bold">活动实时统计</view>
                            <view class="flex align-center">实时/
                                <text class="text-gray">昨日</text>
                                <view class="cuIcon-unfold margin-left-sm text-xl text-bold text-gray"></view>
                            </view>
                        </view>
                        <view class="flex justify-between align-center">
                            <view class="margin-xs  padding radius flex-sub box">
                                <view class="text-blue text-sm text-cut">浏览量</view>
                                <view class="margin-tb flex align-center justify-between">300
                                    <view class="text-red">⬆</view>
                                </view>
                                <view class="text-gray text-sm">200</view>
                            </view>
                            <view class="margin-xs  padding radius flex-sub box">
                                <view class="text-orange text-sm text-cut">下单代理数</view>
                                <view class="margin-tb flex align-center justify-between">300
                                    <view class="text-red">⬆</view>
                                </view>
                                <view class="text-gray text-sm">200</view>
                            </view>
                            <view class="margin-xs  padding radius flex-sub box">
                                <view class="text-red text-sm text-cut">转换率</view>
                                <view class="margin-tb flex align-center justify-between">300
                                    <view class="text-red">⬆</view>
                                </view>
                                <view class="text-gray text-sm">200</view>
                            </view>

                        </view>
                        <view class="margin-tb text-cut box">
                            <qiun-data-charts
                                :chartData="chartData"
                                :opts="opts"
                                type="line" />
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import qiunDataCharts from "/src/components/qiun-data-charts/qiun-data-charts";
import goodsInfoCard from "/src/components/erp/goodsInfoCard";

export default {
    name: "selectDataCountIndex",
    components: {
        boxTitle,
        qiunDataCharts,
        goodsInfoCard
    },
    onLoad(option) {
        this.option = option;
    },
    data() {

        return {

            radioValue: [],
            tag: [
                {
                    title: "发布代理",
                    num: "46"
                },
                {
                    title: "已代理",
                    num: "23"
                },
                {
                    title: "剩余代理",
                    num: "23"
                }
            ],
            positionList: [
                {
                    title: "代理区域",
                    num: "贵州省"
                },
                {
                    title: "发布代理",
                    num: "1"
                },
                {
                    title: "已代理",
                    num: "1"
                },
                {
                    title: "剩余代理",
                    num: "0"
                }
            ],
            positionArr: [
                {
                    title: "省级",
                    city: null,
                    id: "0001",
                    cityAgent: [
                        ["贵州省", "1", "1", "0"],
                        ["云南省", "1", "1", "0"]
                    ]
                }
            ],
            start: 0,
            activityList: [
                {
                    name: "商品"
                },
                {
                    name: "代理"
                },
                {
                    name: "活动"
                }
            ],
            goodsID: null,
            goodTabs: [
                {
                    name: "商品"
                },
                {
                    name: "代理"
                },
                {
                    name: "活动"
                }
            ],
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
            chartData: {},
            //您可以通过修改 config-ucharts.js 文件中下标为 ['line'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
            opts: {
                color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
                padding: [15, 10, 0, 15],
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
    onReady() {
        this.getServerData();
    },
    methods: {
      dispatchEvent(url) {
        uni.navigateTo({
          url
        });
      },
        getGoodsInfo(data) {
            this.goodsID = data.id;
        },
        select(url) {
            uni.navigateTo({
                url
            });
        },
      dataDetali(url) {
        uni.navigateTo({
          url
        });
      },

        pageTo(path){
            uni.navigateTo({
                url:path
            });
        },
        getServerData() {
            //模拟从服务器获取数据时的延时
            setTimeout(() => {
                //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
                let res = {
                    categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
                    series: [
                        {
                            name: "成交量A",
                            data: [35, 8, 25, 37, 4, 20]
                        },
                        {
                            name: "成交量B",
                            data: [70, 40, 65, 100, 44, 68]
                        },
                        {
                            name: "成交量C",
                            data: [100, 80, 95, 150, 112, 132]
                        }
                    ]
                };
                this.chartData = JSON.parse(JSON.stringify(res));
            }, 500);
        }
    }
};
</script>

<style scoped>
.box {
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 0.25em;
    /*box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;*/
}

.header {
    position: fixed;
    left: 0px;
    width: 100%;
    z-index: 9999;
}
</style>
