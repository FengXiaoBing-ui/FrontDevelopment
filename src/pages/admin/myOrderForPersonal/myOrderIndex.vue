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
                <view class="text-lg">{{ isAfterSales ? "售后" : "我的订单" }}</view>
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
                        <u-tabs itemStyle="height:88rpx;white-space:nowrap;"
                                :scrollable="false"
                                activeStyle="font-size:32rpx;font-weight:bold"
                                inactiveStyle="color:gray;font-size:26rpx" lineColor="red" :list="activityList"
                                :current="tabIndex"
                                @click="tabSelect"></u-tabs>

                    </view>
                </view>
            </view>
            <view slot="right" class="u-nav-slot">
                <text>{{ isAfterSales ? "我的订单" : "售后" }}</text>
            </view>
        </u-navbar>
        <view class="padding-sm contentBox"
              :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }">
            <view class="flex justify-between align-center margin-tb-sm">
                <view class="flex align-center">
                    <view class="text-xl">9月</view>
                    <view class="cuIcon-unfold margin-left-sm"></view>
                </view>
                <view @click="show = true" class="flex align-center text-gray">
                    <view class="cuIcon-filter" style="font-size: 14px"></view>
                    <view>筛选·已选0</view>
                </view>
                <!--                            <view @click="show = true" class="flex">-->
                <!--                                <text>时间范围筛选</text>-->
                <!--                                <text style="font-size: 32rpx" class="cuIcon-triangledownfill"></text>-->
                <!--                            </view>-->
                <!--                            <text class="cuIcon-triangleupfill"></text>-->
            </view>

            <view class="whiteBoxShadow ergodic margin-bottom-sm" v-for="(item,index) in currentOrderList" :key="index">
                <view class="flex justify-between">
                    <view class="text-gray flex align-center">
                        <view class="title-Box"></view>
                        <view class="text-black text-bold text-lg margin-left-sm ">订单单号：{{ item.oddNumbers }}</view>
                    </view>
                    <text v-show="!isAfterSales" class="text-orange">
                        {{ transStatus(item.status) }}
                    </text>
                    <text v-show="isAfterSales" class="text-orange"
                          :class="`${item.status===0||item.status===1?'text-orange':item.status===2?'text-red':'text-green'}`">
                        <!--                        {{ (item.status == 0 || item.status == 1) ? "待审核" : (item.status == 2 || item.status == 3) ? "未通过" : (item.status == 4 || item.status == 5 || item.status == 6 || item.status == 7 ||item.status == 8) ? "进行中" : (item.status == 9 || item.status == 10) ? "已完成" : ""-->
                        <!--                        }}-->
                        {{ afterTransStatus(item.status) }}
                    </text>
                </view>
                <view class="border margin-tb"></view>
                <productBox
                    :imgSize="120"
                    :imgUrl="item.imgUrl"
                    @change="gotoDetail(item.status,item.statusList,item.state)"
                    :name="item.name"
                    :num="'数量：'+item.num"
                    :unitPrice="'代理价：¥'+item.price"
                    total-price="¥518.00"
                >
                </productBox>
                <productBox class="margin-top-sm"
                            :imgSize="120"
                            :imgUrl="item.imgUrl"
                            @change="gotoDetail(item.status)"
                            :name="item.name"
                            :num="'数量：'+item.num"
                            :unitPrice="'代理价：¥'+item.price"
                            total-price="¥518.00"
                >
                </productBox>
                <view class="border margin-tb"></view>
                <view class="flex">
                    <view>合计金额：</view>
                    <view class="text-red">￥2350.00</view>
                </view>
                <!--                <view class="flex justify-end margin-top-sm" v-if="item.btn">-->
                <!--                    <button class="cu-btn sm bg-white u-border"-->
                <!--                            @click="gotoPath('/pages/index/applicationSample/expressDetailsIndex')">查看物流-->
                <!--                    </button>-->
                <!--                </view>-->
            </view>
        </view>
        <view v-show="!isAfterSales" class="foot bg-white padding ">
            <view @click="gotoPath('/pages/admin/myOrderForPersonal/selectGoods')" class="cu-btn w100 radius bg-red">
                新增订单
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
                <!--                <view class="botBtn bg-white padding-sm flex align-center justify-between">-->
                <!--                    <text>已选(1)</text>-->
                <!--                    <view class="flex align-center">-->
                <!--                        <button class="cu-btn u-border bg-white radius margin-right-sm">清空</button>-->
                <!--                        <button class="cu-btn bg-red radius" @click="close">确定</button>-->
                <!--                    </view>-->
                <!--                </view>-->
            </view>
        </u-popup>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import ScreenAlcohol from "/src/pages/agent/components/fxb-screen-alcohol";
import productBox from "/src/pages/admin/components/productBox.vue";

export default {
    components: {
        productBox,
        ScreenAlcohol,
        boxTitle
    },
    data() {
        return {
            currentOrderList: [],
            // 1 "待审核" , 2  "未通过" , 3 , 4 , 5  "进行中" ,6 "已完成"
            orderList: [
                {
                    status: 8,
                    statusList: 3,
                    oddNumbers: 2309272334,
                    imgUrl: "/img/index/img_17%402x.png",
                    name: "东方国宾·尊致酒53°瓶装500ml",
                    num: "3",
                    price: "300.00"
                },
                {
                    status: 7,
                    statusList: 4,
                    oddNumbers: 2309272334,
                    imgUrl: "/img/index/img_17%402x.png",
                    name: "东方国宾·尊致酒53°瓶装500ml",
                    num: "3",
                    price: "300.00"
                },
                {
                    status: 6,
                    statusList: 2,
                    oddNumbers: 2309272334,
                    imgUrl: "/img/index/img_17%402x.png",
                    name: "东方国宾·尊致酒53°瓶装500ml",
                    num: "3",
                    price: "300.00"
                },
                {
                    status: 1,
                    oddNumbers: 2309272534,
                    imgUrl: "/img/index/img_17%402x.png",
                    name: "东方国宾·尊致酒53°瓶装500ml",
                    num: "3",
                    price: "300.00"
                },
                {
                    status: 2,
                    oddNumbers: 230923234,
                    imgUrl: "/img/index/img_17%402x.png",
                    name: "东方国宾·尊致酒53°瓶装500ml",
                    num: "3",
                    price: "300.00"
                },
                {
                    status: 3,
                    statusList: 1,
                    oddNumbers: 2308973434,
                    imgUrl: "/img/index/img_17%402x.png",
                    name: "东方国宾·尊致酒53°瓶装500ml",
                    num: "3",
                    price: "300.00"
                },
                {
                    status: 4,
                    statusList: 0,
                    state: 0,
                    oddNumbers: 230892434,
                    imgUrl: "/img/index/img_17%402x.png",
                    name: "东方国宾·尊致酒53°瓶装500ml",
                    num: "3",
                    price: "300.00"
                },
                {
                    status: 4,
                    statusList: 0,
                    state: 1,
                    oddNumbers: 230892434,
                    imgUrl: "/img/index/img_17%402x.png",
                    name: "东方国宾·尊致酒53°瓶装500ml",
                    num: "3",
                    price: "300.00"
                },

                {
                    status: 4,
                    statusList: 1,
                    oddNumbers: 230892434,
                    imgUrl: "/img/index/img_17%402x.png",
                    name: "东方国宾·尊致酒53°瓶装500ml",
                    num: "3",
                    price: "300.00"
                },
                {
                    status: 4,
                    statusList: 2,
                    oddNumbers: 230892434,
                    imgUrl: "/img/index/img_17%402x.png",
                    name: "东方国宾·尊致酒53°瓶装500ml",
                    num: "3",
                    price: "300.00"
                },
                {
                    status: 4,
                    statusList: 3,
                    oddNumbers: 230892434,
                    imgUrl: "/img/index/img_17%402x.png",
                    name: "东方国宾·尊致酒53°瓶装500ml",
                    num: "3",
                    price: "300.00"
                },
                {
                    status: 5,
                    statusList: 0,
                    oddNumbers: 230894434,
                    imgUrl: "/img/index/img_17%402x.png",
                    name: "东方国宾·尊致酒53°瓶装500ml",
                    num: "3",
                    price: "300.00"
                },
                {
                    status: 5,
                    statusList: 1,
                    oddNumbers: 230894434,
                    imgUrl: "/img/index/img_17%402x.png",
                    name: "东方国宾·尊致酒53°瓶装500ml",
                    num: "3",
                    price: "300.00"
                },
                {
                    status: 5,
                    statusList: 2,
                    oddNumbers: 230894434,
                    imgUrl: "/img/index/img_17%402x.png",
                    name: "东方国宾·尊致酒53°瓶装500ml",
                    num: "3",
                    price: "300.00"
                }
            ],
            //0、待付款1、待收货2、已完成
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
        // this.getList();
    },
    onLoad(options) {
        this.currentOrderList = this.orderList;
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
        }
    },
    methods: {
        afterTransStatus(status) {
            const tempArr = ["待审核", "未通过", "进行中", "进行中", "进行中", "已完成", "已完成", "已完成"];
            return tempArr[status - 1];
        },
        transStatus(status) {
            const tempArr = ["待付款", "待发货", "待收货", "已完成"];
            return tempArr[status - 1];
        },
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
            // this.getList(Math.ceil(Math.random() * 10));
        },
        // getList(count = 6) {
        //     this.list = [];
        //     for (let i = 0; i <= count; i++) {
        //         this.list.push({
        //             imgUrl: "/img/index/img_17%402x.png",
        //             oddNumbers: "156468545222",
        //             name: "东方国宾·尊致酒53°瓶装500ml",
        //             num: "3",
        //             price: "300.00",
        //             isLogistics: false,
        //             status: this.tabIndex,
        //             btn: this.tabIndex % 2 == 0 ? true : false
        //         });
        //     }
        // },
        gotoPath(path) {
            uni.navigateTo({
                url: path
            });
        },
        gotoDetail(status, statusList, state) {
            if (this.isAfterSales) {
                uni.navigateTo({
                    // url: "pages/admin/myOrderForPersonal/afterSalesDetails?status="+ status
                    url: "/pages/admin/afterSales/afterSalesDetails?status=" + status + "&statusList=" + statusList + "&state=" + state + "&condition=1"
                });
            } else {
                let status = this.tabIndex == 0 ? 1 : this.tabIndex;
                uni.navigateTo({
                    url: "/pages/admin/myOrderForPersonal/myOrderDetails?status=" + status
                });
            }
        },
        tabSelect(e) {
            // this.tabIndex = e.index;
            // this.getList(Math.ceil(Math.random() * 10));
            // console.log(e);
            if (this.isAfterSales) {
                this.tabIndex = e.index;
                const tempArr = [
                    "item",
                    "item.status === 1",
                    "item.status === 2",
                    "item.status === 3 || item.status === 4 || item.status === 5",
                    "item.status === 6||item.status === 7||item.status==8"];
                this.currentOrderList = this.orderList.filter(item => {
                    return eval(tempArr[e.index]);
                });
                // this.getList(Math.ceil(Math.random() * 10));
            } else {
                this.tabIndex = e.index;
                const tempArr = [
                    "item",
                    "item.status === 1",
                    "item.status === 2",
                    "item.status === 3",
                    " item.status === 4 "];
                this.currentOrderList = this.orderList.filter(item => {
                    return eval(tempArr[e.index]);
                });
                // this.getList(Math.ceil(Math.random() * 10));
            }
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

.ergodic:last-child {
    margin-bottom: 60px;
}

.search {
    position: fixed;
    width: 100%;
    top: var(--CustomBar-1) !important;
    left: 0;
}

.contentBox {
    position: relative;
    top: calc(var(--StatusBar) + 210rpx);
    padding-bottom: 40rpx;

    .title-Box {
        width: 4px;
        height: 18px;
        background-color: red;
        border-radius: 5px;
    }
}

.foot {
    position: fixed;
    bottom: 0;
    width: 100%;
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
