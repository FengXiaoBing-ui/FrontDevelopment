<template>
    <view class="content bg-gray">
        <!--顶部标题-->
        <u-navbar :border="false" :fixed="true" :autoBack="true" rightText="退换货" @rightClick="rightClick"
                  :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
                  :safeAreaInsetTop="false">
            <view slot="left" class="u-nav-slot">
                <text style="font-size: 36rpx" class="cuIcon-back"></text>
            </view>
            <view slot="center" class="u-nav-slot">
                <view class="text-lg">一件发货</view>
                <view style="width:750rpx" class="search bg-white">
                    <view class="bg-white padding-lr">
                        <view class="flex align-center margin-tb-sm bg-gray" style="border-radius: 4px">
                            <text class="cuIcon-search text-red"
                                  style="font-size: 20px; padding: 4px; margin-left: 4px"></text>
                            <input
                                class="text-df"
                                type="text"
                                placeholder-class="text-gray"
                                placeholder="搜单号、商品名称"
                                confirm-type="search"
                            />
                        </view>
                    </view>


                    <!--产品列表导航-->
                    <u-tabs :scrollable="false" activeStyle="" inactiveStyle="color:gray;font-size:28rpx" style="white-space: nowrap"
                            lineColor="red" :list="activityList" @click="tabSelect"></u-tabs>

                    <HM-filterDropdown :menuTop="158+(CustomBar*2)" :filterData="filterData"
                                       :defaultSelected="defaultSelected"
                                       :key="filterData.toString()"
                                       :updateMenuName="true" @confirm="confirm"
                                       dataFormat="Object"></HM-filterDropdown>
                </view>
            </view>
        </u-navbar>
        <view class="padding-lr contentBox">

            <!--商品列表-->
<!--            <view class="flex justify-between padding-tb-sm">-->
<!--                <view class="flex justify-start">-->
<!--                    <view class="text-bold">2022年9月</view>-->
<!--                    <view class="cuIcon-unfold margin-left-xs text-bold"></view>-->
<!--                </view>-->
<!--                <view class="flex justify-start">-->
<!--                    <view class="cuIcon-filter">筛选</view>-->
<!--                    ·已选 0-->
<!--                </view>-->
<!--            </view>-->
            <view class="product margin-top-sm">
                <view class="flex flex-wrap justify-between">
                    <!--                                        <view @click="jumpDetails(index)" v-for="(item,index) in productList" :key="index" style="width: 100%" class="whiteBoxShadow margin-bottom-sm">-->
                    <!--                                            <view class="flex align-center">-->
                    <!--                                                <text class="text-red cuIcon-time"></text>-->
                    <!--                                                <text class="text-red text-lg margin-left-xs">待发货</text>-->
                    <!--                                            </view>-->

                    <!--                                            <view class="flex justify-between" v-for="(child,indexes) in item" :key="indexes">-->
                    <!--                                                <view style="min-width: 280rpx" class="flex margin-top-xs" :class="grandson.noCenter?'':'align-center'" v-for="(grandson,id) in child" :key="id">-->
                    <!--                                                    <view style="min-width: 160rpx;text-align-last: justify" class="text-gray">{{ grandson.name }}</view>-->
                    <!--                                                    <view :class="grandson.color?'text-'+grandson.color:''">{{ grandson.text }}</view>-->
                    <!--                                                </view>-->
                    <!--                                            </view>-->
                    <!--                                        </view>-->
                    <deliverGoodsList @change="jumpDetails(index)" v-for="(item,index) in list" :key="index"
                                      :data-list="item">
                        <view slot="botContent"></view>
                    </deliverGoodsList>
                </view>
            </view>
            <view class="botBtn bg-white padding-tb-xs text-center">
                <button @click="willDeliver" class="cu-btn bg-red" style="width: 90%">我要发货</button>
            </view>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import deliverGoodsList from "/src/pages/admin/oneClickDelivery/components/fxb-deliver-goods-list";

export default {
    name: "productList",
    components: {
        deliverGoodsList,
        boxTitle
    },
    data() {
        return {
            selectShow: false,
            statusIndex: 0,
            screenResult: "",
            activityList: [
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
                    name: "待发货"
                },
                {
                    name: "待收货"
                },
                {
                    name: "已完成"
                }
            ],
            list: [
                {
                    number: "订单编号：213234233543",
                    status: 0,
                    product: "东方国宾·尊致酱香型白酒/东方国宾",
                    count: "2",
                    time: "2022-08-31 12:12:56",
                    price: "1800.00"
                },

                {
                    number: "订单编号：213234233543",
                    status: 1,
                    product: "东方国宾·尊致酱香型白酒/东方国宾",
                    count: "2",
                    time: "2022-08-31 12:12:56",
                    price: "1800.00"
                },
                {
                    number: "订单编号：213234233543",
                    status: 2,
                    product: "东方国宾·尊致酱香型白酒/东方国宾",
                    count: "2",
                    time: "2022-08-31 12:12:56",
                    price: "1800.00"
                },
                {
                    number: "订单编号：213234233543",
                    status: 3,
                    product: "东方国宾·尊致酱香型白酒/东方国宾",
                    count: "2",
                    time: "2022-08-31 12:12:56",
                    price: "1800.00"
                },
                {
                    number: "订单编号：213234233543",
                    status: 4,
                    product: "东方国宾·尊致酱香型白酒/东方国宾",
                    count: "2",
                    time: "2022-08-31 12:12:56",
                    price: "1800.00"
                }
            ],
            filterData: [
                {
                    "name": "2022年9月",
                    "type": "hierarchy-column",
                    "submenu": [
                        {
                            "name": "2022年9月",
                            "value":"2022年9月"
                        },
                        {
                            "name": "2022年8月",
                            "value":"2022年8月"
                        },
                        {
                            "name": "2022年7月",
                            "value":"2022年7月"
                        },
                        {
                            "name": "2022年6月",
                            "value":"2022年6月"
                        },
                        {
                            "name": "2022年5月",
                            "value":"2022年5月"
                        },
                        {
                            "name": "2022年4月",
                            "value":"2022年4月"
                        },
                        {
                            "name": "2022年3月",
                            "value":"2022年3月"
                        },
                        {
                            "name": "2022年2月",
                            "value":"2022年2月"
                        },
                        {
                            "name": "2022年1月",
                            "value":"2022年1月"
                        },
                    ]
                },
                {
                    "name": "筛选·已选0",
                    "type": "radio",
                    "submenu": [
                        {
                            "name": "审核状态",
                            "submenu": [
                                {
                                    "name": "全部",
                                    "value": "全部"
                                },
                                {
                                    "name": "待审核",
                                    "value": "待审核"
                                },
                                {
                                    "name": "未通过",
                                    "value": "未通过"
                                },
                                {
                                    "name": "待发货",
                                    "value": "待发货"
                                }
                            ]
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
    onLoad(option) {
    },
    onShow() {
    },
    methods: {
        open() {
            //console.log('open')
        },
        close() {
            this.show = false;
        },
        rightClick() {
            uni.navigateTo({
                url: "/pages/admin/oneClickDelivery/exchangeDetail"
            });
        },
        willDeliver() {
            uni.navigateTo({
                url: "/pages/admin/oneClickDelivery/willDeliverGoods"
            });
        },
        dateChange(d) {
            uni.showToast({
                icon: "none",
                title: d
            });
        },
        tabSelect(e) {
            this.statusIndex = e.status;
        },
        selectClick(e) {
            console.log(e.name);
        },
        jumpDetails(index) {
            uni.navigateTo({
                url: "/pages/admin/oneClickDelivery/orderDetail?status=" + index
            });
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

.botBtn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}

.search {
    position: fixed;
    width: 100%;
    top: var(--CustomBar-1) !important;
    left: 0;
}

.contentBox {
    position: relative;
    top: calc(var(--status-bar-height) + 340rpx);
    padding-bottom: 80rpx;
}

.ellipse {
    width: 10px;
    height: 14px;
    margin: 3px;
    bottom: 2px;
    background: white;
    border-radius: 50% / 50%;
}

.header {
    position: fixed;
    left: 0;
    z-index: 1;
}
</style>
