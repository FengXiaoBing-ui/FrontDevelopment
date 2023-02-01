<template>
    <view class="content padding-bottom">
        <!--顶部标题-->
        <u-navbar :border="false" :fixed="true" :autoBack="true"
                  :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
                  :safeAreaInsetTop="false">
            <view slot="left" class="u-nav-slot">
                <text style="font-size: 36rpx" class="cuIcon-back"></text>
            </view>
            <view slot="center" class="u-nav-slot">
                <view class="text-lg">合作协议管理</view>
                <view style="width:750rpx" class="search bg-white">
                    <view class="bg-white padding-lr">

                        <!--产品列表导航-->
                        <u-tabs itemStyle="height:88rpx;white-space:nowrap;"
                                :scrollable="false"
                                activeStyle="font-size:34rpx;font-weight:bold"
                                inactiveStyle=" font-size:25rpx; color:gray;"
                                lineColor="red" :list="activityList" @click="tabSelect"></u-tabs>
                        <view class="flex align-center margin-top-sm margin-bottom-sm bg-gray"
                              style="border-radius: 4px">
                            <text class="cuIcon-search text-gray"
                                  style="font-size: 20px; padding: 4px; margin-left: 4px"></text>
                            <input
                                class="text-df"
                                type="text"
                                placeholder-class="text-gray"
                                placeholder="请输入项目编号、名称进行查询"
                                confirm-type="search"
                                style="white-space: nowrap;width: 100%;margin-left: 10px"
                            />
                        </view>
                    </view>
                </view>
            </view>
        </u-navbar>
        <view :style="`margin-top:${CustomBar +100}px`" class="padding-lr-sm">
            <view class="flex justify-between margin-bottom-sm">
                <view class="flex align-center">
                    <view class="text-bold">9月</view>
                    <view class="cuIcon-unfold" style="width: 11px;"></view>
                </view>
                <view @click="show = true" class="flex text-gray">
                    <view class="cuIcon-filter" style="font-size: 16px"></view>
                    <text>筛选·已选0</text>
                </view>
            </view>
            <view style="border-color: orange !important;" class="bg-white padding-sm u-border radius margin-tb-sm margin-bottom" v-for="item in currentOrderList"
                  :key="item.oddNumbers"
                  @click="gotoDetail(item.status,item.state)">
                <view class="flex align-start">
                    <fxbImage width="130" height="130" class="basis-xs radius"
                              src="/productDetails/Slice 1.png"></fxbImage>
                    <view class="basis-lg margin-left-sm">
                        <view style="width: 400rpx" class="text-lg text-bold text-cut">东方国宾·尊致酒条码招商尊致酒条码招商</view>
                        <view class="text-gray margin-tb-xs">项目编号：1546545142312</view>
                        <view class="flex align-center text-sm">
                            <text style="padding: 0 2px;border-color: orange !important;"
                                  class="bg-orange u-border light radius margin-right-xs">平台托管
                            </text>
                            <text style="padding: 0 2px;border-color: orange !important;"
                                  class="bg-orange u-border light radius">收益率:16.5%~22.5%
                            </text>
                        </view>
                    </view>

                    <view class="basis-xs">
                        <text
                            :class="{'bg-orange':item.status==1,'bg-blue':item.status==2,'bg-cyan':item.status==3,'bg-green':item.status==4,'bg-red':item.status==5}"
                            class="padding-xs" style="border-radius: 10rpx 10rpx 10rpx 0 ">
                            {{ activityList[item.status].name }}
                        </text>
                    </view>
                </view>

                <view class="bg-gray light radius padding-sm padding-tb flex flex-wrap margin-top-sm text-sm">
                    <view class="flex align-center w50 text-gray text-cut">
                        <text class="cuIcon-goods"></text>
                        <text class="margin-left-xs">商品总量：</text>
                        <text class="text-black">21000瓶</text>
                    </view>
                    <view class="flex align-center w50 text-gray text-cut">
                        <text class="cuIcon-recharge"></text>
                        <text class="margin-left-xs">商品总额：</text>
                        <text class="text-black">5000000元</text>
                    </view>
                    <view class="flex align-center w50 text-gray margin-top text-cut">
                        <text class="cuIcon-sponsor"></text>
                        <text class="margin-left-xs">最低购买：</text>
                        <text class="text-black">10000元起</text>
                    </view>
                    <view class="flex align-center w50 text-gray margin-top text-cut">
                        <text class="cuIcon-peoplelist"></text>
                        <text class="margin-left-xs">参与人数：</text>
                        <text class="text-black">不限</text>
                    </view>
                </view>
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
import fxbImage from "/src/components/fxb/fxb-image";
import { mapState } from "vuex"

export default {
    components: {
        productBox,
        ScreenAlcohol,
        boxTitle,
        fxbImage
    },
    created() {
        // this.$http.addGoods()调用一个方法从后台获取数据
    },
    computed:{
      ...mapState('index',['agentAndService'])
    },
    data() {
        return {
            currentOrderList: [],
            // 1 "待审核" , 2  "未通过" , 3 , 4 , 5  "进行中" ,6 "已完成"
            orderList: [
                {
                    status: 1,
                    oddNumbers: 2309272334,
                    goodsShipped: "东方国宾·尊致酒酱香型白酒/东方国宾贵州好酒选",
                    shipmentQuantity: 76,
                    submitTime: "2022-7-5"
                },
                {
                    status: 2,
                    oddNumbers: 23092723341232,
                    goodsShipped: "东方国宾·尊致酒酱香型白酒/东方国宾贵州好酒选",
                    shipmentQuantity: 76,
                    submitTime: "2022-7-5"
                },
                {
                    status: 2,
                    state: 0,
                    oddNumbers: 230893553434,
                    goodsShipped: "东方国宾·尊致酒酱香型白酒/东方国宾贵州好酒选",
                    shipmentQuantity: 76,
                    submitTime: "2022-7-5"
                },
                {
                    status: 2,
                    state: 1,
                    oddNumbers: 2308975634,
                    goodsShipped: "东方国宾·尊致酒酱香型白酒/东方国宾贵州好酒选",
                    shipmentQuantity: 76,
                    submitTime: "2022-7-5"
                },
                {
                    status: 2,
                    oddNumbers: 230892434,
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
                    name: "进行中"
                },
                {
                    name: "已结束"
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
        this.currentOrderList = this.orderList;
        if (options.isAfterSales) {
            this.isAfterSales = options.isAfterSales;
        }
    },

    methods: {
        transStatus(status) {
            const tempArr = ["已完成", "已完成", "进行中", "进行中"];
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
                });
            }
        },
        gotoDetail(status, state) {
            if (this.agentAndService){
                uni.navigateTo({
                    url: "/pages/admin/tender/details?status=" + status + "&state=" + state
                });
            }else {
                uni.navigateTo({
                    url:"/pages/admin/tender/cooperationAgreement?status=" + status + "&statusText=" + this.activityList[status].name
                })
            }

        },
        tabSelect(e) {
            // console.log(e);
            this.tabIndex = e.index;
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
