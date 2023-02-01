<template>
    <view>
        <view class="bg-white padding-sm">
            <view class="flex justify-between align-center text-bold text-lg margin-bottom">
                <view class="border-left">商品详情</view>
            </view>
            <view v-for="item in 2" v-if="product" :key="item" class="flex align-center justify-between margin-bottom">
                <image class="productImg"
                       mode=""
                       src="https://img2.baidu.com/it/u=2372355366,383996104&fm=253&fmt=auto&app=138&f=JPEG?w=446&h=624"></image>
                <view class="flex flex-direction justify-between" style="width: 68%;height: 180rpx">
                    <view>贵州飞天茅台 瓶装500ml白酒</view>
                    <view class="text-red text-sm">成交量：2.43%万瓶
                        <text class="text-black text-df"> /</text>
                        成交占比：0%
                    </view>
                    <view>建议零售价：
                        <text class="text-red text-bold">￥1365.00</text>
                    </view>
                    <view class="flex align-center justify-between">
                        <text class="bg-gray text-sm text-gray padding-lr-sm radius" @click="lookInfo(0)">商品详情</text>
                        <text class="bg-gray text-sm text-gray padding-lr-sm radius" @click="lookInfo(1)">成交数据</text>
                        <text class="bg-gray text-sm text-gray padding-lr-sm radius" @click="lookInfo(2)">代理政策</text>
                    </view>
                </view>
            </view>
            <view v-html="goodsDetails.goodsDetails"></view>
        </view>
        <!--        <view class="flex flex-direction">-->
        <!--            <image v-for="(item,index) in list" :key="index" :src="item" mode="widthFix"-->
        <!--                   style="width: 100%">-->
        <!--            </image>-->
        <!--        </view>-->
        <view class="bg-white padding-sm margin-tb-sm">
            <view class="flex justify-between align-center text-bold text-lg margin-bottom">
                <view class="border-left">商品参数</view>
            </view>
            <!--            <boxTitle title="商品参数"></boxTitle>-->
            <table border="1" style="margin: 0 auto">
                <tr class="text-sm">
                    <td>品名</td>
                    <td class="padding-lr-sm " style="width: 80%">
                        {{ goodsDetails.goodsName }}
                    </td>
                </tr>
                <tr class="text-sm">
                    <td>香型</td>
                    <td class="padding-lr-sm " style="width: 80%">
                        {{ goodsDetails.goodsInfo ? goodsDetails.goodsInfo.controAromaticType : "" }}
                    </td>
                </tr>
                <tr class="text-sm">
                    <td>酒精度</td>
                    <td class="padding-lr-sm " style="width: 80%">
                        {{ goodsDetails.goodsInfo ? goodsDetails.goodsInfo.controAlcohol : "" }}
                    </td>
                </tr>
                <tr class="text-sm">
                    <td>容量</td>
                    <td class="padding-lr-sm " style="width: 80%">
                        {{ goodsDetails.goodsInfo.controNetContent }}
                    </td>
                </tr>
                <tr class="text-sm">
                    <td>酒瓶材质</td>
                    <td class="padding-lr-sm " style="width: 80%">
                        {{ goodsDetails.goodsInfo.controMaterialQuality }}
                    </td>
                </tr>
                <tr class="text-sm">
                    <td>厂家</td>
                    <td class="padding-lr-sm " style="width: 80%">
                        {{ goodsDetails.goodsInfo.controManufactor }}
                    </td>
                </tr>
                <tr class="text-sm">
                    <td>产地</td>
                    <td class="padding-lr-sm " style="width: 80%">
                        {{ goodsDetails.goodsInfo.controPlaceOfOrigin }}
                    </td>
                </tr>
                <tr class="text-sm">
                    <td>原料</td>
                    <td class="padding-lr-sm " style="width: 80%">
                        {{ goodsDetails.goodsInfo.controRawMaterial }}
                    </td>
                </tr>
                <tr class="text-sm">
                    <td>执行标准</td>
                    <td class="padding-lr-sm " style="width: 80%">
                        {{ goodsDetails.goodsInfo.controExecutiveStandards }}
                    </td>
                </tr>
                <tr class="text-sm">
                    <td>规格参数</td>
                    <td class="padding-lr-sm " style="width: 80%">
                    </td>
                </tr>
                <tr class="text-sm">
                    <td>商品编号</td>
                    <td class="padding-lr-sm " style="width: 80%">

                        {{ goodsDetails.goodsInfo.controArticleNo }}
                    </td>
                </tr>
                <tr class="text-sm">
                    <td>主体</td>
                    <td class="padding-lr-sm " style="width: 80%"></td>
                </tr>
                <tr class="text-sm">
                    <td>保质期</td>
                    <td class="padding-lr-sm " style="width: 80%">
                        {{ goodsDetails.goodsInfo.controQualityGuaranteePeriod }}
                    </td>
                </tr>
                <tr class="text-sm">
                    <td>储存方式</td>
                    <td class="padding-lr-sm " style="width: 80%">
                        {{ goodsDetails.goodsInfo.controStorageMode }}
                    </td>
                </tr>
                <tr class="text-sm">
                    <td>参数</td>
                    <td class="padding-lr-sm " style="width: 80%"></td>
                </tr>
                <tr class="text-sm">
                    <td>适用场景</td>
                    <td class="padding-lr-sm " style="width: 80%">
                        {{ goodsDetails.goodsInfo.controApplicableScenarios }}
                    </td>
                </tr>
                <tr class="text-sm">
                    <td>包装形式</td>
                    <td class="padding-lr-sm " style="width: 80%">
                        {{ goodsDetails.goodsInfo.controPackagingForm }}
                    </td>
                </tr>
            </table>
        </view>
        <u-popup :round="6" :show="show" mode="center" @close="close" @open="open">
            <view v-show="lookInfoState == 0" class="productParameter bg-white padding-tb-lg padding-lr-sm">
                <view class="flex align-center justify-between">
                    <text></text>
                    <text class="text-lg">产品参数</text>
                    <text class="cuIcon-close" style="font-size: 24px" @click="close"></text>
                </view>
                <table border="1" class="margin-top">
                    <tr v-for="(item, index) in parameterList" :key="index" class="text-sm">
                        <td>{{ item.tdName }}</td>
                        <td>{{ item.tdContent }}</td>
                    </tr>

                </table>
                <view class="flex justify-between margin-top">
                    <button class="cu-btn bg-gray" style="width: 46%" @click="close">取消</button>
                    <button class="cu-btn bg-red" style="width: 46%">查看详情</button>
                </view>
            </view>
            <view v-show="lookInfoState == 1" class="productParameter bg-white padding-tb-lg padding-lr-sm">
                <view class="flex align-center justify-between">
                    <text></text>
                    <text class="text-lg">成交数据</text>
                    <text class="cuIcon-close" style="font-size: 24px" @click="close"></text>
                </view>
                <view class="margin-tb">
                    <view class="flex align-center">
                        <view class="bg-red margin-right-sm"
                              style="width: 8rpx; height: 30rpx; border-radius: 10rpx"></view>
                        <text class="text-bold text-lg">本月销量走势图</text>
                    </view>
                    <view>
                        <view class="flex padding-sm align-center showType">
                            <view class="flex align-center text-bold padding-right-sm">茅台王子酒
                                <view class="cuIcon-triangledownfill"></view>
                            </view>
                            <u-tag :plain="showType!=='1'" size="mini" text="成交量" @click="changeType('1')"></u-tag>
                            <u-tag :plain="showType!=='2'" class="margin-left-sm" size="mini" text="走势图"
                                   type="error"
                                   @click="changeType('2')"></u-tag>
                        </view>
                    </view>
                    <view>
                        <qiun-data-charts
                            v-if="showType=='1'"
                            :chartData="chartData1"
                            :opts="opts"
                            type="line"
                        />
                        <qiun-data-charts
                            v-if="showType=='2'"
                            :chartData="chartData2"
                            :opts="opts"
                            type="column"
                        />
                    </view>
                </view>
                <view class="flex justify-between margin-top">
                    <button class="cu-btn bg-gray" style="width: 46%" @click="close">取消</button>
                    <button class="cu-btn bg-red" style="width: 46%">查看详情</button>
                </view>
            </view>
            <view v-show="lookInfoState == 2" class="productParameter bg-white padding-tb-lg padding-lr-sm">
                <view class="flex align-center justify-between">
                    <text></text>
                    <text class="text-lg">温馨提示</text>
                    <text class="cuIcon-close" style="font-size: 24px" @click="close"></text>
                </view>
                <view class="margin-tb">
                    <text>
                        尊敬好的好酒选用户，您好！为保证酒类市场公平行，代理政策必须是会员才可查看，您可以先入驻会员，成为会员后可代理平台产品。谢谢您的理解！
                    </text>
                </view>
                <view class="flex justify-between margin-top">
                    <button class="cu-btn bg-gray" style="width: 46%" @click="close">再考虑</button>
                    <button class="cu-btn bg-red" style="width: 46%" @click="">会员入驻</button>
                </view>
            </view>
        </u-popup>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import qiunDataCharts from "/src/components/qiun-data-charts/qiun-data-charts";

export default {
    name: "fxb-product-detail",
    props: {
        product: {
            type: Boolean,
            defaults: true
        },
        goodsDetails: {
            default: function() {
                return {
                    goodsInfo:{},
                };
            },
            type: Object
        }
    },
    components: {
        boxTitle,
        qiunDataCharts
    },

    data() {
        return {
            showType: "1",
            chartData2: {},
            chartData1: {},
            show: false,
            lookInfoState: -1,
            parameterList: [
                {
                    tdName: "品名",
                    tdContent: "53°贵州茅台1935酒500ml单瓶装"
                },
                {
                    tdName: "香型",
                    tdContent: "酱香型"
                },
                {
                    tdName: "酒精度",
                    tdContent: "53%vol"
                },
                {
                    tdName: "容量",
                    tdContent: "500ml/瓶"
                },
                {
                    tdName: "酒瓶材质",
                    tdContent: "土陶瓶"
                },
                {
                    tdName: "厂家",
                    tdContent: "中国贵州茅台酒厂(集团)有限责任公司"
                },
                {
                    tdName: "产地",
                    tdContent: "贵州省遵义市仁怀镇"
                },
                {
                    tdName: "原料",
                    tdContent: "优质糯高梁、小麦、水"
                },
                {
                    tdName: "执行标准",
                    tdContent: "GB/T26760（优级）"
                },
                {
                    tdName: "规格参数",
                    tdContent: ""
                },
                {
                    tdName: "商品编号",
                    tdContent: "1564612215"
                },
                {
                    tdName: "主体",
                    tdContent: ""
                },
                {
                    tdName: "保质期",
                    tdContent: "长期"
                },
                {
                    tdName: "储存方式",
                    tdContent: "密闭，放置于阴凉处、干燥处、避免阳光直射"
                },
                {
                    tdName: "参数",
                    tdContent: ""
                },
                {
                    tdName: "度数",
                    tdContent: "50度以上"
                },
                {
                    tdName: "适用场景",
                    tdContent: "婚宴，纪念日，聚会，喜宴，宴请，自饮"
                },
                {
                    tdName: "包装形式",
                    tdContent: "瓶装"
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
            list: [
                this.$config.IMG_SERVER + "/productDetails/东方国宾详情图_01.png",
                this.$config.IMG_SERVER + "/productDetails/东方国宾详情图_02.png",
                this.$config.IMG_SERVER + "/productDetails/东方国宾详情图_03.png",
                this.$config.IMG_SERVER + "/productDetails/东方国宾详情图_04.png",
                this.$config.IMG_SERVER + "/productDetails/东方国宾详情图_05.png",
                this.$config.IMG_SERVER + "/productDetails/东方国宾详情图_06.png",
                this.$config.IMG_SERVER + "/productDetails/东方国宾详情图_07.png",
                this.$config.IMG_SERVER + "/productDetails/东方国宾详情图_08.png"
            ]
        };
    },
    mounted() {

        this.getServerData();
    },
    methods: {
        lookInfo(e) {
            this.show = true;
            this.lookInfoState = e;
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
.border-left {
    padding-left: 10px;
    border-left: 4px solid red;
}

.certificateImg {
    width: 100%;
}

.productParameter {
    width: 600rpx;
    border-radius: 20rpx;
}

.productImg {
    width: 180rpx;
    height: 180rpx;
}

td,
th,
table {
    border: 1px solid #bebebe;
}

tr {
    td {
        &:nth-child(1) {
            text-align: center;
            padding: 14rpx 0;
            width: 154rpx;
        }
    }
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}
</style>
