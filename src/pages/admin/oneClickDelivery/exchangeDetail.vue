<template>
    <view class="content">
        <!--顶部标题-->
        <u-navbar :border="false" :fixed="true" :autoBack="true" @rightClick="switchOrder"
                  :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
                  :safeAreaInsetTop="false">
            <view slot="left" class="u-nav-slot">
                <text style="font-size: 36rpx" class="cuIcon-back"></text>
            </view>
            <view slot="center" class="u-nav-slot">
                <view class="text-lg">{{ isAfterSales ? "售后列表" : "退换货" }}</view>
                <view style="width:750rpx" class="search bg-white">
                    <view class="bg-white padding-lr">
                        <view class="flex align-center margin-top-sm bg-gray" style="border-radius: 4px">
                            <text class="cuIcon-search text-red"
                                  style="font-size: 20px; padding: 4px; margin-left: 4px"></text>
                            <input
                                type="text"
                                placeholder-class="text-gray text-sm"
                                placeholder="请输入商品名称进行搜索"
                                confirm-type="search"
                            />
                        </view>
                        <!--产品列表导航-->
                        <u-tabs itemStyle="width:20%;height:88rpx;white-space:nowrap;"
                                activeStyle="font-size:32rpx;font-weight:bold"
                                inactiveStyle="color:gray;font-size:26rpx" lineColor="red" :list="activityList"
                                :current="tabIndex"
                                @click="tabSelect"></u-tabs>
                    </view>
                </view>
            </view>
            <view slot="right" class="u-nav-slot">
            </view>
        </u-navbar>

        <view class="padding-sm contentBox"
              :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }">
            <view class="flex justify-between margin-bottom-sm">
                <view class="flex align-center">
                    <view class="text-bold">2022年9月</view>
                    <view class="cuIcon-unfold" style="width: 11px;"></view>
                </view>
                <view @click="show = true" class="flex text-gray">
                    <view class="cuIcon-filter" style="font-size: 16px"></view>
                    <text>筛选·已选0</text>
                </view>
            </view>


            <view class="whiteBoxShadow margin-tb-sm" v-for="item in orderList" :key="item.oddNumbers"
                  @click="gotoPath(item.status)">
                <view class="flex justify-between">
                    <view class="flex align-center">
                        <view class="cuIcon-titles text-red"></view>
                        <view class="text-bold">退换货编号：{{ item.oddNumbers }}</view>
                    </view>
                    <view :class="`${item.status===1?'text-orange':item.status===2?'text-red':'text-green'}`">
                        {{ item.status == 1 ? "待审核" : item.status == 2 ? "未通过" : item.status == 3||item.status==4||item.status==5? "进行中" : "已完成" }}
                    </view>
                </view>


                <view class="u-border-bottom margin-tb-sm"></view>
                <wldtext
                    :goodsShipped="item.goodsShipped"
                    :shipmentQuantity="item.shipmentQuantity"
                    :submitTime="item.submitTime"
                    class="margin-tb-sm"
                >
                </wldtext>
            </view>
        </view>
        <u-popup :show="show" mode="right" @close="close" @open="open">
            <view class="scrollViewBox"
                  :style="'padding-top: ' + (CustomBar) + 'px;transform:rotate(360deg);'">
                <scroll-view class="scrollView" scroll-y="true"
                             :style="{ '--ScreenHeight': (ScreenHeight-(CustomBar+StatusBar)) + 'px' }">
                    <ScreenAlcohol title="按时间" @getInfo="getInfo" :alcoholList="dateList"></ScreenAlcohol>
                </scroll-view>
                <view class="flex align-center justify-around">
                    <button style="width: 45%" class="cu-btn u-border bg-white radius margin-right-sm">重置</button>
                    <button style="width: 45%" class="cu-btn bg-red radius" @click="close">确定</button>
                </view>
            </view>
        </u-popup>
    </view>
</template>

<script>
import ScreenAlcohol from "/src/pages/agent/components/fxb-screen-alcohol";
import productBox from "/src/pages/admin/components/productBox.vue";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import wldtext from "../../../components/wld/wldtext";


export default {
    components: {
        productBox,
        ScreenAlcohol,
        boxTitle,
        wldtext
    },
    created() {
        // this.$http.addGoods()调用一个方法从后台获取数据
    },
    data() {
        return {
            orderList: [
                {
                    status: 0,
                    oddNumbers: 2309272334,
                    goodsShipped: "东方国宾·尊致酒酱香型白酒/东方国宾贵州好酒选",
                    shipmentQuantity: 76,
                    submitTime: "2022-7-5"
                },
                {
                    status: 1,
                    oddNumbers: 2309272534,
                    goodsShipped: "东方国宾·尊致酒酱香型白酒/东方国宾贵州好酒选",
                    shipmentQuantity: "76",
                    submitTime: "2022-7-5"
                },
                {
                    status: 2,
                    oddNumbers: 230923234,
                    goodsShipped: "东方国宾·尊致酒酱香型白酒/东方国宾贵州好酒选",
                    shipmentQuantity: 76,
                    submitTime: "2022-7-5"
                },
                {
                    status: 3,
                    oddNumbers: 2308973434,
                    goodsShipped: "东方国宾·尊致酒酱香型白酒/东方国宾贵州好酒选",
                    shipmentQuantity: 76,
                    submitTime: "2022-7-5"
                },
                {
                    status: 4,
                    oddNumbers: 230892434,
                    goodsShipped: "东方国宾·尊致酒酱香型白酒/东方国宾贵州好酒选",
                    shipmentQuantity: 76,
                    submitTime: "2022-7-5"
                },
                {
                    status: 5,
                    oddNumbers: 230894434,
                    goodsShipped: "东方国宾·尊致酒酱香型白酒/东方国宾贵州好酒选",
                    shipmentQuantity: 76,
                    submitTime: "2022-7-5"
                }
            ],
            show: false,
            showMoney: false,
            dateList: [
                "1个月内", "3个月内", "6个月内", "今年", "2021年", "2020年", "2019年", "2018年", "2017年"
            ],
            isAfterSales: false,
            tabIndex: 0,
            activityList: [
                {
                    name: "全部"
                },
                {
                    name: "待付款"
                },
                {
                    name: "待发货"
                },
                {
                    name: "待收货"
                },
                {
                    name: "已完成"
                }
            ],
            list: [],
            filterData: [
                {
                    "name": "时间范围筛选",
                    "type": "hierarchy-column",
                    "submenu": [
                        {
                            "name": "2022年10月",
                            "value": "2022年10月"
                        },
                        {
                            "name": "2022年11月",
                            "value": "2022年11月"
                        },
                        {
                            "name": "2022年12月",
                            "value": "2022年12月"
                        }
                    ]
                }
            ],
            defaultSelected: [
                [0, 0],
                [0, 0]
            ]
        };
    },
    onShow() {
        this.getList();
    },
    onLoad(options) {
        if (options.isAfterSales) {
            this.isAfterSales = options.isAfterSales;
        }
    },
    watch: {
        isAfterSales() {
            this.tabIndex = 0;
            if (this.isAfterSales) {
                this.activityList = [
                    {
                        name: "全部"
                    },
                    {
                        name: "待审核"
                    },
                    {
                        name: "未通过"
                    },
                    {
                        name: "进行中"
                    },
                    {
                        name: "已完成"
                    }
                ];
            } else {
                this.activityList = [
                    {
                        name: "全部"
                    },
                    {
                        name: "待付款"
                    },
                    {
                        name: "待发货"
                    },
                    {
                        name: "待收货"
                    },
                    {
                        name: "已完成"
                    }
                ];
            }
            this.getList();
        }
    },
    methods: {
        open() {
            // console.log('open');
            this.show = true;
        },
        close() {
            this.show = false;
            // console.log('close');
        },
        getInfo(e) {
            this.msg = e;
        },
        switchOrder() {
            this.isAfterSales = !this.isAfterSales;
            this.getList(Math.ceil(Math.random() * 10));
        },
        getList(count = 6) {
            this.list = [];
            for (let i = 0; i <= count; i++) {
                this.list.push({
                    imgUrl: "/img/index/img_17%402x.png",
                    oddNumbers: "156468545222",
                    name: "东方国宾·尊致酒53°瓶装500ml",
                    num: "3",
                    price: "300.00",
                    isLogistics: false,
                    status: this.tabIndex,
                    btn: this.tabIndex % 2 == 0 ? true : false
                });
            }
        },
        gotoPath(status) {
            // console.log(e);
            // return;
            // '/pages/admin/goodsSales/goodsExchangeDetails?status=1?&listStatus=1')"
            uni.navigateTo({
                url: '/pages/admin/goodsSales/goodsExchangeDetails?status=' + status
            });
        },

        gotoDetail() {
            let status = this.tabIndex == 0 ? 1 : this.tabIndex;
            if (this.isAfterSales) {
                uni.navigateTo({
                    url: "/pages/admin/goodsSales/goodsExchangeDetails?status=" + status
                });
            } else {
                uni.navigateTo({
                    url: `/pages/index/applicationSample/orderDetailsIndex?status=${status}`
                });
            }
        },
        tabSelect(e) {
            this.tabIndex = e.index;
            this.getList(Math.ceil(Math.random() * 10));
            // [].filter()

        },
        confirm() {

        }
    }
};
</script>

<style lang="scss" scoped>
.scrollViewBox {
    width: 600rpx;
    box-sizing: border-box;

    .scrollView {
        padding-bottom: 104rpx;
    }

    .botBtn {
        width: 100%;
        position: fixed;
        bottom: 0;
        right: 0;
    }
}

.searchBox {
    position: relative;
}

.border {
    width: 100%;
    height: 2rpx;
    background-color: #e6dee6;
}

.search {
    position: fixed;
    width: 100%;
    top: var(--CustomBar-1) !important;
    left: 0;
}

.contentBox {
    position: relative;
    top: calc(var(--StatusBar) + 250rpx);
    padding-bottom: 40rpx;
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
