<template>
    <view>
        <view style="width: 100%" class="productList bg-white padding-sm shadow-warp">
            <view class="flex">
                <image @click="jumpDetail" class="titleImage" mode="aspectFit" :src="imgUrl"></image>
                <view class="flex flex-direction justify-around margin-left w420">
                    <text @click="jumpDetail" class="beyond text-black">
                        {{ title }}
                    </text>
                    <text class="beyond text-gray text-sm margin-top-xs">{{ infoText }}</text>
                    <view class="flex justify-between align-center margin-top-xs ">
                        <button class="cu-btn line-orange sm" @click="lookInfo(0)">看参数</button>
                        <button class="cu-btn line-red sm" @click="lookInfo(1)">看数据</button>
                        <button class="cu-btn line-blue sm" @click="lookInfo(2)">看政策</button>
                    </view>
                  <view class="flex align-center margin-top-xs">
                  <button class="cu-btn text-red bg-red-light sm">代理价</button>
                  <view class="text-red text-bold">￥ 188.00</view>
                  </view>
                    <view class="flex justify-between align-center margin-top-xs" @click="jumpPay">
                        <text class="text-red text-bold text-sm">零售价:￥{{ price }}</text>
                      <button class="cu-btn text-blue hp sm" @click="lookInfo(1)">看数据</button>
                    </view>
                    <view class="flex justify-between flex-sub margin-top-xs">
                        <button class="bg-orange cu-btn flex-sub padding-tb sm" @click="applySample">申请样品</button>
                        <button class="bg-red cu-btn flex-sub padding padding-tb margin-left sm" @click="jumpAgentProducts">我要代理</button>
                    </view>
                </view>
            </view>
        </view>

        <u-popup :show="show" @close="close" @open="open" mode="center" :round="6">
            <view v-show="lookInfoState == 0" class="productParameter bg-white padding-tb-lg padding-lr-sm">
                <view class="flex align-center justify-between">
                    <text></text>
                    <text class="text-lg">产品参数</text>
                    <text @click="close" class="cuIcon-close" style="font-size: 24px"></text>
                </view>
                <table border="1" class="margin-top">
                    <tr v-for="(item, index) in parameterList" :key="index" class="text-sm">
                        <td>{{ item.tdName }}</td>
                        <td>{{ item.tdContent }}</td>
                    </tr>
                </table>
                <view class="flex justify-between margin-top">
                    <button @click="close" style="width: 46%" class="cu-btn bg-gray">取消</button>
                    <button style="width: 46%" class="cu-btn bg-red">查看详情</button>
                </view>
            </view>
            <view v-show="lookInfoState == 1" class="productParameter bg-white padding-tb-lg padding-lr-sm">
                <view class="flex align-center justify-between">
                    <text></text>
                    <text class="text-lg">成交数据</text>
                    <text @click="close" class="cuIcon-close" style="font-size: 24px"></text>
                </view>
                <view class="margin-tb">
                    <view class="flex align-center">
                        <view style="width: 8rpx; height: 30rpx; border-radius: 10rpx"
                              class="bg-red margin-right-sm"></view>
                        <text class="text-bold text-lg">本月销量走势图</text>
                    </view>
                    <view>
                        <view class="flex padding-sm align-center showType">
                            <view class="flex align-center text-bold padding-right-sm">茅台王子酒
                                <view class="cuIcon-triangledownfill"></view>
                            </view>
                            <u-tag size="mini" text="成交量" @click="changeType('1')" :plain="showType!=='1'"></u-tag>
                            <u-tag size="mini" class="margin-left-sm" text="走势图" :plain="showType!=='2'"
                                   @click="changeType('2')"
                                   type="error"></u-tag>
                        </view>
                    </view>
                    <view>
                        <qiun-data-charts
                            v-if="showType=='1'"
                            type="line"
                            :opts="opts"
                            :chartData="chartData1"
                        />
                        <qiun-data-charts
                            v-if="showType=='2'"
                            type="column"
                            :opts="opts"
                            :chartData="chartData2"
                        />
                    </view>
                </view>
                <view class="flex justify-between margin-top">
                    <button @click="close" style="width: 46%" class="cu-btn bg-gray">取消</button>
                    <button style="width: 46%" class="cu-btn bg-red">查看详情</button>
                </view>
            </view>
            <view v-show="lookInfoState == 2" class="productParameter bg-white padding-tb-lg padding-lr-sm">
                <view class="flex align-center justify-between">
                    <text></text>
                    <text class="text-lg">温馨提示</text>
                    <text @click="close" class="cuIcon-close" style="font-size: 24px"></text>
                </view>
                <view class="margin-tb">
                    <text>
                        尊敬好的好酒选用户，您好！为保证酒类市场公平行，代理政策必须是会员才可查看，您可以先入驻会员，成为会员后可代理平台产品。谢谢您的理解！
                    </text>
                </view>
                <view class="flex justify-between margin-top">
                    <button @click="close" style="width: 46%" class="cu-btn bg-gray">再考虑</button>
                    <button style="width: 46%" class="cu-btn bg-red" @click="jumpMember">会员入驻</button>
                </view>
            </view>
        </u-popup>
    </view>
</template>

<script>
import qiunDataCharts from "/src/components/qiun-data-charts/qiun-data-charts";

export default {
    name: "fxb-member-product-list",
    components: {
        qiunDataCharts
    },
    props: {
        title: {
            type: String,
            default: "标题"
        },
        infoText: {
            type: String,
            default: "产品信息"
        },
        price: {
            type: String,
            default: "价格"
        },
        imgUrl: {
            type: String,
            default:
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200331%2F4ec38d78be8946cd8b4a2cccee6208ca.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664448433&t=49de3d357533d7cb5e487e12293c22bd"
        }
    },
    data() {
        return {
            showType: "1",
            chartData2: {},
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
                    tdName: "生产日期",
                    tdContent: "见瓶身/见标签喷码"
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
            chartData1: {}
        };
    },
    mounted() {
        this.getServerData();
    },
    methods: {
        jumpMember() {
            this.show = false;
            uni.navigateTo({
                url: "/pages/memberPayment/memberPay"
            });
        },
        applySample() {
            uni.navigateTo({
                url: "/pages/index/applicationSample/sampleOrder?id=125&url="+require('/src/static/bottle/33.jpeg')
            });
        },
        jumpDetail() {
            uni.navigateTo({
                url: "/pages/hotActivity/activityDetails"
            });
        },
        changeType(val) {
            this.showType = val;
        },
        jumpAgentProducts() {
            uni.navigateTo({
                url: "pages/agentProducts/agentProducts"
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
        lookInfo(e) {
            this.show = true;
            this.lookInfoState = e;
        },
        jumpPay() {
            uni.navigateTo({
                url: "pages/memberPayment/memberPay"
            });
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
.product {
    .productList {
        border-radius: 8rpx;
        margin-bottom: 20rpx;
    }

    .titleImage {
        width: 260rpx;
        height: 260rpx;
    }

    .w420 {
        width: 360rpx;
    }

    .look {
        border: 1px #38a2ff solid;
        padding: 0 4rpx;
        margin-right: 6rpx;
        color: #25acff;
        background: #cbe5ff;
    }

    .beyond {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .beyond2 {
        overflow: hidden;
        text-overflow: ellipsis;
        text-overflow: -o-ellipsis-lastline;
        display: -webkit-box;
        -webkit-line-clamp: 2; //可设置显示的行数
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .productParameter {
        width: 600rpx;
        border-radius: 20rpx;
    }
.hp{
  border-top-right-radius: 35px;
  border-top-left-radius:35px;
  border-bottom-right-radius: 35px;
  border-bottom-left-radius: 35px;
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
                width: 120rpx;
            }

            &:nth-child(2) {
                padding: 0 10rpx;
            }
        }
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
}
</style>
