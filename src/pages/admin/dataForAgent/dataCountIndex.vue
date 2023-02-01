<template>
    <view>
        <u-navbar :autoBack="true" title="数据统计"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`" class="bg-white padding-tb">
            <view class="padding-lr">
                <u--input
                    border="false"
                    class="bg-gray"
                    placeholder="输入代理商名称、手机号进行搜索"
                    prefixIcon="search"
                    prefixIconStyle="font-size: 22px;color: #909399"
                ></u--input>
            </view>
        </view>
        <view class="margin-tb padding-lr">
            <view class="whiteBoxShadow">
                <view class="flex justify-between">
                    <boxTitle title="商品"></boxTitle>
                    <view class="flex h100  align-center" @click="selectContract">
                        <view class="margin-right-sm text-gray">选择合同查询</view>
                        <view class="cuIcon-right"></view>
                    </view>
                </view>
<!--                <u-tabs :list="goodTabs" lineColor="#E54D42" lineWidth="34" lineHeight="4"></u-tabs>-->
                <view class="  margin-tb-lg"></view>
<!--                <view class="margin-tb text-bold ">-->
<!--                    合同任务量-->
<!--                </view>-->
                <view class="try" style="transform: translateY(-22px)">
                    <view class="flex justify-between">
                        <view class="text-center margin-top   padding-lr">
                            <view class="text-white text-lg">1800/瓶</view>
                            <view class="margin-top-sm text-white">进货总目标</view>
                        </view>
                      <view style="width: 1rpx;height: 27px;margin-left: 10px;margin-top: 30px" class="bg-gray margin-lr-xs margin-left"></view>
                        <view class="text-center margin-top   padding-lr">
                            <view class="text-white text-lg margin-top-xs">1800655.00</view>
                            <view class="margin-top-sm text-white">进货总金额</view>
                        </view>
                      <view style="width: 1rpx;height: 27px;margin-top: 30px" class="bg-gray margin-right "></view>
                      <view class="text-center margin-top margin-right ">
                            <view class="text-white text-lg margin-top-xs">1800/瓶</view>
                            <view class="margin-top-sm text-white">目前进货量</view>
                        </view>
                    </view>
                    <view>
                        <view class="cu-progress hp round margin-top ">
                            <view :style="[{ width:'40%'}]" class="bg-yellow round"></view>
                        </view>
                        <view class="flex justify-between margin-top-sm ">
                            <view></view>
                            <view class="text-white margin-right text-sm">合同任务量进度</view>
                        </view>
                    </view>
                </view>
             <view style="transform: translateY(-22px)">
                <view class="flex justify-between margin-tb" @click="selectTime" >
                    <view class="text-bold">指标</view>
                    <view class="flex">
                        <view class="flex align-center text-orange">近30日/30日环比</view>
                        <view class="cuIcon-unfold margin-top-xs margin-left-sm text-orange"></view>
                    </view>
                </view>
                <view class="flex justify-between ">
                    <view class="text-black text-bold">近30日合同发货统计</view>
                    <view class="flex align-center write text-white" style="font-size: 12px;">查看发货记录
                    </view>
                </view>
                <view class="margin-tb">
                    <qiun-data-charts
                        :chartData="chartData"
                        :opts="opts"
                        type="line" />
                </view>
            </view>
            </view>
            <view class="flex justify-between align-center margin-top-sm">
                <view class="padding u-border radius whiteBoxShadow w50 margin-right-sm" style="height: 111px">
                    <view class="text-gray text-sm">近30日</view>
                    <view class="margin-tb">300/瓶</view>
                    <view class="text-gray text-sm">进货总额：¥79200.00</view>
                </view>
                <view class="padding u-border radius whiteBoxShadow w50" style="height: 111px">
                    <view class="flex align-center justify-between">
                        <view class="text-gray text-sm">近30日</view>
                        <view class="text-red">2%⬆</view>
                    </view>
                    <view class="margin-tb">300/瓶</view>
                    <view class="text-gray text-sm">进货总额：¥79200.00</view>
                </view>
            </view>
        </view>

        <u-popup :closeable="true" :round="10" :show="showPop" mode="bottom" @close="close" @open="open">
            <view class="text-center w100 padding">选择时段</view>
            <u-radio-group
                v-model="radiovalue"
                placement="column"
            >
                <view class="flex align-center padding-sm  justify-between">
                    <view>
                        <view class="">近30日数据/ <text class="text-gray">30日环比</text></view>
                        <view class="text-gray margin-top-sm">2022年9月8日——2022年10月8日</view>
                    </view>
                    <u-radio
                        :customStyle="{marginBottom: '8px'}"
                        name="近30日数据"
                    >
                    </u-radio>


                </view>
                <view class="flex align-center padding-sm  justify-between">
                    <view>
                        <view class="">本月至今/<text class="text-gray">月同比</text></view>
                        <view class="text-gray margin-top-sm">2022年10月</view>
                    </view>
                    <u-radio
                        :customStyle="{marginBottom: '8px'}"
                        name="本月至今"
                    >
                    </u-radio>
                </view>
                <view class="flex align-center padding-sm  justify-between">
                    <view>
                        <view class="">本年至今/<text class="text-gray">年同比</text></view>
                        <view class="text-gray margin-top-sm">2022年</view>
                    </view>
                    <u-radio
                        :customStyle="{marginBottom: '8px'}"
                        name="本年至今"
                    >
                    </u-radio>
                </view>
            </u-radio-group>
            <view class="margin-tb flex padding-lr  justify-around" @click="showPop=false">
                <view class="cu-btn w50 margin-right radius">取消</view>
                <view class="cu-btn bg-red w50 radius">确认</view>
            </view>
        </u-popup>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import qiunDataCharts from "/src/components/qiun-data-charts/qiun-data-charts";

export default {
    name: "selectGoods",
    components: {
        boxTitle,
        qiunDataCharts
    },
    data() {
        return {
            radiovalue:'',
            showPop: false,
            goodsID: null,
            goodTabs: [
                {
                    name: "合同任务"
                },
                // {
                //     name: "超标任务"
                // }
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
        selectTime() {
            this.showPop = true;
        },
        getGoodsInfo(data) {
            this.goodsID = data.id;
        },
        selectContract() {
            uni.navigateTo({
                url: "pages/admin/dataForAgent/selectContract"
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
        },
        open(){

        },
        close(){

        }
    }
};
</script>

<style lang="scss" scoped>
.box {
    border-radius: 5px;
    box-shadow: rgba(67, 71, 85, 0.27) 0 0 0.25em, rgba(90, 125, 188, 0.05) 0 0.25em 1em;
}
.try{
  height: 278rpx;
  background: linear-gradient(360deg, #FF1100 0%, #FF7000 100%);
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
}
.hp{
  width: 270px;
  height: 15px;
  border-radius: 20px 20px 20px 20px;
  opacity: 1;
  margin-left: 20px;
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
</style>